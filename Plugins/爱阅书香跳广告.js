#!name=爱阅跳广告
#!desc=卡广告领奖励,请开启MITM
#!icon=https://raw.githubusercontent.com/lugu123/Loon/refs/heads/main/icons/aiyueshuxiang.png
#!openUrl=https://t.me/aiyueshuxiangy
#!homepage=https://gist.githubusercontent.com/Mattraks/cf41ab5f29271cbfc13922075c54523e/raw/iFreeTime.sgmoudle
#!date=2023-11-04 18:35:00

[Rule]
DOMAIN,api-access.pangolin-sdk-toutiao.com,DIRECT
DOMAIN,open.e.kuaishou.com,REJECT
DOMAIN,video-dsp.pddpic.com,REJECT
DOMAIN,log-api.pangolin-sdk-toutiao.com,REJECT
DOMAIN,log-api.pangolin-sdk-toutiao-b.com,REJECT
DOMAIN,ether-pack.pangolin-sdk-toutiao.com,REJECT
DOMAIN,mssdk-bu.bytedance.com,REJECT
DOMAIN,images.pinduoduo.com,REJECT
DOMAIN,ic.snssdk.com,REJECT
DOMAIN,log.snssdk.com,REJECT
DOMAIN,log-hl.snssdk.com,REJECT
DOMAIN,tnc3-aliec2.snssdk.com,REJECT
DOMAIN-SUFFIX,gdt.qq.com,REJECT
DOMAIN-SUFFIX,app-measurement.com,REJECT
DOMAIN-SUFFIX,umeng.com,REJECT
DOMAIN-SUFFIX,umengcloud.com,REJECT
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,ctobsnssdk.com,REJECT
DOMAIN-SUFFIX,ugdtimg.com,REJECT
DOMAIN-SUFFIX,doubleclick.net,REJECT

[Script]
http-response ^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads.+ script-path=kp.js, requires-body=true, timeout=10, tag=爱阅跳广告直接领取

[MITM]
hostname = api-access.pangolin-sdk-toutiao.com