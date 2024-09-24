#!name= 夜艳解锁
#!desc=18+夜艳会员视频、小说、图片、去广告
#!author= LiKai
#!openUrl = https://yeyan.one
#!tag = 功能增强
#!homepage = https://raw.githubusercontent.com/WeiGiegie/666/main/yeyan.js
#!date = 2024-09-24 18:00:00
#!icon= https://raw.githubusercontent.com/lugu123/Loon/refs/heads/main/icons/Lsp.png

[Rewrite]
^https?:\/\/\w+.yeyan\w+.xyz\/api/comment/gg - reject-dict

[Script]

http-response ^https?:\/\/\w+.yeyan\w+.xyz\/api\/(user\/personal|community\/edit|adv\/) script-path=yeyan.js, requires-body=true, timeout=60, tag=夜艳解锁

http-request ^https?:\/\/\w+.yeyan\w+.xyz\/api\/community\/xq_community script-path=yytk.js, timeout=60, tag=夜艳去广告

[MITM]
hostname = *yeyan*

