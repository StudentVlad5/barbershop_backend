const { ValidationError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const { Users } = require("../../models");
const {
  userMainField,
  userFieldReceivedFromFront,
  dataFilter,
} = require("../../helpers");

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const newData = dataFilter(req.body, userFieldReceivedFromFront);
    req.file?.path && (newData.avatar = req.file.path);
    if (newData.password !== "" && newData.password !== undefined) {
      const hashPassword = bcrypt.hashSync(
        newData.password,
        bcrypt.genSaltSync(10)
      );
      const user = await Users.findById({ _id: id });
      newData.password = hashPassword;

      let transporter = nodemailer.createTransport({
        service: "Barbershop",
        auth: {
          user: "vlad_np@ukr.net",
          pass: "JhwpAiThh0pU1OP0",
        },
      });

      const fromHost = `ukr.net`;
      const from = "barber_support" + "@" + fromHost;
      const to = user.email;

      transporter.sendMail(
        {
          from,
          to,
          subject: "Change password",
          html: `<h1>Hello</h1><p>Hello. Please pay attention to replacing the access password for the Barber service We wish you a nice day.</p><p>Barber service support</p>`,
        },
        (err, data) => {
          if (err) {
            console.error("Ошибка при отправке:", err);
          } else {
            console.log("Письмо отправлено");
          }
        }
      );
    }
    const resUpdate = await Users.findByIdAndUpdate({ _id: id }, newData, {
      new: true,
    });
    const newResponse = dataFilter(resUpdate, userMainField);
    req.file?.path && (newResponse.avatar = req.file.path);
    return res.status(201).json(newResponse);
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

module.exports = updateUser;
