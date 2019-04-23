/**
 * 第一次 向文件中写入
 * 第二次 把内容存放到缓存中
 * 第三次 第一次写入成功后，清空缓存第一项 依次清空
 * 第四次 都清空后看是否触发drain事件
 */
let fs = require('fs');
let EventEmitter = require('events')
class WriteStream extends EventEmitter{
    constructor(path,options){
      super();
      this.path= path;
      this.mode = options.mode||0o666;
      this.autoClose = options.autoClose|| true;
      this.highWaterMark = options.highWaterMark || 64 * 1024;
      this.encoding = options.encoding || 'utf8';
      this.start = options.start || 0;
      this.flags = options.flags || 'w';
      this.open();
      this.cache=[];//暂存
      this.len;
      this.needDrain = false;
      this.writing = false;
      this.pos =this.start;
    }
    open(){
      fs.open(this.path,this.flags,(err,data)=>{
          if(err){
            return this.emit("error")
          }
          this.fd = fd;
          this.emit("open")
      })
    }
    write(chunk,encoding=this.encoding,callback=()=>{}){
      chunk =Buffer.isBuffer(chunk)?chunk:Buffer.from(chunk);
      this.len += chunk.length;
      if(this.len >= this.highWaterMark){
        this.needDrain = true;
      }
      if(this.writing){
        this.cache.push({chunk,encoding,callback})
      }else{
        this.writing = true;
        this._write(chunk,encoding,()=>{
          callback();
          this.clearBuffer()//  清理数组第一项
        })
      }
      return  !this.needDrain;
    }
    clearBuffer(){
      let obj =  this.cache.shift();
      if(obj){
        this._write(obj.chunk,obj.encoding,()=>{
          obj.callback();
          this.clearBuffer();
        })
      }else{
        if(this.needDrain){
          this.needDrain =false;
          this.writing = false;
          this.emit("drain")
        }
      }
    }
    _write(chunk,encoding,callback){
      if(typeof this.fd != 'number'){
        return this.once("open",()=>{
          return this._write(chunk,encoding,callback)
        })
      }
      fs.write(this.fd,chunk,0,chunk.length,this.pos,(err,written)=>{
        this.pos = written;
        this.len -= written
        callback()
      })
    }
}
module.exports = WriteStream
