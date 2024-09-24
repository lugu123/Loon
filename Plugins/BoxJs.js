#!name = BoxJs
#!desc = JavaScript数据管理器，用于管理脚本储存的数据。使用前请在本插件的详情页面为[PROXY]项分配代理策略。
#!openUrl = http://boxjs.com
#!author = chavyleung[https://github.com/chavyleung]
#!tag = 数据管理
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/Other_icon/120px/BoxJS.png
#!date = 2024-04-23 08:28:27

[Rule]
DOMAIN-SUFFIX, jsdelivr.net, PROXY

[Script]
# http-request ^https?:\/\/(.+\.)?boxjs\.(com|net) script-path = BoxJs/BoxJs.js, requires-body =  true, tag = BoxJS, timeout = 120

http-request ^https?:\/\/(.+\.)?boxjs\.(com|net) script-path = chavy.boxjs.js, requires-body =  true, tag = BoxJS, timeout = 120

[MitM]
hostname = boxjs.com, boxjs.net, *.boxjs.com, *.boxjs.net