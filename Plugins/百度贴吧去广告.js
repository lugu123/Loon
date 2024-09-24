#!name = 百度贴吧去广告
#!desc = 移除开屏广告、信息流广告和帖内广告，精简侧拉抽屉及我的页面。需注意此插件会导致新回复等通知功能不可用，需手动进入消息页点击查看。仅限iOS 15及以上版本系统使用。
#!openUrl = https://apps.apple.com/app/id477927812
#!author = ZenmoFeiShi[https://github.com/ZenmoFeiShi], 可莉🅥[https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md], app2smile[https://github.com/app2smile]
#!tag = 去广告
#!system = 
#!system_version = 15
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Tieba.png
#!date = 2024-08-17 19:49:33

[Rule]
DOMAIN, afd.baidu.com, REJECT
DOMAIN, mobads.baidu.com, REJECT
DOMAIN, 180.76.76.200, REJECT
IP-CIDR, 180.76.76.200/32, REJECT, no-resolve

[Rewrite]
^https:\/\/tiebac\.baidu\.com\/c\/f\/search\/discover reject-dict
^https:\/\/tiebac\.baidu\.com\/c\/f\/forum\/forumGuide reject-dict

[Script]
http-response ^https:\/\/tiebac\.baidu\.com\/livefeed\/feed script-path = Tieba_remove_ads.js, requires-body = true, tag = 清理首页
http-response ^https:\/\/tiebac\.baidu\.com\/c\/f\/sidebar\/home script-path = Tieba_remove_ads.js, requires-body = true, tag = 清理侧拉抽屉
http-response ^https:\/\/tiebac\.baidu\.com\/c\/u\/user\/profile script-path = Tieba_remove_ads.js, requires-body = true, tag = 清理我的页面
http-response ^https:\/\/tieba\.baidu\.com\/c\/f\/frs\/frsBottom script-path = Tieba_remove_ads.js, requires-body = true, tag = 清理首页

http-response ^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/(c\/f\/(frs\/(page|threadlist|generalTabList)|pb\/page|excellent\/personalized)$|tiebaads\/commonbatch|c\/s\/sync$) script-path = tieba-json.js, requires-body = true, timeout = 10, tag = JSON处理

http-response ^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/c\/f\/(frs\/(page|threadlist|generalTabList)|pb\/page|excellent\/personalized)\?cmd script-path = tieba-proto.js, requires-body = true, binary-body-mode = true, timeout = 10, tag = Proto处理

[MitM]
hostname = tiebac.baidu.com, tieba.baidu.com