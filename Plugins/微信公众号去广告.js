#!name = 微信公众号去广告
#!desc = 过滤微信公众号广告
#!openUrl = https://apps.apple.com/app/id414478124
#!author = RuCu6[https://github.com/RuCu6]
#!tag = 功能增强
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Weixin.png
#!date = 2024-09-05 23:53:41

[Rule]
DOMAIN-SUFFIX, wxs.qq.com, REJECT

[Rewrite]
# 移除公众号中的推广内容 //mp.weixin.qq.com
# ^http:\/\/\w+\.wxs\.qq\.com\/\d+\/\d+\/(snscosdownload|snssvpdownload)\/(SH|SZ)\/reserved\/\w+ reject-dict
^https:\/\/mp\.weixin\.qq\.com\/mp\/(cps_product_info|getappmsgad|jsmonitor|masonryfeed|relatedarticle)\? reject-dict

# [Script]
# http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad script-path = https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/Weixin/Weixin_Official_Accounts_remove_ads.js, requires-body = true, tag = 微信公众号去广告

[MitM]
hostname = mp.weixin.qq.com