
function CheckIsChinese(val) {
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "ig");
  return reg.test(val) ? true : false;
}
console.log(CheckIsChinese('胜多负少'))