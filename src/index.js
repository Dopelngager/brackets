module.exports = function check(str, bracketsConfig) {
  let newArr = [...str];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        newArr[i] === bracketsConfig[j][0] &&
        newArr[i + 1] === bracketsConfig[j][1]
      ) {
        newArr.splice(i, 2);
        i = -1;
      }
    }
  }
  if (newArr.length == 0) {
    return true;
  } else {
    return false;
  }
};
