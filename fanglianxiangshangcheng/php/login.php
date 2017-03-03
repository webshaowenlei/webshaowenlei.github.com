<?php

//在这里判断 输入的用户名和密码是否存在并且是否匹配，验证登录是否成功
$username = $_POST['username'];
$password = $_POST['password'];

//Php操作数据库
//01
$mysqli = new mysqli('localhost','root','','swldwzco_swldwzco');
$mysqli->set_charset('utf8');

//02
$sql = "select * from register_user where username='$username';";
echo $sql;
//因为字段username 是唯一的，所以sql语句查询到的结果数只可能是0或者1

/*
$sql = "select * from register_user where username='$username' and password='$password'";
$result = $mysqli->query($sql);
if($result->num_rows!=0){
    echo '<script>alert("登录成功!")</script>';
}else{
    echo '<script>alert("登录失败！");
    location.href = "02-login.html";
    </script>';
}
*/


//03

$result = $mysqli->query($sql);
echo '<pre>';
print_r($result);
echo '</pre>';
if ($result->num_rows == 0){
    //用户名不存在
    echo '<script>alert("用户名不存在!");
    location.href = "../index.html";
    </script>';
}else{
    //因为如果用户名存在，只可能有一条被查询出来的数据，所以不需要遍历了。
    $array = $result->fetch_assoc();
    if($array['password']==$password){
        echo '<script>alert("登录成功！");
    location.href = "../../index.html";
    </script>';
    }else{
        echo '<script>alert("密码错误！");
    location.href = "../index.html";
    </script>';
    }
}



