#!name = Script-Hub
#!desc = 将其他工具的Rewrite、Rule和JavaScript资源转换为Loon能识别的格式，使用前请在本插件的详情页面为[PROXY]项分配代理策略。点击下方链接查看更详细的使用方法。
#!openUrl = https://script.hub/
#!author = xream[https://github.com/xream], Keywos[https://github.com/Keywos], CKYB[https://github.com/CKYB], 小白脸
#!tag = 资源转换
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/blob/master/README.md
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/Other_icon/120px/Script-Hub.png
#!date = 2024-08-27 05:26:45
#!select = ScriptHub通知, 开启通知, 关闭通知, 跟随链接
#!input = Parser_body_max
#!input = Parser_http_timeout

[General]
force-http-engine-hosts = script.hub, *.script.hub

[Rule]
DOMAIN, scripthub.vercel.app, PROXY

[Script]
http-request ^https?:\/\/script\.hub\/($|edit\/|reload) script-path = script-hub.beta.js, timeout = 30, tag = 前端界面

http-request ^https?:\/\/script\.hub\/file\/_start_\/.+type=(?:qx-rewrite|surge-module|loon-plugin|all-module) script-path = Rewrite-Parser.beta.js, timeout = 30, tag = Rewrite转换

http-request ^https?:\/\/script\.hub\/file\/_start_\/.+type=rule-set script-path = rule-parser.beta.js, timeout = 30, tag = Rule转换

http-request ^https?:\/\/script\.hub\/convert\/ script-path = script-converter.beta.js, timeout = 30, tag = JavaScript转换

[MitM]
hostname = script.hub, *.script.hub