const localStorage = window.sessionStorage
const JSON = window.JSON
export default {
    get(name) {
        let value = localStorage.getItem(name)
        if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
        return value
    },
    set(name, value) {
        if (typeof value === typeof {}) value = JSON.stringify(value)
        return localStorage.setItem(name, value)
    },
    remove(name) {
        return localStorage.removeItem(name)
    },
    extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i) && b[i]) {
                a[i] = b[i]
            }
        }
    },
    isParent(children, parent) {
        if (!parent) return false
        while (children) {
            if (children === parent) return true
            children = children.parentNode
        }
        return false
    },
    getparam(name, url) {
        var m, reg, tmp;
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
                })
            };
            if (obj[param]) {
                return obj[param];
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    // 格式化时间 方法
    formatDatebox(value, format) {
        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, // month
                "d+": this.getDate(), // day
                "h+": this.getHours(), // hour
                "m+": this.getMinutes(), // minute
                "s+": this.getSeconds(), // second
                "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
                "S": this.getMilliseconds()
                // millisecond
            }
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        }
        
        if (value.length > 10 && format == "yyyy-MM-dd") {
            return value.slice(0, 10)
        } else {
            if (value == null || value == '') {
                return '';
            }
            var dt;
            if (value instanceof Date) {
                dt = value;
            } else {
                dt = new Date(value);
            }
            // 调用 上述方法
            return dt.format(format); //扩展的Date的format方法(上述插件实现)
        }

    },
    //loading
    getLoadingInstance(_this) {
        let loadingInstance = _this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.6)'
        });
        return loadingInstance;
    },
}