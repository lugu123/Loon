#!name = 节点检测工具
#!desc = 适用于Loon的节点检测工具，可进行地理位置、节点解锁、节点网速等查询。请在所有节点页面选择一个节点长按，出现菜单后进行测试。
#!openUrl = 
#!author = KOP-XIAO[https://github.com/KOP-XIAO], xream[https://github.com/xream], Keywos[https://github.com/Keywos]
#!tag = 节点检测
#!system = 
#!system_version = 
#!loon_version = 3.2.1(745)
#!homepage = https://gitlab.com/lodepuly/vpn_tool//tree/master/Tool/Loon/Plugin
#!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/Other_icon/120px/Node_detection_tool.png
#!date = 2024-08-24 04:06:23

[Script]
generic script-path = LocationDetection.js, timeout = 10, tag = 地理位置查询, img-url = location.circle.system
generic script-path = NodeUnlockDetection.js, timeout = 20, tag = 节点解锁查询, img-url = play.circle.system