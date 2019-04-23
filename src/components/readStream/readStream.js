let fs = require('fs');
let EventEmitter = require('events')
class ReadStream extends EventEmitter {
    constructor(path, options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || 'r';
        this.mode = options.mode || 438;
        this.start = options.mode || 0;
        this.end = open.end;
        this.autoClose = options.autoClose;
        this.highWaterMark = options.highWaterMark || 64 * 1024;
        this.encoding = options.encoding || null;
        this.flowing = null; //开始读取 修改成true
        // 读取文件 需打开文件
        this.open();
        // 同步
        this.on("newListener", (type) => {
            if (type === 'data') {
                this.flowing = true;
                this.read() //开始读取文件
            }
        })
        this.pos = this.start;
    }
    read() {
            if (typeof this.fd !== 'number') {
                return this.once('open', () => this.read())
            }
            let howMuchToRead = this.end ? Math.min((this.end - this.pos + 1), this.highWaterMark) : this.highWaterMark;
            let buffer = Buffer.alloc(howMuchToRead);
            fs.read(this.fd, buffer, 0, buffer.length, this.pos, (err, bytesRead) => {
                if (bytesRead > 0) {
                    this.pos += bytesRead;
                    this.emit("data", this.encoding ? buffer.toString(this.encoding) : buffer);
                    if (this.flowing) {
                        this.read()
                    } else {
                        this.emit('end');
                        if (this.autoClose) {
                            fs.close(this.fd, () => {
                                this.emit("close");
                                this.flowing = null;
                            })
                        }
                    }
                }
            })
        }
        //异步
    open() {
        fs.open(this.path, this.flags, (err, fd) => {
            if (err) {
                this.emit('error');
                return
            }
            this.fd = fd; //文件描述符
            this.emit('open', this.fd)
        })
    }
}
module.exports = ReadStream;
