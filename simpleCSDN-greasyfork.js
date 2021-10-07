// ==UserScript==
// @name         CSDN 优雅脚本
// @namespace    https://github.com/BackMountainDevil/
// @supportURL   https://github.com/BackMountainDevil/simpleCSDN/issues
// @version      0.0.1
// @license      MIT
// @description  油猴脚本- 优雅的浏览 CSDN（去广告、布局调整）
// @author       小易
// @match        *://blog.csdn.net/*/article/details/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

function setTitle(_title) {// 修改网页标题名称
  window.document.title = _title;
}


(function () {
  'use strict';
  // setTitle("标题更换测试");

  var cssFix = document.createElement('style');
  /* 根据 id 或者 类名 隐藏左侧栏目 */
  cssFix.innerHTML += '#asideProfile{display:none !important;}'; // 博主头像、数据、徽章
  cssFix.innerHTML += '#asideHotArticle{display:none !important;}'; // 热门文章
  cssFix.innerHTML += '#asideNewComments{display:none !important;}'; // 最新评论
  cssFix.innerHTML += '#asideCategory{display:none !important;}'; // 分类专栏
  cssFix.innerHTML += '#asideNewNps{display:none !important;}'; // 向朋友推荐
  var asideArchive = document.getElementById('asideArchive')    // 最新文章新办法隐藏
  asideArchive.remove();
  cssFix.innerHTML += '#footerRightAds{display:none !important;}'; // 广告
  /* 根据 id 或者 类名 隐藏底部栏目 */
  cssFix.innerHTML += '#copyright-box{display:none !important;}'; // 几乎没人想看的备案号
  cssFix.innerHTML += '.recommend-box{display:none !important;}'; // 相关文章
  cssFix.innerHTML += '.template-box{display:none !important;}'; // 皮肤主题显示栏（我又不能调，显摆用？）
  cssFix.innerHTML += '.left-toolbox{display:none !important;}'; // 没什么用的贴在底部的三连

  cssFix.innerHTML += '.csdn-side-toolbar{display:none !important;}'; // 广告、新手引导、客服、举报、很慢的回到顶部
  document.getElementsByTagName('head')[0].appendChild(cssFix); // 实施隐藏
})();