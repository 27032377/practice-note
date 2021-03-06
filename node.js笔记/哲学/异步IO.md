## I/O:

### 绝大多数的网站的I/O是非常多的，I就是input数据的读取，O就是output数据的写入，I/O的时候，CPU命令磁盘驱动器去做事情，此时CPU就被闲置，性能就被浪费了。

### 同步I/O：等待I/O，CPU闲置

### 异步I/O：等待I/O时，处理其他指令，完成后再回调

***在 Node 中，我们可以从语言层面很自然地进行并行 I/O 操作。每个调用之间无需等待之前的 I/O 调用结束。在编程模型上可以极大提升效率。***

> 以下两个文件的读取任务的耗时取决于最慢的那个文件读取的耗时：

```
fs.readFile('/path1', (err, data) => {
    console.log('读取文件1完成')
})

fs.readFile('/path2', (err, data) => {
    console.log('读取文件2完成')
})
```

**而对于同步 I/O 而言，它们的耗时是两个任务的耗时之和。这里异步带来的优势是显而易见的。**

> node不精于计算(计算时，用户单独占用唯一的node线程，此时node无法服务别人)

- 只要I/O越多，NodeJS宏观上越并行
- 如果计算多，NodeJS宏观上越不能并线，速度越慢
- 计算过程中，CPU只能为某一个用户服务，难以脱身
- Node.js适合开发I/O多的业务，而不适合计算任务繁重的业务