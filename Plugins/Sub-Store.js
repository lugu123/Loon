#!name = Sub-Store
#!desc = 高级订阅管理工具，使用前请在本插件的详情页面为[PROXY]项分配代理策略。
#!openUrl = https://sub.store
#!author = Peng-YM[https://github.com/Peng-YM]
#!tag = 订阅管理
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/Other_icon/120px/Sub-Store.png
#!select = 节点缓存有效期, 1分钟, 5分钟, 10分钟, 30分钟, 1小时, 2小时, 3小时, 6小时, 12小时, 24小时, 48小时, 72小时
#!date = 2024-02-23 20:09:25

[Rule]
DOMAIN, sub-store.vercel.app, PROXY
DOMAIN, ip-api.com, PROXY

[Script]
http-request ^https?:\/\/sub\.store\/((download)|api\/(preview|sync|(utils\/node-info))) script-path = sub-store-1.min.js, requires-body = true, timeout = 120, tag = Sub-Store Core

http-request ^https?:\/\/sub\.store script-path = sub-store-0.min.js, requires-body = true, timeout = 120, tag = Sub-Store Simple

cron "0 0 1 ? * ?" script-path = cron-sync-artifacts.min.js, tag = Sub-Store Sync

[MitM]
hostname = sub.store