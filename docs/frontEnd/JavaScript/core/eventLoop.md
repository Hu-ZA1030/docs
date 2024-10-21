# Event Loop 事件循环机制

## js 事件执行机制的过程

javaScript 是一门单线程语言，js 在执行代码时会按照代码语句的顺序执行形成一个执行栈，默认会从上到下依次执行，执行过程中会将任务分成两类。

- 同步任务：需要执行的任务在主线程上排队，一次执行
- 异步任务：没有立马执行但是需要被执行的任务，放在任务队列里面
  在主线程执行过程中同步任务会立即执行，遇到异步任务时不会立马执行，会将异步任务放入一个"任务队列"（task queue）中，当"执行栈"中的所有任务执行完毕，就会去任务队列中将对应的任务事件放入执行栈中执行，主线程就是这样重复执行上面的步骤形成一个循环叫（Event Loop） **事件循环**

## 异步任务分为：宏任务和微任务

同步和异步分别进入到不同的执行场所，同步进入到主线程，异步的进入到任务队列（event table） 并注册函数，异步任务又可以分为宏任务和微任务。

- 微任务： process.nextTick（node）、Promise, Object.observe, MutationObserver
- 宏任务： 整个 script 代码、setTimeout、 setInterval、requestAnimationFrame（请求动画）, I/O，UI 渲染
- 先同步 ，再取出第一个宏任务执行 所有的相关微任务总会在下一个宏任务之前全部执行完毕 如果遇见 就 先微后宏

> 一个宏任务执行完后会立即执行该宏任务中的微任务队列，直至微任务队列清空继续执行任务队列中的下一个宏任务。
>
> 宏任务执行完会去清空微任务队列，清空微任务后如果有 UI 渲染逻辑会线执行 UI 渲染，然后执行下一下宏任务

## 事件循环顺序

1. js 在执行上下文栈的同步任务执行完后

2. 首先会去执行微任务队列，按照队列先进先出的原则，一次执行完所有 Microtask 微任务队列任务

3. 当前微任务执行完后，判断是否有 UI 渲染如果有就执行渲染过程，没有就跳过

4. 然后开始执行宏任务队列，一次只执行一个。执行完后检查当前微任务队列是否有任务

5. 有，执行微任务队列，直至清空微任务

6. 没有，执行以一个宏任务

> 重复循环上述步骤形成一个事件循环，可以看出各任务的执行先后关系：**同步任务 > 微任务 > UI 渲染 > 宏任务**
>
>任务队列执行“先进先出”的顺序

循环第一遍：先打印所有同步任务，console.log，再打印整个script中第一遍放入微任务队列中的代码

循环第二遍：按照任务队列的先进先出，执行放入任务队列中的宏任务，如定时器等，在此等宏任务中，再按照循环第一遍中的顺序，去执行，完成打印

::: tip 注意：
new promise是同步的，promise.then是异步，归属微任务；async await返回的是promise视为微任务，整个async 的函数加入微任务队列
:::

<!-- ## 例子 -->