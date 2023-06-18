const dataFilter = (obj, arr) => {
  const newObj = {};
  arr.forEach((item) => {
    if (JSON.parse(obj)[item]) {
      newObj[item] = JSON.parse(obj)[item];
    }
  });
  return newObj;
};

module.exports = { dataFilter };
