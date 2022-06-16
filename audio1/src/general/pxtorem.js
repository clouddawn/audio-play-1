const WIDTH = 375;  //如果是尺寸的设计稿在这里修改
const setView = () => {
    //设置html标签的fontSize
    document.documentElement.style.fontSize = (10 * screen.width / WIDTH) + 'px';
};
window.onresize = setView;
setView();

// 禁止微信浏览器调整字体大小

(function () {

    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {

        handleFontSize();

    } else {
        if (document.addEventListener) {

            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);

        } else if (document.attachEvent) {

            document.attachEvent("WeixinJSBridgeReady", handleFontSize);

            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);

        }

    }

    function handleFontSize() {

        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {

            'fontSize': 0

        });

        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function () {

            WeixinJSBridge.invoke('setFontSizeCallback', {

                'fontSize': 0

            });

        });

    }
})();