#!name=7色猫解锁
#!desc=18+七色猫视频、小说、漫画、去广告、电台、直播
#!author=LiKai
#!openUrl = http://qsm.life
#!tag = 功能增强
#!homepage = https://raw.githubusercontent.com/WeiGiegie/666/main/7semao.js
#!date = 2024-09-24 18:00:00
#!icon= https://raw.githubusercontent.com/lugu123/Loon/refs/heads/main/icons/7semao.png

[Rewrite]
^https?://.+\.(cn|com)/api/home/my_ad - reject-dict

[Script]
http-response ^https?:\/\/.+.(cn|com)\/api\/(Login\/login|login\/mobile_login|index\/loufeng_info|home\/video_info|user\/info) script-path=7semao.js, requires-body=true, timeout=60, tag=七色猫解锁

http-response ^https?:\/\/.+.(cn|com)\/api\/(index|home|ent)\/(cate_list|zuire|zuixin|index|loufeng|new_zuanti|cate_list|novel|comic|audio_no) script-path=7semaoad.js, requires-body=true, timeout=60, tag=七色猫去广告

[MITM]
hostname = qijk.accessco.cn, jsqiapi.hspherecn.com, jiekou.antciti.cn, qiip.fushizhengli.cn

