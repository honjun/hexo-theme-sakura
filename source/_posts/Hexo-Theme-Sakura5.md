---
title: Hexo-Theme-Sakura5
categories: 技术
tags: web
keywords: Web端720全景
description: 最近又一次接触到了web端全景，是在720yun上，发现有好多用户上传的全景照片。再也按捺不住那颗好奇的心，去探究了下720云是怎么实现web端全景展示的。
photos: 'https://ws3.sinaimg.cn/small/006bYVyvly1fxxewq3plij30yn0jjkjl.jpg'
date: 2018-2-12 22:43:45
---
![](https://ws3.sinaimg.cn/large/006bYVyvly1fxxewq3plij30yn0jjkjl.jpg)
最近又一次接触到了web端全景，是在720yun上，发现有好多用户上传的全景照片。再也按捺不住那颗好奇的心，去探究了下720云是怎么实现web端全景展示的。

## 分析加载的资源
![](https://ws3.sinaimg.cn/large/006bYVyvly1fxxfmcxo7qj30y50idquk.jpg)
我们使用f12开发者工具，查看分析找到了krp-player这个关键的js文件，并在js文件首部找到了它的原名"krpano"（稍微提一下：可能你还听说有其他插件或方式实现web全景:比如three.js，但那些都不是很成熟，存在大大小小的bug，而krpano比较成熟也是大部分全景网站所使用的，所以是收费的。）。于是搜索到了它的官网，并进行下载它的安装包（下载速度太慢可以搜索其百度网盘资源去下载）
![](https://ws4.sinaimg.cn/large/006bYVyvly1fxxfs6y2p3j30ya0jkdvo.jpg)

## 安装krpano

下载好后，双击安装到目录（自定义）。
![](https://ws3.sinaimg.cn/large/006bYVyvly1fxxfxam5wnj30je0ai415.jpg)
安装好后如下图
![](https://ws2.sinaimg.cn/large/006bYVyvly1fxxg9jj5qhj30jh0cejzv.jpg)
## 使用krpano

使用教程可以参考krpano360的。
![](https://wx2.sinaimg.cn/large/006bYVyvly1fxxgaq43fxj30yg0jle2c.jpg)
准备一张或多张全景图：
![](https://ws4.sinaimg.cn/large/006bYVyvly1fxxgchpzo7j30ku0g8wqa.jpg)
注意：要求的全景图长宽比为2:1
直接将全景拖到需要生成类型的bat上（我这里是MAKE VTOUR (VR-OPT) droplet，也是教程所推荐的）
![](https://wx2.sinaimg.cn/large/006bYVyvly1fxxgh02tsuj30ow0czape.jpg)
然后krpano就好自动处理图片，并生成html网页文件。生成的文件和图片在同一目录，如我的图片在桌面，生成的文件也在桌面。
![](https://wx3.sinaimg.cn/large/006bYVyvly1fxxgho6jw9j30pr0dgq6r.jpg)
这样子直接打开html文件还不能浏览全景图片，需要在服务器环境下访问才行（其他服务器环境也行）
![](https://ws2.sinaimg.cn/large/006bYVyvly1fxxglnscr9j30jx0arwgk.jpg)
这里我们用krpano自带的server工具。双击它：
![](https://ws1.sinaimg.cn/large/006bYVyvly1fxxgmkzy46j30jx0dvn5o.jpg)
可以看到服务开启的目录在krpano的安装目录下，我们可以把生成的文件复制过来访问：（这里我在安装目录下新建了一个文件夹）
![](https://ws3.sinaimg.cn/large/006bYVyvly1fxxgp6lkh2j30iu08at9k.jpg)
再打开之前server工具给的那个地址，进入到目录下，点击tour.html即可预览全景
![](https://wx4.sinaimg.cn/large/006bYVyvly1fxxgqim1lvj30na0h042s.jpg)
预览如下：发现它的水印是不是多的恐怖2333333，需要购买才能去除。或者......
![](https://ws2.sinaimg.cn/large/006bYVyvly1fxxgstd1gyj30ye0jhb29.jpg)

## 最后

其实可以退一步，就用一些全景平台就行了，比如720yun。这篇文章仅是为了探究下全景实现，到此为止了大致了解了，完。