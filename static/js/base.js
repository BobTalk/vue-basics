const sessionStorage = window.sessionStorage;
const JSON = window.JSON;
export default {
    //处理字符串是否是字体
    CheckIsChinese(val) {
        var reg = new RegExp("[\\u4E00-\\u9FFF]+", "ig");
        return reg.test(val) ? true : false;
    },
    //读取cookie
    getCookie(c_name) {
        if (document.cookie.length > 0) {
            let c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                let c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    },
    //设置cookie
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    },
    //读取会话
    get(name) {
        let value = sessionStorage.getItem(name);
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
        return value
    },
    //读取会话
    getSession(name) {
        let value = sessionStorage.getItem(name);
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value);
        return value
    },
    //设置会话
    setSession(name, value) {
        if (typeof value === typeof {}) {
            value = JSON.stringify(value)
        }
        return sessionStorage.setItem(name, value)
    },
    set(name, value) {
        if (typeof value === typeof {}) {
            value = JSON.stringify(value)
        }
        return sessionStorage.setItem(name, value)
    },
    remove(name) {
        return sessionStorage.removeItem(name)
    },
    extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i) && b[i]) {
                a[i] = b[i];
            }
        }
    },
    isParent(children, parent) {
        if (!parent) return false;
        while (children) {
            if (children === parent) return true;
            children = children.parentNode;
        }
        return false;
    },
    getParams(name, url) {
        var m;
        url = (url || window.location.href).split('#');
        m = url.match(new RegExp('(|[?&#])' + name.replace('#', '') + '=([^#&?]*)(\\s||$)', 'gi'));
        if (m) {
            return decodeURIComponent(m[0].split('=')[1]);
        } else {
            return '';
        }
    },
    rgbToHex(r, g, b) {
        // return ((r << 16) | (g << 8) | b).toString(16);
        return ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).substr(1);
    },
    hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass(obj, cls) {
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    },
    removeClass(obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },
    charLength(str) {
        var cArr = str.match(/[^\x00-\xff]/ig);
        var len = str.length + (cArr == null ? 0 : cArr.length);
        return Math.ceil(len / 2);
    },
    getParam(param) {
        let obj = {};
        let str = location.href; //取得整个地址栏
        let num = str.indexOf("?");
        if (num > 0) {
            str = str.substr(num + 1);
            if (str.indexOf('&') < 0) {
                let paramArr = str.split('=');
                obj[paramArr[0]] = paramArr[1];
            } else {
                let paramArr = str.split('&');
                paramArr.forEach(item => {
                    let paramArrs = item.split('=');
                    obj[paramArrs[0]] = paramArrs[1];
                });
            }

            if (obj[param]) {
                return obj[param];
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    /*加载动画*/
    getLoadingInstance(_this) {
        let loadingInstance = _this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.6)'
        });
        return loadingInstance;
    },
    //字符串截取
    subStringFn(str, strLength) {
        if (typeof str == "string" && str.length > strLength) {
            str = str.substring(0, strLength) + "...";
        } else {
            console.log(`{$str} 不是字符串！`);
        }
        return str;
    },
    //yyyy-MM-dd 转时间戳
    formatTime(str) {
        return Number((new Date(str.replace(/-/g, '/'))).getTime());
    },
    //天转时间戳
    formatDay(str) {
        if (!!Number(str)) {
            return Number(str * 24 * 60 * 60 * 1000);
        }
    },
    //时间戳转yyyy-MM-dd hh:ss:mm
    formatYMDT(str) {
        if (str.length === 10) {
            str = str * 1000
        }
        if (typeof str == 'string') {
            str = Number(str)
        }
        var date = new Date(str); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var year = date.getFullYear();
        var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var dateT = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        var hour = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
        var minute = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
        var second = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
        return year + "-" + month + "-" + dateT + " " + hour + ":" + minute + ":" + second;
    },
    //时间戳转yyyy-MM-dd
    formatYMD(str) {
        if (str.length === 10) {
            str = str * 1000
        }
        var date = new Date(str); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var year = date.getFullYear();
        var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var dateT = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        return year + "-" + month + "-" + dateT;
    },
    formatDateYMD(time) {
        // let Reg = /^(\d{4})[-|/|年]([0][1-9]|[1][0-2])[-|/|月]([1-9]|[012]\d|3[01])\s*$/gi;
        let Reg = /^(\d{4})[-|/|年](\d{1,2})[-|/|月](\d{1,2})\s*$/gi;
        var timeArray = Reg.exec(time);
        var year, month, day;
        year = timeArray[1];
        month = timeArray[2] > 9 ? timeArray[2] : ('0' + timeArray[2]);
        day = timeArray[3] > 9 ? timeArray[3] : ('0' + timeArray[3]);
        return year + "-" + month + "-" + day
    },
    //时间格式化
    formatDate(time, formart) {
        if (!!!time) {
            return "";
        }
        if (typeof time == "number") {
            //时间戳转YYYY-MM
            time = time.toString();
        }
        time = time.trim(); //清除前后空格
        let Reg = /^(\d{4})[-|/|年]([0][1-9]|[1][0-2])[-|/|月]([1-9]|[012]\d|3[01])\s*(\d{0,2}):(\d{0,2}):(\d{0,2})$/gi;
        var timeArray = Reg.exec(time);
        var year, month, day, h, s, m;
        year = timeArray[1]; //年
        month = timeArray[2]; //月
        day = timeArray[3]; //日
        h = timeArray[4]; //日
        s = timeArray[5]; //日
        m = timeArray[6]; //日
        if (!!formart) {
            return year + formart + month + formart + day;
        } else {
            return year + "-" + month + "-" + day + "  " + h + ":" + s + ":" + m;
        }
    },
    //导出时间选择区间
    getDay(day) {
        var today = new Date();
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear + "-" + tMonth + "-" + tDate;
    },
    doHandleMonth(month) {
        var m = month;
        if (month.toString().length == 1) {
            m = "0" + month;
        }
        return m;
    },
    //数字格式化
    format(num) {
        return Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    },
    //数字格式化
    formatInt(num) {
        num = typeof num == 'number' ? num.toString() : num;
        let reg = /^(\d{1,3})((?:\d{3})+)$/;
        return num.replace(reg, function() {
            var res1 = arguments[1];
            var res2 = arguments[2];
            return res1 + ',' + res2.replace(/\d{3}(?!$)/g, function() { // (?!$) 不以其结尾
                return arguments[0] + ',';
            })
        });
    },
    formatNum(data) {
        return data.map((item, key) => {
            return (Number(item) / 10000).toFixed(2);
        })
    },
    // 获取当前时间
    getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    // 获取当前月的第一天
    getCurrentMonthFirst() {
        var date = new Date();
        date.setDate(1);
        return date;
    },
    // 获取当前月的最后一天
    getCurrentMonthLast() {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = currentMonth + 1;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        return new Date(nextMonthFirstDay - oneDay);
    },
    //标准时间转YYYY-MM-DD
    normalTimeToYMD(d) {
        let month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        return d.getFullYear() + '-' + month + '-' + day;
    },
    //获取月份最后一天
    getLastDay(month) {
        var new_year = new Date().getFullYear(); //取当前的年份
        var new_month = month; //取下一个月的第一天，方便计算（最后一天不固定）
        //如果当前大于12月，则年份转到下一年
        if (month > '12') {
            new_month -= 12; //月份减
            new_year++; //年份增
        }
        var new_date = new Date(new_year, new_month, 1);
        return new_year + '-' + new_month + '-' + (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate(); //获取当月最后一天日期
    },
    //获取月份第一天
    getFirstDay(month) {
        var year = new Date().getFullYear();
        return new Date(year, month - 1, 1);
    },
    //深拷贝
    deepCopy(obj) {
        var result = Array.isArray(obj) ? [] : {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                /* if (typeof obj[key] === 'object') {
                     result[key] = this.deepCopy(obj[key]); //递归复制
                 } else {*/
                result[key] = obj[key];
                /*}*/
            }
        }
        return result;
    },
    //数组拆分
    split_array(arr, len) {
        var a_len = arr.length;
        var result = [];
        for (var i = 0; i < a_len; i += len) {
            result.push(arr.slice(i, i + len));
        }
        return result;
    },
    //取出数组中某一对象属性值
    arrayOneData(arr, prop) {
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
    },
    //校验当前参数是否是数组
    isArray(arr) {
        return Object.prototype.toString.call(arr) == "[object Array]" ? true : false;
    },

    isIEBrowser() {
        if (window.addEventListener) {
            // alert("not ie");
            return false
        } else if (window.attachEvent) {
            // alert("is ie");
            return true
        }

    },
    //添加元素到指定位置
    addArr(arr, val, index) {
        if (index > -1) {
            arr.splice(index, 0, val);
        }
    }
}
//数组reduce 原理
Array.prototype.my_reduce = function(cb, prev) {
    for (let i = 0; i < this.length; i++) {
        if (typeof prev !== 'undefined') {
            prev = cb(prev, this[i], this)
        } else {
            prev = cb(this[i], this[++i], this);
            i++;
        }
    }
    return prev
};
var stripAll = function(s, d) {
    var str = "";
    var arr = new Array();
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== d) {
            arr.push(i);
        }
    }
    for (var j = 0; j < arr.length; j++) {
        str = str + s[arr[j]];
    }
    console.log("\"" + str + "\"");
    return str;
};
