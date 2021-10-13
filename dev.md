# 选择符

css 中为了区分 tag、id、class。tag 最简单，直接由 tagname 打头；id 则是井号(#)后跟上 id 的值；class 则是小数点(.)后跟上 class 的值

# css 中的带连字符（-）的属性

在 js 中设置 margin-left 等属性时，在 ff 中测试结果表明没生效，vs codium 的错误检测也在这一行说要加分号。。。最后在[JavaScript 控制 margin](https://www.cnblogs.com/mslove/archive/2009/04/07/1430852.html)找到了可行的方案，把连字符去掉，并且连字符后面第一个字母改大写即可。

# 导航栏

隐藏子项（如收藏、动态）的时候无法使用 `document.getElementsByClassName('toolbar-btn')`，从调试打断点的结果表明该脚本加载的时候导航栏还没有生成，会出现 undefined。最后采用的 css 的 display 属性将会员（根据特殊的 classname）隐藏

# 浮动工具栏
## 返回顶部

无论是 CSDN 还是 zhihu 的返回顶部都是比较慢的，前者更慢，不知道这样是为了什么，个人喜欢一键到底（当然鼠标中键滚动条最上方也是可以到顶的，但是要移动鼠标啊）。Bilibili 则是我想要的立刻返回顶部，代码中有做异常处理，不是很理解为什么。

目前的 JavaScript 返回顶部实现cv自 [runoob](https://www.runoob.com/w3cnote/js-to-top.html)
