// 预警数
    var warningNumber_url='/backstage_detect/thirdlevelnum/';// first second third --默认排序方式请求三级预警的
    public_ajax.call_request('get',warningNumber_url,warningNumber);

    function warningNumber(data){
        if(data){
            // numList(4632,632,463);
            numList(data.all,data.sh,data.sz);
        }
    }

// 适配分辨率
    var pageData=6;
    if (screen.width <= 1536){
        pageData=6;
    }else {
        pageData=15;
    }

// 预警表格
    var earlyWarning_url='/backstage_detect/thirdleveltable/'; // ----默认请求三级预警的
    public_ajax.call_request('get',earlyWarning_url,earlyWarning);

    function earlyWarning(data) {
        $('#recordingTable').bootstrapTable('load', data);
        $('#recordingTable').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: pageData,//单页记录数
            pageList: [15,20,25],//分页步进值
            sidePagination: "client",//服务端分页
            searchAlign: "left",
            searchOnEnterKey: false,//回车搜索
            showRefresh: false,//刷新按钮
            showColumns: false,//列选择按钮
            buttonsAlign: "right",//按钮对齐方式
            locale: "zh-CN",//中文支持
            detailView: false,
            showToggle:false,
            sortName:'bci',
            sortOrder:"desc",
            // showLoading:true,
            columns: [
                {
                    title: "股票名称",//标题
                    field: "stock_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // var stock_name = '';

                        // if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                        //     return '未知';
                        // }else if(row.stock_name.length >=5){
                        //     stock_name = row.stock_name.slice(0,5)+'...';
                        //     return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // }else {
                        //     stock_name = row.stock_name;
                        //     return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // };
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
                        };
                    }
                },
                {
                    title: "股票代码",//标题
                    field: "stock_id",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {

                        if (row.stock_id==''||row.stock_id=='null'||row.stock_id=='unknown'||!row.stock_id){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
                        };
                    }
                },
                {
                    title: "操纵类型",//标题
                    field: "manipulate_type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_type==''||row.manipulate_type=='null' || row.manipulate_type==null ||row.manipulate_type=='unknown'||!row.manipulate_type){
                            return '未知';
                        }else {
                            return row.manipulate_type;
                        };

                        // var manipulateType = '';
                        // if (row.manipulate_type==''||row.manipulate_type=='null' || row.manipulate_type==null ||row.manipulate_type=='unknown'||!row.manipulate_type){
                        //     return '未知';
                        // }else if(row.manipulate_type.length >=5){
                        //     manipulateType = row.manipulate_type.slice(0,5)+'...';
                        //     return '<span style="cursor:pointer;" title="'+row.manipulate_type+'">'+manipulateType+'</span>';
                        // }else {
                        //     manipulateType = row.manipulate_type;
                        //     return '<span style="cursor:pointer;" title="'+row.manipulate_type+'">'+manipulateType+'</span>';
                        // };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "status",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.status==''||row.status=='null' || row.status==null ||row.status=='unknown'||!row.status){
                            return '未知';
                        }else {
                            return row.status.replace(/'操纵'/g,'');
                        };
                    }
                },
                {
                    title: "开始时间",//标题
                    field: "start_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.start_date==''||row.start_date=='null' || row.start_date==null ||row.start_date=='unknown'||!row.start_date){
                            return '未知';
                        }else {
                            return row.start_date;
                        };
                    }

                },
                {
                    title: "结束时间",//标题
                    field: "end_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.end_date==''||row.end_date=='null' || row.end_date==null ||row.end_date=='unknown'||!row.end_date){
                            return '未知';
                        }else {
                            return row.end_date;
                        };
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.industry==''||row.industry=='null' || row.industry==null ||row.industry=='unknown'||!row.industry){
                        //     return '未知';
                        // }else {
                        //     return row.industry;
                        // };

                        var industryName = '';
                        if (row.industry==''||row.industry=='null' || row.industry==null ||row.industry=='unknown'||!row.industry){
                            return '未知';
                        }else if(row.industry.length >=10){
                            industryName = row.industry.slice(0,10)+'...';
                            return '<span style="cursor:pointer;" title="'+row.industry+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry;
                            return '<span style="cursor:pointer;" title="'+row.industry+'">'+industryName+'</span>';
                        };
                    }
                },
                {
                    title: "最大涨幅",//标题
                    field: "increase_amount_max",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increaseRatio;
                        if(row.increase_amount_max === 0){
                            return '0%';
                        }else if (row.increase_amount_max==''||row.increase_amount_max=='null'||row.increase_amount_max=='unknown'||!row.increase_amount_max){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_amount_max *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "是否证监会判罚",//标题
                    field: "ifpunish",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.ifpunish==''||row.ifpunish=='null' || row.ifpunish==null ||row.ifpunish=='unknown'||!row.ifpunish){
                            return '未知';
                        }else {
                            return row.ifpunish;
                        };
                    }
                },
                {
                    title: "是否操纵",//标题
                    field: "ifpunish",//键名 ifmanipulate
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifpunish == 0 || row.ifpunish == '否'){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifpunish == 1 || row.ifpunish == '是'){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
                    }
                },
                {
                    title: "是否处理",//标题
                    field: "ifpunish",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifpunish == 0 || row.ifpunish == '否'){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_2d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_2d'+(index+1)+'"></label>';
                        }else if(row.ifpunish == 1 || row.ifpunish == '是'){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_2d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_2d'+(index+1)+'"></label>';
                        }
                        return str;
                    }
                },
                {
                    title: "监测详情",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                    }
                },
            ],
            formatNoMatches: function(){
                return "没有相关的匹配结果";  //没 效果
            },
            formatLoadingMessage: function(){
                return "请稍等，正在加载中。。。";
            },
        });
        $('#recordingTable center.loading').hide();
        $('.recordingTable .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };
    // earlyWarning(bigMainpulateData);

// 跳转详情页
    function jumpFrame_1(stock, id, manipulate_type_num) {
        var html = '';
        stock=escape(stock);
        html='/index/setDetail?stock='+stock+'&id='+id +'&manipulate_type_num='+manipulate_type_num;
        // window.location.href=html;
        window.open(html);
    }

// 是否操纵
$('#recordingTable').on('change','input.chk',function(){
    var _id = $(this).attr('_id');
    // console.log($(this).is(':checked'));
    var ifmanipulate = '';
    if($(this).is(':checked')){
        ifmanipulate = '1';
    }else {
        ifmanipulate = '0';
    }

    var rumanUser_url = '/maniPulate/manipulateWarningUser?id='+_id+'&ifmanipulate='+ifmanipulate;
    public_ajax.call_request('get',rumanUser_url,rumanUser);
})
function rumanUser(data){
    if(data.status == 'ok'){
        $('#success .modal-body p').empty().text('修改成功');
        $('#success').modal('show');
        $('.modal-backdrop').css({position:'static'});
    }else {
        $('#success .modal-body p').empty().text('修改失败');
        $('#success').modal('show');
        $('.modal-backdrop').css({position:'static'});
    }
    // 模态框关闭之后重新请求表格
    $('#Success').on('hidden.bs.modal', function () {
        public_ajax.call_request('get',earlyWarning_url,earlyWarning);
    })
}


//下拉菜单
$(function(){
    $(".selectBox .imitationSelect").on("click",function(){
        $(this).parent().next().toggle();//ul弹窗展开
        $(this).next().toggleClass("fa-caret-up")//点击input选择适合，小图标动态切换
        if (event.stopPropagation) {
            // 针对 Mozilla 和 Opera
            event.stopPropagation();
        }else if (window.event) {
            // 针对 IE
            window.event.cancelBubble = true;
        }   /*阻止事件传播，事件从点击的元素出发，向外（window）传播，
						如果不写个阻止事件，会导致下面的document点击函数一起执行，导致显示失败*/

    });
    $(".selectUl li").click(function(event){
        $(this).addClass("actived_li").siblings().removeClass("actived_li");//点击当前的添加。actived_li这个类；其他的移除这个类名
        var oliName = $(this).attr("oliName");//定义一个name属性，获取点击的元素属性赋值到当前，方便动态化传值
        var oliId = $(this).attr("oliId");//定义一个id属性，获取点击的元素属性赋值到当前，方便动态化传值
        $(this).parent().prev().children().val(oliName); //把当前点击的name赋值到显示的input的val里面
        $(this).parent().prev().children().attr("oliName",oliName);//把当前点击的oliName赋值到显示的input的oliName里面
        $(this).parent().prev().children().attr("oliId",oliId);//把当前点击的oliId赋值到显示的input的oliId里面
    });
    $(document).click(function(event){
        $(".inputCase .fa").removeClass("fa-caret-up").addClass("fa-caret-down")//当点隐藏ul弹窗时候，把小图标恢复原状
        $(".selectUl").hide();//当点击空白处，隐藏ul弹窗
    });

})

