#!name = 拼多多去广告
#!desc = 移除开屏广告、底栏多多视频、会场入口、聊天页面精选推荐及推广、精简我的页面。
#!openUrl = https://apps.apple.com/app/id1044283059
#!author = ZenmoFeiShi[https://github.com/ZenmoFeiShi], 可莉🅥[https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/PinDuoDuo.png
#!date = 2024-08-14 21:05:32

[Rule]
# 拦截HTTPDNS
AND, ((URL-REGEX, ^http:\/\/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/d), (USER-AGENT, *com.xunmeng.pinduoduo*)), REJECT

AND, ((URL-REGEX, ^http:\/\/\[s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*\]\/d), (USER-AGENT, *com.xunmeng.pinduoduo*)), REJECT

DOMAIN, titan.pinduoduo.com, REJECT
# DOMAIN, apm-a.pinduoduo.com, REJECT
DOMAIN, apm.pinduoduo.com, REJECT
DOMAIN, m.pinduoduo.net, REJECT
DOMAIN, ta-a.pinduoduo.com, REJECT
DOMAIN, ta.pinduoduo.com, REJECT
DOMAIN, th-a.pinduoduo.com, REJECT
DOMAIN, th-b.pinduoduo.com, REJECT
DOMAIN, th.pinduoduo.com, REJECT

[Rewrite]
# 开屏广告
^https:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash reject
^https:\/\/api\.pinduoduo\.com\/search_hotquery reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/zaire_biz\/chat\/resource\/get_list_data reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/caterham\/v3\/query\/new_chat_group reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/alexa\/goods\/back_up reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/caterham\/v3\/query\/personal reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/brand-olay\/goods_detail\/bybt_guide reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/engels\/reviews\/require\/append reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/caterham\/v3\/query\/my_order_group reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/caterham\/v3\/query\/likes reject-dict
^https:\/\/api\.pinduoduo\.com\/api\/caterham\/v3\/query\/order_express_group reject-dict

[Script]
http-response ^https:\/\/api\.pinduoduo\.com\/api\/philo\/personal\/hub script-path = PinDuoDuo_remove_ads.js, requires-body = true, tag = 拼多多去广告
http-response ^https:\/\/api\.pinduoduo\.com\/api\/alexa\/homepage\/hub script-path = PinDuoDuo_remove_ads.js, requires-body = true, tag = 精简首页
http-response ^https:\/\/api\.pinduoduo\.com\/api\/oak\/integration\/render script-path = PinDuoDuo_remove_ads.js, requires-body = true, tag = 拼多多去广告
http-response ^https:\/\/api\.pinduoduo\.com\/search script-path = PinDuoDuo_remove_ads.js, requires-body = true, tag = 移除搜索结果推广

[MitM]
hostname = api.pinduoduo.com, api.yangkeduo.com