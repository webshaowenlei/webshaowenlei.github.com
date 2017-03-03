(function(){
    /*���Ͻ����ÿ�ʼ*/
    var $navToggle = $('#nav-toggle');
    var $menu = $('nav ul');
    $navToggle.on('click',function(e){
        e.preventDefault();
        $menu.slideToggle(250);
        this.classList.toggle('active');
    });
    $(window).resize(function(){
        var resizeW=$(window).width();
        resizeW>320&&$menu.is(':hidden')&&$menu.removeAttr('style')
    });
    //�����˵�
    $(".top_ul li").mouseover(function(){
        $(this).children("div").addClass("selected");
    });
    $(".top_ul li").mouseout(function(){
        $(this).children("div").removeClass("selected");
    });

    /*�ֲ�ͼ���ÿ�ʼ*/
    var liItems = $("#Change").children();
    var liLen = liItems.length;
    var count = 0;
    var Atimer = null;
    //����ͼƬ�л�����(���ı�͸����)
    function showImages(index) {
        for (var i = 0; i < liLen - 1; i++) {
            liItems[i].style.zIndex = 100 - i;
            liItems[i].style.opacity = '0';
        }
        liItems[index].style.zIndex = 100;
        liItems[index].style.opacity = '1';
    }
    showImages(0);
    //  �����Զ��ֲ�����
    function autoplay() {
        if (count % 2 == 0) {
            count = 0;
        }
        showImages(count);
        count++;
    }
    Atimer = setInterval(autoplay, 3000);


    /*�ص��������ÿ�ʼ*/
    $('.gotop-js').on('click',function(e){
        e.preventDefault();
        $('body').animate({scrollTop: 0},'slow')
    });


    /*��ϵ�����ÿ�ʼ*/
    var $last = $('li.last');
    var $modalCt = $('#modal');
    var $close = $('.close');
    var $cover = $('.cover');
    $last.on('click',function(e){
        $('body').addClass('remodal'); /*����body����������*/
        $modalCt.show();
    });
    $close.on('click',function(e){
        $modalCt.hide();
        $('body').removeClass('remodal');
    });
    $cover.on('click',function(){
        $modalCt.hide();
        $('body').removeClass('remodal');
    });
    $('.hero a').on('click',function(e){
        e.preventDefault();
        $modalCt.show();
        $('body').addClass('remodal');
    });


    /*��Ŀչʾ���ÿ�ʼ*/
    $('.projects').on('mouseenter','article',function(){
        $(this).siblings().addClass('dim');
    }).on('mouseleave','article',function(){
        $(this).siblings().removeClass('dim');
    });


    /*------���ַ�ת------*/
    $('.wodryRX').wodry({
        animation: 'rotateX',
        delay: 1500,
        animationDuration: 800
    });
})(jQuery);
/*------navShow------*/
$.goNavShow($('#top-js'))