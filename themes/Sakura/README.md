# JSimple

[![Build Status](https://travis-ci.org/tangkunyin/hexo-theme-jsimple.svg?branch=master)](https://travis-ci.org/tangkunyin/hexo-theme-jsimple)


**JSimple is a responsive blog theme for Hexo which include day night model,insight search,article view count etc. Inspired by JianShu.com**.

- [**☞ Preview Demo**](https://shuoit.net) | [**For Chinese click here**](https://github.com/tangkunyin/hexo-theme-jsimple/blob/master/README.zhCN.md)

![JSimple-iPhone-Landscape-Night-Demo](/source/images/JSimple-iPhone-Landscape-Night-Demo.jpg)


<!--more-->

## Installation

 1. Get it from GitHub

 ```shell
 $ git clone https://github.com/tangkunyin/hexo-theme-jsimple themes/jsimple
 ```
 2. Enable

 Modify `theme` setting in `_config.yml` to `jsimple`.

 3. Update

 ```shell
 $ cd themes/jsimple
 $ git pull
 ```


## Configurations

For a quick start, see my [Site backup](https://github.com/shuoit/blog) may be more convenient.

### Important config

#### 1. fullHttps: Boolean value( `true` or `false`)

Mandatory total https access. Full https model which means **Content-Security-Policy is upgrade-insecure-requests** in html meat tag. Please set `fullHttps` false when you test on localhost or your online server not support https.Otherwise the css and js in theme reference will be error and the home page will be open error.

#### 2. menu: Map value

Name order decide show index.The name also called category alias,so you must set category alias before start server. Also the `categories` and `tags` in your scaffolds post.md file must be set before start server.BTW, `category_map` and `tag_map` field in site `_config.yml` file must one to one correspondence with menus above.

```
menu:
   category1: category alias1
   category2: category alias2
   category3: category alias3
``` 			

#### 3. comment and  analytics config in your site _config.yml, please add them manually.

 ```
 ## comment support disqus only and analytics support cnzz only
 # comment ShortName, you can choose only ONE to display.
 disqus_shortname: your shortname
 # CNZZ count
 cnzz_siteid: your siteid
 ```
   			
### Other config   			

1. cover images config

        There are two kinds of cover image. replace day and night in your theme images dir.

2. Home page sort type and article shown number

		homeArticleShown: 10
		homePageSortType: -1

	type: -1: newer first，1: older first.


3. your site build time or founded date

		siteBuildingTime: 12/12/2014

4. Independent page of uri please generate yourself

		```
		# Example
		hexo n page about
		```

5. Social info config

		sinaWb: https://weibo.com/tangkunyin
		facebook: https://fackbook.com/tangkunyin
		github: https://github.com/tangkunyin


6. Other settings please replace with your own directly.


## Browser support

![](https://raw.githubusercontent.com/iTimeTraveler/hexo-theme-hipaper/master/source/preview/browser-support.png?raw=true)


## Contributing

All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

> Special thanks to iTimeTraveler and jiangmuzi, who designed the theme [Hipaper](https://github.com/iTimeTraveler/hexo-theme-hipaper) and [JianShu](https://github.com/jiangmuzi/jianshu).


## License

JSimple is under the MIT license. See the [LICENSE](https://github.com/tangkunyin/hexo-theme-jsimple/blob/master/LICENSE) file for details.

## Thanks

[Hexo](https://hexo.io)
[Font Awesome](http://fontawesome.io)


