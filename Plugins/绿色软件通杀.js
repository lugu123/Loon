#!name=绿色软件通杀
#!desc= Safari浏览器播放，50度灰网页内可直接播放，汤头条和小蓝视频需进行跳转后播放；其他APP内直接观看无需跳转，50度灰回家邮箱：50du.dx0005@gmail.com发布任意邮件到邮箱，即可获得最新下载地址。
#!author= LiKai,汇总[https://p1.6p3ucmp.com/?aff_code=#/my/app-center],50度灰[https://aff.i50dh.com]
#!openUrl = https://github.com/lugu123/Loon/tree/670be1f13a38f5ebf634a50658b121d1d04a8279/Plugins
#!tag = 功能增强
#!homepage = https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Module/tangtoutiao.sgmoudle
#!date = 2024-09-22 18:37:00
#!icon= https://raw.githubusercontent.com/lugu123/Loon/refs/heads/main/icons/50dh.png

[Script]
http-request ^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? script-path=Lsp2.js, tag=绿色软件通杀2

[MITM]
hostname = *play.*.cn, long.*.cn
