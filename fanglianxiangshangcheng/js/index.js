//      张天爱图消失
$("#hideIcon").click(function () {
    $("#imgBox").addClass("hided");
    $("#hideIcon").addClass("hided");
});


//            搜索区的搜索框内a标签的消失于隐藏
var miix5 = document.getElementById("miix5");
var miix5Hide = document.getElementById("miix5Hide");
miix5.onfocus = function () {
    miix5Hide.style.display = "none";
};
miix5.onblur = function () {
    miix5Hide.style.display = "block";
};

//            banner 左侧商品详细分栏
var navCul = document.getElementById("navCul");
var items = navCul.children;
var len = items.length;
var navLink = document.getElementById("navLink");
for (var i = 0; i < len; i++) {
    items[i].index = i;
    items[i].onmouseover = function () {
        this.children[0].children[1].style.display = "block";
        this.children[0].style.backgroundColor = "#f7f7f7";
    };
    items[i].onmouseout = function () {
        this.children[0].children[1].style.display = "none";
        this.children[0].style.backgroundColor = "#fff";
    }
}

//          导航条中"社交平台" 和"手机版"两个标签内的隐藏块
navLink.children[0].onmouseover = function () {
    navLink.children[0].style.color = "#c81623";
    navLink.children[1].style.display = "block";
    navLink.children[1].style.zIndex = "999";
};
navLink.children[1].onmouseover = function () {
    navLink.children[1].style.display = "block";
};
navLink.children[1].onmouseout = function () {
    navLink.children[1].style.display = "none";
};
navLink.children[0].onmouseout = function () {
    navLink.children[0].style.color = "#fff";
    navLink.children[1].style.display = "none";
};
navLink.children[2].onmouseover = function () {
    navLink.children[2].style.color = "#c81623";
    navLink.children[3].style.display = "block";
    navLink.children[3].style.zIndex = "999";
};
navLink.children[3].onmouseover = function () {
    navLink.children[3].style.display = "block";
};
navLink.children[3].onmouseout = function () {
    navLink.children[3].style.display = "none";
};
navLink.children[2].onmouseout = function () {
    navLink.children[2].style.color = "#fff";
    navLink.children[3].style.display = "none";
};

//          中部 banner 特效开始
var shopCar = document.getElementById("shopCar");
var ArrowL = document.getElementById("ArrowL");
var ArrowR = document.getElementById("ArrowR");
var wrapCar = document.getElementById("wrapCar");
var wrapCarUl = document.getElementById("wrapCarUl");
var wCitems = wrapCarUl.children;
var wClen = wCitems.length;
var num = 0;
var timer = null, timer1 = null, timer2 = null, timer3 = null, timer4 = null;
var circles = document.getElementById("circles");
var circlesItems = circles.children;


//            中部右侧上方 shop_news 的滚动文字块
var timer5 = null, timer6 = null;
var hornScroll = document.getElementById("hornScoll");
timer6 = setInterval(autoPlay, 30);
function autoPlay() {
    num -= 0.5;      // num 代表文字块的高度
    num <= -480 ? num = 0 : num;
    hornScroll.style.top = num + "px";

    if (num % 60 == 0) {
        clearInterval(timer6);
        timer5 = setTimeout(function () {
            timer6 = setInterval(autoPlay, 7)
        }, 2000)
    }
}

/* ************** 广告图片切换效果 *************** */
// 图片切换显示函数
function showImage(index) {
    for (var i = 0; i < wClen; i++) {
        wCitems[i].style.zIndex = 100 - i;       //为图片排列顺序
        wCitems[i].style.opacity = '0';          //将图片透明度全部赋值为0
        circlesItems[i].className = 'active1';   //圆点背景色全部设置 active1
    }
    wCitems[index].style.opacity = '1';
    circlesItems[index].className = 'active2';
}
showImage(0);                                   //初始设置下标为0的图片和圆点的样式

var count = 0;                                  //获取计数器
// 定义自动轮播函数
function imageMove() {
    if (count % 6 == 0) {        // 判断count的值如果能被6整除，则将count重新赋值为0；
        count = 0;
    }                            // 将count值当做参数传给函数showImage();
    showImage(count);
    count++;                     //执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var imageInitailMove = setInterval('imageMove()', 2000);

//  定义箭头点击函数
shopCar.onmouseover = function () {
    ArrowL.style.display = "block";
    ArrowR.style.display = "block";
};
shopCar.onmouseout = function () {
    ArrowL.style.display = "none";
    ArrowR.style.display = "none";
};

ArrowL.onclick = function () {
    clearInterval(imageInitailMove);
    if (count == 0) {         // 由于和自动轮换方向相反所以要判断count的值
        count = 6;            // 当值为0时，重新赋值为6，继续循环
    }
    count--;
    showImage(count);         //调用函数count先自－
    imageInitailMove = setInterval('imageMove()', 2000);
};
// 向右的点击事件
ArrowR.onclick = function () {
    clearInterval(imageInitailMove);
    imageMove();             //由于和自动轮播的方向相同所以直接调用
// 重新为定时器赋值
    imageInitailMove = setInterval('imageMove()', 2000);
};
// 圆点的点击事件
for (var i = 0; i < wClen; i++) {
    circlesItems[i].index = i;
    circlesItems[i].onmouseover = function () {
        clearInterval(imageInitailMove);
        count = this.index;         // 将当前点击的圆点的下标值赋值给count
        showImage(count);           // 调用图片切换函数
        imageInitailMove = setInterval('imageMove()', 2000);
    }
}




//左侧导航栏开始
var TOP = 0;
var leftbar = document.getElementById('leftbar');
var star = document.getElementById('star');
var leftStar = document.getElementById('leftstar');
var like = document.getElementById('like');
var leftLike = document.getElementById('leftlike');
var floor1 = document.getElementById('floor1');
var leftFloor1 = document.getElementById('leftf1');
var floor2 = document.getElementById('floor2');
var leftFloor2 = document.getElementById('leftf2');
var floor3 = document.getElementById('floor3');
var leftFloor3 = document.getElementById('leftf3');
var floor4 = document.getElementById('floor4');
var leftFloor4 = document.getElementById('leftf4');
var floor5 = document.getElementById('floor5');
var leftFloor5 = document.getElementById('leftf5');
var floor6 = document.getElementById('floor6');
var leftFloor6 = document.getElementById('leftf6');

//储存右侧栏原来的classname
var arrClassName = [];
for (var i = 1; i < leftStar.parentNode.childNodes.length; i += 4) {
    arrClassName[i] = leftStar.parentNode.childNodes[i].className;
}
//    滚动效果
window.onscroll = function () {
    TOP = document.body.scrollTop + 200;
    if (TOP) {
        if (TOP < star.offsetTop) {
            leftbar.style.display = "none";
        } else if (TOP >= star.offsetTop && TOP < like.offsetTop) {
            leftbar.style.display = "block";
            updateClassName(leftStar);
            addClassName(leftStar, "leftactive");
            //alert('2')
        } else if (TOP >= like.offsetTop && TOP < floor1.offsetTop) {
            updateClassName(leftLike);
            addClassName(leftLike, "leftactive");
        } else if (TOP >= floor1.offsetTop && TOP < floor2.offsetTop) {
            updateClassName(leftFloor1);
            addClassName(leftFloor1, "leftactive");
        } else if (TOP >= floor2.offsetTop && TOP < floor3.offsetTop) {
            updateClassName(leftFloor2);
            addClassName(leftFloor2, "leftactive");
        } else if (TOP >= floor3.offsetTop && TOP < floor4.offsetTop) {
            updateClassName(leftFloor3);
            addClassName(leftFloor3, "leftactive");
        } else if (TOP >= floor4.offsetTop && TOP < floor5.offsetTop) {
            updateClassName(leftFloor4);
            addClassName(leftFloor4, "leftactive");
        } else if (TOP >= floor5.offsetTop && TOP < floor6.offsetTop) {
            updateClassName(leftFloor5);
            addClassName(leftFloor5, "leftactive");
        } else if (TOP >= floor6.offsetTop) {
            updateClassName(leftFloor6);
            addClassName(leftFloor6, "leftactive");
        }
    }
};
//左侧跳转
toplace(leftStar, star);
toplace(leftLike, like);
toplace(leftFloor1, floor1);
toplace(leftFloor2, floor2);
toplace(leftFloor3, floor3);
toplace(leftFloor4, floor4);
toplace(leftFloor5, floor5);
toplace(leftFloor6, floor6);
//初始化其他兄弟元素的classname
function updateClassName(ele) {
    for (var i = 1; i < leftStar.parentNode.childNodes.length; i += 4) {
        leftStar.parentNode.childNodes[i].className = arrClassName[i];
    }
}
//为元素添加新classname
function addClassName(ele, classname) {
    if (!ele.className) {
        ele.className = classname;
    } else {
        newclassname = ele.className;
        newclassname += " ";
        newclassname += classname;
        ele.className = newclassname;
    }
}

//左侧导航栏结束

//右侧导航栏开始
var phone = document.getElementById('phone');
var ask = document.getElementById('ask');
var phoneshow = document.getElementById('phoneshow');
var askshow = document.getElementById('askshow');
phone.onmouseover = function () {
    phoneshow.style.display = "block";
};
phone.onmouseout = function () {
    phoneshow.style.display = "none";
};
ask.onmouseover = function () {
    askshow.style.display = "block";
};
ask.onmouseout = function () {
    askshow.style.display = "none";
};
//右侧返回顶部
var totop = document.getElementById('totop');
var target = 0;
totop.onclick = function () {
    clearInterval(timer);
    var timer = setInterval(function () {
        target = document.body.scrollTop - 50;
        window.scrollTo(0, target);
        if (parseInt(target) < 60) {
            window.scroll(0, 0);
            clearInterval(timer);
        }
    }, 1);
};
//封装缓慢跳转到目标位置的函数
function toplace(ele, tar) { // ele 是要点击的触发跳转的元素,tar是要跳转的目标位置(也是目标元素)
    var target = 0;

    ele.onclick = function () {
        if (document.body.scrollTop > tar.offsetTop) {
            clearInterval(timer);
            var timer = setInterval(function () {
                target = document.body.scrollTop - 50;
                window.scrollTo(tar.offsetTop, target);
                if (parseInt(target) < tar.offsetTop) {
                    window.scroll(tar.offsetTop, tar.offsetTop);
                    clearInterval(timer);
                }
                leftbar.style.display = "block";
            }, 1);
        } else if (document.body.scrollTop < tar.offsetTop) {
            clearInterval(timer);
            var timer = setInterval(function () {
                target = document.body.scrollTop + 50;
                window.scrollTo(tar.offsetTop, target);
                if (parseInt(target) > tar.offsetTop - 50) {
                    window.scroll(tar.offsetTop, tar.offsetTop);
                    clearInterval(timer);
                }
                leftbar.style.display = "block";
            }, 1);
        }
    };
}


//            今日推荐轮播图js部分设置开始
var todayScroll = document.getElementById("today_scroll");
var todayUl = todayScroll.children[0];
var items = todayUl.children;
var arrow = todayScroll.children[1];
var arrowL = arrow.children[0];
var arrowR = arrow.children[1];
var target = 0, leader = 0;

todayScroll.onmouseover = function () {
    arrow.style.display = "block";
};
todayScroll.onmouseout = function () {
    arrow.style.display = "none";
};

arrowL.onclick = function () {
    target += 252;
};
arrowR.onclick = function () {
    target -= 252;
};
setInterval(function () {
    if (target < -2015) {
        target = 0;
    } else if (target > 0) {
        target = -1764;
    }
    leader = leader + (target - leader) / 10;
    todayUl.style.left = leader + "px";
}, 1);
//            今日推荐轮播图js部分设置结束

//            明星单品轮播图js部分开始
var starScroll = document.getElementById("star_scroll");
var starUl = starScroll.children[0];
var starArrow = document.getElementById("star_arrow");
var starL = starArrow.children[0];
var starR = starArrow.children[1];
var targets = 0, leaders = 0;

starL.onclick = function () {
    targets += 200;
};
starR.onclick = function () {
    targets -= 200;
};
setInterval(function () {
    if (targets < -2399) {
        targets = 0;
    } else if (targets > 0) {
        targets = -2200;
    }
    leaders = leaders + (targets - leaders) / 30;
    starUl.style.left = leaders + "px";
});
//            明星单品轮播图js部分结束


var register = document.getElementById("register");
var maskReg = document.getElementById("mask_reg");
var registerShow = document.getElementById("register_show");
var close = document.getElementById("close");
var comRegister = document.getElementById("com_register");
var shortRegister = document.getElementById("short_register");









//普通登录注册
comRegister.onclick = function (event) {
    maskReg.style.display = "block";
    registerShow.style.display = "block";
    maskLog.style.display = "none";
    logShow.style.display = "none";

    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};
//快捷登录注册
shortRegister.onclick = function (event) {
    maskReg.style.display = "block";
    registerShow.style.display = "block";
    maskLog.style.display = "none";
    logShow.style.display = "none";

    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};
//点击注册
register.onclick = function (event) {
    maskReg.style.display = "block";
    registerShow.style.display = "block";

//                防止冒泡事件
//                document.body.style.overflow = "hidden";
    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};
//关闭注册框
close.onclick = function () {
    maskReg.style.display = "none";
    registerShow.style.display = "none";
};
//            注册框js部分结束

//            登录框js部分开始
var login = document.getElementById("login");
var maskLog = document.getElementById("mask_log");
var logShow = document.getElementById("log_show");
var logClose = document.getElementById("log_close");
var common = document.getElementById("common");
var shortcut = document.getElementById("shortcut");
var commonLog = document.getElementById("common_log");
var shortcutLog = document.getElementById("shortcut_log");

//普通登录
common.onclick = function () {
    common.style.color = "red";
    common.style.borderBottom = "3px solid red";
    shortcut.style.color = "white";
    shortcut.style.borderBottom = "0px solid red";
    commonLog.style.display = "block";
    shortcutLog.style.display = "none";
};
//快捷登录
shortcut.onclick = function () {
    shortcut.style.color = "red";
    shortcut.style.borderBottom = "3px solid red";
    common.style.color = "white";
    common.style.borderBottom = "0px solid red";
    shortcutLog.style.display = "block";
    commonLog.style.display = "none";
};

login.onclick = function (event) {
    maskLog.style.display = "block";
    logShow.style.display = "block";

    var event = event || window.event;
    if (event && event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
};
//点击关闭登录框
logClose.onclick = function () {
    maskLog.style.display = "none";
    logShow.style.display = "none";
};
//            登录框js部分结束

//            注册数据js部分开始
var username = document.getElementById("username");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var regBtn = document.getElementById("reg_btn");
var pTag = document.getElementById("p_tag");
var check = document.getElementById("check");
var checkBox = document.getElementById("check_box");
var change = document.getElementById("change");
var pic = document.getElementById("pic");

var arr = ["yanzhengma0.png", "yanzhengma1.png", "yanzhengma2.png", "yanzhengma3.png", "yanzhengma4.png", "yanzhengma5.png", "yanzhengma6.png", "yanzhengma7.png", "yanzhengma8.png", "yanzhengma9.png"];
var arrn = ["a8qb", "2y4u", "rftq", "j5pf", "oded", "plwz", "uv6f", "09yk", "4co9", "ux3s"];
var index = 0;
change.onclick = function () {
    index++;
    if (index > 9) {
        index = 0;
    }
    pic.src = "images/" + arr[index];
};

var storage = window.localStorage;
var ishaving = true;
regBtn.onclick = function () {
    var uname = username.value;
    var pwd = password.value;
    var repwd = repassword.value;

    for (var i = 0; i < storage.length; i++) {
        if (uname == storage.key(i)) {
            //console.log("用户名已经存在");
            alert("账号已经存在,请重新输入 账号");
            ishaving = false;
            break;
        }
    }
    if (ishaving) {
        if (uname != "" && pwd != "" && repwd != "") {
            if (pwd == repwd) {
                if (checkBox.checked == true) {
                    if (check.value == arrn[index]) {
                        saveMessage(uname, pwd);
                        pTag.innerHTML = "注册成功";
                        setTimeout(function close() {
                            maskReg.style.display = "none";
                            registerShow.style.display = "none";
                            maskLog.style.display = "block";
                            logShow.style.display = "block";
                        }, 3000);
                    } else {
                        pTag.innerHTML = "验证码错误";
                    }
                } else {
                    pTag.innerHTML = "请认真阅读使用条款和隐私政策权";
                }
            } else {
                pTag.innerHTML = "两次密码不一致";
            }
        } else {
            pTag.innerHTML = "输入不能为空";
        }
    }
    //下面这段可以用作修改密码
    //if(uname != "" && pwd != "" && repwd != ""){
    //
    //        if(pwd == repwd){
    //            if(checkBox.checked == true){
    //                saveMessage(uname,pwd);
    //                pTag.innerHTML = "注册成功";
    //
    //                setTimeout(function close(){
    //                    maskReg.style.display = "none";
    //                    registerShow.style.display = "none";
    //                    maskLog.style.display = "block";
    //                    logShow.style.display = "block";
    //                },3000);
    //            }else{
    //                pTag.innerHTML = "请认真阅读使用条款和隐私政策权";
    //            }
    //        }else{
    //            pTag.innerHTML = "两次密码不一致";
    //        }
    //}else{
    //    pTag.innerHTML = "输入不能为空";
    //}
};
function saveMessage(username, password) {
    localStorage.setItem(username, password);
}
//            注册数据js部分结束

//            普通登录js部分设置开始
var comlogUname = document.getElementById("comlog_uname");
var comlogPwd = document.getElementById("comlog_pwd");
var comlogCkeck = document.getElementById("comlog_check");
var comlogBtn = document.getElementById("comlog_btn");
var comlogTag = document.getElementById("comlog_tag");
var yi = document.getElementById("yi");
var er = document.getElementById("er");
var san = document.getElementById("san");
var hide = document.getElementById("hide");

yi.onmouseover = function () {
    hide.style.display = "block";
    hide.onmouseover = function () {
        hide.style.display = "block";
    };
    hide.onmouseout = function () {
        hide.style.display = "none";
    }
};
yi.onmouseout = function () {
    hide.style.display = "none";
};

comlogBtn.onclick = function () {//此处修改..................................................
    var nameval = comlogUname.value;
    var pwdval = comlogPwd.value;
    var storage = window.localStorage;
    console.log(storage);
    for (var i = 0; i < storage.length; i++) {
        if (nameval == storage.key(i)) {
            //console.log("用户名已经存在");
            ishaving = false;
            if (storage.key(i) == nameval && storage.getItem(storage.key(i)) == pwdval) {
                getMessage(comlogUname.value, comlogPwd.value);
            } else {
                comlogTag.innerHTML = "密码错误";
            }

            break;
        }
    }
    if (ishaving) {
        alert("账号不存在,您可以注册");
    }
};
function getMessage(username, password) {
    comlogTag.innerHTML = "登录成功";
    localStorage.getItem(username, password);
    yi.innerHTML = "你好啊!  " + username;
    er.style.display = "none";
    san.style.display = "none";


    setTimeout(function close() {
        maskLog.style.display = "none";
        logShow.style.display = "none";
    }, 3000);
}

//            普通登录js部分设置结束

//            快捷登录js部分设置开始
var shortlogUname = document.getElementById("shortlog_uname");
var shortlogCkeck = document.getElementById("shortlog_check");
var shortlogBtn = document.getElementById("shortlog_btn");
var shortlogTag = document.getElementById("shortlog_tag");

shortlogBtn.onclick = function () {//........................................................
    var namevalue = shortlogUname.value;
    //console.log(namevalue);
    var storage = window.localStorage;
    if (checkPhone(namevalue)) {
        for (var i = 0; i < storage.length; i++) {
            if (storage.key(i) == namevalue) {
                getMessage(shortlogUname.value);
            } else {
                shortlogTag.innerHTML = "登录失败";
            }
        }
    }
};
//手机验证码倒计时开始
var changepwd = document.getElementById("changepwd");
var changenum = document.getElementById("changenum");
changepwd.onclick = function () {
    var value = shortlogUname.value;

    if (checkPhone(value)) {
        changepwd.innerHTML = " 秒后重新获取";
        changenum.innerHTML = 10;
        changenum.style.color = "#666";
        var changetime = setInterval(function () {
            if (changenum.innerHTML == 0) {
                changenum.innerHTML = null;
                changepwd.innerHTML = "获取动态密码";
                clearInterval(changetime);
                return false;
            }
            if (changenum.innerHTML > 6) {
                //alert("5miao")
                changenum.style.color = "#666";
            } else {
                changenum.style.color = "red";
            }
            changenum.innerHTML--;
        }, 1000);
    }
};
//手机验证码倒计时结束
function getMessages(username) {
    shortlogTag.innerHTML = "登录成功";
    localStorage.getItem(username);
    yi.innerHTML = "你好啊!  " + username;
    er.style.display = "none";

    setTimeout(function close() {
        maskLog.style.display = "none";
        logShow.style.display = "none";
    }, 3000);
}

//检测手机号码格式是否正确
function checkPhone(num) {

    if (!(/^1(3|4|5|7|8)\d{9}$/.test(num))) {
        alert("手机号码有误，请重填");
        return false;
    } else {
        return true;
    }
}


//            快捷登录js部分设置结束