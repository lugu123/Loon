#!name = 阿里云盘去广告
#!desc = 移除首页广告横幅、弹窗和顶部奖励。
#!openUrl = https://apps.apple.com/app/id1494661473
#!author = RuCu6[https://github.com/RuCu6]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool//tree/master/Tool/Loon/Plugin
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/AliYunDrive.png
#!date = 2024-07-15 22:28:47

[Rule]
IP-CIDR, 203.107.1.1/24, REJECT, no-resolve

[Rewrite]
# 首页活动日历
^https:\/\/member\.alipan\.com\/v2\/activity\/sign_in_luckyBottle reject-dict
# 首页板块入口
^https:\/\/api\.alipan\.com\/adrive\/v1\/file\/getTopFolders reject-dict


[Script]
http-response ^https:\/\/(biz)?api\.alipan\.com\/apps\/v\d\/users?\/home\/(news|widgets) script-path = AliYunDrive_remove_ads.js, requires-body = true, tag = 移除阿里云盘广告
http-response ^https:\/\/member\.alipan\.com\/v1\/users\/onboard_list script-path = AliYunDrive_remove_ads.js, requires-body = true, tag = 移除阿里云盘广告

[MitM]
hostname = api.alipan.com, member.alipan.com, bizapi.alipan.com