// build time:Fri Mar 24 2017 11:04:02 GMT+0800 (中国标准时间)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this),i=e.attr("title"),t=e.parent("a");t.size()<1&&(t=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),t.addClass("fancybox fancybox.image"),t.attr("rel","group"),i&&(t.append('<p class="image-caption">'+i+"</p>"),t.attr("title",i))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var i=27===e.which&&$(".search-popup").is(":visible");i&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var e=50,i=$(".back-to-top");$(window).on("scroll",function(){i.toggleClass("back-to-top-on",window.pageYOffset>e);var t=$(window).scrollTop(),o=$(document).height(),n=$(window).height(),s=t/(o-n),r=Math.round(100*s);$("#scrollpercent>span").html(r)}),i.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){function e(e){return{width:e.width(),height:e.height()}}function i(e,i){return i/e*100}var t=$("iframe"),o=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],n=new RegExp(o.join("|"));t.each(function(){var t,o=this,s=$(this),r=e(s);if(this.src.search(n)>0){var a=i(r.width,r.height);s.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids",c.style.position="relative",c.style.marginBottom="20px",c.style.width="100%",c.style.paddingTop=a+"%";var d=o.parentNode;if(d.insertBefore(c,o),c.appendChild(o),this.src.search("music.163.com")>0){t=e(s);var h=t.width>r.width||t.height<r.height;h&&(c.style.paddingTop=i(t.width,r.height)+"%")}}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator,i=e.userAgent,t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&!this.isPisces()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},needAffix:function(){return this.isPisces()}};
//rebuild by neat 