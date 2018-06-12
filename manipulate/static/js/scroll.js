/**
 * Created by being_ming on 2018/5/10.
 */
// JavaScript Document
(function($){
    $.fn.myScroll = function(options){
        //榛樿閰嶇疆
        var defaults = {
            speed:20,  //婊氬姩閫熷害,鍊艰秺澶ч€熷害瓒婃參
            rowHeight:options.liheight //姣忚鐨勯珮搴�
        };

        var opts = $.extend({}, defaults, options),intId = [];

        function marquee(obj, step){
            obj.find("ul").animate({
                marginTop: '-=1'
            },0,function(){
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if(s >= step){
                    $(this).find("li").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }
        for(var i=0;i<timeList2.length;i++){
            clearInterval(timeList2[i]);
        }

        this.each(function(i){
            var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
            marquee(_this, sh);
            setTimeout(function () {
                intId[i] = setInterval(function(){
                    if(_this.find("ul").height()<=_this.height()){
                        clearInterval(intId[i]);
                    }else{
                        marquee(_this, sh);
                    }
                }, speed);
                timeList2.push(intId[i]);
                _this.hover(function(){
                    clearInterval(intId[i]);
                },function(){
                    intId[i] = setInterval(function(){
                        if(_this.find("ul").height()<=_this.height()){
                            clearInterval(intId[i]);
                        }else{
                            marquee(_this, sh);
                        }
                    }, speed);
                    timeList2.push(intId[i]);
                });
            },500)

        });

    }
})(jQuery);