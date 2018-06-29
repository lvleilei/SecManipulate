function goUp(idNum,_no) {
    $('.scrollContent').empty();
    var str='';
    $.each(idNum,function (index,row) {
        var n1=row['股票名称'],
            n2=row['股票代码'],
            n3=row['开始时间'],n4=row['结束时间'],n5=row['操纵类型'],
            n6=row['所属行业'],n7=row['最大涨幅'],n8=row['操纵状态'],
            n9=row['预警等级'],
            n11=row['是否新增'],
            n10=(row['预警指数']),color;
        var hangye='';
        if(n6.length>16){
            hangye = n6.slice(0,15)+'...';
        }else {
            hangye =n6;
        };
        if(n5.length>8){
            n5 = n5.slice(0,7)+'...';
        };
        n7=Number(n7*100).toFixed(2)+'%';
        var png='j'+_no+'.png';

        if(n11 == 1 || n11 == '1'){//是新增预警
            str+='<li><img class="warningLight" src="/static/images/'+png+'"><span>'+n1+'</span><span>'+n2+'</span><span>'+n3+'</span><span>'+n4+
            '</span><span>'+n5+'</span><span title="'+n6+'">'+hangye+ '</span><span>'+n7+'</span><span>'+n8+'</span><span>'+n9+'</span><span>'+n10+'</span></li>';
        }else {
            str+='<li><span>'+n1+'</span><span>'+n2+'</span><span>'+n3+'</span><span>'+n4+
            '</span><span title="'+n5+'">'+n5+'</span><span title="'+n6+'">'+hangye+ '</span><span>'+n7+'</span><span>'+n8+'</span><span>'+n9+'</span><span>'+n10+'</span></li>';
        }
        // str+='<li><img class="warningLight" src="/static/images/'+png+'"><span>'+n1+'</span><span>'+n2+'</span><span>'+n3+'</span><span>'+n4+
        //     '</span><span>'+n5+'</span><span title="'+n6+'">'+hangye+ '</span><span>'+n7+'</span><span>'+n8+'</span><span>'+n9+'</span><span>'+n10+'</span></li>';
    });
    var sHtml=
        '<div class="list_lh">'+
        '    <div class="newsDown" style="overflow: hidden;">'+
        '        <ul class="newsContent">'+str+'</ul>'+
        '    </div>'+
        '</div>';
    $('.scrollContent').html(sHtml);
    // $('#container #content .list_lh .newsDown').css({height:$(window).height()*0.5});
    $('#container #content .list_lh .newsDown').css({height:$(window).height()*0.6});
    //var lih=$('#container #content .list_lh li').height();
    // $("div.list_lh").myScroll({
    //     speed:20, //数值越大，速度越慢
    //     rowHeight:lih, //li的高度
    //     liheight:lih
    // });
    $("div.list_lh").slide({mainCell:".newsContent",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});
    $('#container #content .list_lh li').css({height:'36px'});

}
