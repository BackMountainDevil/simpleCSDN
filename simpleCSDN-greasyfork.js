// ==UserScript==
// @name         simpleCSDN
// @namespace    https://github.com/BackMountainDevil/simpleCSDN
// @supportURL   https://github.com/BackMountainDevil/simpleCSDN/issues
// @version      0.0.2
// @license      MIT
// @description  油猴脚本 优雅的浏览 CSDN（去广告、布局调整），尊重隐私
// @author       小易
// @match        *://blog.csdn.net/*/article/details/*
// @match        https://i.csdn.net/#/msg/index
// @match        https://im.csdn.net/chat/csdn_sysnotify
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function () {
  'use strict';

  var cssFix = document.createElement('style');
  cssFix.innerHTML += '.toolbar-advert{display:none !important;}'; // 顶部广告
  /* 顶部的导航栏 */
  cssFix.innerHTML += '.toolbar-logo{display:none !important;}'; // 最左侧的 logo
  cssFix.innerHTML += '.toolbar-menus{display:none !important;}'; // 博客、课程、下载、问答、社区、插件、认证（单个隐藏太费劲）
  cssFix.innerHTML += '.toolbar-btn-vip{display:none !important;}'; // 右侧的会员中心
  /* 根据 id 或者 类名 隐藏左侧栏目 */
  cssFix.innerHTML += '#asideProfile{display:none !important;}'; // 博主头像、数据、徽章
  cssFix.innerHTML += '#asideSearchArticle{display:none !important;}'; // 搜博主文章
  cssFix.innerHTML += '#asidedirectory{display:none !important;}'; // 目录
  cssFix.innerHTML += '#asideHotArticle{display:none !important;}'; // 热门文章
  cssFix.innerHTML += '#asideNewComments{display:none !important;}'; // 最新评论
  cssFix.innerHTML += '#asideCategory{display:none !important;}'; // 分类专栏
  cssFix.innerHTML += '#asideNewNps{display:none !important;}'; // 向朋友推荐
  var asideArchive = document.getElementById('asideArchive'); // 最新文章新办法隐藏
  asideArchive.remove();
  cssFix.innerHTML += '#footerRightAds{display:none !important;}'; // 广告
  cssFix.innerHTML += '.recommend-right{display:none !important;}'; // 80% 缩放下可见的右侧分类专栏

  /* 根据 id 或者 类名 隐藏底部栏目 */
  cssFix.innerHTML += '#copyright-box{display:none !important;}'; // 几乎没人想看的备案号
  cssFix.innerHTML += '.recommend-box{display:none !important;}'; // 相关文章
  cssFix.innerHTML += '.template-box{display:none !important;}'; // 皮肤主题显示栏（我又不能调，显摆用？）
  cssFix.innerHTML += '.left-toolbox{display:none !important;}'; // 没什么用的贴在底部的三连
  cssFix.innerHTML += '.csdn-side-toolbar{display:none !important;}'; // 广告、新手引导、客服、举报、很慢的回到顶部
  /* 容器宽度由默认的固定值修改为百分比，为主体内容铺开留下空间 */
  cssFix.innerHTML += '.nodata .container{width:100%;}';
  cssFix.innerHTML += '.column-group{display:none !important;}'; // 文章所属专栏和专栏文章的数量
  document.getElementsByTagName('head')[0].appendChild(cssFix); // 实施隐藏

  var content = document.getElementsByTagName('main')[0]; // 铺开内容主体
  content.style.width='100%';

	/* 自定义功能区
	1. 快速返回顶部
	2. 侧边可隐藏目录
	*/
	var div = document.createElement("div");
  div.id='divTool';
	var style = document.createAttribute("style");
	div.setAttributeNode(style);
	div.style.margin = '0';
  div.style.padding='0';

	var aTop = document.createElement("a"); // 返回顶部的超链接（看起来像可点击的按钮）
	aTop.style.display = 'block';
	aTop.style.width = '44px';
	aTop.style.height = '44px';
	aTop.style.cursor = 'pointer';
	aTop.style.background = '#fff';
	aTop.style.marginLeft='95%';	// 位置

	aTop.alt = '返回顶部';
	aTop.onclick= function o() { // 添加点击事件，实现立刻返回顶部
		document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	};
	var img = document.createElement("img");
	img.src = 'https://g.csdnimg.cn/side-toolbar/3.0/images/fanhuidingbucopy.png'; // 图片来源为原来的返回顶部
	aTop.appendChild(img);

	div.appendChild(aTop);
	var dir = document.getElementById('directory'); // 原生目录
  dir.style.float='left';
  dir.style.position='absolute';
  dir.style.left='0';

	div.appendChild(dir);
	document.getElementsByTagName("main").item(0).appendChild(div); // 应用自定义功能区
})();