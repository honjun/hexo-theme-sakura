---
title: donate
date: 2018-12-20 23:13:05
keywords: 谢谢饲主了喵~
description: 
comments: false
photos: https://static.2heng.xin/wp-content/uploads//2017/08/%E5%8D%88%E5%BE%8C_58898122.jpg
---

如果喜欢我的博客，可以考虑资助一下哦~非常感激！
{% raw %}
<style>
  #root{
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 240px;
  }
  #root .root{
    margin-top: 100px;
    display: inline-block;
  }
  .list, .list li, .list-left li {
    list-style: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  .pos-f {
    /*position: fixed;*/
  }
  .left-100 {
    width: 100%;
    height: 100%;
  }
  .blur {
    -webkit-filter: blur(3px);
    filter: blur(3px);
  }
  .tr3 {
    transition: all .3s;
  }
  #DonateText {
    position: relative;
    font-size: 12px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    color: #fff;
    background: #ffd886 url(/images/donate/like.svg) no-repeat center 10px;
    background-size: 20px;
    border-radius: 35px;
    text-align: center;
    left: calc(50% - 120px);
    top: -80px;
    transform: rotatez(-15deg );
  }
  #donateBox {
    position: relative;
    left: calc(50% - 150px);
    top: calc(50% - 15px);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    width: 299px;
    height: 28px;
    float: left;
    z-index: 1;
  }
  #donateBox li {
    width: 74px;
    float: left;
    text-align: center;
    border-left: 1px solid #ddd;
    background: no-repeat center center;
    background-color: rgba(204, 217, 220,0.1);
    background-size: 45px;
    transition: all .3s;
    cursor: pointer;
    overflow: hidden;
    line-height: 600px;
    height: 28px;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    opacity: 0.5;
  }
  #donateBox li:hover {
    background-color: rgba(204, 217, 220,0.3);
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    opacity: 1;
  }
  #donateBox>li:first-child {
    border-width: 0;
  }
  #donateBox a {
    display: block;
  }
  #donateBox #PayPal {
    background-image: url(/images/donate/paypal.svg);
  }
  #donateBox>#BTC {
    background-image: url(/images/donate/bitcoin.svg);
    line-height: 28px;
  }
  #donateBox>#BTC:hover {
    overflow: visible;
  }
  #BTC>button {
    opacity: 0;
    cursor: pointer;
  }
  #donateBox #AliPay {
    background-image: url(/images/donate/alipay.svg);
  }
  #donateBox #WeChat {
    background-image: url(/images/donate/wechat.svg);
  }
  #QRBox {
    position: relative;
    top: -100px;
    left: 0;
    z-index: 1;
    background-color: rgba(255,255,255,0.3);
    display: none;
      perspective: 400px;
  }
  #MainBox {
    cursor: pointer;
    position: absolute;
    text-align: center;
    width: 200px;
    height: 200px;
    left: calc(50% - 100px);
    top: calc(50% - 100px);
    background: #fff no-repeat center center;
    background-size: 190px;
    border-radius: 6px;
    box-shadow: 0px 2px 7px rgba(0,0,0,0.3);
      opacity: 0;
    transition: all 1s ease-in-out;
    transform-style: preserve-3d;
      transform-origin: center center;
      overflow: hidden;
  }
  #btc-key {
    opacity: 0;
    width: 2px;
    height: 8px;
    overflow: hidden;
    left: -2px;
    top: -8px;
  }
  #github {
    position: relative;
    display: inline-block;
    z-index: 1;
    width: 24px;
    height: 24px;
    top: -12px;
    background: no-repeat center center url(/images/donate/github.svg);
    background-size: contain;
    opacity: 0.3;
    transform: rotatez(15deg );
  }
  [data-footnote] {
    position: relative;
    overflow: hidden;
  }
  [data-footnote]:hover {
    overflow: visible;
  }
  [data-footnote]::before, [data-footnote]::after {
    position: absolute;
    transition: all .3s;
    transform: translate3d(-50%,0,0);
    opacity: 0;
    left: 37px;
    z-index: 10;
  }
  [data-footnote]::before {
    content: attr(data-footnote);
    border-radius: 6px;
    background-color: rgba(100,100,100,0.8);
    color: #fff;
    height: 24px;
    line-height: 24px;
    padding: 0 6px;
    font-size: 12px;
    white-space: nowrap;
    top: -24px;
    left: 37px;
  }
  [data-footnote]::after {
    content: '';
    border: 5px solid #333;
    border-color: rgba(100,100,100,0.8) transparent transparent transparent;
    top: 0;
    left: 37px;
  }
  [data-footnote]:hover::before,[data-footnote]:hover::after {
    opacity: 1;
  }
  [data-footnote]:hover::before,[data-footnote]:hover::after {
    transform: translate3d(-50%,-7px,0);
  }

  #MainBox.showQR {
    opacity: 1;
      animation-name:showQR;
      animation-duration:3s;
      animation-timing-function:ease-in-out;
      animation-iteration-count:1;
      animation-fill-mode:forwards;
      -webkit-animation:showQR 3s ease-in-out 0s 1 normal forwards;
  }
  @keyframes showQR {
    from {
      transform: rotateX(90deg);
    }
    8% {
      opacity: 1;
      transform: rotateX(-60deg);
    }
    18% {
      opacity: 1;
      transform: rotateX(40deg);
    }
    34% {
      opacity: 1;
      transform: rotateX(-28deg);
    }
    44% {
      opacity: 1;
      transform: rotateX(18deg);
    }
    58% {
      opacity: 1;
      transform: rotateX(-12deg);
    }
    72% {
      opacity: 1;
      transform: rotateX(9deg);
    }
    88% {
      opacity: 1;
      transform: rotateX(-5deg);
    }
    96% {
      opacity: 1;
      transform: rotateX(2deg);
    }
    to {
      opacity: 1;
    }
  }
  #MainBox.hideQR {
    opacity: 1;
      animation-name:hideQR;
      animation-duration:0.5s;
      animation-timing-function:ease-in-out;
      animation-iteration-count:1;
      animation-fill-mode:forwards;
      -webkit-animation:hideQR 0.5s ease-in-out 0s 1 normal forwards;
  }
  @keyframes hideQR {
    from {
    }
    20%,50% {
      transform: scale(1.08,1.08);
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: rotateZ(40deg) scale(0.6,0.6);
    }
  }
</style>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.0.3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
<script>
  jQuery(document).ready(function() {
  var QRBox = $('#QRBox');
  var MainBox = $('#MainBox');
  var BTCQR = '/images/donate/BTCQR.png'; // 二维码路径
  var AliPayQR  = '/images/donate/AliPayQR.png';
  var WeChanQR  = '/images/donate/WeChanSQ.png';

  function showQR(QR) {
    if (QR) {
      MainBox.css('background-image','url('+QR+')');
    }
    $('#DonateText,#donateBox,#github').addClass('blur');
    QRBox.fadeIn(300,function(argument) {
      MainBox.addClass('showQR');
    });
  }

  $('#donateBox>li').click(function(event) {
    var thisID  = $(this).attr('id');
    if (thisID === 'BTC') {
      new ClipboardJS('#BTCBn');
      new ClipboardJS('.btnsss');
      showQR(BTCQR);
    } else if (thisID === 'AliPay') {
      showQR(AliPayQR);
    } else if (thisID === 'WeChat') {
      showQR(WeChanQR);
    }
  });

  MainBox.click(function(event) {
    MainBox.removeClass('showQR').addClass('hideQR');
    setTimeout (function(a) {
      QRBox.fadeOut(300,function(argument) {
        MainBox.removeClass('hideQR');
      });
      $('#DonateText,#donateBox,#github').removeClass('blur');
    },600);

  });
});
</script>
<div id="root">
  <div class="root">
    <a href="https://github.com/Kaiyuan/donate-page" target="_blank" class="pos-f tr3" title="Github"><span id="github"></span></a>
    <ul id="donateBox" class="list pos-f tr3">
      <li id="PayPal"><a href="https://www.paypal.me/KaiyuanXie" target="_blank">PayPal</a></li>
      <li id="BTC" data-footnote="Copy addres and show QRCod"><button id="BTCBn"  data-clipboard-target="#btc-key" alt="Copy to clipboard">Bitcoin</button></li>
      <li id="AliPay">AliPay</li>
      <li id="WeChat">WeChat</li>
    </ul>
    <div id="DonateText" class="tr3">Donate</div>
    <div id="QRBox" class="pos-f left-100">
      <div id="MainBox"></div>
    </div>
    <!-- Bitcoin 账号 -->
    <input id="btc-key" type="text" value="14JkMR68n4PBASB3TgvpjtaPTbfffSwFbW" readonly="readonly">
  </div>
</div>

{% endraw %}
