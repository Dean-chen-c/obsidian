
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17301711770001diyff.png)

这篇文章介绍了 V8 引擎中的 JIT（即时编译）技术，强调其在提升 JavaScript 执行性能方面的重要性。文章首先解释了 JIT 的定义及工作原理，包括代码的扫描、解析、解释执行和编译成机器语言的过程。接着，描述了 V8 引擎如何通过扫描将源码转换为词法单元（Tokens），再通过解析生成抽象语法树（AST），最终执行字节码并优化热点代码。文章还指出了 JIT 的优势，如性能提升、启动速度快、动态优化、内存管理和适应性等。最后，总结了 V8 执行 JavaScript 代码的整体流程。


V8 是 Chrome 和 Node.js 使用的 JavaScript 引擎，JIT 编译是 V8 中一个非常重要的性能优化技术。

在计算机科学中， JIT 是 “Just-in-Time” （即时编译的）的缩写，它是一种提高代码执行性能的技术。具体来说，在 V8 引擎（Google Chrome 浏览器和 Node.js 的 JavaScript 引擎）中，JIT 编译器在 JavaScript 代码运行时，将其编译成机器语言，以提高执行速度。

JIT 编译器在 V8 中工作原理大概如下：

## 1.Scanner (扫描过程)

将 `JavaScript` 源码分解成一个个的词法单元（Tokens）。

### 工作原理

1. 读取代码：Scanner 从左到右逐个字符地读取 JavaScript 源代码。
2. 词法分析：Scanner 会分析字符序列，识别出代码中的关键字、标识符、运算符、常亮、字符串、注释等语法元素。
3. 生成 Tokens：每识别出一个词法元素，Scanner 就会生成一个对应的 Token 对象。Token 对象 通常包含以下信息：

- 类型：例如关键字、标识符、运算符等
- 值：例如 `if、function、myVariable、+、=` 等
- 位置信息：Token 在源代码中的行号和列号，方便后续报错和调试。

### Scanner 的作用

1. 简化 Parser 工作：Scanner 将源代码分解成一个个的 Token， Parser 就不用自己再去处理词法分析的细节，可以直接处理 Token 序列，简化了 Parser 的设计和实现，提高了解析效率。
2. 提高错误处理能力：Scanner 在词法分析阶段就能发现一些词法错误，例如非法字符、字符串没有闭合等。尽早发现错误可以及时中断编译过程，提过错误提示的准确性。

## 2.Parser（解析过程）

Parser 阶段主要是负责将 JavaScript 源码转换为 Abstract Syntax Tree（AST 抽象语法树）。

[AST转换过程可以在这里体验](https://esprima.org/demo/parse.html#)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/17301717040001frw6x.png)
## 3.Ignition （解释过程）

V8 首先通过 Ignition（解释器）来执行 JavaScript 代码。在这个过程中，代码不会被编译成机器语言，而是逐行解释执行。这种方式启动快，但是执行速度较慢。

## 4.TurbonFan：compiler 编译器

当某一段代码被多次执行时，V8 会认为这部分代码是 ”热点代码（Hot Spot）“，此时 JIT 编译器（TurbonFan）会介入，将这部分热点代码编译成机器语言。机器语言在 CPU 上的能运行速度远快于解释执行。

## 5.优化与去优化

JIT 编译器会对热点代码进行优化，但有时基于错误的假设进行优化（例如假设某个变量总是某种类型）。如果后来的执行发现这些假设不成立，编译器需要去掉这些优化（Deoptimize），重新编译。


![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/173017178200051tv9b.png)
## 6.JIT的优势

- 性能提升: JIT 编译技术使得 JavaScript 的执行速度大幅提升，接近于或同等于编译语言的运行速度。
- 启动速度: 解释执行启动快，但执行速度较慢；即时编译启动慢，但执行速度快。
- 动态优化: JIT 编译器能够在运行时动态优化代码，提高执行效率。
- 内存管理: JIT 编译器能够更有效地管理内存，减少内存占用。
- 适应性: JIT 编译器能够适应不同的执行环境，提高代码的兼容性。

## 7.总结：

V8 执行一段 JavaScript 代码主要的流程：

- （1）扫码源码生成词法单元。
- （2）解析源码生成 AST 和作用域；
- （3）依据 AST 和作用域生成字节码；
- （4）解释执行字节码；
- （5）监听热点代码；
- （6）优化热点代码为二进制的机器代码；
- （7）反优化生成的二进制机器代码。