function defineReactive(data, key, val) {
  observer(val);//递归遍历所有子属性
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val;
    },
    set: function (newVal) {
      val = newVal;
      console.log('属性' + key + '已经被监听了,现在值为:"' + newVal.toString() + '"');
    }
  });
}

function observer(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}

var library = {
  book1: {
    name: ''
  },
  book2: ''
};
observer(library);
library.book1.name = 'vue 权威指南';
library.book2 = '没有此书籍';



