# JSimple

[![Build Status](https://travis-ci.org/tangkunyin/hexo-theme-jsimple.svg?branch=master)](https://travis-ci.org/tangkunyin/hexo-theme-jsimple)


**适用于Hexo的三栏简书式主题。支持响应式、站内搜索、多说评论、文章浏览统计以及白天和夜间模式**.

- [**☞ 一睹为快**](https://shuoit.net) | [**For English Document click here**](https://github.com/tangkunyin/hexo-theme-jsimple/blob/master/README.md)

![JSimple-iPhone-Landscape-Night-Demo](/source/images/JSimple-iPhone-Landscape-Night-Demo.jpg)


<!--more-->

## 安装步骤

 1. 从 GitHub 下载代码

 ```shell
 $ git clone https://github.com/tangkunyin/hexo-theme-jsimple themes/jsimple
 ```
 2. 去主题中开启

 在`_config.yml`中更改 `theme` 字段为 `jsimple`.

 3. 更新主题

 ```shell
 $ cd themes/jsimple
 $ git pull
 ```


## 配置

便于快速上手, 直接看我的 [网站备份](https://github.com/shuoit/blog) 可能更方便。好多朋友下载主题使用报错，戳那里最直接。

### 重要的配置说明

#### 1. fullHttps: 一个布尔值( `true` or `false`)

全站强制性`https`访问，意味着网页中**Content-Security-Policy为upgrade-insecure-requests**。好处是当你忘记引用正确的https资源时它会帮你自动转成https。

但是如果你在本地调试，或者你的线上服务器不支持`https`，请把该项设置成`false`，否则主题中的css和js等资源将无法被正确引用。你打开的首页将因为加载不到css变得异常难看。


#### 2. menu: Map值

在你启动本地服务或正式服务时，请记得配置`分类别名`。此处有三个地方要配置：文章模板、 主题配置文件、站点配置文件。站点的对应的`scaffolds`文件夹下的`post.md`模板，需要手动加入`categories`和`tags`，并设置值。这样能确保你某篇文章属于哪个分类。站点配置文件`_config.yml`中的`category_map` 和 `tag_map`都需要手动配置，并且分类别名要和主题中的menu一一对应，主题中的配置顺序决定网站导航菜单顺序。


```
menu:
    category1: 分类1
    category2: 分类2
    category3: 分类3
```
	
   			
#### 3. 评论和统计在站点配置文件中，请按照下边的变量手动添加进去。

```

## 评论仅支持Disqus，统计仅支持CNZZ，需要其他组件请自行替换
disqus_shortname: your shortname
## CNZZ count
cnzz_siteid: your siteid

```
 		
 			
### Other config   			

1. 封面图和封面信息的设置

        有两种封面，分别是白天和夜间模式。对应的你只需要将主题文件夹下的相关图片换成你喜欢的就可以了，封面信息对应主题改成你的信息即可。

2. 首页文档展示顺序和展示数目

		homeArticleShown: 10
		homePageSortType: -1

	type: -1: 最新的在前，1: 最旧的在前


3. 网站建立时间，来纪念网站活了多久

		siteBuildingTime: 12/12/2014

4. 独立页面链接，请自行生成，如不合适请自行修改

		```
		# Example
		hexo n page about
		```

5. 社交信息

		sinaWb: 你的新浪微博地址
		facebook: 你的脸书地址
		github: 你的`GitHub`地址


6. 其他信息对应词义直接替换成你的信息就好了。


## 浏览器支持

![](https://raw.githubusercontent.com/iTimeTraveler/hexo-theme-hipaper/master/source/preview/browser-support.png?raw=true)


## 贡献

啥都不说了，喜欢就点赞。欢迎`PR`。已知代码高亮不是太完美，强迫症可以试试下边的主题...

> 特别感谢 `iTimeTraveler` 和 `jiangmuzi`, 他们提供了原型 [Hipaper](https://github.com/iTimeTraveler/hexo-theme-hipaper)、 [JianShu](https://github.com/jiangmuzi/jianshu).


## 乌谢

[Hexo](https://hexo.io)
[Font Awesome](http://fontawesome.io)

## License

JSimple is under the MIT license. See the [LICENSE](https://github.com/tangkunyin/hexo-theme-jsimple/blob/master/LICENSE) file for details.


