(function () {
        var liItems = $("#Change").children();
        var liLen = liItems.length;
        var count = 0;
        var Atimer = null;

//          定义图片切换函数(即改变透明度)
        function showImages(index) {
            for (var i = 0; i < liLen - 1; i++) {
                liItems[i].style.zIndex = 100 - i;
                liItems[i].style.opacity = '0';
            }
            liItems[index].style.zIndex = 100;
            liItems[index].style.opacity = '1';
        }

        showImages(0);
//          定义自动轮播函数
        function autoplay() {
            if (count % 2 == 0) {
                count = 0;
            }
            showImages(count);
            count++;
        }

        Atimer = setInterval(autoplay, 3000);
    
    $.goNavShow($('#top-js'));
    /*------文字翻转------*/
    $('.wodryRX').wodry({
        animation: 'rotateYX',
        delay: 6000,
        animationDuration: 800
    });
})(jquery)