#!name=微博&微博国际版净化[墨鱼版]
#!desc=过滤微博广告及去除各部分推广模块
#!author=ddgksf2013
#!openUrl = https://t.me/ddgksf2021
#!tag = 功能增强
#!homepage = https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/Weibo.conf
#!date = 2024-09-21
#!icon=https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Weibo.png

[Rewrite]
# > 微博_AD_Preload@ddgksf2013
^https?:\/\/api\.weibo\.cn\/\d\/ad\/preload - reject-dict
# > 微博国际版_趋势页热门影片@ddgksf2013
^https?:\/\/api\.weibo\.cn\/\d\/cardlist\?v_f=.*Weibo_intl - reject-dict
# > 微博_用户推荐弹窗@ddgksf2013
^https?:\/\/api\.weibo\.cn\/\d\/profile\/recommend_popuser - reject-dict
# > 微博_每日一次的开屏广告请求@ddgksf2013
^https?:\/\/boot.*weibo\.com\/v\d\/ad\/realtime - reject-200
# > 微博_去除底部超话栏表层浮icon及tips@ddgksf2013
^https?:\/\/api\.weibo\.cn\/\d\/!\/huati\/discovery_home_bottom_getdotinfo - reject-dict
# > 微博_屏蔽首页左上角每日的弹窗tips@ddgksf2013
^https?:\/\/m?api\.weibo\.c(n|om)\/\d/push/daily - reject-dict
# > 微博_应用内弹窗广告@ddgksf2013
^https?:\/\/(preload-click|preload-impression)\.uve\.weibo\.com\/(interface\/wbpullad\/wbpullad_click\.php|wbapplua\/get_wbpullad_log\.lua) - reject
# > 微博_屏蔽sdkconfig请求@ddgksf2013
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkconfig\.php - reject
# > 微博_Spotlight@ddgksf2013
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/hot\/hours_spotlight - reject-dict
# > 微博国际版_屏蔽hotsearch@ddgksf2013
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php\?a=hot_search_users - reject-dict
# > 微博国际版_屏蔽热推荐@ddgksf2013
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/ad\/weibointl\? - reject-dict

[Script]
# > 微博_首页顶部homeExtend@ddgksf2013
http-response ^https?:\/\/api\.weibo\.cn\/\d\/groups\/allgroups\/v\d script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_帖子下方广告banner@ddgksf2013
http-response ^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=open_app script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_开屏广告预加载处理@ddgksf2013
http-response ^https?:\/\/boot.*weibo\.com\/v\d\/ad\/preload script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_未登陆状态下首页信息流处理@ddgksf2013
http-response ^https?:\/\/api\.weibo\.cn\/\d\/\w{5}\/(statuses_unread_hot_timeline|timeline) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_视频信息处理@ddgksf2013
http-response ^https?:\/\/api\.weibo\.cn\/\d\/video\/tiny_stream_mid_detail script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_屏蔽发现页面搜索框热词@ddgksf2013
http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/\w{5}\/cardlist script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_自定义tab皮肤@zmqcherish
http-response ^https://api.weibo.cn/2/!/client/light_skin script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_非会员设置tab皮肤@zmqcherish
http-response ^https://new.vip.weibo.cn/littleskin/preview script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博_去广告以及去除各部分推广模块@zmqcherish,@ddgksf2013
http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(searchall|page\?|messageflow) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(unread_)?friends(/|_)timeline script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/groups/timeline script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(container_timeline|unread_hot_timeline|extend|video_mixtimeline|unread_topic_timeline) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/profile/(me|container_timeline) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/video/(community_tab|remind_info|tiny_stream_video_list) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/search/(finder|container_timeline|container_discover) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

http-response ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/cardlist script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_屏蔽searching_info@shiro
http-response ^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*a=get_searching_info script-path=weibo_search_info.json, requires-body=true, timeout=60, tag=weibo_search_info

# > 微博国际版_屏蔽search_topic@shiro
http-response ^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=search_topic script-path=weibo_search_topic.json, requires-body=true, timeout=60, tag=weibo_search_topic

# > 微博国际版_屏蔽开屏广告@ddgksf2013 
http-response ^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*get_coopen_ads script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_屏蔽sdkad@ddgksf2013
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_趋势顶部Card去广告@ddgksf2013
http-response ^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*a=trends script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_屏蔽用户VIP栏@ddgksf2013
http-response ^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=user_center script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

# > 微博国际版_热搜处理@ddgksf2013
http-response ^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=search_topic script-path=weibo_json.js, requires-body=true, timeout=60, tag=weibo_json

[MITM]
hostname = api.weibo.*, *.api.weibo.*, mapi.weibo.*, *.uve.weibo.com, new.vip.weibo.cn, boot.biz.weibo.com

