hexo-theme-sakura [中文文档](./README-zh_cn.md)

Based on the WordPress theme [Sakura](https://github.com/mashirozx/Sakura/) modified into Hexo theme.

[Demo preview](https://sakura.hojun.cn)

in development......

![](https://wx3.sinaimg.cn/large/006bYVyvly1g069tuf42oj312w0m8ndq.jpg)

## Exchange group
If you are a user, plus group QQ: 801511924

If you are a creator, plus group QQ: 194472590


## Theme feature

 - Home big screen video
 - Home random cover
 - Picture lazy loading
 - Valine review
 - Fancy-box photo album
 - Pjax support, music is uninterrupted
 - Aplayer music player
 - Multi-level navigation menu (this is a feature as far as most hexo themes are concerned)


## Appreciate the author
If you like the hexo-theme-sakura theme, you can consider funding it~ I am very grateful!

[paypal](https://www.paypal.me/hojuncn) | [Alipay](https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/custom/donate/AliPayQR.jpg) | [WeChat Pay](https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/custom/donate/WeChanSQ.jpg)

## Incomplete use tutorial

well? Honestly, I am not very organized at the moment 233333333~

## 1、sakura theme download and install

[hexo-theme-sakura](https://github.com/honjun/hexo-theme-sakura)recommends downloading the compressed package format, because in addition to the theme content, some source configuration is too much trouble for the novice, directly download the decompression to save these troubles.

After downloading, extract it to the root directory of the blog (not the theme directory, repeat the selection and replace). Then run the npm iinstallation dependencies on the command line (cmd, bash) .

## configuration

### _config configuration in the root directory of the blog

```yml
# Site
title : Your site name 
subtitle :
description : Site Profile 
Keywords :
author : Author name 
language : en zh-cn 
timezone :
```

```yml
Deploy :
  type : git 
  repo : 
     github : your github repository address 
    # coding: your coding repository address 
  branch : master
```

### _config configuration under the theme directory

The part marked with [Change] is the need to modify the department, indicating that [Select] can be changed or not, and the part marked with [Non] is not changed.
```yml
# site name 
#
站名称[改] prefixName :さくら荘その
siteName : hojun

# favicon and site master avatar 
#站favicon and avatar input image path (the following configuration is the relative path of cdn, please fill in the full path without cdn, it is recommended to use jsdeliver to build a cdn, first download my cdn replacement The picture is OK, simple and convenient~) [Change] 
favicon : /images/favicon.ico 
avatar : /img/custom/avatar.jpg

#站url [Change] 
url : https://sakura.hojun.cn

#站介绍(或个人
签名符) [Change] description : Live your life with passion! With some drive!

#站cdn, no is empty [change] If cdn is empty, some image addresses must be filled in the complete address, such as the previous avatar to fill https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/ img / Custom / avatar.jpg 
CDN : https://cdn.jsdelivr.net/gh/honjun/cdn@1.6

#开启pjax [Select] 
pjax : 1

#
站首页's announcement information [Change] notice : hexo-Sakura theme has been open source, currently under development...

#懒Loaded loading image [Select] 
lazyloadImg : https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/loader/orange.progress-bar-stripe-loader.svg

#站菜单 Configuration [Select] 
menus :
   Home : { path: /, fa: fa-fort-awesome faa-shake } 
  Archive : { path: /archives, fa: fa-archive faa-shake, submenus: { 
    Technology : { Path: /categories/technology/, fa: fa-code }, 
    life : {path: /categories/life/, fa: fa-file-text-o }, 
    resources : {path: /categories/resources/, fa: Fa-cloud-download }, 
    thoughts : {path: /categories/随想/, fa: fa-commenting-o }, 
    reproduced : {path: /categories/reproduced/, fa: fa-book } 
  } } 
  List : { path : javascript:;, fa: fa-list-ul faa-vertical, submenus: { 
    Book :{path: /tags/reading/, fa: fa-th-list faa-bounce }, 
    group : {path: /bangumi/, fa: fa-film faa-vertical }, 
    song list : {path: /music /, fa: fa-headphones }, 
    atlas : {path: /tags/atlas/, fa: fa-photo } 
  } } 
  Message board : { path: /comment/, fa: fa-pencil-square-o faa -tada } 
  Friendly account : { path: /links/, fa: fa-link faa-shake } 
  Appreciation : { path: /donate/, fa: fa-heart faa-pulse } 
  About : { path: /, fa: fa -leaf faa-wrench , submenus: { 
    I? : {path: /about/, fa: fa-meetup}, 
    Subject : {path: /theme-sakura/, fa: iconfont icon-sakura }, 
    Lab: {path: /lab/, fa: fa-cogs }, 
  } } 
  Client : { path: /client/, fa: fa-android faa-vertical } 
  RSS : { path: /atom.xml, fa: fa- Rss faa-pulse }

# Home page sort type: -1: newer first,1: older first. [ 
None ] homePageSortType : -1

# Home page article shown number) [非] 
homeArticleShown : 10

#背景图片[Select] 
bgn : 8

# startdash面板url, title, desc img [Change] 
startdash :
  - {url: /theme-sakura/, title: Sakura, desc: The site hexo theme, img: /img/startdash/sakura.md.png} 
  - {url: http://space.bilibili.com/271849279, Title: Bilibili, desc: blogger's b-station video, img: /img/startdash/bilibili.jpg} 
  - {url: /, title: hojun's masterhouse, desc: technical service, img: /img/startdash/wangshiwu .jpg}


# Your Site Build Founded Time or DATE 
# your site creation date [change] 
siteBuildingTime : 07/17/2018


# Social buttons (social) url, img PC side configuration change] [ 
social :
   GitHub : {URL: http://github.com/honjun, IMG: /img/social/github.png} 
  siNA : {URL: HTTP: //weibo.com/mashirozx?is_all=1, img: /img/social/sina.png} 
  wangyiyun : {url: http://weibo.com/mashirozx?is_all=1, img: /img/social/wangyiyun .png} 
  zhihu : {url: http://weibo.com/mashirozx?is_all=1, img: /img/social/zhihu.png} 
  email : {url: http://weibo.com/mashirozx?is_all= 1, img: /img/social/email.svg} 
  wechat : {url: /#, qrcode: /img/custom/wechat.jpg, img: /img/social/wechat.png}

# Social buttons (msocial) url, img [changes] the mobile terminal configured 
msocial :
   GitHub : {URL: http://github.com/honjun, FA: FA-GitHub, Color: 333} 
  Weibo : {URL: HTTP: / /weibo.com/mashirozx?is_all=1, fa: fa-weibo, color: dd4b39} 
  qq : {url: https://wpa.qq.com/msgrd?v=3&uin=954655431&site=qq&menu=yes, fa: Fa-qq, color: 25c6fe}

# Appreciate the QR code (where wechatSQ is appreciated for the single page of the appreciation code picture) [Change] 
donate :
   alipay : /img/custom/donate/AliPayQR.jpg 
  wechat : /img/custom/donate/WeChanQR.jpg 
  wechatSQ : /img /custom/donate/WeChanSQ.jpg

#首页视频地址 is https://cdn.jsdelivr.net/gh/honjun/hojun@1.2/Unbroken.mp4, the configuration is as follows [change] 
movies :
  url : https://cdn.jsdelivr.net/gh/honjun/ hojun@1.2 
  # multiple video separated by commas, random get. The supported formats are currently known as MP4, Flv. Others can be tried, not guaranteed to be useful 
  name : Unbroken.mp4

#下下角aplayer player configuration mainly change id and server these two, modify the details see [aplayer document] [change] 
aplayer : 
  id : 2660651585 
  server : netease 
  type : playlist 
  fixed : true 
  mini : false 
  autoplay : false 
  loop : all 
  order : random 
  preload : auto 
  volume : 0.7 
  mutex : true

# Valine评论Configuration [Change] 
valine : true 
v_appId : GyC3NzMvd0hT9Yyd2hYIC0MN-gzGzoHsz 
v_appKey : mgOpfzbkHYqU92CV4IDlAUHQ
```

## Category page and tags page configuration

### Category page
![](https://ws3.sinaimg.cn/large/006bYVyvly1g07b0gucy9j31060jih76.jpg)
### tags page
![](https://wx2.sinaimg.cn/large/006bYVyvly1g07azb2399j31040jgazs.jpg)

Configuration items are in \themes\Sakura\languages\zh-cn.yml. It is best to add a new category or label. Of course, you can use a default picture directly. (You can change the theme or directly replace the 404 picture. Ask for comments. Do you want to add a switch to the configuration file? Issue or group proposed), if you don't set it, you will use the inverted puppy 404.
```yml
# Category 
# Create a name by category 
Technology :
     # Chinese title 
    zh : Wild Technology Association 
    # English title 
    EN : Geek - Only for Love 
    # Cover Image 
    img : https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/ img / banner / coding.jpg 
life :
     zh : life 
    EN : live 
    img : https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/banner/writing.jpg

# Tag 
# tag name that is the title 
pleasure reading :
     # Cover Image 
    img : https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/banner/reading.jpg
```

## Single page cover configuration

![](https://ws3.sinaimg.cn/large/006bYVyvly1g07b1pi619j31080jge4u.jpg)
For example, on the message board page page, under the comment under source, open index.md as follows:
```md
---
Title: comment
Date: 2018 - 12 - 20  23 : 13 : 48
Keywords: message board
Description: 
Comments: true
# Configure a single page header image here, custom replacement oh~
Photos: https://cdn.jsdelivr.net/gh/honjun/cdn@ 1.4 /img/banner/comment.jpg
---
```


## Single page configuration

### Fan group plan page (please change directly in the downloaded file, the following comments may have some impact)
![](https://wx2.sinaimg.cn/large/006bYVyvly1g07b2gyx60j31090jjahj.jpg)

```yml
---
 layout : bangumi 
title : bangumi 
comments : false 
date : 2019-02-10 21:32:48 
keywords :
 description :
 bangumis :
   #番组图片 
  - img : https://lain.bgm.tv/pic/cover /l/0e/1e/218971_2y351.jpg 
  # Fan group name 
    title : North Korea vows to spend the evening - the agreement with effect from the beam toward the parting flower 
  # chase Fan state (fan chasing ing / chase has been completed) 
    status : has finished chasing 
  # Progression 
    progress : 100 
  #番剧 Japanese name 
    jp :Sa yo na ra ni constraint towardsののflower wo ka za ro u 
  # run time 
    Time : running time:. 2018-02-24 SUN 
  # Fan drama presentation 
    desc :   stay away from the hubbub of the land, while the everyday things of woven fame as Xibi Ou Cloth, the people of Iofu who live quietly. At the age of 15 years old, they stopped growing. They have a life span of hundreds of years, and they are called "parting families" and are regarded as living legends. Iowe girl, who has no parents, is a stable day surrounded by her partners, but she always feels "one person." Their daily routine collapsed in an instant. Pursuing the blood of Iofu's longevity, the Mesati army launched an attack on an ancient beast called Renate. In desperation and chaos, Iofu’s first beauty, Leia, was taken away by Mesati, and the young Kym, who was secretly loved by Macchia, also disappeared. Although Macchia finally escaped, she lost her partner and where she left. 
  - img : https://lain.bgm.tv/pic/cover/l/0e/1e/218971_2y351.jpg 
    title : North Korea vows to spend the evening - in parting towards the beam from the flowers of the convention 
    Status : has finished chasing 
    Progress : 50 
    JP : Connecticut published by starting raののflower toward wo ka ni constraint ro u za 
    time : run time: 2018-02-24 SUN.
    Desc : Living in a land far away from the dust, while weaving everyday things into a cloth called Hibbio, the Iofan people living quietly. At the age of 15 years old, they stopped growing. They have a life span of hundreds of years, and they are called "parting families" and are regarded as living legends. Iowe girl, who has no parents, is a stable day surrounded by her partners, but she always feels "one person." Their daily routine collapsed in an instant. Pursuing the blood of Iofu's longevity, the Mesati army launched an attack on an ancient beast called Renate. In desperation and chaos, Iofu’s first beauty, Leia, was taken away by Mesati, and the young Kym, who was secretly loved by Macchia, also disappeared. Although Macchia finally escaped, she lost her partner and where she left. 
---
```

### Friends chain page (please change directly in the downloaded file, the following comments may have some effect)
![](https://ws3.sinaimg.cn/large/006bYVyvly1g07b39tleej31080jhjv1.jpg)

```yml
---
layout : links 
title : links 
# creation date can be changed at 
DATE : 2018-12-19 23:11:06 
# title on the picture, custom modifications 
keywords : friend account 
the Description : 
 # to true / false turn on / off comment 
comments : to true  
# page header image, custom modify 
photos : https://cdn.jsdelivr.net/gh/honjun/cdn@1.4/img/banner/links.jpg 
# Friends of the chain configuration 
links : 
   # type packets 
  - Group : personal project 
    # type Profile 
    desc :Fully explain that this guy is a salted fish < ( ̄) ̄)> 
    items :
     #友链链接 
    - url : https://shino.cc/fgvf 
    #友链
      头像img : https://cloud.moezx.cc/Picture /svg/landscape/fields.svg 
    #友链
      网站名name : Google 
    #友链 Introduce the following similar 
      desc : Google Mirror 
    - url : https://shino.cc/fgvf 
      img : https://cloud.moezx.cc/ Picture / SVG / Landscape / fields.svg 
      name : Google 
      desc : Google image 
  # type packets ... 
  - Group: Small partners 
    desc : Welcome Friends of the chain exchange ꉂ ('ᗜ') 
    items :
    - url : https://shino.cc/fgvf 
      img : https://cloud.moezx.cc/Picture/svg/landscape/fields.svg 
      name : Google 
      desc : Google Mirror 
    - url : https://shino.cc /fgvf 
      img : https://cloud.moezx.cc/Picture/svg/landscape/fields.svg 
      name : Google 
      desc : Google Mirror 
---
```

## Write article configuration

The theme integrates the personal plug-ins hexo-tag-bili and hexo-tag-fancybox_img. The hexo-tag-bili is used to insert the B-station external link video in the article or single page. The syntax is as follows:
```md
{% bili video_id [page] %}
```
See the [hexo-tag-bili](https://github.com/honjun/hexo-tag-bili/blob/master/README-zh_cn.md) for a detailed tutorial .

Hexo-tag-fancybox_img is used to view images in articles or single pages. The syntax is as follows:
```md
{% fb_img src [caption] %}
```
See the [hexo-tag-fancybox_img](https://github.com/honjun/hexo-tag-fancybox_img/blob/master/README-zh_cn.md)
 for a detailed tutorial.

## Also, I can’t remember it for a moment...

To be continued...