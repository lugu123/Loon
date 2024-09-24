#!name = 12306去广告
#!desc = 过滤12306应用内广告及开屏广告
#!openUrl = https://apps.apple.com/app/id564818797
#!author = RuCu6[https://github.com/RuCu6]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/12306.png
#!date = 2024-02-20 17:20:29

[Rule]
# 放行规则
DOMAIN, ad.12306.cn, DIRECT

[Script]
# 移除12306开屏广告
http-request ^https:\/\/ad\.12306\.cn\/ad\/ser\/getAdList$ script-path = 12306_remove_splashscreen_ads.js, requires-body = true, tag = 移除12306开屏广告
# 移除12306应用内广告
http-response ^https:\/\/mobile\.12306\.cn\/otsmobile\/app\/mgs\/mgw\.htm$ script-path = 12306_remove_ads.js, tag = 移除12306应用内广告

[MitM]
hostname = ad.12306.cn, mobile.12306.cn