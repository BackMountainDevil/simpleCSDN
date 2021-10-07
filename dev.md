# 选择符

css 中为了区分 tag、id、class。tag 最简单，直接由 tagname 打头；id 则是井号(#)后跟上 id 的值；class 则是小数点(.)后跟上 class 的值

# 导航栏

隐藏子项（如收藏、动态）的时候无法使用 `document.getElementsByClassName('toolbar-btn')`，从调试打断点的结果表明该脚本加载的时候导航栏还没有生成，会出现 undefined。最后采用的 css 的 display 属性将会员（根据特殊的 classname）隐藏
