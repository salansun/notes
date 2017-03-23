// build time:Thu Mar 23 2017 09:15:38 GMT+0800 (中国标准时间)
$(document).ready(function(){var n=$(".header-inner"),e=$("#sidebar"),i=function(){return n.height()+CONFIG.sidebar.offset},t=function(n){return e.css({"margin-top":n})},r=window.matchMedia("(min-width: 991px)");t(i()).show(),r.addListener(function(n){n.matches&&t(i())})});
//rebuild by neat 