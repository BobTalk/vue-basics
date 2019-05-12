let Vue;
let install=(_Vue)=>{
  Vue = _Vue;//保留vue构造函数
  Vue.mixin({
    beforeCreate () {
      //根组件
      if(this.$options&&this.$options.store){
        this.$store = this.$options.store;
      }else{//子组件
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  })
}
class ModuleCollection{
  constructor(options){
    this.register([],options);
  }
  register(path,rawModule){
    let newModule={
      _raw:rawModule,//当前模块 state getters对象
      _children:{},//包含的模块
      state:rawModule.state //自己模块的状态
    }
    if(path.length == 0){
      this.root = newModule;//根
    }else{
      let parent = path.slice(0,-1).reduce((root,current)=>{
        return root._children[current]
      },this.root)
      parent._children[path[path.length -1]] =newModule
    }
    if(rawModule.modules){
      forEach(rawModule.modules,(childName,module)=>{
        this.register(path.concat(childName),module)
      })
    }
  }
}
function installModule(store,rootState,path,rootModule){
  if(path.length > 0){
   let parent =  path.slice(0,-1).reduce((root,current)=>{
      return root[current]
    },rootState)
    Vue.set(parent,path[path.length-1],rootModule.state)
  }
  if(rootModule._raw.getters){
    forEach(rootModule._raw.getters,(getterName,getterFn)=>{
      Object.defineProperty(store.getters,getterName,{
        get :()=>{
          return getterFn(rootModule.state)
        }
      })
    })
  }
  if(rootModule._raw.actions){
    forEach(rootModule._raw.actions,(actionsName,actionsFn)=>{
     let entry = store.actions[actionsName]||(store.actions[actionsName]=[]);
     entry.push(()=>{
       actionsFn.call(store,store)
     })
    })
  }
  if(rootModule._raw.mutations){
    forEach(rootModule._raw.mutations,(mutationsName,mutationsFn)=>{
     let entry = store.mutations[mutationsName]||(store.mutations[mutationsName]=[]);
     entry.push(()=>{
      mutationsFn.call(store,rootModule.state)
     })
    })
  }
  forEach(rootModule._children,(childName,module)=>{
    installModule(store,rootState,path.concat(childName),module)
  })
}
class Store {
  constructor(options){
    let state = options.state;
    this.getters={};
    this.mutations= {};
    this.actions={};
    //vuex核心
    this._vm=new Vue({
      data:{
        state
      }
    });
    //模块直接的关系整理
    this.modules=new ModuleCollection(options);
    installModule(this,state,[],this.modules.root)
   /* if(options.getters){
      let getters = options.getters;
      let mutations = options.mutations;
      let actions = options.actions;

      forEach(getters,(getterName,getterFn)=>{
          Object.defineProperty(this.getters,getterName,{
            get:()=>{
              return getterFn(state)
            }
          })
      })
      forEach(mutations,(mutationName,mutationFn)=>{
        this.mutations[mutationName]=()=>{
          mutationFn.call(this,state)
        }
      })
      forEach(actions,(actionsName,actionsFn)=>{
        this.actions[actionsName]=()=>{
          actionsFn.call(this,this)
        }
      })
    }*/
    let {commit,dispatch}=this;
    this.commit=(type)=>{
      commit.call(this,type)
    }
    this.dispatch=(type)=>{
      dispatch.call(this,type)
    }
  }
  get state(){
    return this._vm.state
  }
  commit(type){
    this.mutations[type].forEach(fn=>fn())
  }
  dispatch(type){
    this.actions[type].forEach(fn=>fn())
  }
}
function forEach(obj,callback){
  Object.keys(obj).forEach(item=>callback(item,obj[item]))
}
export default({
  install,
  Store
})
