#!name = 高德地图去广告
#!desc = 过滤高德地图广告
#!openUrl = https://apps.apple.com/app/id461703208
#!author = RuCu6[https://github.com/RuCu6], kokoryh[https://github.com/kokoryh]
#!tag = 去广告
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Amap.png
#!date = 2024-09-12 11:16:15

[Rule]
# 移除广告下发请求
AND, ((URL-REGEX, ^http:\/\/amdc\.m\.taobao\.com\/amdc\/mobileDispatch), (USER-AGENT, AMapiPhone*)), REJECT

DOMAIN, amap-aos-info-nogw.amap.com, REJECT
DOMAIN, free-aos-cdn-image.amap.com, REJECT
DOMAIN-SUFFIX, v.smtcdns.com, REJECT

[Rewrite]
# 导航详情页 - 路线规划、地点详情页、搜索详情页、导航结束页
^https:\/\/m5\.amap\.com\/ws\/aos\/main\/page\/product\/list\? reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/search\/new_hotword\? reject-dict
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/card-service-(car-end|route-plan) reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/search_poi\/tips_adv\? reject-dict
^https:\/\/oss\.amap\.com\/ws\/banner\/lists\/\? reject-dict

# 首页 - 推广卡片、红点角标、右上角动图、搜索框热词、左下角天气、消息横幅
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/(main-page-assets|main-page-location|ridewalk-end-fc) reject-dict
^https:\/\/m5\.amap\.com\/ws\/(mapapi\/hint_text\/offline_data|message\/notice\/list|shield\/search\/new_hotword) reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/scene\/recommend\? reject-dict
^https:\/\/m5\.amap\.com\/ws\/valueadded\/weather\/v2\? reject-dict
^https:\/\/sns\.amap\.com\/ws\/msgbox\/pull_mp\? reject-dict

# 打车页 - 红点角标、弹窗、天气图标、推广卡片
^https:\/\/m5-zb\.amap\.com\/ws\/boss\/(order\/car\/king_toolbox_car_bubble|tips\/onscene_visual_optimization) reject-dict

[Script]
# 导航详情页 - 路线规划、地点详情页、搜索详情页、导航结束页
http-response ^https:\/\/m5\.amap\.com\/ws\/aos\/perception\/publicTravel\/beforeNavi\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/bus\/plan\/integrate\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/c3frontend\/af-(hotel|launch)\/page\/main\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/perception\/drive\/(routeInfo|routePlan) script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/search\/(common\/coupon\/info|poi\/detail) script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/search_bff\/hotword\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/search_business\/process\/marketingOperationStructured\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/search_poi\/(homepage|mps|search\/sp|sug|tips_operation_location) script-path = Amap_remove_ads.js, requires-body = true, tag = 移除导航详情页推广

# 首页 - 推广卡片、红点角标、右上角动图、搜索框热词、左下角天气、消息横幅
http-response ^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/(card-service-plan-home|main-page) script-path = Amap_remove_ads.js, requires-body = true, tag = 移除首页推广
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/frogserver\/aocs\/updatable\/1\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除首页推广

# 我的页面 - 个人主页、推广卡片
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/dsp\/profile\/index\/nodefaasv3\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除我的页面推广

# 附近页
http-response ^https:\/\/m5\.amap\.com\/ws\/shield\/search\/nearbyrec_smart\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除附近页推广

# 开屏广告
http-response ^https:\/\/m5\.amap\.com\/ws\/valueadded\/alimama\/splash_screen\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除开屏广告

# 打车页 - 红点角标、弹窗、天气图标、推广卡片
http-response ^https:\/\/m5-zb\.amap\.com\/ws\/boss\/(car\/order\/content_info|order_web\/friendly_information) script-path = Amap_remove_ads.js, requires-body = true, tag = 移除打车页推广
http-response ^https:\/\/m5-zb\.amap\.com\/ws\/promotion-web\/resource(\/home)?\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除打车页推广
http-response ^https:\/\/m5-zb\.amap\.com\/ws\/sharedtrip\/taxi\/order_detail_car_tips\? script-path = Amap_remove_ads.js, requires-body = true, tag = 移除打车页推广

[MitM]
hostname = m5.amap.com, m5-zb.amap.com, oss.amap.com, sns.amap.com