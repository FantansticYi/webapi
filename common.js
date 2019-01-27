function my$(id){
    return document.getElementById(id);
}


//设置任意标签的文本内容
function setInnerText(element,text){
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
//获取任意标签中间的文本内容
function getInnerText(element){
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}



//获取任意一个父级元素的第一个子级元素
function getFirstElementChild(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node=element.firstChild;
        while(node&&node.nodeType!==1){
            node=node.nextSibling;
        }
        return node;
    }
}

//获取任意一个父级元素的最后一个子级元素
function getLastElementChild(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.nodeType!==1){
            node=node.previousSibling;
        }
        return node;
    }
}



//为任意元素绑定任意的事件.元素，事件类型，事件处理函数
function addEventListener(element,type,fn){
    //判断浏览器是否支持这个方法
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attacEvent){
        element.attacEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}


//绑定事件的兼容
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}

//解绑事件的兼容
function removeEventListener(element,type,fnName){
    if(element.removeEventListener){
        element.removeEventListener(type,fnName,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fnName);
    }else{
        element["on"+type]=null;
    }
}


//浏览器滚动事件
function getScroll(){
    return{
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0
    };
}




var evt={
    //window.event和事件参数对象e的兼容
    getEvent:function(evt){
        return window.event||evt;
    },
    //可视区域的横坐标的兼容代码
    getClientX:function(evt){
        return this.getEvent(evt).clientX;
    },
    //可视区域的纵坐标的兼容代码
    getClientY:function(evt){
        return this.getEvent(evt).clientY;
    },
    //页面向左卷曲出去的横坐标
    getScrollLeft:function(){
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //页面向上卷曲出去的纵坐标
    getScrollTop:function () {
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    //相对于页面的横坐标（pagex或者是clientX+scrollLeft）
    getPageX:function(evt){
        return this.getEvent(evt).pageX?this.getEvent(evt).pageX:this.getClientX(evt)+this.getScrollLeft();
    },
    //相对于页面的纵坐标（pageY或者是clientY+scrollTop）
    getPageY:function(evt){
        return this.getEvent(evt).pageY?this.getEvent(evt).pageY:this.getClientY(evt)+this.getScrollTop();
    }
};