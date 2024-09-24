#!name=Safari超级搜索
#!desc=注：请先进入设置更改 Safari 默认搜索为 DuckDuckGO，Safari内输入以下格式命令快速指定搜索引擎【命令+空格+关键词】或者【关键词+空格+命令】
#!icon=https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Safari.png
#!openUrl = https://github.com/ddgksf2013/Rewrite/raw/master/Html/Q-Search.conf
#!tag = 功能增强
#!date = 2024-01-31 
# - 墨鱼自用全能搜索V2.0(135)

[Rewrite]
# yd  xxx (有道词典)
^https:\/\/duckduckgo.com\/\?q=yd\+([^&]+).+ http://dict.youdao.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yd.+ http://dict.youdao.com/search?q=$1 302
# trc xxx (Google 译至中)
^https:\/\/duckduckgo.com\/\?q=trc\+([^&]+).+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+trc.+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1 302
# tre xxx (Google 译至英)
^https:\/\/duckduckgo.com\/\?q=tre\+([^&]+).+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tre.+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1 302
# trj xxx (Google 译至日)
^https:\/\/duckduckgo.com\/\?q=trj\+([^&]+).+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+trj.+ https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1 302
# tt    xxx (头条)
^https:\/\/duckduckgo.com\/\?q=tt\+([^&]+).+ https://so.toutiao.com/search?keyword=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tt.+ https://so.toutiao.com/search?keyword=$1 302
# db    xxx (豆瓣)
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ https://m.douban.com/search?query=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+db.+ https://m.douban.com/search?query=$1 302
# zh    xxx (知乎)
^https:\/\/duckduckgo.com\/\?q=zh\+([^&]+).+ http://www.zhihu.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+zh.+ http://www.zhihu.com/search?q=$1 302
# wb    xxx (微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ https://s.weibo.com/weibo/$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wb.+ https://s.weibo.com/weibo/$1 302
# wx    xxx (微信)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ https://weixin.sogou.com/weixinwap?query=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wx.+ https://weixin.sogou.com/weixinwap?query=$1 302
# up xxx (Unsplash)
^https:\/\/duckduckgo.com\/\?q=up\+([^&]+).+ https://unsplash.com/s/photos/$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+up.+ https://unsplash.com/s/photos/$1 302
# sspai xxx (少数派站内搜索)
^https:\/\/duckduckgo.com\/\?q=sspai\+([^&]+).+ https://sspai.com/search/post/$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+sspai.+ https://sspai.com/search/post/$1 302
# ssp   xxx (Google 搜索少数派)
^https:\/\/duckduckgo.com\/\?q=ssp\+([^&]+).+ https://www.google.com/search?as_q=$1&as_sitesearch=sspai.com 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ssp.+ https://www.google.com/search?as_q=$1&as_sitesearch=sspai.com 302
# tw    xxx (Twitter)
^https:\/\/duckduckgo.com\/\?q=tw\+([^&]+).+ https://twitter.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tw.+ https://twitter.com/search?q=$1 302
# gh    xxx (GitHub)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ https://github.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gh.+ https://github.com/search?q=$1 302
# gu    xxx (GitHub User)
^https:\/\/duckduckgo.com\/\?q=gu\+([^&]+).+ https://github.com/search?q=$1&type=users 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gu.+ https://github.com/search?q=$1&type=users 302
# gc    xxx (GitHub Code)
^https:\/\/duckduckgo.com\/\?q=gc\+([^&]+).+ https://github.com/search?o=desc&q=$1&s=indexed&type=Code 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gc.+ https://github.com/search?o=desc&q=$1&s=indexed&type=Code 302
# so    xxx (Stack Overflow)
^https:\/\/duckduckgo.com\/\?q=so\+([^&]+).+ https://stackoverflow.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+so.+ https://stackoverflow.com/search?q=$1 302
# se    xxx (StackExchange)
^https:\/\/duckduckgo.com\/\?q=se\+([^&]+).+ https://stackexchange.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+se.+ https://stackexchange.com/search?q=$1 302
# wa    xxx (WolframAlpha)
^https:\/\/duckduckgo.com\/\?q=wa\+([^&]+).+ https://www.wolframalpha.com/input/?i=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wa.+ https://www.wolframalpha.com/input/?i=$1 302
# rd    xxx (Reddit)
^https:\/\/duckduckgo.com\/\?q=rd\+([^&]+).+ https://www.reddit.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+rd.+ https://www.reddit.com/search?q=$1 302
# zdm xxx (什么值得买)
^https:\/\/duckduckgo.com\/\?q=zdm\+([^&]+).+ https://search.m.smzdm.com/?v=b&s=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+zdm.+ https://search.m.smzdm.com/?v=b&s=$1 302
# jd  xxx (京东)
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ openapp.jdmobile://virtual?params={"des":"productList","keyWord":"$1","from":"search","category":"jump"} 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+jd.+ openapp.jdmobile://virtual?params={"des":"productList","keyWord":"$1","from":"search","category":"jump"} 302
# tb  xxx (淘宝)
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ taobao://s.taobao.com?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tb.+ taobao://s.taobao.com?q=$1 302
# yt  xxx (YouTube)
^https:\/\/duckduckgo.com\/\?q=yt\+([^&]+).+ https://www.youtube.com/results?search_query=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yt.+ https://www.youtube.com/results?search_query=$1 302
# bli xxx (哔哩哔哩)
^https:\/\/duckduckgo.com\/\?q=bli\+([^&]+).+ https://m.bilibili.com/search?keyword=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+bli.+ https://m.bilibili.com/search?keyword=$1 302
# gd  xxx (Google 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=gd\+([^&]+).+ https://www.google.com/search?q=%22Google+Drive%22+$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gd.+ https://www.google.com/search?q=%22Google+Drive%22+$1 302
# tgd xxx (t.me/gdurl 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=tgd\+([^&]+).+ https://t.me/s/gdurl?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tgd.+ https://t.me/s/gdurl?q=$1 302
# ph  xxx (PornHub)
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ https://cn.pornhub.com/video/search?search=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ph.+ https://cn.pornhub.com/video/search?search=$1 302
# af  xxx (Acfun)
^https:\/\/duckduckgo.com\/\?q=af\+([^&]+).+ https://www.acfun.cn/search?keyword=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+af.+ https://www.acfun.cn/search?keyword=$1 302
# ys  xxx (搜片)
^https:\/\/duckduckgo.com\/\?q=ys\+([^&]+).+ https://soupian.icu/search?key=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ys.+ https://soupian.icu/search?key=$1 302
# cn  (切换至中国区)
^https:\/\/duckduckgo.com\/\?q=cn&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc= 302
# hk  (切换至香港区)
^https:\/\/duckduckgo.com\/\?q=hk&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143463&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=hk&urlDesc= 302
# tw  (切换至台湾区)
^https:\/\/duckduckgo.com\/\?q=tw&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143470&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tw&urlDesc= 302
# us  (切换至美国区)
^https:\/\/duckduckgo.com\/\?q=us&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc= 302
# jp  (切换至日本区)
^https:\/\/duckduckgo.com\/\?q=jp&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143462&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=jp&urlDesc= 302
# kr  (切换至韩国区)
^https:\/\/duckduckgo.com\/\?q=kr&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143466&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=kr&urlDesc= 302
# tr  (切换至土耳其区)
^https:\/\/duckduckgo.com\/\?q=tr&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143480&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tr&urlDesc= 302
# sg  (切换至新加坡区)
^https:\/\/duckduckgo.com\/\?q=sg&.+ https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143464&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tr&urlDesc= 302
# bd  xxx (百度搜索)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ https://www.baidu.com/s?wd=$1 302
^https:\/\/duckduckgo.com\/\?q=((.(?!bd))+)\+bd.+ https://www.baidu.com/s?wd=$1 302
# wk  xxx (维基搜索)
^https:\/\/duckduckgo.com\/\?q=wk\+([^&]+).+ https://zh.wikipedia.org/wiki/$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wk.+ https://zh.wikipedia.org/wiki/$1 302
# wz  xxx (无追搜索)
^https:\/\/duckduckgo.com\/\?q=wz\+([^&]+).+ https://www.wuzhuiso.com/s?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wz.+ https://www.wuzhuiso.com/s?q=$1 302
# yh  xxx (油猴搜索)
^https:\/\/duckduckgo.com\/\?q=yh\+([^&]+).+ https://greasyfork.org/zh-CN/scripts?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yh.+ https://greasyfork.org/zh-CN/scripts?q=$1 302
# gi  xxx (Google 图片)
^https:\/\/duckduckgo.com\/\?q=gi\+([^&]+).+ https://www.google.com/search?&tbm=isch&q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gi.+ https://www.google.com/search?&tbm=isch&q=$1 302
# by  xxx (必应)
^https:\/\/duckduckgo.com\/\?q=by\+([^&]+).+ https://www.bing.com/search?q=$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+by.+ https://www.bing.com/search?q=$1 302
# ios  xxx (苹果应用搜索)
^https:\/\/duckduckgo.com\/\?q=ios\+([^&]+).+ https://www.qimai.cn/search/index/search/$1 302
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ios.+ https://www.qimai.cn/search/index/search/$1 302
#     xxx （无指令默认为 Google）
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ https://www.google.com/search?q=$1 302

[MITM]
hostname = duckduckgo.com