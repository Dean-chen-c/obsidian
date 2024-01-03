
## Loader和Plugin的区别

- **Loader**直译为"加载器"。`Webpack`将⼀切⽂件视为模块，但是`Webpack`原⽣是只能解析`JavaScript`⽂件，如果想将其他⽂件也打包的话，就会⽤到`Loader`。所以`Loader`的作⽤是让`Webpack`拥有了加载和解析非`JavaScript`文件的能力;
    
- **Plugin**直译为"插件"。`Plugin`可以扩展`Webpack`的功能,让`Webpack`具有灵活性。在`Webpack`运⾏的⽣命周期中会⼴播出许多事件，`Plugin`可以监听这些事件，在合适的时机通过`Webpack`提供的API改变输出结果。

## WebPack中bundle,chunk,module的作用是什么?

- **bundle** 是由`Webpack`打包出来的文件;
    
- **chunk** 代码块,一个chunk由多个模块组合⽽成，⽤于代码的合并和分割;
    
- **module** 是开发中的单个模块，在`Webpack`中⼀个模块对应⼀个⽂件，`Webpack`会从配置的`entry`中递归开始找出所有依赖的模块。

