<?php

echo '<pre>';
var_dump($_POST);
echo '</pre>';

$username = $_POST['username'];
$password = $_POST['password'];


//php访问数据库
//采用面向对象的方式
//01 创建对象的同时初始化
$mysqli = new mysqli('localhost','root','','swldwzco_swldwzco');
$mysqli->set_charset('utf8');

//02 在swldwzco_swldwzco数据库下，创建一个新的表
$sql = "create table if not exists register_user(
    id int not null auto_increment primary key,
    username VARCHAR(40) not null,
    password varchar(18) not null,
)engine=InnoDB default charset=utf8;";
$success = $mysqli->query($sql);
isSuccess($success);

    //修改表的字段username类型为不能重复,增加字段属性unique
    $sql = "alter table register_user modify username VARCHAR(40) not null UNIQUE;";
    echo $sql.'<br>';
    $result = $mysqli->query($sql);
    isSuccess($result);

    //把字符串类型的变量，转成整数类型
    $age = intval($age);
    $sql = "insert into register_user (username,password) VALUES('$username','$password');";
    echo $sql;

    if ($mysqli->query($sql)){
        echo '插入成功';
        echo '<script>
            alert("注册成功!");
            //js中本地跳转到某个指定超链接
            location.href = "../index.html";
            </script>';
//        header('location:02-login.html');

    }else{
        echo '插入失败';
        echo '<script>
        alert("用户名已存在，请重新注册!");
        location.href = "../index.html";
        </script>';
    }


//自定义函数 用于判断 数据库操作是否成功
function isSuccess($value){
    if ($value){
        echo '<h1>成功</h1>';
    }else {
        echo ('失败').'<br>';
    }
}
