// 工具类
/**
 * 通过类名获取标签
 * @param parentNode 父元素
 * @param className 类名
 * @returns {*} 找到的子元素
 */
function getElementsClassName(parentNode,className) {
    // 兼容处理
    /*if (parentNode == null){
        parentNode = document;
    }*/
    var parentNode = parentNode || document;

    if (parentNode.getElementsByClassName){
        // IE9+
        return parentNode.getElementsByClassName(className);
    }else {
        // IE9一下
        var allEle = parentNode.getElementsByTagName('*');
        var arr = [];
        for(var i = 0;  i < allEle.length; i++){
            var ele = allEle[i];
            if (ele.className == className){
                // 是我们需要的元素
                arr.push(ele);
            }
        }
        return arr;
    }
}
// 快速生成参数返回值的快捷键 /** + enter
/**
 * 通过id名称获取元素
 * @param id id名称
 * @returns {Element}
 */
/*function $(id) {
    return document.getElementById(id);
}*/
/**
 * 根据选择器获取标签
 * @param select 选择器
 * @returns {NodeList} 获取到的标签 伪数组
 */
function $(select) {
    var list = document.querySelectorAll(select);
    if (list.length == 1){
        return list[0];
    }

    return list;
}

/**
 * 遍历列表
 * @param list 列表
 * @param callback 回调函数
 */
function each(list,callback) {
    for (var i = 0; i<list.length; i++){
        var li = list[i];
        // 最大的问题就在于函数名应该是变化的
        callback(li,i);
    }
}

/**
 * 获取滚动距离
 */
function scroll() {
    if (window.pageYOffset || window.pageXOffset){
        // IE9+ 和最新的
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        };
    }else if (document.compatMode == 'CSS1Compat'){
        // w3c 标准
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else {
        // 怪异
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}

/**
 * 获取视口的宽度和高度
 */
function clinet() {
    if (window.innerWidth || window.innerHeight){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }else if (document.compatMode == 'CSS1Compat'){
        // w3c
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }else  {
        // 怪异模式
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}

/**
 * 匀速动画
 * @param obj 要做动画的对象
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj, speed, target) {
    var offsetX = obj.offsetLeft;
    var dir = speed;
    if (offsetX <= target){
        // 向右走
        dir = speed;
    }else {
        dir = -speed;
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        offsetX += dir;

        if (Math.abs(target - offsetX) <= speed) {
            clearInterval(obj.timer);
            offsetX = target;
        }

        obj.style.left = offsetX + 'px';
    },10);
}

/**
 * 缓动动画
 * @param obj 要做懂行的标签
 * @param data 哪些值要做动画 传对象
 * @param callback 动画做完之后要做的事情 回调函数
 */
function buffer(obj,data,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 定义标志 记录当前所有的值都到达目标值
        // 如果所有的值都到达目标值 就是true
        /// 如果有一个值没有到达目标值就设置为false
        var flag = true;
        for (var key in data){
            var begin = 0;
            var target = 0;
            if (key == 'scrollTop'){
                begin = obj.scrollTop;
                target = data[key];
            }else {
                // 获取初始值
                begin = parseFloat(getStyleAttr(obj,key)) || 0;
                // 获取目标值
                target = data[key];
            }

            var speed = (target - begin) / 10;

            if (begin <= target){
                // 往右走
                // 向上取整 因为如果小于0.4 就加不上了
                speed = Math.ceil(speed);
            }else {
                // 往左走
                speed = Math.floor(speed);
            }
            begin = begin + speed;
            // console.log(begin,speed);
            if (Math.round(begin) == target){
                begin = target;
            }else {
                flag = false;
            }
            if (key == 'scrollTop'){
                obj.scrollTop = begin;
            }else {
                obj.style[key] = begin + 'px';
            }
        }
        if (flag){
            clearInterval(obj.timer);
            // 动画做完了
            if (callback) callback();
//                callback && callback();
        }
    },10);
}

/**
 * 根据属性名称获取属性值
 * @param obj 要获取的标签
 * @param attr 属性名称
 * @returns {*} 属性值
 */
function getStyleAttr(obj, attr) {
    if(obj.currentStyle){ // IE 和 opera
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj, null)[attr];
    }
}