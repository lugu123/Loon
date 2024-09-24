#!name=墨鱼去开屏2.0 
#!desc=去除APP首页启动广告和部分应用内广告，如果有需要的去除广告的APP，可自行在共享表格中添加需求
#!icon=https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/Loon.png
#!author=ddgksf2013
#!tag = 去广告
#!homepage = https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/StartUp.conf
#!date = 2024-09-15

[Rewrite]
# > Version
^https?:\/\/2024.09.23/c343/v2.0.529 - reject-200
# > 10
^https?:\/\/ftapi\.10jqka\.com\.cn\/futgwapi\/api\/om\/v\d\/ad\/common\/transfer - reject-200
# > 139mail
^https?:\/\/ad\.mcloud\.139\.com\/advertapi - reject-200
^https?:\/\/smsrebuild1\.mail\.10086\.cn\/together\/s - reject-200
# > 58
^https?:\/\/app\.58\.com\/api\/home\/(advertising|appadv) - reject-200
^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/.*?\/v\d\/(version$|notice\?|top_notice\?|advert\?position=[^2]+) - reject-200
# > 12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery - reject-200
# > 123pan
^https?:\/\/sdk\.1rtb\.net\/sdk\/req_ad - reject-200
# > 36kr
^https?:\/\/gateway\.36kr\.com\/api\/adx\/ad\/show - reject-200
# > 500
^https?:\/\/evs\.500\.com\/esinfo\/loading\/loading - reject-200
# > 78dongman
^https?:\/\/open\.78dm\.net\/v\d\/site\/ad\/ - reject-200
# > acfun
^https?:\/\/api-new\.app\.acfun\.cn\/rest\/app\/flash\/screen\/ - reject-200
# > aihuishou
^https?:\/\/gw.aihuishou.com\/app-portal\/home\/getadvertisement - reject-200
# > appso
^https?:\/\/sso.ifanr.com\/jiong\/IOS\/appso\/splash\/ - reject-200
# > alibaba
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv\/ - reject-200
# > aastocks
^https?:\/\/.*aastocks\.com\/ad\/ - reject-200
# > anhuizhangshang10000
^https?:\/\/www\.ahzs10000\.com\/palmhall\/client\/base\/newVerson_getStartUp\.action - reject-200
# > baidufanyi
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo - reject-200
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement - reject-200
# > baiduwenku
^https?:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad - reject-200
# > baiduwangpan
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list - reject-200
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/pcs\/ad - reject-200
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry - reject-200
# > beijingshouqi
^https?:\/\/gateway\.shouqiev\.com\/fsda\/app\/bootImage\.json - reject-200
# > bishengke
^https?:\/\/res\.pizzahut\.com\.cn\/CRM\/phad\/apphome\/apphome - reject-200
# > beikezhaofang
^https?:\/\/apps\.api\.ke\.com\/config\/config\/(bootpage|getactivityconfig) - reject-200
# > boluobaoqingxiaoshuo
^https:\/\/api\.sfacg\.com\/ioscfg - reject-200
# > bit
^https?:\/\/pan-api\.bitqiu\.com\/activity\/getPromoteGuide - reject-200
# > baidushurufa
^https?:\/\/mobads\.baidu\.com\/cpro\/ui\/mads.php - reject-200
# > baobaoshuyunyu
^http:\/\/.*babytree\.com/(plough\.do|go_search\/api\/mobile_search_new\/get_multi_search_default_keywords) - reject-200
^http:\/\/m\.meitun\.com\/newapi\/router\/topic\/hometptf\/feedRecommend - reject-200
# > baicizhan
^https?:\/\/notify\.baicizhan\.com\/rpc\/notify\/get_latest_notify - reject-200
^https?://advertise\.bczeducation\.cn\/rpc\/advertise - reject-200
# > baishitv
^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/free\/open\/advertisingV2 - reject-200
# > clicli
^https?:\/\/js-ad\.ayximgs\.com\.ad-universe-cdn\.hzhcbkj\.cn\/xgapp\.php\/v2\/top_notice - reject-200
# > chelaile
^https?:\/\/web\.chelaile\.net\.cn\/api\/adpub\/ad - reject-200
^https?:\/\/cdn\.\w{3}\.chelaileapp\.cn\/(api\/)?adpub - reject-200
^https?:\/\/api.chelaile.net.cn\/adpub\/ - reject-200
^https?:\/\/api.chelaile.net.cn\/goocity\/advert\/ - reject-200
^https?:\/\/atrace.chelaile.net.cn\/adpub\/ - reject-200
^https?:\/\/atrace.chelaile.net.cn\/exhibit\?&adv_image - reject-200
^https?:\/\/pic1.chelaile.net.cn\/adv\/ - reject-200
# > chaoxingxuexitong
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig - reject-200
# > caifu
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v\d - reject-200
# > caijingzazhi
^https?:\/\/api\.caijingmobile\.com\/(ad|advert)\/ - reject-200
# > ciweimaoyuedu
^https?:\/\/app\.hbooker\.com\/setting\/get_startpage_url_list - reject-200
# > cainiao
^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.(show|mshow)\.cn\/ - reject-200
# > csdn
^https?:\/\/app-gw\.csdn\.net\/silkroad-api\/api\/v\d\/assemble\/list\/pub\/channel\/app_open_screen_ad - reject-200
# > cailianshe
^https?:\/\/api3\.cls\.cn\/v1\/boot\/ad - reject-200
# > dangdang
^https?:\/\/api\.dangdang\.com\/mapi\d\/mobile\/init - reject-200
# > dashixiong
^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/.*?\/v\d\/(version|top_notice\?|advert\?position=[^2]+) - reject-200
# > douban
^https?:\/\/api\.douban\.com\/v2\/app_ads\/splash - reject-200
^https?:\/\/api\.douban\.com\/b.*\/common_ads\?.* - reject-200
# > didichuxing
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget - reject-200
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) - reject-200
# > daoyu
^https?:\/\/daoyu\.sdo\.com\/api\/userCommon\/getAppStartAd - reject-200
# > douyu
^https?:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo - reject-200
# > dewu
^https:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement\/ - reject-200
# > donghuafeng
^https?:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d\/anime_get_question\.php - reject-dict
# > dazhihui
^https?://ssp\.dzh\.com\.cn/v2api/adgroupjson - reject-200
# > dangdangyuedu
^https?:\/\/e.dangdang.com\/media\/api.+\?action=getDeviceStartPage - reject-200
^https?:\/\/mapi\.dangdang\.com\/index\.php\?action=init - reject-200
^https?:\/\/e\.dangdang\.com\/.+?getDeviceStartPage - reject-200
# > dianshijia
^https?:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/ad\/ - reject-200
^https?:\/\/cdn\.dianshihome\.com\/static\/ad\/ - reject-200
# > dingxiangmama
^https?:\/\/mama\.dxy\.com\/api\/cms\/client\/popup-window\/list - reject-200
# > dongfangcaifu
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v2 - reject-200
# > damai
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.damai\.wireless\.home\.welcome - reject-200
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.damai\.mec\.popup\.get - reject-200
# > dami
^https?:\/\/vip7\.fzwdyy\.cn:8083\/api\/(getAdvertInfo|getGOOGAdvert) - reject-200
# > dingxiangyuan
^https?:\/\/dq\.dxy\.cn\/api\.php\?action=getpostbanners - reject-200
# > dongfangcaifu
^https?:\/\/emdcadvise\.eastmoney\.com\/infoAdviseService$ - reject-200
# > dedao
^https?:\/\/entree-ws\.igetget\.com\/oms\/front\/start\/push - reject-200
# > dejian
^https?:\/\/dj\.palmestore\.com\/zybk\/api\/ad - reject-200
^https?:\/\/saad\.ms\.zhangyue\.net\/ad\/ - reject-200
# > didachuxing
^https?:\/\/capis.*didapinche\.com\/ad\/cx\/startup - reject-200
# > dongkakongjian*
^https?:\/\/ump\.sz\.creditcard\.ecitic\.com\/citiccard\/cm-ump\/ump-gateway\/ump-net-app\/ump-net-app\/adv - reject-200
# > elema
^https?:\/\/elemecdn.com\/.+\/sitemap - reject-200
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} - reject-200
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} - reject-200
^https?:\/\/fuss10.elemecdn.com\/.+.mp4 - reject-200
^https?:\/\/www1.elecfans.com\/www\/delivery\/ - reject-200
# > echongdian
^https?:\/\/cdn-evone-ceph\.echargenet\.com\/gw-emas-cdn\/63c4e3b558bb610008969f89 - reject-200
# > echongdian
^https?:\/\/cdn-evone-ceph\.echargenet\.com\/gw-emas-cdn - reject-200
# > fandengdushu
^https?:\/\/gateway-api\.dushu365\.com\/chief-orch\/config\/config\/v100\/appConfig - reject-200
# > feizhu
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.allresource - reject-200
# > feikechaguan
^https?:\/\/www\.flyert\.com\/api\/mobile\/index\.php\?module=advis - reject-200
^https?:\/\/www\.flyert\.com\/source\/plugin\/mobile\/mobile\.php\?module=advis - reject-200
# > fengyunxing
^https?:\/\/carapp\.gtmc\.com\.cn\/api\/appgtmc\/homePage\/HomePageAction\/queryHomePageImg\.json - reject-200
# > feimaoguanjia
^https?:\/\/app\.flymodem\.com\.cn\/Appapi\/Public\/welecome - reject-200
# > etnet
^http:\/\/gateway2\.etnet\.com\.hk\/etnetApp\/theme\/seasonal\/v30\/theme.json - reject-200
# > fenbi
^https?:\/\/.*fenbi\.com\/(activity\/app\/launcher|app\/iphone\/nxs\/popup) - reject-200
# > futuniuniu
^https?:\/\/api\.futunn\.com\/(v\d\/)?ad\/ - reject-200
# > gongshijilu
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg - reject-200
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ - reject-200
# > gaidepaihang
https://zone.guiderank-app.com/guiderank-web/app/ad/listLaunchADByCity.do - reject-200
# > guanyu
https://guanyu.longfor.com/app-server/api/v1/main/start - reject-200
# > guangqibentian
^https?:\/\/gha\.ghac\.cn\:8081\/base\/app\/api\/ad\/query\?adType - reject-200
# > guojiadili
^https?:\/\/dili\.bdatu\.com\/jiekou\/ad - reject-200
^https?:\/\/wap\.ngchina\.cn\/news\/adverts - reject-200
# > guojiayibaofuwupingtai
^https?:\/\/fuwu\.nhsa\.gov\.cn\/ebus\/fuwu\/api\/base\/cms\/iep\/web\/cms\/hmpgcfg\/queryAppHmpgCfgByApp - reject-200
# > haoxingtizhongcheng
^http:\/\/open\.fitdays\.cn\/uploads\/ad\/ - reject-200
# > huazhu
^https?:\/\/appapi\.huazhu\.com:\d{4}\/client\/app\/getAppStartPage\/ - reject-200
# > hupu
^https?:\/\/i\d\.hoopchina\.com\.cn/blogfile\//d+\//d+\/BbsImg\.(?<=(big.(png|jpg)))$ - reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/.+\/(search|interfaceAdMonitor|status|hupuBbsPm)/(hotkey|init|hupuBbsPm)\. - reject-img
^https?:\/\/games\.mobileapi\.hupu\.com\/interfaceAdMonitor - reject-img
^https?:\/\/goblin\.hupu\.com\/.+\/interfaceAd\/getOther - reject-200
^https?:\/\/i1\.hoopchina\.com\.cn\/blogfile\/.+_\d{3}x\d{4} - reject-img
# > hongbanbao
https://fbchina.flipchina.cn/v2/ad/query/* - reject-200
# > huyazhibo
^https?:\/\/business\.msstatic\.com\/advertiser\/material - reject-200
# > haoqixinribao
^https?:\/\/app3\.qdaily\.com\/app\d\/boot_advertisements\.json - reject-200
# > huxiu
^https:\/\/api-ad-product\.huxiu\.com\/Api\/Product\/SDK\/Advert\/Query\/queryAdvertListInfo - reject-200
# > huangyouxiangji
^https?:\/\/api4\.bybutter\.com\/v\d\/app\/placements\/\d\/advertisements - reject-200
# > hanglvzongheng
^https?:\/\/(discardrp|startup)\.umetrip\.com\/gateway\/api\/umetrip\/native - reject-200
# > hangzhougongjiao
^https?:\/\/m.ibuscloud.com\/v2\/app\/getStartPage - reject-200
# > haohaozhu
^https?:\/\/api\.haohaozhu\.cn\/index\.php\/home\/AppInit\/getStartPhoto - reject-200
# > huabaozhitou
^https?:\/\/api\.touker\.com\/v2\/IAdvertisementAPI\.queryStartAdvertisement - reject-200
# > hema
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.wdk\.render\.querysinglepage - reject-200
^https?:\/\/acs-m\.freshippo\.com\/gw\/mtop\.wdk\.render\.querysinglepage - reject-200
# > hefengtianqi
^https?:\/\/hfapp-service\.qweather\.net\/.*\/ad\/ - reject-200
# > haoqing
^https?:\/\/restapi\.iyunmai\.com\/ad-api\/ - reject-200
# > huaerjiejianwen
^https?:\/\/api-one-wscn\.awtmt\.com\/apiv\d\/advertising\/ads - reject-200
# > hanxiaoquan
^https?:\/\/hxqapi\.hiyun\.tv\/api\/notification\/plans - reject-200
# > haique
^https?:\/\/cq11344-app-https-api-1\.ictun\.com:443\/api\/app\/v\d\/appad - reject-200
# > i4
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml - reject-200
# > iHour
^https?:\/\/app-cdn\.2q10\.com\/app\/\w+\/honored - reject-200
# > jingdongdushu
^https?:\/\/jdread-api\.jd\.com\/jdread\/api\/channel\/module\/opens - reject-200
^https?:\/\/jdread-api\.jd\.com\/jdread\/api\/popup - reject-200
# > jingdong[invalid]
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(start|queryMaterialAdverts) - reject-200
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ - reject-200
# > jingdongjinrong
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture - reject-200
# > jingdongyun
^https:\/\/router-app-api\.jdcloud\.com\/v\d\/board\/routerAppSplash - reject-200
# > jianxun
^https?:\/\/api\.tipsoon\.com\/api\/v\d\/top\/ad - reject-200
# > jiaohangmaidanba
^https?:\/\/creditcardapp\.bankcomm\.com\/mapp\/common\/(queryGuidePageAds|getPopAds)\.do$ - reject-200
# > jiemianxinwen
^https?:\/\/img\.jiemian\.com\/ads\/ - reject-200
# > jinshi
^https?:\/\/jad-api\.jin10\.com\/ad - reject-200
# > jijianhuilv
^https?:\/\/explorer\.tratao\.com\/api\/client\/v4\/xtransfer\/ad\/ - reject-200
# > jiaxiaoediantong
^https?:\/\/api\.jxedt\.com\/ad\/ - reject-200
# > jiakaobaodian
^https?:\/\/\w+\.kakamobi\.cn\/api\/open\/v\d\/advert-sdk\/ - reject-200
# > jianhanglife
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A00(2|9) - reject-200
# > jimi
^https?:\/\/superapp\.xgimi\.com\/api/v1\/app\/ad\/configs\?_sort=createdAt:Adesc - reject-200
# > jiansheyinhang
^https?:\/\/adv\.ccb\.com\/ebda\/ctm_adv - reject-200
# > jump
^https?:\/\/switch\.jumpvg\.com\/jump\/(getlaunchad|recommend\/ad_conf) - reject-200
# > jingdongxiaojia
^https?:\/\/api\.smart\.jd\.com\/c\/service\/getLoadingLinks - reject-200
# > kfc
^https?:\/\/res.kfc.com.cn\/advertisement\/ - reject-200
https://dynamicad.kfc.com.cn/api/app5/homepage/ai/popup - reject-200
# > kuaikan
^https?:\/\/api.kkmh.com\/v\d\/(ad|advertisement)\/ - reject-200
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch - reject-dict
# > kanlixiang
^https?:\/\/api\.vistopia\.com\.cn\/api\/v\d\/home\/advertisement - reject
# > kantianxia
https://open3.vistastory.com/v3/api/index/loading_ad - reject-200
https://open3.vistastory.com/v3/api.*get_popup - reject-200
# > kudi
^https?:\/\/gateway\.abite\.com\/cotti-capi\/customer\/position\/list\?code=cotti-launch-window - reject-200
# > keep
^https?:\/\/hc-ssp\.sm\.cn - reject-200
# > kuaiying
^https?:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/(resource|banner) - reject-200
# > kujiale
^https?:\/\/www\.kujiale\.com\/app\/queryOpenPage - reject-200
# > kugou
^http:\/\/ads.?s?ervice(retry)?\.(kugou|kglink).(com|cn)\/v\d\/ - reject-200
# > lingclub
^https?:\/\/api\.00bang\.cn\/llb\/baseinfo\/advertise\/getAdvertiseByPageCode - reject-200
# > linxi
^https?:\/\/api\.internetofcity\.cn\/api\/resource\/anon\/popups\/(getSplashList|getList) - reject-200
# > lecheng
https://dl-cu-hz.lechange.cn/oms-online/advertisementPush/* - reject-200
# > lanjie100
https://tagit.hyhuo.com/recover/list - reject-200
# > laiChon
^https?:\/\/(mobile|shop)\.laichon\.com\/api\/(v1\/goods\/goodsList|exposureAdvStatistics|getWebAdvList) - reject-200
# host-suffix, admobile.top, reject-200
https?:\/\/helper\.2bulu\.com\/(greenPea\/queryTasks|proSpecial\/allData|saveSplashFrequencyStatistics|getPopInfo|getAppEntranceConfig|promote\/list|getSplash|outing\/reqFoundNewList|outing\/reqIndex) - reject-200
# > lanRenTingShu
^https?:\/\/.*\/yyting\/advertclient\/ClientAdvertList.action - reject-200
# > lanjiyin
^https?:\/\/tk\.lanjiyin\.com\.cn\/ad\/getAdList - reject-200
# > leisutiyu
^https?:\/\/app-gateway\.leisuapi\.com\/v\d\/app\/mobile\/(banners|ads) - reject-200
# > liulishuo
^https?:\/\/rengine-platform\.llsapp\.com\/auth\/api\/remoteResource\/darwin - reject-200
# >lianmeng
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query - reject-200
# > lofter
^https?:\/\/ad\.lofter\.com\/.*yitou\/madr - reject-200
# > lanrentingshu
^https?:\/\/.*mting\.info\/advert\/ClientAdvertList\.action - reject-200
# > lecheng
^https?:\/\/adx.*anythinktech\.com\/bid - reject-200
# > leke
^https?:\/\/lens\.leoao\.com\/lens\/.+(getUserScheme|queryAppBanners|Advert|popup) - reject-200
# > MeiTuan
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage - reject-200
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ - reject-200
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) - reject-200
^https?:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg - reject-200
^https?:\/\/p\d\.meituan\.net\/movie\/\w+\.jpg\?may_covertWebp - reject-200
# > MeiTuanWaiMai
^https?:\/\/img\.meituan\.net\/(bizad|brandCpt)\/\w+\.(png|jpg) - reject-200
^https?:\/\/.*\.meituan\.com\/api\/v\d\/(openscreen\?ad|appstatus\?ad|loadInfo\?|startpicture) - reject-200
^http:\/\/s3plus\.meituan\.net\/.*\/brandcpt-vedio\/.*\?time - reject-200
# > MeiWeiBuYongDeng
^https?:\/\/capi.mwee.cn\/app-api\/V12\/app\/getstartad - reject-200
# > MaFengWo
^https://mapi.mafengwo.cn\/ad\/get_launch_ad_list\/v2 - reject-200
# > MaiDuiDui
^https?:\/\/mob\.mddcloud\.com\.cn\/adApi\/advert - reject-200
# > manhuaren
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/public\/(getStartUpMessage|getStartPageAds|getShelfActivity) - reject-200
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/ad - reject-200
# > MIX
^https?:\/\/dispatcher\.camera360\.com\/api\/v1\/list$ - reject-200
^https?:\/\/mix-api\.camera360\.com\/v\d\/operational-positions - reject-200
# > MaKaLong
^https:\/\/app\.api\.versa-ai\.com\/launch\/ads\? - reject-200
# > MoMo
^https?:\/\/open\.taou\.com\/maimai\/launch_ad - reject-200
^https?:\/\/api\.taou\.com\/sdk\/global\/splash_ad - reject-200
^https?:\/\/track\.mm\.taou\.com/v\d\/track - reject-200
# > maidanba
^https?:\/\/creditcardapp\.bankcomm\.cn\/mappweb_interface\/common\/(qryPopAds|qryLaunchAds)\.do - reject-200
# > mixuebingcheng
^https:\/\/mxsa\.mxbc\.net\/api\/v1\/adinfo\/limitedAds$ - reject-200
# > maoyan*
^https?:\/\/p0\.pipi\.cn\/adAdmin\/\w+.jpg\? - reject-img
# > miyoushe
^https?:\/\/bbs-api\.miyoushe\.com\/apihub\/api\/getAppSplash - reject-200
# > meiyou
^https?:\/\/axxd\.xmseeyouyima\.com\/v\d\/getad - reject-200
# > miguyinyue
^https?:\/\/app\.c\.nf\.migu\.cn\/.*column\/start(-)?up-pic - reject-200
# > manhuashe
^https?:\/\/comicapi\.manhuashe\.com\/v\d\/(ads\/adstrategys|public\/startupactivity) - reject-200
# > maidanglao
^https?:\/\/api\.mcd\.cn\/bff\/portal\/(richpop|home\/splash) - reject-200
# > merit
^https?:\/\/api\.merach\.com\/app\/AppAdvertisingController\/getAdvert - reject-200
# > meisiyixue*
^https?:\/\/app-api\.medsci\.cn\/app-advertisement-space\/showAdList - reject-200
# > moomoo
^https?:\/\/api\.moomoo\.com(\/v\d)?\/ad - reject-200
# > miaojie
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.mos\.app\.homepage\.launch - reject-200
# > migushipinaikan
^https?:\/\/aikanvod\.miguvideo\.com\/video\/p\/i_adverseInterface\.jsp - reject-200
# > mijia
^https?:\/\/home\.mi\.com\/cgi-op\/api\/v\d\/recommendation - reject-200
# > nanfanghangkong
^https?:\/\/3g\.csair\.com\/CSMBP\/bookProcess\/homepopup\/queryAdvertisement - reject-200
# > omofun
^https?:\/\/103\.91\.210\.141\:2515\/xgapp\.php\/v2\/top_notice - reject-200
# > One
^http:\/\/app\.api\.d3yuiw4\.com\/api\/app\/ad - reject-200
# > Oray
^https?:\/\/slapi\.oray\.net\/client\/ad - reject-200
^https?:\/\/slapi\.oray\.net\/adver - reject-200
# > one
^https?:\/\/api\.21ec74\.com\/v2\.5\/ad - reject-200
^https?:\/\/careapi\.oclean\.com\/mall\/v\d\/Temporary\/SafetyGetStartAdvert - reject-200
# > pikpak
https://access.mypikpak.com/access_controller/v1/area_accessible - reject-200
# > pinduoduo
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash - reject-200
# > PiaoGen
^https?:\/\/pss\.txffp\.com\/piaogen\/images\/launchScreen/ - reject-200
# > pengpainews
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= - reject-200
# > pufayinhang
^https?:\/\/lban\.spdb\.com\.cn\/mspmk-web-component\/(getAdvList|prefetchAdvList)\.ah - reject-200
# > pupumarket
^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/advertisement - reject-200
# > pica
^https?:\/\/.*tipatipa\.xyz\/announcements - reject-200
# > pansearch
^https?:\/\/www\.pansearch\.me\/api\/adsite - reject-dict
# > pinganzhengquan
^https?:\/\/m\.stock\.pingan\.com\/restapi\/rmd\/open\/O\/api\/openAd - reject-200
# > qqbrower
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d - reject-200
# > QuNaEr
https://homefront.qunar.com/front/splash/ad - reject-200
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd - reject-200
# > QiCheZhiJia
^https?:\/\/adproxy.autohome.com.cn\/AdvertiseService\/ - reject-200
^https?:\/\/app2.autoimg.cn\/appdfs\/ - reject-200
# > QiDianDuShu
^https?:\/\/magev\d\.if\.qidian\.com\/argus\/api\/v\d\/client\/getsplashscreen - reject-200
# > qinlingkaimen
^https?:\/\/qadx\.qinlinad\.com\/ad\/ - reject-200
# > qijunjiekancaijin
^https?:\/\/app\.api\.qjjfin\.com\/publicize\/allList - reject-200
# > qqyuedu
^https?:\/\/(commontgw|comapi)\.reader\.qq\.com\/(common\/adV|com-ad\/config) - reject-200
# > qinbaobao
^https?:\/\/api\.qbb6\.com\/ad\/ - reject-200
# > picooc
^https?:\/\/api2\.picooc\.com\/v\d\/api\/focus\/strategy\/execute - reject-200
# > RenMinRiBao
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/(adv|getAdvertImage) - reject-200
^https?:\/\/stat\.peopleapp\.com\/ - reject-200
# > renren
^https?:\/\/.*dcloud\.net\.cn\/(app\/acs|uad) - reject-200
# > ruixinkafei
^https?:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/(homePage\/contactor\/modules|app\/adposNew) - reject-200
# > shaoshupai
https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal - reject-200
# > ShunFengYouXuan
^https://mapi.sfbest.com\/brokerservice-server\/cms\/getPositionById.* - reject-200
# > spotify
^https?://spclient.wg.spotify.com/(ad-logic|ads|.+ad_slot|.+banners|.+canvases|.+cards|.+crashlytics|.+doubleclick.net|.+enabled-tracks|.+promoted_offer) - reject-img
^https?:\/\/api\d?\.musical\.ly\/api\/ad\/ - reject-img
# > SanLianZhongDu
https://apis.lifeweek.com.cn/api/baseConfig/getIosNewConfig - reject-200
# > ShunFeng
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade - reject-200
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages - reject-200
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen - reject-200
# > Soul
^https:\/\/data-collector\.soulapp\.cn\/api\/data\/report$ - reject-200
# > suning
^https?:\/\/mpcs\.suning\.com\/mpcs\/dm\/getDmInfo - reject-200
# > shanmu
^https?:\/\/api-sams\.walmartmobile\.cn\/api\/v1\/sams\/sams-user\/(window\/getGoUpPlus|screen_promotion\/get) - reject-200
# > shanxianyixia
^https:\/\/api\.gameplus\.qq\.com\/community\.OnloadSrv\/GetPreloadScreenInfo - reject-200
# > shaoniandedao
^https?:\/\/igetcool-gateway\.igetcool\.com\/app-api-other-server\/white\/open\/ads.json - reject-200
# > shoulvrujia
^https?:\/\/app\.homeinns\.com\/api\/landing - reject-200
# > soutushenqi
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/dateSignature\/random - reject-200
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/home\/dialog - reject-200
# > shixingshengxian
^https?:\/\/api1\.34580\.com\/wx\/Home\/AdvertisementPhotoshootRequest - reject-200
# > sanhaodongman
^https?:\/\/vidz\.3hxq\.cn\/api\/app\/(miscs\/mine\/extensions|announcements\/home) - reject-dict
# > suishenxing
^https?:\/\/m-adphone\.wenhua\.com\.cn\/ - reject-200
# > tianxingjinrong
^https?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ - reject-200
# > tianyiyunpan
^https?:\/\/api\.cloud\.189\.cn\/guns\/getOpenscreenBanners - reject-200
# > tianmaojingling
^https?:\/\/zconfig\.alibabausercontent\.com\/zconfig - reject-200
# > TengXunShouJiGuanJia
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* - reject-200
# > TuNiu
^https?:\/\/m\.tuniu\.com\/api\/operation\/splash\/ - reject-200
# > TaoPiaoPiao
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ - reject-200
# > TianTianJiJin
^https?:\/\/appactive\.1234567\.com\.cn\/AppoperationApi\/OperationService\/GetAppStartImg - reject-200
# > topwidget
https://top-widgets-api.xiaozujian.com/api/ad/config - reject-200
# > TencentNews
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) - reject-200
^https?:\/\/r\.inews\.qq\.com\/(getBannerAds|getNewsRemoteConfig|getSplash|searchHotCatList|upLoadLoc) - reject-200
# > taipinyang
^https?:\/\/mrobot\.pconline\.com\.cn\/s-900\/onlineinfo\/cms\/launch - reject-200
# > tonghuashun
^https?:\/\/adm\.10jqka\.com\.cn\/interface\/ad\/recommend - reject-200
# > tengxundongman
^https?:\/\/iphone\.ac\.qq\.com\/.*\/Support\/(getSystemConf|bootScreen) - reject-200
# > tongchenglvxing
^https?:\/\/tcmobileapi\.17usoft\.com\/appindexnew\/index\/getappindexconfig - reject-200
# > tujiaminxu
^https?:\/\/client\.tujia\.com\/bnbapp-node\/app\/portal\/getStartPictureAdvertising - reject-200
# > tangdong
^https?:\/\/td\.cgmcare\.cn\/api\/ad - reject-200
# > taobao
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.wireless\.home\.splash\.awesome\.get - reject-200
# > tianmao
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.fc\.resource\.tacdata\.get - reject-200
# > tuantuanjiayou
^https?:\/\/www\.zjyilin\.com\/hykweb\/\/index\/openImg - reject-200
# > weipinhui
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get - reject-200
https://b.appsimg.com/upload/momin/ - reject
https://mapi.appvipshop.com/vips-mobile/rest/activity/advertisement/get - reject-200
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report - reject-200
# > WangYiDaShen
^https?:\/\/god\.gameyw\.netease\.com\/v\d\/ad\/serving\/app-start - reject-200
# > WangYiYouXiang
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do - reject-200
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) - reject-200
# > WangYiYanXuan
https://support.you.163.com/appversync/check.do - reject-200
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json - reject-200
^https?:\/\/m\.you\.163\.com\/activity\/popWindow - reject-200
^https?:\/\/yanxuan\.nosdn\.127\.net\/.*\.mp4 - reject-200
# > weixindaihuo
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info - reject-200
# > Weifeng
^https?:\/\/api\.wfdata\.club\/v2\/yesfeng\/(infoCenterAd|yesList) - reject-200
# > Weico
^https?:\/\/overseas.weico.cc\/portal.php\?a=get_coopen_ads - reject-200
# > wangyiwoniudushu
^https?:\/\/easyreadfs\.nosdn\.127\.net\/ad-material\/ - reject-200
# > wangyikaola
^https?:\/\/sp\.kaola\.com\/api\/openad - reject-200
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd - reject-200
# > wanmeishijiedianjing
^https?:\/\/api\.wmpvp\.com\/api\/v\d\/config\/promote - reject-200
# > wangxinyun
^https?:\/\/device-box\.onethingpcs\.com\/.+\/adConf - reject-200
# > wacaijizhang
^https?:\/\/jz\.wacaijizhang\.com\/api\/banners\/newSplash - reject-200
# > wodelianyungang*
^https?:\/\/file\.mylyg\.net\/banner\/(fc[a-f0-9]{30})\.jpg - reject-200
# > xinyue
^https?:\/\/bgw\.xinyue\.qq\.com\/xyapi\.PageService\/GetIndexPopFlash - reject-200
# > xierdun
^https?:\/\/wcprd\.hilton\.com\.cn\/app-middleware\/graphql\?type=splashAd - reject-200
# > XiaoShuiMian
^https?:\/\/api.psy-1.com\/cosleep\/startup - reject-200
# > XieCheng
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif - reject-200
^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare - reject-200
# > XiChuangZhu
^https?:\/\/lchttpapi\.xczim\.com\/1\.1\/functions\/getLaunchImageForIOS - reject-200
# > XiaoYi
^https://api.xiaoyi.com\/v5\/app\/mobile\/ads - reject-200
^https://api.xiaoyi.com\/v5\/app\/config\?userid=.* - reject-200
# > xiachufang
^https:\/\/api\.xiachufang\.com\/v\d\/ad/ - reject-200
# > xiaolishenghuo
^https?:\/\/mpos-pic\.helipay\.com\/upload\/images\/advertisment - reject-200
# > xiaomi
^https?:\/\/api\.m\.mi\.com\/v1\/app\/start - reject-200
# > xiaomiyoupin
^https?:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig - reject-200
# > xifandongman
^https?:\/\/pzoap\.moedot\.net\/xgapp\.php\/v2\/top_notice - reject-200
# > xiangrikui
^https?:\/\/client-api\.oray\.com\/materials\/SLCC_IOS_STARTUP\?lang=zh-Hans-CN - reject-200
# > xueqiu
^https?:\/\/api\.xueqiu\.com\/snowpard\/launch_strategy\/query\.json - reject-200
# > xiaoyuansouti
^https?:\/\/.*yuanfudao\.com\/iphone\/splashes - reject-200
# > xiaoyuankousuan
^https?:\/\/.*yuanfudao\.com\/leo-mis\/iphone\/splashes - reject-200
# > xiangrikui
^https?:\/\/client-api-v2\.oray\.com\/materials\/(SUNLOGIN_CLIENT_IOS_PROMOTION|SLCC_IOS_DEVICE|SLCC_IOS_STARTUP) - reject-200
# > xiaoaiyinxiang
^https?:\/\/info\.mina\.mi\.com\/advertise\/splash - reject-200
# > xiaocaibawangcan
^https?:\/\/zlsdk\.1rtb\.net\/sdk\/req_ad\? - reject-200
# > xinlangcaijing
^https?:\/\/ad\.cj\.sina\.cn\/(osa\/adpreload|fax\/impress) - reject-200
# > xiaoyisheyingji
^https?:\/\/qcwx\.medproad\.com:8080\/ad\/ - reject-200
# > xiaomishangcheng
^https?:\/\/shop-api\.retail\.mi\.com\/mtop\/navi\/skywheel\/mishop\/splash - reject-200
# > xinmanhua
^https?:\/\/xapi\.xinmanhua\.net\/splashgroups\?include=splashs - reject-200
# > xiguapi
^https?:\/\/cmt\.comp\.360os\.com\/adv - reject-200
# > xiaoqiangtingche
^https?:\/\/www\.xqpark\.cn\/xqParkApp\/resource\/getResource - reject-200
# > xiamenhangkong
^https?:\/\/mobileapi\.xiamenair\.com\/mobile-starter\/.+\/getStartAD - reject-200
# > yanaifei
^https?:\/\/pipi\.4kya\.com\/\/xgapp\.php\/v3\/advert\.position=[^2]+ - reject-200
# > YangShiPin
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/\w+\.json - reject-200
# > YiHaoDian
^https?:\/\/venus\.yhd\.com\/memhome\/launchConfig - reject-200
# > YiKaoBang
^https?:\/\/api\.yikaobang\.com\.cn\/client\/main\/homePageSmallAd - reject-200
^https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/Client\/main\/startPage - reject-200
# > YouLinYouKe
https://new-app-api.ylyk.com/v1/user/myinfo/adviser - reject-200
# > YinkeZhiBo
^https?:\/\/service\.busi\.inke\.cn\/api\/flash\/screen - reject-200
# > YinxiangNote
^https?:\/\/app\.yinxiang\.com\/ads\/ - reject-200
# > yonghui
^https?:\/\/api\.yonghuivip\.com\/web\/shensuan\/ad\/getAd - reject-200
# > youshu
^https?:\/\/gongdu\.youshu\.cc\/m\/open_screen\/list_by_udid - reject-200
# > yingshiyun
^https?:\/\/i\.ys7\.com\/api\/ads\/ - reject-200
^https?:\/\/api\.ys7\.com.*\/getAdvertising - reject-200
# > yuxueyuan
^https?:\/\/.*\.yuxueyuan\.cn\/yxy-api-gateway\/api\/json\/advert\/getsAdStartScreen - reject-200
# > yitao
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query.*etao_splash - reject-200
# > yunting
^https?:\/\/ytmsout\.radio\.cn\/publish\/recScreen\/getLoadPage - reject-200
# > yangcong
^https?:\/\/m\.msyc\.cc\/app\/getBootPage\/v\d - reject-200
# > yijietu
^https?:\/\/1jietu\.com\/apiv\d\/ad - reject-200
# > youminxingkong
^https?:\/\/entry\.ubixioe\.com\/mob\/sdk\/v\d\/endpoint - reject-200
# > yihaodian
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=home_launchConfig - reject-200
# > yimaitong
^https?:\/\/api\.medlive\.cn\/promotion-api/adlist - reject-200
^https?:\/\/promotion\.medlive\.cn\/getcover-v2\?app_name - reject-200
# > yingshiyun
^https?:\/\/api\.ys7\.com\/api\/ads - reject-200
# > youdaocidian
^https?:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup - reject-200
^https?:\/\/gorgon\.youdao\.com\/gorgon - reject-200
# > ycc360
^https?:\/\/ads\.closeli\.cn\/ - reject-200
# > yundaren
^https?:\/\/.*ubixioe\.com\/mob\/sdk\/v\d\/endpoint - reject-200
# > yixiaoyuan
^https?:\/\/compus\.xiaofubao\.com\/compus\/advertising - reject-200
# > yinhezhengquan
^https?:\/\/cdns\.chinastock\.com\.cn\/cdn\/omc\/app\/app\/(index_pop_banner|startup_banner) - reject-200
# > yueniuxinwen
^https?:\/\/m\.api\.shaoxing\.com\.cn\/v\d\/start - reject-200
# > yunjing
^https:\/\/cn-app\.narwaltech\.com\/(operate\/(cactivity\/listByResourceIds|appPosition\/listSplash)|app-user-device-server\/v\d\/user-device\/getTips) - reject-200
# > zhongguoyidong
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit - reject-200
# > zhongguoyidongyunpan
^https?:\/\/ad\.mcloud\.139\.com\/advertapi\/adv-filter\/adv-filter\/AdInfoFilter\/getAdInfos$ - reject-200
# > zhongguoyidongjiangsu
^https?:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query - reject-200
# > zhongguoyidongshandong
https?:\/\/m\.sd\.10086\.cn\/zapi\/app_common\/homeWelcome\/welcome.do - reject-200
# > zhongguoliantong
^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) - reject-200
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) - reject-200
# > zhongguoyidongguangxi
^https?:\/\/gx\.10086\.cn\/zt-portal\/gxhzg\/portal\/app\/api\/v - reject-200
# > zhongguoyidonganhui*
^https?:\/\/api\.ahmobile\.cn:443\/eip\?eip_serv_id=app\.getAllNew - reject-200
# > zhuanzhuan
^https?:\/\/app\.zhuanzhuan\.com\/zzx\/transfer\/getConfigInfo - reject-200
# > zhiboba
^https?:\/\/a\.qiumibao\.com\/activities\/config\.php$ - reject-200
^https?:\/\/a\.qiumibao\.com\/ios\/config\/\?version_code= - reject-200
# > zuoyebang
^https?:\/\/syh\.zybang\.com\/com\/adx\/ - reject-200
# > ZuiYou
^https?:\/\/adapi\.izuiyou\.com\/ - reject-200
^https?:\/\/api\.izuiyou\.com\/ad\/ - reject-200
# > zhuishushenqi
^https?:\/\/adx-cn\.anythinktech\.com\/bid - reject-200
# > zhangshangdaojucheng
^https?:\/\/djcapp\.game\.qq\.com\/daoju\/igw\/main\/\?_service=welink\.ad\.list - reject-200
# > zhangyue
^https?:\/\/ih2\.ireader\.com\/zyapi\/bookstore\/ad - reject-200
^https?:\/\/ih2\.ireader\.com\/zyapi\/self\/screen\/ad - reject-200
^https?:\/\/ih2\.ireader\.com\/zycl\/api\/ad - reject-200
# > ziru
^https?:\/\/ztoread\.ziroom\.com\/ymerApi\/v\d\/index\/open - reject-200
# > zhangshanggongjiao
^https?:\/\/quanguo\.mygolbs\.com:8081\/MyBusServer\/servlet\/MyGoServer\.HttpPool\.HttpHandlerServlet - reject-200
# > zhuijudaren
^https?:\/\/zjdr666\.com\/zjdr\.php\/v\d\/(version|top_notice\?|advert\?position=[^2]+) - reject-200
# > zhangshangyingxionglianmeng
^https?:\/\/mlol\.qt\.qq\.com\/go\/recommend - reject-200
# > zhongguoyidongguangdong
^https?:\/\/gd\.10086\.cn\/gmccapp\/serv\/\?servicename=GMCCAPP_704_002_001_001 - reject-200
# > zhixinghuochepiao
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/scjson\/tripAds - reject-200
# > zijinnongshangyinhang*
^https?:\/\/zjmbank\.js96008\.com:8090\/gw\/advert\/oprAdvertQry - reject-200
# > zhongguoguangdian
^https?:\/\/app\.10099\.com\.cn\/contact-web\/api\/version\/getFlashScreenPage - reject-200
# > zhihuisuzhou
^https?:\/\/newapp2\.szsmk\.com\/app\/config\/queryMainAd - reject-200
# > zhangzhougonggongjiaotong
^https?:\/\/app\.ibuscloud\.com\/v\d\/(app\/getSkipAdvert|notice\/getNoticeWithAdvByCity) - reject-200
# > zhangyue
^https?:\/\/api\.ireader\.mobi\/activity\/ad\/openScreen - reject-200

[Script]
# > 555
http-response ^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend script-path=https://github.com/ddgksf2013/Scripts/raw/master/555Ad.js, requires-body=true, timeout=60, tag=555Ad

# > 12306
http-request ^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList script-path=https://github.com/ddgksf2013/Scripts/raw/master/12306.js, requires-body=true, timeout=60, tag=12306

# > amdc
http-response ^http:\/\/amdc\.m\.taobao\.com script-path=https://github.com/ddgksf2013/Scripts/raw/master/amdc.js, requires-body=true, timeout=60, tag=amdc

# > ahfs
http-response ^https?:\/\/.*(xbwpys|ahhhhfs)\.com\/($|[0-9a-zA-Z_/]+\/$) script-path=https://github.com/ddgksf2013/Scripts/raw/master/ahfs.js, requires-body=true, timeout=60, tag=ahfs

# > baiduditu
http-response ^https:\/\/newclient\.map\.baidu\.com\/client\/phpui2\/\?qt=ads script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/baidumap.js, requires-body=true, timeout=60, tag=baidumap

http-response ^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/audit\/home\/getCommonMixData script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/baishitv.js, requires-body=true, timeout=60, tag=baishitv

# > crunchyroll
http-response https://beta-api.crunchyroll.com/cms script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=offset_ms%22%3A%5Cd%2B-%3Eoffset_ms%22%3A99999999999999

# > caixin
http-response ^https?:\/\/gg\.caixin\.com\/s\?z=caixin&op=1&c=3362 script-path=https://github.com/ddgksf2013/Scripts/raw/master/caixinads.js, requires-body=true, timeout=60, tag=caixinads

# > dongqiudi
#http-request ^https?:\/\/ap\.dongqiudi\.com\/plat\/v4 script-path=http://script.hub/convert/_start_/https://raw.githubusercontent.com/ddgksf2013/Scripts/master/dongqiudi.js/_end_/dongqiudi.js?type=mock&target-app=loon-plugin, timeout=60, tag=dongqiudi

# > dingdongmaicai
http-response ^https?:\/\/maicai\.api\.ddxq\.mobi\/advert\/getAd script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=rt_time%22%3A%5Cd%7B2%7D-%3Ert_time%22%3A40

http-response ^https?:\/\/www\.flyert\.com\/api\/mobile\/index\.php\?version=\d&mobile=yes&module=basicdata&type=forumlist script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=adv-%3Eddgksf2013

http-response ^https?:\/\/www\.flyert\.com\/source\/plugin\/mobile\/mobile\.php\?module=threadpost&.+?&page=1 script-path=https://github.com/ddgksf2013/Scripts/raw/master/fly.js, requires-body=true, timeout=60, tag=fly

http-response ^https?:\/\/.*umetrip\.com\.cn\/gateway\/api\/umetrip\/native$ script-path=https://github.com/ddgksf2013/Scripts/raw/master/hanglvzongheng.js, timeout=60, tag=hanglvzongheng

# > iQiYi
http-response ^https?:\/\/.*cupid\.iqiyi\.com\/mixer\? script-path=https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js, requires-body=true, timeout=60, tag=iqiyi_open_ads

# > jingxi
http-response ^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show script-path=https://github.com/ddgksf2013/Scripts/raw/master/startup.js, requires-body=true, timeout=60, tag=startup

http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(hotWords|hotSearchTerms) script-path=https://github.com/ddgksf2013/Scripts/raw/master/jd_json.js, requires-body=true, timeout=60, tag=jd_json

# > jingdonglite
http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=jdLiteAdvertisingVO-%3Eddgksf2013

http-response ^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_SmartPush script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=pushData-%3Eddgksf2013

http-response ^https?:\/\/res.kfc.com.cn\/CRM\/kfcad\/apphome6\/apphome.*json script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=bootStrapAd-%3Eddgksf2013

# > ku'an
http-response ^https?:\/\/api\.coolapk\.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList) script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true, timeout=60, tag=coolapk

http-response ^https?:\/\/api.coolapk.com\/v6\/main\/init script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true, timeout=60, tag=coolapk

# > kuake
http-response ^https?:\/\/open-cms-api\.(uc|quark)\.cn\/open-cms script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/quark.js, requires-body=true, timeout=60, tag=quark

# > manmanmai
http-response ^https?:\/\/apapia-sqk\.manmanbuy\.com\/index_json\.ashx script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=splashAD-%3Eddgksf2013

# > nongyeyinhang
http-response ^https?:\/\/mobilepaas\.abchina\.com\.cn:441\/mgw\.htm script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/abchina.js, timeout=60, tag=abchina

# > ocleancare*
http-response ^https?:\/\/careapi\.oclean\.com\/mall\/v\d\/User\/GetUserCenter script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=banner%22-%3Eddgksf2013%22

http-response ^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v\d\?position script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pupumarket.js, requires-body=true, timeout=60, tag=pupumarket

# > pinganjiankang
http-response ^https?:\/\/api\.jk\.cn\/m\.api script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pinganads.js, timeout=60, tag=pinganads

# > qidianyuedu
http-response ^https?:\/\/apps\.teamair\.cn\/app\/version script-path=https://github.com/ddgksf2013/Scripts/raw/master/qidian.js, requires-body=true, timeout=60, tag=qidian

http-response https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow script-path=https://github.com/ddgksf2013/Scripts/raw/master/shunfeng_json.js, requires-body=true, timeout=60, tag=shunfeng_json

# > shihuo
http-response ^https?:\/\/sh-gateway\.shihuo\.cn\/v\d\/services\/sh-adapi\/home\/screen script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=egin_time%22%3A%22%5Cd%7B4%7D-%3Eegin_time%22%3A%222099

# > Stay
http-response ^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$ script-path=https://github.com/ddgksf2013/Scripts/raw/master/stay.js, requires-body=true, timeout=60, tag=stay

# > shenmezhidemai
http-response ^https?:\/\/.*zdmimg\.com\/cpm\/api\/v\d\/advert_distribution\/get_all_advertise script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, timeout=60, tag=smzdm_json

# > tianfutong
http-response ^https?:\/\/tft-app\.cdtft\.cn\/gateway-customer\/tftapp\/tft-ams\/api\/appAd script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=officialAdvertResultVo-%3Eddgksf2013

# > testflight
http-request ^https?:\/\/testflight\.apple\.com\/v2\/accounts\/.*\/apps\/\d*/builds/\d*/install script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=storefrontId%22%20%3A%20%22.*%22-%3EstorefrontId%22%20%3A%20%22143441-1%2C29%22

# > v2ex
http-response ^https?:\/\/.*v2ex\.com\/($|t\/\d+) script-path=https://github.com/ddgksf2013/Scripts/raw/master/v2ex.js, requires-body=true, timeout=60, tag=v2ex

# > WeChat110
http-response ^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/weixin110.js, requires-body=true, timeout=60, tag=weixin110

# > XiaoTe
http-response ^https?:\/\/lcen\.xiaote\.net\/api\/graphql script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=screenSplashAd-%3Eddgksf2013

# > xiaoxiong
http-response ^https?:\/\/apps\.workair\.cn\/app\/version script-path=https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/scripts/replace-body.js, requires-body=true, timeout=30, tag=replaceBody, argument=ads%22-%3Eddgksf2013%22

# > Zhihu
http-response ^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2 script-path=https://github.com/ddgksf2013/Scripts/raw/master/zhihu_openads.js, requires-body=true, timeout=60, tag=zhihu_openads

[MITM]
hostname = api.smart.jd.com, mobileapi.xiamenair.com, home.mi.com, apps.teamair.cn, cn-app.narwaltech.com, api2.picooc.com, file.mylyg.net, lens.leoao.com, www.ahzs10000.com, api.qbb6.com, *.zdmimg.com, cdns.chinastock.com.cn, api.futunn.com, api.ireader.mobi, www.xqpark.cn, api.jk.cn, api.moomoo.com, api.ys7.com, cq11344-app-https-api-1.ictun.com, hxqapi.hiyun.tv, m-adphone.wenhua.com.cn, *.fenbi.com, api.medlive.cn, smsrebuild1.mail.10086.cn, ad.mcloud.139.com, comapi.reader.qq.com, commontgw.reader.qq.com, fuwu.nhsa.gov.cn, compus.xiaofubao.com, *.ubixioe.com, bp-api.bestv.com.cn, app.ibuscloud.com, www.kujiale.com, mama.dxy.com, newapp2.szsmk.com, vidz.3hxq.cn, xapi.xinmanhua.net, jz.wacaijizhang.com, ads.closeli.cn, shop-api.retail.mi.com, gorgon.youdao.com, cdke.youdao.com, m.stock.pingan.com, sdk.1rtb.net, careapi.oclean.com, app.10099.com.cn, hc-ssp.sm.cn, apps.workair.cn, app-api.medsci.cn, ad.cj.sina.cn, app-cdn.2q10.com, api.merach.com, zlsdk.1rtb.net, advertise.bczeducation.cn, notify.baicizhan.com, app.api.qjjfin.com, dynamicad.kfc.com.cn, ump.sz.creditcard.ecitic.com, *.didapinche.com, api.mcd.cn, comicapi.manhuashe.com, acs-m.freshippo.com, zjmbank.js96008.com, www.flyert.com, saad.ms.zhangyue.net, dj.palmestore.com, device-box.onethingpcs.com, *.anythinktech.com, api.xueqiu.com, 182.92.251.113, 101.201.175.228, switch.jumpvg.com, mobilepaas.abchina.com.cn, api-one-wscn.awtmt.com, restapi.iyunmai.com, maicai.api.ddxq.mobi, info.mina.mi.com, qadx.qinlinad.com, app-gateway.leisuapi.com, app.c.nf.migu.cn, app.flymodem.com.cn, hfapp-service.qweather.net, *.ahhhhfs.com, promotion.medlive.cn, mobads.baidu.com, entree-ws.igetget.com, axxd.xmseeyouyima.com, guide-acs.m.taobao.com, *.mting.info, ad.lofter.com, entry.ubixioe.com, *.v2ex.com, adv.ccb.com, client-api-v2.oray.com, www.pansearch.me, td.cgmcare.cn, *.yuanfudao.com, wallpaper.soutushenqi.com, 140.179.224.63, ap.dongqiudi.com, apapia-sqk.manmanbuy.com, emdcadvise.eastmoney.com, *.tipatipa.xyz, superapp.xgimi.com, mix-api.camera360.com, api1.34580.com, api.wmpvp.com, gateway.abite.com, rengine-platform.llsapp.com, capi.lkcoffee.com, 1jietu.com, bbs-api.miyoushe.com, tcmobileapi.17usoft.com, m.msyc.cc, mgw.mpaas.cn-hangzhou.aliyuncs.com, ytmsout.radio.cn, api.kmovie.gifshow.com, igetcool-gateway.igetcool.com, *.xbwpys.com, open-cms-api.quark.cn, ftapi.10jqka.com.cn, wxa.wxs.qq.com, evs.500.com, j1.pupuapi.com, dq.dxy.cn, m.you.163.com, open-cms-api.uc.cn, *.yuxueyuan.cn, pan-api.bitqiu.com, client.tujia.com, vip7.fzwdyy.cn, *.qyfxgd.cn, *.weilai555.com, *.ecoliving168.com, *cupid.iqiyi.com, gateway.36kr.com, shopapi.io.mi.com, tk.lanjiyin.com, gongdu.youshu.cc, api.21ec74.com, ztoread.ziroom.com, iphone.ac.qq.com, web.chelaile.net.cn, gd.10086.cn, api.00bang.cn, app.hbooker.com, api.sfacg.com, newclient.map.baidu.com, api3.cls.cn, gateway-api.dushu365.com, p0.pipi.cn, jdread-api.jd.com, ms.jr.jd.com, bdsp-x.jd.com, dsp-x.jd.com, api.m.jd.com, router-app-api.jdcloud.com, app.homeinns.com, cdn-evone-ceph.echargenet.com, gg.caixin.com, app-gw.csdn.net, api.gameplus.qq.com, mrobot.pconline.com.cn, djcapp.game.qq.com, mxsa.mxbc.net, cn-acs.m.cainiao.com, zjdr666.com, api.caiyunapp.com, api.ahmobile.cn, gx.10086.cn, emdcadvertise.eastmoney.com, api-sams.walmartmobile.cn, creditcardapp.bankcomm.cn, lban.spdb.com.cn, adapi.izuiyou.com, i.ys7.com, apps.api.ke.com, api.yonghuivip.com, access.mypikpak.com, gateway.shouqiev.com, res.pizzahut.com.cn, api.caijingmobile.com, 3g.csair.com, client-api.oray.com, bgw.xinyue.qq.com, api-new.app.acfun.cn, m.client.10010.com, open.fitdays.cn, gha.ghac.cn, sh-gateway.shihuo.cn, wcprd.hilton.com, ad.12306.cn, 103.91.210.141, adx-cn.anythinktech.com, js-ad.ayximgs.com, api.dangdang.com, pzoap.moedot.com, pipi.4kya.com, sdk.alibaba.com.ailbaba.me, tft-app.cdtft.cn, pan.baidu.com, yunbusiness.ccb.com, client.app.coc.10086.cn, t1.market.xiaomi.com, api.m.mi.com, app.zhuanzhuan.com, api.cloud.189.cn, appwk.baidu.com, us.l.qq.com, open.e.kuaishou.com, mi.gdt.qq.com, adm.10jqka.com.cn, a.qiumibao.com, api.tipsoon.com, b.appsimg.com, ios.sspai.com, zconfig.alibabausercontent.com, api.touker.com, mpcs.suning.com, api.yangkeduo.com, easyreadfs.nosdn.127.net, sp.kaola.com, gw.kaola.com, mime.baidu.com, learn.chaoxing.com, mapi.dangdang.com, client.qunar.com, mpos-pic.helipay.com, dili.bdatu.com, wap.ngchina.cn, ih2.ireader.com, adpai.thepaper.cn, api.haohaozhu.cn, list-app-m.i4.cn, api.xiachufang.com, peisongapi.meituan.com, *gaoqingdianshi.com, *.kakamobi.cn, api.jxedt.com, slapi.oray.net, r.inews.qq.com, app.yinxiang.com, mapi.appvipshop.com, syh.zybang.com, cdn.cmgadx.com, api.internetofcity.cn, img.meituan.net, lcen.xiaote.net, venus.yhd.com, api.shenyin.name, mage*.if.qidian.com, god.gameyw.netease.com, m.ibuscloud.com, e.dangdang.com, app2.autoimg.cn, adproxy.autohome.com.cn, *.umetrip.com, explorer.tratao.com, overseas.weico.cc, 118.178.214.118, 120.241.*, dapis.mting.info, acs.m.taobao.com, open3.vistastory.com, ssp.dzh.com.cn, www.meituan.com, client.mail.163.com, api.izuiyou.com, appapi.huazhu.com, api.wfdata.club, interface*.music.163.com, api.psy-1.com, res.kfc.com.cn, security.wechat.com, weixin110.qq.com, cdn.*.chelaileapp.cn, api.coolapk.com, app3.qdaily.com, daoyu.sdo.com, img.jiemian.com, ccsp-egmas.sf-express.com, *.laichon.com, app.ap.d3yuiw4.com, www.i3zh.com, api.yikaobang.com.cn, api-ad-product.huxiu.com, jad-api.jin10.com, mob.mddcloud.com.cn, appactive.1234567.com.cn, rtbapi.douyucdn.cn, service.busi.inke.cn, gab.122.gov.cn, dispatcher.camera360.com, app.api.versa-ai.com, open.taou.com, api.taou.com, track.mm.taou.com, app.dewu.com, data-collector.soulapp.cn, api.gamer.com.tw, beta-api.crunchyroll.com, api.vistopia.com.cn, pss.txffp.com, m.sd.10086.cn, helper.2bulu.com, 47.100.65.202, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn, wap.js.10086.cn, tagit.hyhuo.com, top-widgets-api.xiaozujian.com, *mangaapi.manhuaren.*, apis.lifeweek.com.cn, support.you.163.com, yanxuan.nosdn.127.net, *.peopleapp.com, new-app-api.ylyk.com, gw.aihuishou.com, *.58cdn.com.cn, app.58.com, api.zhihu.com, creditcardapp.bankcomm.com, res.xiaojukeji.com, 116.85.2.15, 116.85.2.14, 212.129.159.79, lchttpapi.xczim.com, business.msstatic.com, api.kkmh.com, *.chelaile.net.cn, api.jr.mi.com, guanyu.longfor.com, elemecdn.com, fuss10.elemecdn.com, www1.elecfans.com, m.tuniu.com, mapi.mafengwo.cn, api.xiaoyi.com, api.douban.com, otheve.beacon.qq.com, mapi.sfbest.com, api.mwee.cn, sso.ifanr.com, s3plus.meituan.net, flowplus.meituan.net, p*.meituan.net, testflight.apple.com, wmapi.meituan.com, appconf.mail.163.com, dl-cu-hz.lechange.cn, fbchina.flipchina.cn, zone.guiderank-app.com, homefront.qunar.com, afd.baidu.com, ma-adx.ctrip.com, mbd.baidu.com, img.rr.tv, api.rr.tv, *.hoopchina.com, goblin.hupu.com, spclient.wg.spotify.com

