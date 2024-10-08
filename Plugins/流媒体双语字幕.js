#!name=流媒体双语字幕
#!desc=狗哥流媒体双语字幕，配合捷径设置字幕捷径地址https://www.icloud.com/shortcuts/8ec4a2a3af514282bf27a11050f39fc2
#!openUrl=https://www.icloud.com/shortcuts/8ec4a2a3af514282bf27a11050f39fc2
#!author=neurogram
#!homepage=https://neurogram.notion.site/Dualsub-b8b2c5259ef54b349722717ec25c2853
#!icon=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Disney%2B.png

[Script]

http-response ^http.+(media.(dss|star)ott|manifests.v2.api.hbo|hbomaxcdn|nflxvideo|cbs(aa|i)video|cloudfront|akamaihd|avi-cdn|huluim|youtube).(com|net)\/(.+\.vtt($|\?m=\d+)|.+-all-.+\.m3u8.*|hls\.m3u8.+|\?o=\d+&v=\d+&e=.+|\w+\/2\$.+\/[a-zA-Z0-9-]+\.m3u8|api\/timedtext.+) script-path=Dualsub.js,requires-body=1,max-size=0,timeout=30, tag=流媒体双语字幕 
http-request ^http.+(setting|general).(media.dssott|hbomaxcdn|nflxvideo|youtube|cbsivideo|cloudfront|huluim).(com|net)\/\?action=(g|s)et script-path=Dualsub.js,requires-body=1,max-size=0, tag=Dualsub-setting

[MITM]

hostname = *.media.dssott.com, *.media.starott.com, *.api.hbo.com, *.hbomaxcdn.com, *.huluim.com, *.nflxvideo.net, *.cbsaavideo.com, *.cbsivideo.com, *.cloudfront.net, *.akamaihd.net, *.avi-cdn.net, *.youtube.com
