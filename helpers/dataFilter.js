const dataFilter = (obj, arr) => {
  const newObj = {};
  arr.forEach((item) => {
    if (obj[item]) {
      newObj[item] = obj[item];
    }
  });
  return newObj;
};

const dataFilterObj = (obj) => {
  const newObj = Object.entries(obj);
  return newObj;
};
module.exports = { dataFilter, dataFilterObj };
