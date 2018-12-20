$(function()
{

    $('.bm-btn-share').click(function(e)
    {
        e.stopPropagation();
        if($('.share-list').hasClass('active'))
        {
            $('.share-list').removeClass('active');
        }else
        {
            $('.share-list').addClass('active');
        }
    });

    $('body').on('click', function()
    {
        if($('.share-list').hasClass('active'))
        {
            $('.share-list').removeClass('active');
        }
    });

   $('.share-list-item').click(function(e)
   {
       e.stopPropagation();
       var type = $(this).data('type');
       Share(type);
   });

});

function Share(pType)
{
    var pUrl = window.location.href; //当前的url地址
    var pTitle = ""; //待分享的标题
    var pImage = ""; //待分享的图片
    var pContent = ""; //待分享的内容

    if($('.bm-title h2').length)
    {
        pTitle = $('.bm-title h2').text();
    }

    if($('.bm-cont img').length)
    {
        pImage = window.location.host + '/' + $('.bm-cont img').attr("src");
    }

    shareys(pType, pUrl, pTitle, pImage, pContent);
}

//shareys是主要的分享的api接口
function shareys(type, url, title, img, content)
{
    switch(type)
    {
        case "sina":
            url = "http://service.weibo.com/share/share.php?title=" + encodeURIComponent(content + '「' + title + '」' + ' 点这里' + url) + '&pic=' + img;
            break;
        case "tqq":
            url = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&pic=' + img;
            break;
        case "qzone":
            url = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&site=&pics=' + encodeURIComponent(img) + '&desc=' + encodeURIComponent(content) + '&summary=' + encodeURIComponent(content);
            break;
        case "ren":
            url = 'http://widget.renren.com/dialog/share?resourceUrl=' + encodeURIComponent(url) + '&srcUrl=' + img + '&title=' + encodeURIComponent(title);
            +'&description=' + content;
            break;
        default:
            break;
    }
    window.open(url);
}