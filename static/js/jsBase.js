/**
 * @summary  常用原生js函数
 * @auth:hyq
 * @date:2019/05/04
 */

 /**
  *@summary 获取元素ID
  * @param {*} id
  */
function $(id) {
  return !id ? null : document.getElementById(id);
}
/**
 * @summary 字符串长度截取
 */
function cutStr(str,len){
  str = typeof str == 'string' ?str : str.toString();
  if(str.length >len){
    // substring(start,end) 包含结尾 substr()不包含结尾
    return  str.substring(0,len)+"..."
  }else{
    return str
  }
}
/**
 * @summary 获取域名主机
 */
function getHost(url){
  var host = "null";
  if (typeof url == undefined || url === null) {
    url = window.location.href;
  }
  var regex = /^\w+\:\/\/([^\/]*).*/;
  var match = url.match(regex);
  if (typeof match != undefined && match != null) {
    host = match[1];
  }
  return host;
}
/**
 * @summary 清除前后空格
*/
function clearTrim(str){
  str = typeof str == 'string' ?str : str.toString();
  //(.*?)  表示匹配任意字符到下一个符合条件的字符
  var Reg = /^\s*(.*?)\s+$/ig;
  return str.replace(Reg,"$1")
}
/**
 * @summary 转义html标签
 */
function HtmlEncode(text) {
  return text.replace(/&/g, '&amp')
            .replace(/\"/g, '&quot')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt');
}
/**
 * @summary 还原html标签
 */
function HtmlDecode(text) {
  return text.replace('&amp', /&/g)
            .replace('&quot', /\"/g)
            .replace('&lt', /</g)
            .replace('&gt', />/g);
}
/**
 * @summary 加入收藏夹
 * @param:{
 * sURL 添加的http路径
 * sTitle 显示的名称
 * }
*/
function AddFavorite(sURL, sTitle) {
  try {
      window.external.addFavorite(sURL, sTitle)
  } catch(e) {
      try {
          window.sidebar.addPanel(sTitle, sURL, "")
      } catch(e) {
          console.log("加入收藏失败，请使用Ctrl+D进行添加")
      }
  }
}

/**
 * @summary 元素显示隐藏
 * @param:{
 *  id:模块ID
 * }
 */
function toggleEle(id) {
    var obj = $(id);
    if(obj.style.visibility) {
        obj.style.visibility = obj.style.visibility == 'visible' ? 'hidden' : 'visible';
    } else {
        obj.style.display = obj.style.display == '' ? 'none' : '';
    }
}
/**
 * @summary 兼容浏览器绑定元素事件
 * @params{
 *  ele:需要绑定事件的元素
 *  evt:绑定事件的名称
 *  fn:回调函数
 * }
*/
function addEventSamp(ele, evt, fn){
  if (ele.addEventListener) {
    ele.addEventListener(evt, fn, false);
  }else if(ele.attachEvent){
    ele.attachEvent('on' + evt, fn);
  }else{
    ele["on" + evt] = fn;
  }
}
/**
 * @summary 光标停在文字的后面/文本框获得焦点时
 */
function focusLast(){
  var e = event.srcElement;
  var r =e.createTextRange();
  r.moveStart('character',e.value.length);
  r.collapse(true);
  r.select();
}
/**
 * @summary 获取页面高度
 */
function getPageHeight() {
  var g = document;
  var a = g.body;
  var f = g.documentElement;
  var d = g.compatMode == "BackCompat"? a: g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
/**
 * @summary 随机数时间戳
 */
function uniqueId() {
  return Number(new Date()).toString()+parseInt(10* Math.random())+parseInt(10* Math.random())+parseInt(10* Math.random());
}
/**
 * @summary 获取网页被卷去的位置
 */
function getScrollXY() {
  return document.body.scrollTop ? {
      x: document.body.scrollLeft,
      y: document.body.scrollTop
  }: {
      x: document.documentElement.scrollLeft,
      y: document.documentElement.scrollTop
  }
}
/**
 * 时间个性化输出功能
 * @summary:[
 * 小于 60s, 显示为"刚刚",
 * 大于等于 1min && 小于 60 min, 显示与当前时间差"XX分钟前",
 * 大于等于 60min && 小于 1day, 显示与当前时间差"今天 XX:XX",
 * 大于等于 1day && 小于 1year, 显示日期"XX月XX日 XX:XX",
 * 大于等于 1year, 显示具体日期"XXXX年XX月XX日 XX:XX"
 * ]
*/
function timeFormat(time){
  var date = new Date(time);
  var curDate = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var curYear = curDate.getFullYear();
  var curHour = curDate.getHours();
  var timeStr;
  if(year < curYear){
    timeStr = year +'年'+ month +'月'+ day +'日 '+ hour +':'+ minute;
  }else{
    var pastTime = curDate - date;
    var pastH = pastTime/3600000;
    if(pastH > curHour){
      timeStr = month +'月'+ day +'日 '+ hour +':'+ minute;
    }else if(pastH >= 1){
      timeStr = '今天 ' + hour +':'+ minute +'分';
    }else{
      var pastM = curDate.getMinutes() - minute;
      if(pastM > 1){
        timeStr = pastM +'分钟前';
      }else{
        timeStr = '刚刚';
      }
    }
  }
  return timeStr;
}
/**
 * @summary:返回顶部通用函数
 * @param :{btnId:按钮ID,btnShow:滚出多高显示滚动条默认值100}
 */
function backTop(btnId,btnShow) {
  var btn = document.getElementById(btnId);
  var d = document.documentElement;
  var b = document.body;
  var bs = btnShow ? btnShow : 100;
  window.onscroll = set;
  btn.style.display = "none";
  btn.onclick = function() {
      btn.style.display = "none";
      window.onscroll = null;
      this.timer = setInterval(function() {
          d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
          b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
          if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
      },
      10);
  };
  function set() {
      btn.style.display = (d.scrollTop + b.scrollTop > bs) ? 'block': "none";
  }
}
/**
 * @summary 判断字符串/数字是否为小数
 */
function isValidDecimal(chars) {
  var re=/^\d*\.{1}\d{1,}$/;
  var str = typeof chars == 'string' ? chars : chars.toString();
  return  str.match(re) == null ? false : true;
}
/**
 * @summary  添加元素到指定位置
 */
function addArr(arr, val, index) {
  if (index > -1) {
      arr.splice(index, 0, val);
  }
}
/**
 * @summary 校验当前参数是否是数组
 */
function isArray(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]" ? true : false;
}
/**
 * @summary 取出数组中某一对象属性值
 * @param:{
 * arr:数组 [{},{}...]
 * prop:对象属性名
 * }
 */
function getObjPropsInArr(arr, prop) {
  var newArr = [];
  if (Array.isArray(arr)) {
      arr.forEach(function(item, key) {
          if (typeof item == 'object') {
              newArr.push(item[prop])
          } else {
              newArr.push(item)
          }
      });
      return newArr
  } else {
      return arr
  }
}
/**
 * @summary 数组拆分
 * @param:{
 * arr:原数组
 * len:几个属性拆分为一个数组
 * }
 */
function splitArray(arr, len) {
  var a_len = arr.length;
  var result = [];
  for (var i = 0; i < a_len; i += len) {
      result.push(arr.slice(i, i + len));
  }
  return result;
}
/**
 * @summary 时间戳转yyyy-MM-dd
 */
function formatYMD(str) {
  if (str.length === 10) {
      str = str * 1000
  }
  var date = new Date(str); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var year = date.getFullYear();
  var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var dateT = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  return year + "-" + month + "-" + dateT;
}
/**
 * @summary yyyy-MM-dd 转时间戳
 */
function formatTime(str) {
  return Number((new Date(str.replace(/-/g, '/'))).getTime());
}

/**
 * @summary 获取某年某月的第一天
 * @param:{
 * month:月份 (可以为空 默认当月)
 * year:年(可以为空 默认今年)
 * }
 */
function getFirstDay(month,year){
  var currentDate = new Date();
  if(year){
     currentDate.setFullYear(year)
  }
  if(month){
    currentDate.setMonth(month)
  }else{
    currentDate.setMonth(currentDate.getMonth()+1)
  }
  currentDate.setDate(1);
  var y = currentDate.getFullYear();
  var m = currentDate.getMonth() > 9 ? currentDate.getMonth() : '0'+currentDate.getMonth();
  var d = currentDate.getDate() > 9 ? currentDate.getDate() : '0'+currentDate.getDate();
  return y + "-"+m+"-"+d;
}
/**
 * @summary 获取某年某月的最后一天
 * @param:{
 * month:月份 (可以为空 默认当月)
 * year:年(可以为空 默认今年)
 * }
 */
function getLastDay(month,year){
  var currentDate = new Date();
  if(year){
     currentDate.setFullYear(year)
  }
  if(month){
    currentDate.setMonth(month)
  }else{
    currentDate.setMonth(currentDate.getMonth()+1)
  }
  currentDate.setDate(1);
  var y = currentDate.getFullYear();
  var m = currentDate.getMonth() > 9 ? currentDate.getMonth() : '0'+currentDate.getMonth();
  var day = (new Date(currentDate.getTime() - 1000 * 60 * 60 * 24)).getDate();

  var d = day > 9 ?day : '0'+day;
  return y + "-"+m+"-"+d;
}

/**
 * @summary 千分符
 *
 * */
function thousandMark(num) {
  num = typeof num == 'number' ? num.toString() : num;
  var reg = /^(\d{1,3})((?:\d{3})+)$/;
  var floatReg =/\d*(?:\.)\d+/;
  var newNumb;
  if(floatReg.test(num)){
    newNumb = num.split(".")[1];
    num = num.split(".")[0];
  }
  var thousandMarkInt = num.replace(reg, function() {
      var res1 = arguments[1];
      var res2 = arguments[2];
      return res1 + ',' + res2.replace(/\d{3}(?!$)/g, function() { // (?!$) 不以其结尾
          return arguments[0] + ',';
      })
  });
  if(newNumb){
    return thousandMarkInt+"."+newNumb
  }else{
    return thousandMarkInt
  }
}
/**
 * @summary 检查字符串是否为汉字
 */
function CheckIsChinese(val) {
  var reg = new RegExp("[\\u4E00-\\u9FFF]+", "ig");
  return reg.test(val) ? true : false;
}

/**
 * @summary 获取session会话
 */
function getSession(name) {
  var value = sessionStorage.getItem(name);
  if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
  return value
}

/**
 * @summary 设置session会话
 */
function setSession(name, value) {
  if (typeof value === typeof {}) {
      value = JSON.stringify(value)
  }
  return sessionStorage.setItem(name, value)
}
console.log(CheckIsChinese('胜多负少'))
