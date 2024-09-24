#!name = 京东去广告
#!desc = 移除京东开屏广告，精简我的页面产品推广。
#!openUrl = https://apps.apple.com/app/id414245413
#!author = RuCu6[https://github.com/RuCu6]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/JD.png
#!date = 2024-04-21 15:41:21

[Rule]
DOMAIN, dns.jd.com, REJECT
URL-REGEX, ^http:\/\/\w{32}\.jddebug\.com\/diagnose\?, REJECT
IP-CIDR, 101.124.19.122/32, REJECT, no-resolve
IP-CIDR6, 2402:db40:5100:1011::5/128, REJECT, no-resolve

[Rewrite]
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(searchBoxWord|stationPullService|uniformRecommend[06]) reject-dict

[Script]
http-response ^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(deliverLayer|getTabHomeInfo|myOrderInfo|orderTrackBusiness|personinfoBusiness|start|welcomeHome) script-path = JD_remove_ads.js, requires-body = true, tag = 移除京东广告

[MitM]
hostname = api.m.jd.com