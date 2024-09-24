#!name = 网易云音乐去广告
#!desc = 过滤网易云音乐广告，并允许自定义界面。
#!openUrl = https://github.com/lugu123/Loon/tree/670be1f13a38f5ebf634a50658b121d1d04a8279/Plugins
#!author = Keywos[https://github.com/Keywos]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Plugin/NeteaseCloudMusic_remove_ads.plugin
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/NeteaseCloudMusic.png
#!date = 2024-09-03 13:23:53
#!select = 隐藏漫游标签, 是, 否
#!select = 隐藏动态标签, 是, 否
#!select = 隐藏推荐标签, 是, 否
#!select = 隐藏发现标签, 是, 否
#!select = 隐藏首页问候语, 是, 否
#!select = 隐藏首页排行榜, 是, 否
#!select = 隐藏首页每日推荐, 是, 否
#!select = 隐藏首页推荐歌单, 是, 否
#!select = 隐藏首页最近常听, 是, 否
#!select = 隐藏首页雷达歌单, 是, 否
#!select = 隐藏首页音乐合伙人, 是, 否
#!select = 隐藏首页推荐专属歌单, 是, 否
#!select = 隐藏首页你的专属歌单, 是, 否

[Rule]
DOMAIN, httpdns.music.163.com, REJECT
DOMAIN, httpdns.n.netease.com, REJECT
DOMAIN, iadmat.nosdn.127.net, REJECT
DOMAIN, iadmatapk.nosdn.127.net, REJECT
DOMAIN, iadmusicmat.music.126.net, REJECT
# DOMAIN, iadmusicmatvideo.music.126.net, REJECT
DOMAIN-SUFFIX, 163jiasu.com, REJECT

[Rewrite]
^https?:\/\/(ipv4|interface\d?)\.music\.163.com\/e?api\/ad reject-dict
# 今日运势 商城 Beat专区 音乐收藏家 | type:ACTIVITY | 低至5.2折
^https?:\/\/interface\d?\.music\.163\.com\/w?e?api\/(side-bar\/mini-program\/music-service\/account|delivery\/(batch-deliver|deliver)|moment\/tab\/info\/get|yunbei\/account\/entrance\/get) reject-dict
# 播放页歌名下方∶乐迷团｜关注｜播放页提示｜音乐应用红点｜播放提示?
^https?:\/\/interface\d?\.music\.163\.com\/eapi\/(resource\/comments?\/musiciansaid|community\/friends\/fans-group\/artist\/group\/get|user\/sub\/artist|music\/songshare\/text\/recommend\/get|mine\/applet\/redpoint|resniche\/position\/play\/new\/get) reject-dict
# 搜索页热搜卡片｜猜你喜欢｜我的应用下方提醒
^https?:\/\/interface\d?\.music\.163.com\/w?e?api\/(search\/(chart|default|rcmd\/keyword|specialkeyword)|resource-exposure\/|activity\/bonus\/playpage\/time\/query) reject-dict
^https?:\/\/interface\d?\.music\.163.com\/eapi\/(mlivestream\/entrance\/playpage|link\/(position\/show\/strategy|scene\/show)|ios\/version|v\d\/content\/exposure\/comment\/banner) reject-dict
^https?:\/\/(?:ipv4|interface\d?)\.music\.163\.com\/e?api\/(?:batch|v\d\/resource\/comment\/floor\/get|homepage\/block\/page|link\/page\/rcmd\/resource\/show|user\/follow\/users\/mixed\/get) header-del x-aeapi

[Script]
# mian | 热推、有话想说、分享一下、歌曲下的祝福等小提示去除 ｜ 评论区 乐迷、星评等级 关注 等 图标去除
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/(batch|v\d\/resource\/comment\/floor\/get) script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_mian

# tab
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/link\/home\/framework\/tab script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_tab

# 推荐 | home | 主页
#http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/(homepage\/block\/page|link\/page\/rcmd\/(resource\/show|block\/resource\/multi\/refresh)) script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_home

# 发现
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/link\/page\/discovery\/resource\/show script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_fx

# effect
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/song\/play\/more\/list\/v\d script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_effect

# 我的 MyPageBar ad
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/link\/position\/show\/resource script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_mybarad

# 显示未关注你
http-response ^https?:\/\/(ipv4|interface\d?)\.music\.163\.com\/e?api\/user\/follow\/users\/mixed\/get script-path = NeteaseCloudMusic_remove_ads.js, requires-body = true, binary-body-mode = true, timeout = 20, tag = ne_foll

[MitM]
hostname = interface.music.163.com, interface?.music.163.com, ipv4.music.163.com
