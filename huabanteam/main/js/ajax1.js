function get(date) {
    ajax(date)
}
function post(date) {
    ajax(date)
}
function ajax(date) {
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else {
        xhr=new ActiveXObject("Microsoft.XMLHTTP")
    }
    var url=date.url;
    url=decodeURI(url)+"?="+new Date().getTime();
   var arr=toArr(date.obj);
    if(date.type==="get"){
        url+="&"+arr.join("&");
        xhr.open("get",url,true);
        xhr.send();
    }else if(date.type==="post")
    {
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(arr.join("&"));
    }
    xhr.onreadystatechange=function () {
        clearTimeout(timer);
        if(xhr.readyState===4){
            if(xhr.status===200){
                date.successCallback(xhr);
            }else {
                date.failCallback(xhr);
            }
        }
    };
   var timeout=date.timeout||1500;
    var timer=setTimeout(function () {
        xhr.abort();//先取消网络请求
        alert("网络超时,请刷新!!!")
    },timeout)
}
function toArr(obj) {
    var arr=[];
    for (var key in obj){
        arr.push(key+"="+obj[key])
    };
    return arr
}