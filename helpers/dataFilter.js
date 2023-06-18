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
  const newObj = {};
  const arr = Object.keys(obj);
  arr.map((item) => {
    if (obj[item]) {
      newObj[item] = obj[item];
    }
  });
  return newObj;
};
module.exports = { dataFilter, dataFilterObj };
