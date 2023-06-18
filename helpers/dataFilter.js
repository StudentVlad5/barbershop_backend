const dataFilter = (obj, arr) => {
  const newObj = {};
  if (typeof obj === "string") {
    const ob = JSON.parse(obj);
  } else {
    const ob = { ...obj };
  }
  arr.forEach((item) => {
    if (ob[item]) {
      newObj[item] = ob[item];
    }
  });
  return newObj;
};

module.exports = { dataFilter };
