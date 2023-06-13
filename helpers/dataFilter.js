const dataFilter = (obj) => {
  const newObj = {};
  const arr = Object.keys(obj)
  arr.forEach(item => {
    if (obj[item]) {
      newObj[item] = obj[item];
    }
  });
  return newObj;
};

module.exports = { dataFilter };
