---
title: links
date: 2018-12-19 23:11:06
keywords: 友人帐
description: 
comments: true
photos: https://cdn.jsdelivr.net/gh/honjun/cdn@1.4/img/banner/links.jpg
---
欢迎交换友链 ꉂ(ˊᗜˋ)

请留言告诉我你的：
  1、名字
  2、一句话介绍（熟人我会亲自帮写的）
  3、主页地址
  4、头像（HTTPS*，可在评论区上传）

For Example：
  ★ Name: Mashiro
  ★ Bio: 樱花庄的白猫
  ★ URL: https://2heng.xin
  ★ Avatar: https://static.2heng.xin/wp-content/uploads//2017/11/1-1511301SP0.jpg

※ 为保证友链质量，今后新申请的友链将经过筛选，请在收到我的回复邮件后再于贵站添加本站链接。原则上过去已添加友链不会轻易删除，如遇死链、改变网站用途（友链主要针对的是同类的博客），将单独移至“阵亡将士”分类中，下次清理时未整改的将移除；如遇盗版、破解、网页植入挖矿脚本、极低质量内容、单方面移除本站链接，将直接移除，恕不另行通知。

### 1. 个人项目
{% raw %}<div class="links"><ul class="me link-items fontSmooth"></ul></div>{% endraw %}
### 2. 友情链接
{% raw %}<div class="links"><ul class="friend link-items fontSmooth"></ul></div>{% endraw %}

{% raw %}
<script>
  var links = [
    {
      tpye: 'me',
      url: 'https://shino.cc/fgvf',
      img: 'https://cloud.moezx.cc/Picture/svg/landscape/fields.svg',
      sitename: 'Google',
      linkdes: 'Google 镜像'
    },
    {
      tpye: 'me',
      url: 'https://t.shino.cc',
      img: 'https://cloud.moezx.cc/Picture/svg/landscape/mill.svg',
      sitename: 'Telegram',
      linkdes: 'Telegram 镜像'
    },
    {
      tpye: 'friend',
      url: 'https://www.moezx.cc/',
      img: 'https://cloud.moezx.cc/Picture/svg/landscape2/sea.svg',
      sitename: 'Cloudflare CDN',
      linkdes: 'CNAME免费接入'
    },
    {
      tpye: 'friend',
      url: 'https://www.moezx.cc/',
      img: 'https://cloud.moezx.cc/Picture/svg/landscape/desert.svg',
      sitename: 'Cloudflare CDN',
      linkdes: 'CNAME免费接入'
    }
  ];
  window.onload = function(){
    links.forEach(function(link, i){
      $('.' + link.tpye).append(`<li class="link-item">
        <a class="link-item-inner effect-apollo" href="${link.url}" title="${link.linkdes}" target="_blank" rel="friend">
          <img class="lazyload" onerror="imgError(this,1)" src="${link.img}" >
          <span class="sitename">${link.sitename}</span>
          <div class="linkdes">${link.linkdes}</div>
        </a>
      </li>`)
    })
  }
</script>
{% endraw %}