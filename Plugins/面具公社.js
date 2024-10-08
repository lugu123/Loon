#!name=面具公社
#!desc=视频解锁
#!author=LiKai
#!openUrl = https://github.com/lugu123/Loon/tree/670be1f13a38f5ebf634a50658b121d1d04a8279/Plugins
#!tag = 功能增强
#!homepage = https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/MJGS.sgmodule
#!date = 2024-09-24 17:00:00
#!icon=https://raw.githubusercontent.com/deezertidal/private/main/icons/ssa.png
#加上抓包的视频地址如https://gnjk.phvyy.com/api/index.m3u8？

[Rewrite]
#游戏
^https:\/\/(mfjk|gnjk|buyaoda).+\.com\/request_game\/v3\/game\/list - reject-dict

[Script]
#广告
http-response https:\/\/(mfjk|gnjk|buyaoda).+\.com\/(playerinfo|api\/home\/popup|api\/get_advert) script-path=MJGS_ad.js, requires-body=true, timeout=60, tag=mjgsad

#视频
http-request https?:\/\/(mfjk|gnjk|buyaoda).+\.com\/api\/(comic|video|short_movie_info|novel|gallery|vip|index) script-path=MJGS_hd.js, timeout=60, tag=mjgshd

[MITM]
hostname = gnjk.*.com, mfjk.*.com, buyaoda.*.com