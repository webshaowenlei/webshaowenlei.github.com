
//第二部分 start
(function () {


})();




$(function(){
    //第一部分 start
    var $line = $('.line');
    var $list = $('.nav-list li');
    var curWidth = 0;  //当前li宽度
    var curLeft = 0;  //当前li位置
    $list.each(function(index, ele){
        $(ele).mouseenter(function(){
            curWidth = $(ele).width();
            curLeft = $(ele).position().left;
            $line.stop().animate({
                width: curWidth,
                left: curLeft
            }, 0)
        });
        $(ele).mouseleave(function(){
            $line.stop().animate({width: 0}, 0);
        })
    });
    var index = 0, //计数
        timer = null; //计时器
    //焦点点击切换
    var btnList = $('.banner-tab-li');
    btnList.click(function () {
        index = $(this).index();
        $(this).addClass(' on').siblings().removeClass(' on');
        $('.index-top-banner>div').eq(index).removeClass('bottom').addClass('active').siblings().remove('active').addClass('bottom');
    });

    //自动轮播
    $('.banner-container').mouseenter(function () {
        clearInterval(timer);

    });
    $('.banner-container').mouseleave(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            if (index == 4) {
                index = 0;
            } else {
                index++;
            }
            btnList.eq(index).addClass(' on').siblings().removeClass(' on');
            $('.index-top-banner>div').eq(index).removeClass('active bottom').addClass('active').siblings().remove('active bottom').addClass('bottom');
        }, 2000)
    }).trigger('mouseleave');

    //3D变化效果
    $('.banner-container').mousemove(function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var rttY = -((x - 700) / 1400 * 30).toFixed(2) + 'deg';
        var rttX = ((y - 300) / 560 * 30).toFixed(2) + 'deg';
        $('.banner-img').css({
            'transform': 'rotateX(' + rttX + ') rotateY(' + rttY + ')'
        });
    });
    //第一部分 end

    //第二部分 start
    $('.navigation_b_banner ul li').each(
        function (index,element) {
            //鼠标放入时以及拿走时所做的动作
            var timer = null;
            var step = -150;
            var target = 0;
            var li = $(element).children();
            var img = li.eq(2);
            var h1 = li.eq(0);
            $(element).hover(function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    img.css({ top: (target)+'px'});
                    target += step;
                    target < -8850? target = -8850 : target;
                },10);
                //鼠标进入框内时，让字体变色
                h1.css({color:'#00AEFF'}).siblings().css({color:'black'});
                //鼠标出去时的动作
            },function () {
                clearInterval(timer);
                timer = setInterval(function () {
                    img.css({ top: (target)+'px'});
                    target -=step;
                    target> 0? target = 0 : target;
                },10);
                h1.css({color:'black'});
            });
        }
        
    );
    var len = 0;
    $('.wrap2-list>li').mouseenter(function () {
        $('.wrap2-img').eq($(this).index()).stop().animate({
            backgroundPosition: '0px 10325px'
        })
    });

    $('.wrap2-list>li').mouseleave(function () {

    });
    
    //第二部分 end
    
    //第三部分 start
    $('.card-item').mouseenter(function () {
        $(this).addClass(' active').siblings().removeClass(' active');
    });
    //第三部分 end

    //第四部分 start
    $('.content_2').css({
        position: 'relative'
    });
    $('.content_2_box').children('div').eq(0).css({
        position: 'absolute',
        opacity: 0,
        top: '90px'
    });
    $('.content_4').css({
        position: 'relative'
    }).children('.content_4_box').children('div').eq(0).css({
        position: 'absolute',
        opacity: 0,
        top: '50px'
    });


    $(window).scroll(function(){
        var sTop = $(document).scrollTop();
        if($('.content_2').offset().top - sTop < 400) {
            $('.content_2_box').children('div').eq(0).animate({
                opacity: 1,
                top: '50px'
            }, 1200)
        }
        if($('.content_4').offset().top - sTop < 400){
            $('.content_4_box').children('div').eq(0).animate({
                opacity: 1,
                top: '90px'
            }, 1200)
        }

    });
    //第四部分 end



    //第五部分 start
    //给每个块加一个背景
    $('.content_3_box>ul>li').each(function (index,e) {
        $(e).css({background:'url(images/content_5_pic'+(index+1)+'.jpg)'});
        $(e).css({backgroundSize:'100%'});
    });
    //左右点击的轮播

    var prev = $('#prev'),next = $('#next');
    var box = $('#content_3_box');
    var ul = box.children().eq(2);
    var leader = -1280 ,target = -1280;
    var step = 256;
    box.hover(function () {
            prev.css({display:'block'});
            next.css({display:'block'});
        },function () {
            prev.css({display:'none'});
            next.css({display:'none'});
        }
    );
    //下一个按钮的触发事件
    next.on('click',function () {
        target  = target - step;
        if(target < -3840){
            target = -1536;
            leader = -1280;
        }
    });
    //上一个按钮的触发事件
    prev.on('click',function () {
        target  = target + step;
        if(target > 0){
            target = -2304;
            leader = -2560;
        }
    });
    //定时器
    setInterval(move,10);
    function move() {
        leader = leader + (target -leader)/10;
        Math.abs(leader-target) < 1 ? leader = target :leader;
        ul.css({left:leader});
    }
    //第五部分 end



    //第六部分 start
    //给图标进行动画
    var img = $('.content_4_con_pic').children();
    img.each(function (index,e) {
        var step = 75;
        var target = 0;
        var timer = null;
        //动画实现
        $(e).hover(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                target = target-step;
                target < -4425 ? target = -4425:target;
                img.eq(index).css({top: target+'px'});
            },10);
        },function () {
            clearInterval(timer);
            timer = setInterval(function () {
                target = target+step;
                target > 0 ? target = 0:target;
                img.eq(index).css({top: target+'px'});
            },10);
        });
    });
    //第六部分 end


});
$(function () {
    function $$(id) {
        return document.getElementById(id)
    }
    //尾部链接start
    var text = $$('input-text');
    var no = $$('input-fother');
    var up = $$('input-text-up');
    var down = $$('input-text-down');
    text.onmouseover =function () {
        no.style.display= 'block';
        up.style.display='block';
        down.style.display= 'none';
    };
    no.onmouseout=function () {
        no.style.display= 'none';
        up.style.display='none';
        down.style.display= 'block';
    };

// 现在做二维码的动画

    var ul = $$('head-li-ul');
    var li1 =ul.childNodes[0];
    var img_yun= ul.children[1];
    var img_wx = ul.children[3];
    var img_wb = ul.children[5];
    var img_fl = ul.children[7];
    var a1 = $$('li-ul-a1');
    var aa = $$('li-ul-a');
    var a2 = $$('li-ul-a2');
    var a3 = $$('li-ul-a3');

    a1.onmouseover=function () {
        img_wx.style.display='block';
        img_yun.style.display='none';
        img_wb.style.display='none';
        img_fl.style.display='none';
    };
    aa.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='block';
        img_wb.style.display='none';
        img_fl.style.display='none';
    };
    a2.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='none';
        img_wb.style.display='block';
        img_fl.style.display='none';
    };
    a3.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='none';
        img_wb.style.display='none';
        img_fl.style.display='block';
    };
    //尾部链接 end
});
