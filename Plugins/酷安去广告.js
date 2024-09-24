#!name = 酷安去广告
#!desc = 过滤酷安广告
#!openUrl = https://apps.apple.com/app/id1422581869
#!author = RuCu6[https://github.com/RuCu6]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/CoolApk.png
#!date = 2023-11-15 17:20:55

[Rewrite]
^https:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch reject-dict

[Script]
http-response ^https:\/\/api\.coolapk\.com\/v6\/feed\/(detail|replyList)\? script-path = CoolApk_remove_ads.js, requires-body = true, tag = 移除酷安广告
http-response ^https:\/\/api\.coolapk\.com\/v6\/main\/(dataList|indexV8|init) script-path = CoolApk_remove_ads.js, requires-body = true, tag = 移除酷安广告
http-response ^https:\/\/api\.coolapk\.com\/v6\/page\/dataList\? script-path = CoolApk_remove_ads.js, requires-body = true, tag = 移除酷安广告

[MitM]
hostname = api.coolapk.com