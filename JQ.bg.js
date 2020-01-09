// $.fn.方法名 = 处理函数

// jQuery.fn.方法名 = 处理函数

// $.prototype.方法名 = 处理函数

// jQuery.prototype.方法名 = 处理函数
//$.fn/$.prototype/jQuery.fn/jQuery.prototype.方法名  = function() {}

(function(){
    $.prototype.bg=function(cssvalue){
        this.css('background',cssvalue)
        return this
    }
})()