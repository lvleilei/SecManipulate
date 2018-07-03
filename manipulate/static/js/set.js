// 操纵详情 页 js
// 2018-7-2 10:01:20

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

// ===========================
stock = '南风股份';

var pageSizeData = 10;
if(screen.width<1920){
    pageSizeData = 5;
}

// 基本信息
    var gongshang_url = '/maniPulate/manipulateReport/gongshang/?id=' + id;
    // public_ajax.call_request('get',gongshang_url,gongshang);
    var gongshangData = {
        plate: "创业板",
        name: "南方风机股份有限公司",
        money: "5.09219亿",
        industry: "制造业",
        kind: "民营企业",
        start_date: "1999年05月24日",
        person: "杨子善",
        place: "广东省佛山市"
    };

    function gongshang(data){
        if(data){
            var name = '未知';
            var place = '未知';
            var start_date = '未知';
            var industry = '未知';

            var money = '未知';
            var person = '未知';
            var kind = '未知';
            var plate = '未知';

            if(data.name && data.name!= '' && data.name!=null){name = data.name};
            if(data.place && data.place!= '' && data.place!=null){place = data.place};
            if(data.start_date && data.start_date!= '' && data.start_date!=null){start_date = data.start_date};
            if(data.industry && data.industry!= '' && data.industry!=null){industry = data.industry};

            if(data.money && data.money!= '' && data.money!=null){money = data.money};
            if(data.person && data.person!= '' && data.person!=null){person = data.person};
            if(data.kind && data.kind!= '' && data.kind!=null){kind = data.kind};
            if(data.plate && data.plate!= '' && data.plate!=null){plate = data.plate};

            $('#card .type-1').text(name).attr('title',name);
            $('#card .type-2').text(place).attr('title',place);
            $('#card .type-3').text(start_date).attr('title',start_date);
            $('#card .type-4').text(industry).attr('title',industry);
            $('#card .type-5').text(money).attr('title',money);
            $('#card .type-6').text(person).attr('title',person);
            $('#card .type-7').text(kind).attr('title',kind);
            $('#card .type-8').text(plate).attr('title',plate);
        }
    }
    gongshang(gongshangData);

// 操纵详情   历史记录 //暂隐藏  改为标题下拉
    // var loadingHtml = '<center class="loading">正在加载中...</center>';
    // $('#Manipulating_details_content').append(loadingHtml);

    var history_url = '/maniPulate/manipulateReport/history/?id=' + id;
    // public_ajax.call_request('get',history_url,table1);

    // 历史预警：上市公司伙同他人操纵：2017年1月20日至2018年5月16日
    // 内幕操纵：2018年1月10日至2018年2月2日
    var table1Data =[
        {
            increase_ratio: -0.470543,
            // manipulate_type: "定向增发",
            manipulate_type: "上市公司伙同他人操纵",
            manipulate_type_num: 1,
            end_date: "2018-05-16",
            ifthis: 1,
            id: 3519,
            start_date: "2017-01-20",
            manipulate_state: "已完成操纵",
            name: "南风股份(300004)"
        },
        {
            increase_ratio: 0.105675,
            // manipulate_type: "尾盘操纵",
            // manipulate_type: "内幕操纵",
            manipulate_type: "内幕交易",
            manipulate_type_num: 0,
            end_date: "2018-02-02",
            ifthis: 0,
            id: 3520,
            start_date: "2018-01-10",
            manipulate_state: "已完成操纵",
            name: "南风股份(300004)"
        }
    ]

    if(id == '3520'){//内幕交易那条记录
        table1Data = [
            {
            increase_ratio: 0.105675,
            // manipulate_type: "尾盘操纵",
            manipulate_type: "内幕交易",
            manipulate_type_num: 0,
            end_date: "2018-02-02",
            ifthis: 1,
            id: 3520,
            start_date: "2018-01-10",
            manipulate_state: "已完成操纵",
            name: "南风股份(300004)"
            },
            {
            increase_ratio: -0.470543,
            // manipulate_type: "伪市值管理",
            manipulate_type: "上市公司伙同他人操纵",
            manipulate_type_num: 1,
            end_date: "2018-05-16",
            ifthis: 0,
            id: 3519,
            start_date: "2017-01-20",
            manipulate_state: "已完成操纵",
            name: "南风股份(300004)"
            }
        ]
    }

    function table1(data) {
        $('#Manipulating_details_content').bootstrapTable('load', data);
        $('#Manipulating_details_content').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: 5,//单页记录数
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
            columns: [
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var manipulate_state = '';
                        if (row.manipulate_state==''||row.manipulate_state=='null'||row.manipulate_state=='unknown'||!row.manipulate_state){
                            manipulate_state =  '未知';
                        }else {
                            manipulate_state =  row.manipulate_state;
                        };
                        if(row.ifthis == 1){
                            return '<span class="theStock this-stock" title="'+manipulate_state+'">'+manipulate_state+'</span>';
                        }else {
                            // return manipulate_state;
                            return '<span class="theStock" title="'+manipulate_state+'">'+manipulate_state+'</span>';
                        }
                    }
                },
                {
                    title: "操纵时间",//标题
                    field: "start_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var date = '';
                        if (row.start_date==''||row.start_date=='null'||row.start_date=='unknown'||!row.start_date || row.end_date==''||row.end_date=='null'||row.end_date=='unknown'||!row.end_date){
                            date =  '未知';
                        }else {
                            date =  row.start_date + '~' + row.end_date;
                        };
                        if(row.ifthis == 1){
                            return '<span class="theStock this-stock" title="'+date+'">'+date+'</span>';
                        }else {
                            // return date;
                            return '<span class="theStock" title="'+date+'">'+date+'</span>';
                        }
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
                        var manipulate_type = '';
                        if (row.manipulate_type==''||row.manipulate_type=='null'||row.manipulate_type=='unknown'||!row.manipulate_type){
                            manipulate_type =  '未知';
                        }else {
                            manipulate_type =  row.manipulate_type;
                        };
                        if(row.ifthis == 1){
                            return '<span class="theStock this-stock" title="'+manipulate_type+'">'+manipulate_type+'</span>'
                            +'<span class="this-stock" style="cursor:pointer;display:inline-block;margin-left:5px;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i style="" class="fa fa-file-o"></i></span>';
                        }else {
                            // return manipulate_type;
                            return '<span class="theStock" title="'+manipulate_type+'">'+manipulate_type+'</span>'
                            +'<span class="" style="cursor:pointer;display:inline-block;margin-left:5px;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i style="" class="fa fa-file-o"></i></span>';
                        }
                    }
                },

                {
                    title: "涨幅",//标题
                    field: "increase_ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increase_ratio = '';
                        if(row.increase_ratio === 0){
                            increase_ratio = '0%';
                        }else if (row.increase_ratio=='null'||row.increase_ratio=='unknown'){
                            increase_ratio =  '未知';
                        }else {
                            increase_ratio =  row.increase_ratio;
                        };
                        if(row.ifthis == 1){
                            return '<span class="this-stock">'+increase_ratio+'</span>';
                        }else {
                            return increase_ratio;
                        }
                    }
                },
                {
                    title: "操纵详情",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if(row.ifthis == 1){
                            return '<span class="this-stock" style="cursor:pointer;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                        }else {
                            return '<span style="cursor:pointer;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                        }
                    }
                },
            ],
        });

        $('#Manipulating_details_content center.loading').hide();
    }
    // table1(table1Data); //暂隐藏  改为标题下拉

    // 跳转详情页
    function jumpFrame_1(stock, id, manipulate_type_num) {
        var html = '';
        stock=escape(stock);
        html='/index/setDetail?stock='+stock+'&id='+id +'&manipulate_type_num='+manipulate_type_num;
        // window.location.href=html;
        window.open(html);
    }

//舆情分析--------
    if(manipulate_type_num == 4){ //显示 虚假消息 舆情分析
        $('#False_message').show();
        $('#Public_opinion').show();
        // 虚假消息

            var rumantext_url = '/maniPulate/manipulateReport/rumantext/?id=' + id;
            public_ajax.call_request('get',rumantext_url,rumantext);
            function rumantext(data){
                $('#False_message p.False_content').empty().text(data.text);
                $('#False_message p.False_info .isType-1').text(data.ifrumor);
                $('#False_message p.False_info .isType-2').text(data.publish_time);
                $('#False_message p.False_info .isType-3').text(data.author);
                $('#False_message p.False_info .isType-4').text(data.source);
            }

        // 舆情分析
            var rumancomment_url = '/maniPulate/manipulateReport/rumancomment/?id=' + id;
            public_ajax.call_request('get',rumancomment_url,table5);
            var t5_data=[{'a':'2017.10.01 13:23','b':'微博','c':'所长别开枪是我','d':'国家发布雄安新区新资讯，新政策的颁布'},
                {'a':'2017.09.01 13:23','b':'股吧','c':'机智达人','d':'新能源汽车不断被尝试，多家公司涉足新'},
                {'a':'2017.08.01 13:23','b':'知乎','c':'沈小司司','d':'快递行业在政策促进下稳步前进，快递业'},
                {'a':'2017.07.01 13:23','b':'贴吧','c':'所长别开枪是我','d':'传统煤炭产业再度进入大众视线，能源产'},
                {'a':'2017.06.01 13:23','b':'微博','c':'机智达人','d':'北京市发布医疗改革新办法，医改给人们'},
            ];
            function table5(data) {
                $('#opinion').bootstrapTable('load', data);
                $('#opinion').bootstrapTable({
                    data:data,
                    search: true,//是否搜索
                    pagination: true,//是否分页
                    pageSize: pageSizeData,//单页记录数
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
                    columns: [
                        {
                            title: "时间",//标题
                            field: "publish_time",//键名
                            sortable: true,//是否可排序
                            order: "desc",//默认排序方式
                            align: "center",//水平
                            valign: "middle",//垂直
                        },
                        {
                            title: "发布者",//标题
                            field: "author",//键名
                            sortable: true,//是否可排序
                            order: "desc",//默认排序方式
                            align: "center",//水平
                            valign: "middle",//垂直
                            formatter: function (value, row, index) {
                                if (row.author==''||row.author=='null'||row.author=='unknown'||!row.author){
                                    return '-';
                                }else {
                                    return row.author;
                                };
                            }
                        },
                        {
                            title: "渠道",//标题
                            field: "source",//键名
                            sortable: true,//是否可排序
                            order: "desc",//默认排序方式
                            align: "center",//水平
                            valign: "middle",//垂直
                            formatter: function (value, row, index) {
                                if (row.source==''||row.source=='null'||row.source=='unknown'||!row.source){
                                    return '-';
                                }else {
                                    return row.source;
                                    // return '微博';
                                };
                            }
                        },
                        {
                            title: "内容",//标题
                            field: "text",//键名
                            sortable: true,//是否可排序
                            order: "desc",//默认排序方式
                            align: "center",//水平
                            valign: "middle",//垂直
                            formatter: function (value, row, index) {
                                if (row.text==''||row.text=='null'||row.text=='unknown'||!row.text){
                                    return '-';
                                }else {
                                    if(row.text.length>50){
                                        return '<span title="'+row.text+'">'+row.text.substring(0,150)+'...</span>';
                                    }else {
                                        return row.text;
                                    }
                                };
                            }
                        },
                    ],
                });
            }
            // table5(t5_data)
    }else {         //隐藏  虚假消息 舆情分析
        $('#False_message').hide();
        $('#Public_opinion').hide();

    }

// 股东减持
    // 上  方表格
        var shareHolders_content_data = [
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2015/5/20","变动股份数量":"-610000","变动原因":"大宗交易","变动比例(‰)":"2.3958","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2015/5/15","变动股份数量":"-1390000","变动原因":"大宗交易","变动比例(‰)":"5.4593","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子江","变动日期":"2015/3/11","变动股份数量":"-8000000","变动原因":"大宗交易","变动比例(‰)":"31.4207","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"刘基照","变动日期":"2015/2/27","变动股份数量":"-166113","变动原因":"竞价交易","变动比例(‰)":"0.6524","职务":"监事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"刘基照","变动日期":"2014/12/8","变动股份数量":"-63284","变动原因":"竞价交易","变动比例(‰)":"0.2486","职务":"监事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"刘基照","变动日期":"2014/11/28","变动股份数量":"-158200","变动原因":"竞价交易","变动比例(‰)":"0.6213","职务":"监事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2014/9/10","变动股份数量":"-5000000","变动原因":"大宗交易","变动比例(‰)":"19.6379","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2014/9/3","变动股份数量":"-6000000","变动原因":"大宗交易","变动比例(‰)":"23.5655","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2014/1/24","变动股份数量":"-3000000","变动原因":"大宗交易","变动比例(‰)":"15.9574","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"杨子善","变动日期":"2014/1/22","变动股份数量":"-1000000","变动原因":"大宗交易","变动比例(‰)":"5.3191","职务":"董事、高管"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"周燕敏","变动日期":"2013/9/6","变动股份数量":"-67001","变动原因":"竞价交易","变动比例(‰)":"0.3564","职务":"董事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"周燕敏","变动日期":"2013/9/4","变动股份数量":"-121999","变动原因":"竞价交易","变动比例(‰)":"0.6489","职务":"董事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"刘基照","变动日期":"2013/9/3","变动股份数量":"-108813","变动原因":"竞价交易","变动比例(‰)":"0.5788","职务":"监事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"周燕敏","变动日期":"2013/9/3","变动股份数量":"-29577","变动原因":"竞价交易","变动比例(‰)":"0.1573","职务":"董事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"周燕敏","变动日期":"2013/8/30","变动股份数量":"-1423","变动原因":"竞价交易","变动比例(‰)":"0.0076","职务":"董事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"刘基照","变动日期":"2013/8/28","变动股份数量":"-2600","变动原因":"竞价交易","变动比例(‰)":"0.0138","职务":"监事"},
            {"证券代码":"300004","证券简称":"南风股份","董监高姓名":"周燕敏","变动日期":"2013/8/28","变动股份数量":"-12800","变动原因":"竞价交易","变动比例(‰)":"0.0681","职务":"董事"}
        ]
        function shareHolders_content_table(data) {
            $('#shareHolders-content center.loading').show();

            $('#shareHolders-content').bootstrapTable('load', data);
            $('#shareHolders-content').bootstrapTable({
                data:data,
                search: true,//是否搜索
                pagination: true,//是否分页
                // pageSize: 5,//单页记录数
                // pageSize: pageSizeData,//单页记录数
                pageSize: 5,//单页记录数
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
                columns: [
                    {
                        title: "证券代码",//标题
                        field: "证券代码",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['证券代码']==''||row['证券代码']=='null'||row['证券代码']=='unknown'||!row['证券代码']||row['证券代码']=='none' || row['证券代码']=='None'){
                                return '-';
                            }else {
                                return row['证券代码'];
                            };
                        }
                    },
                    {
                        title: "证券简称",//标题
                        field: "证券简称",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['证券简称']==''||row['证券简称']=='null'||row['证券简称']=='unknown'||!row['证券简称']||row['证券简称']=='none' || row['证券简称']=='None'){
                                return '-';
                            }else {
                                return row['证券简称'];
                            };
                        }
                    },
                    {
                        title: "董监高姓名",//标题
                        field: "董监高姓名",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['董监高姓名']==''||row['董监高姓名']=='null'||row['董监高姓名']=='unknown'||!row['董监高姓名']||row['董监高姓名']=='none' || row['董监高姓名']=='None'){
                                return '-';
                            }else {
                                return row['董监高姓名'];
                            };
                        }
                    },
                    {
                        title: "变动日期",//标题
                        field: "变动日期",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['变动日期']==''||row['变动日期']=='null'||row['变动日期']=='unknown'||!row['变动日期']||row['变动日期']=='none' || row['变动日期']=='None'){
                                return '-';
                            }else {
                                return row['变动日期'];
                            };
                        }
                    },
                    {
                        title: "变动股份数",//标题
                        field: "变动股份数",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['变动股份数']==''||row['变动股份数']=='null'||row['变动股份数']=='unknown'||!row['变动股份数']||row['变动股份数']=='none' || row['变动股份数']=='None'){
                                return '-';
                            }else {
                                return row['变动股份数'];
                            };
                        }
                    },
                    {
                        title: "变动原因",//标题
                        field: "变动原因",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['变动原因']==''||row['变动原因']=='null'||row['变动原因']=='unknown'||!row['变动原因']||row['变动原因']=='none' || row['变动原因']=='None'){
                                return '-';
                            }else {
                                return row['变动原因'];
                            };
                        }
                    },
                    {
                        title: "变动比例(‰)",//标题
                        field: "变动比例(‰)",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['变动比例(‰)']==''||row['变动比例(‰)']=='null'||row['变动比例(‰)']=='unknown'||!row['变动比例(‰)']||row['变动比例(‰)']=='none' || row['变动比例(‰)']=='None'){
                                return '-';
                            }else {
                                return row['变动比例(‰)'];
                            };
                        }
                    },
                    {
                        title: "职务",//标题
                        field: "职务",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['职务']==''||row['职务']=='null'||row['职务']=='unknown'||!row['职务']||row['职务']=='none' || row['职务']=='None'){
                                return '-';
                            }else {
                                return row['职务'];
                            };
                        }
                    },
                ],
            });

            $('#shareHolders-content center.loading').hide();
        }
        shareHolders_content_table(shareHolders_content_data);
    // 图表 在html 判断内

// 股权质押
    // 上  方表格
        var stockRight_content_data = [
            {"股东名称":"杨泽文","质押方":"中国银河证券","质押股数(万股)":"800","参考市值(万元)":"7,320.00","质押起始日期":"2018/5/8","质押截止日期":"2018/10/17","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"长城国瑞证券","质押股数(万股)":"914","参考市值(万元)":"9,514.74","质押起始日期":"2018/1/4","质押截止日期":"2018/12/30","解押日期":"　"},
            {"股东名称":"仇云龙","质押方":"国泰君安证券","质押股数(万股)":"1,200.00","参考市值(万元)":"12,000.00","质押起始日期":"2017/11/29","质押截止日期":"2018/10/16","解押日期":"　"},
            {"股东名称":"仇云龙","质押方":"国泰君安证券","质押股数(万股)":"800","参考市值(万元)":"8,000.00","质押起始日期":"2017/11/29","质押截止日期":"2018/11/29","解押日期":"2018/3/23"},
            {"股东名称":"杨子善","质押方":"中国银河证券","质押股数(万股)":"74","参考市值(万元)":"737.04","质押起始日期":"2017/11/17","质押截止日期":"2017/12/22","解押日期":"2017/12/21"},
            {"股东名称":"仇云龙","质押方":"国泰君安证券","质押股数(万股)":"3,150.00","参考市值(万元)":"35,784.00","质押起始日期":"2017/10/16","质押截止日期":"2018/10/16","解押日期":"　"},
            {"股东名称":"杨子江","质押方":"中国银河证券","质押股数(万股)":"832","参考市值(万元)":"9,010.56","质押起始日期":"2017/7/26","质押截止日期":"2019/7/25","解押日期":"　"},
            {"股东名称":"杨泽文","质押方":"中国银河证券","质押股数(万股)":"220","参考市值(万元)":"2,369.40","质押起始日期":"2017/7/18","质押截止日期":"2018/9/18","解押日期":"　"},
            {"股东名称":"杨泽文","质押方":"中国银河证券","质押股数(万股)":"130","参考市值(万元)":"1,400.10","质押起始日期":"2017/7/18","质押截止日期":"2018/10/17","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"国泰君安证券","质押股数(万股)":"1,500.00","参考市值(万元)":"18,015.00","质押起始日期":"2017/6/29","质押截止日期":"2018/6/29","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"深圳市高新投集团","质押股数(万股)":"1,730.00","参考市值(万元)":"20,673.50","质押起始日期":"2017/6/27","质押截止日期":"　","解押日期":"　"},
            {"股东名称":"杨子江","质押方":"中国银河证券","质押股数(万股)":"1,250.00","参考市值(万元)":"14,475.00","质押起始日期":"2017/5/24","质押截止日期":"2019/5/23","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"国泰君安证券","质押股数(万股)":"2,100.00","参考市值(万元)":"24,696.00","质押起始日期":"2017/5/18","质押截止日期":"2018/5/18","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"中国银河证券","质押股数(万股)":"842.32","参考市值(万元)":"12,415.77","质押起始日期":"2016/12/22","质押截止日期":"2017/12/22","解押日期":"　"},
            {"股东名称":"杨泽文","质押方":"中国银河证券","质押股数(万股)":"880","参考市值(万元)":"15,294.40","质押起始日期":"2016/10/18","质押截止日期":"2018/10/17","解押日期":"　"},
            {"股东名称":"杨泽文","质押方":"中国银河证券","质押股数(万股)":"1,470.00","参考市值(万元)":"26,004.30","质押起始日期":"2016/9/19","质押截止日期":"2018/9/18","解押日期":"　"},
            {"股东名称":"杨子善","质押方":"中国银河证券","质押股数(万股)":"1,730.10","参考市值(万元)":"33,910.04","质押起始日期":"2016/6/29","质押截止日期":"2017/6/29","解押日期":"2017/6/26"},
            {"股东名称":"杨子善","质押方":"中国银河证券","质押股数(万股)":"1,500.00","参考市值(万元)":"29,400.00","质押起始日期":"2016/6/29","质押截止日期":"2018/6/28","解押日期":"2017/6/27"},
            {"股东名称":"杨子善","质押方":"中国银河证券","质押股数(万股)":"2,100.00","参考市值(万元)":"36,750.00","质押起始日期":"2016/5/17","质押截止日期":"2017/5/17","解押日期":"2017/5/16"}
        ]
        function stockRight_content_table(data) {
            $('#stockRight-content center.loading').show();

            $('#stockRight-content').bootstrapTable('load', data);
            $('#stockRight-content').bootstrapTable({
                data:data,
                search: true,//是否搜索
                pagination: true,//是否分页
                // pageSize: 5,//单页记录数
                // pageSize: pageSizeData,//单页记录数
                pageSize: 5,//单页记录数
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
                columns: [
                    {
                        title: "股东名称",//标题
                        field: "股东名称",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['股东名称']==''||row['股东名称']=='null'||row['股东名称']=='unknown'||!row['股东名称']||row['股东名称']=='none' || row['股东名称']=='None'){
                                return '-';
                            }else {
                                return row['股东名称'];
                            };
                        }
                    },
                    {
                        title: "质押方",//标题
                        field: "质押方",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['质押方']==''||row['质押方']=='null'||row['质押方']=='unknown'||!row['质押方']||row['质押方']=='none' || row['质押方']=='None'){
                                return '-';
                            }else {
                                return row['质押方'];
                            };
                        }
                    },
                    {
                        title: "质押股数(万股)",//标题
                        field: "质押股数(万股)",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['质押股数(万股)']==''||row['质押股数(万股)']=='null'||row['质押股数(万股)']=='unknown'||!row['质押股数(万股)']||row['质押股数(万股)']=='none' || row['质押股数(万股)']=='None'){
                                return '-';
                            }else {
                                return row['质押股数(万股)'];
                            };
                        }
                    },
                    {
                        title: "参考市值(万元)",//标题
                        field: "参考市值(万元)",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['参考市值(万元)']==''||row['参考市值(万元)']=='null'||row['参考市值(万元)']=='unknown'||!row['参考市值(万元)']||row['参考市值(万元)']=='none' || row['参考市值(万元)']=='None'){
                                return '-';
                            }else {
                                return row['参考市值(万元)'];
                            };
                        }
                    },
                    {
                        title: "质押起始日期",//标题
                        field: "质押起始日期",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['质押起始日期']==''||row['质押起始日期']=='null'||row['质押起始日期']=='unknown'||!row['质押起始日期']||row['质押起始日期']=='none' || row['质押起始日期']=='None'){
                                return '-';
                            }else {
                                return row['质押起始日期'];
                            };
                        }
                    },
                    {
                        title: "质押截止日期",//标题
                        field: "质押截止日期",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['质押截止日期']==''||row['质押截止日期']=='null'||row['质押截止日期']=='unknown'||!row['质押截止日期']||row['质押截止日期']=='none' || row['质押截止日期']=='None'){
                                return '-';
                            }else {
                                return row['质押截止日期'];
                            };
                        }
                    },
                    {
                        title: "解押日期",//标题
                        field: "解押日期",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row['解押日期']==''||row['解押日期']=='null'||row['解押日期']=='unknown'||!row['解押日期']||row['解押日期']=='none' || row['解押日期']=='None'){
                                return '-';
                            }else {
                                return row['解押日期'];
                            };
                        }
                    },
                ],
            });

            $('#stockRight-content center.loading').hide();
        }
        stockRight_content_table(stockRight_content_data);
    // 图表 在html 判断内

// 公告信息
    var announcement_url = '/maniPulate/manipulateReport/announcement/?id='+id;
    // public_ajax.call_request('get',announcement_url,table2);
    var table2Data = [
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3014986",
        publish_time: "2017-01-20",
        type: "其他",
        title: "南风股份：关于子公司取得高新技术产品证书及专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3068826",
        publish_time: "2017-02-24",
        type: "其他",
        title: "南风股份：关于全资子公司中兴能源装备有限公司荣获工信部首批制造业单项冠军培育企业的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3068829",
        publish_time: "2017-02-24",
        type: "其他",
        title: "南风股份：2016年度业绩快报"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3070632",
        publish_time: "2017-02-27",
        type: "其他",
        title: "南风股份：关于全资子公司中兴能源装备有限公司荣获2016年度江苏省科学技术奖一等奖的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3077091",
        publish_time: "2017-02-28",
        type: "其他",
        title: "南风股份：关于控股子公司南方增材科技有限公司获得“知识产权工作先进单位”荣誉称号的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3089596",
        publish_time: "2017-03-06",
        type: "其他",
        title: "南风股份：关于合资子公司完成工商变更登记的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3120392",
        publish_time: "2017-03-17",
        type: "其他",
        title: "南风股份：对控股子公司增资的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3120391",
        publish_time: "2017-03-17",
        type: "其他",
        title: "南风股份：第三届董事会第十八次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3124561",
        publish_time: "2017-03-20",
        type: "其他",
        title: "南风股份：关于控股子公司南方增材科技有限公司获得珠江西岸先进装备制造业发展资金项目经费的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3194830",
        publish_time: "2017-04-07",
        type: "其他",
        title: "南风股份：2017年第一季度业绩预告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3210336",
        publish_time: "2017-04-11",
        type: "其他",
        title: "南风股份：关于控股子公司完成工商变更登记的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266434",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：第三届监事会第十一次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266429",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：第三届董事会第十九次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266424",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：安信证券股份有限公司关于公司首次公开发行募投项目结余资金永久补充流动资金的核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266420",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于变更保荐代表人的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266414",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：公司章程（2017年4月）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266406",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：独立董事对相关事项的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266399",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：独立董事2016年度述职报告（姚作为）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266393",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：独立董事2016年度述职报告（谢军）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266389",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：独立董事2016年度述职报告（胡志勇）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266385",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：董事会关于募集资金2016年度存放与使用情况的专项报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266435",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于公司首发募投项目结项并将节余资金永久补充流动资金的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266431",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于公司募集资金2016年度存放与使用情况的鉴证报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266425",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于公司2016年度计提资产减值准备的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266421",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：中兴能源装备有限公司2016年度业绩承诺完成情况的专项审核报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266416",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：中国国际金融股份有限公司关于中兴能源装备有限公司2016年度业绩承诺完成情况的核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266408",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：中国国际金融股份有限公司关于公司2016年度募集资金存放与实际使用情况的专项核查报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266401",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：内部控制鉴证报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266394",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于召开2016年年度股东大会的通知"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266390",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于控股股东及其他关联方资金占用的专项审核说明"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266386",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：关于举行2016年度业绩网上说明会的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266433",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年度社会责任报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266428",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年度内部控制的自我评价报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266423",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年度财务决算报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266419",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：安信证券股份有限公司关于公司募集资金2016年度使用情况的专项核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266412",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2017年第一季度报告全文"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266404",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2017年第一季度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266397",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年年度审计报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266392",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年年度报告摘要"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266388",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年年度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3266384",
        publish_time: "2017-04-21",
        type: "其他",
        title: "南风股份：2016年年度报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3378976",
        publish_time: "2017-05-04",
        type: "其他",
        title: "南风股份：部分限售股份上市流通的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3378977",
        publish_time: "2017-05-04",
        type: "并购重组",
        title: "南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393884",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：关于非公开发行公司债券的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393880",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：关于增加2016年年度股东大会临时议案暨2016年年度股东大会的补充通知"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393885",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：关于公司为控股子公司申请银行授信提供担保的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393882",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：第三届董事会第二十次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393886",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：关于控股子公司为公司发行债券提供反担保的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3393883",
        publish_time: "2017-05-10",
        type: "其他",
        title: "南风股份：独立董事对相关事项的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3415451",
        publish_time: "2017-05-17",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股权解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3426380",
        publish_time: "2017-05-19",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3440756",
        publish_time: "2017-05-22",
        type: "其他",
        title: "南风股份：2016年年度股东大会决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3440755",
        publish_time: "2017-05-22",
        type: "其他",
        title: "南风股份：2016年年度股东大会的法律意见书"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3449600",
        publish_time: "2017-05-25",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3501772",
        publish_time: "2017-06-19",
        type: "其他",
        title: "南风股份：重型金属构件电熔精密成型（3D打印）技术产业化项目的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3504533",
        publish_time: "2017-06-20",
        type: "其他",
        title: "南风股份：关于全资子公司完成工商变更登记的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3510789",
        publish_time: "2017-06-22",
        type: "其他",
        title: "南风股份：关于合资子公司入选广东省2016年高新技术企业培育库拟入库企业公示名单的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3520017",
        publish_time: "2017-06-27",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3523545",
        publish_time: "2017-06-28",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份解除质押及质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3526700",
        publish_time: "2017-06-29",
        type: "其他",
        title: "南风股份：关于土地拆迁的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3530534",
        publish_time: "2017-06-30",
        type: "高管辞职",
        title: "南风股份：关于公司董事会秘书辞职的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3530537",
        publish_time: "2017-06-30",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3539558",
        publish_time: "2017-07-04",
        type: "其他",
        title: "南风股份：关于监事会换届选举的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3539559",
        publish_time: "2017-07-04",
        type: "其他",
        title: "南风股份：关于董事会换届选举的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3550027",
        publish_time: "2017-07-11",
        type: "并购重组",
        title: "南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3550026",
        publish_time: "2017-07-11",
        type: "其他",
        title: "南风股份：限售股份上市流通的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559440",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事提名人声明（二）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559434",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事候选人声明（胡志勇）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559428",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：关于召开2017年第一次临时股东大会的通知"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559425",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：2017年半年度业绩预告修正公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559436",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事候选人声明（谢军）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559429",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：第三届监事会第十二次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559426",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：关于选举产生第四届监事会职工代表监事的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559422",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事提名人声明（三）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3561937",
        publish_time: "2017-07-14",
        type: "利润分配",
        title: "南风股份：2016年度权益分派实施的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559438",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事候选人声明（姚作为）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559432",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事关于公司董事会换届选举的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559427",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：第三届董事会第二十一次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3559424",
        publish_time: "2017-07-14",
        type: "其他",
        title: "南风股份：独立董事提名人声明（一）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3569947",
        publish_time: "2017-07-19",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份补充质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3586891",
        publish_time: "2017-07-27",
        type: "其他",
        title: "南风股份：关于控股子公司取得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3586894",
        publish_time: "2017-07-27",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597235",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：关于聘任董事会秘书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597226",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：第四届董事会第一次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597229",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：第四届监事会第一次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597219",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：2017年第一次临时股东大会的法律意见书"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597232",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：独立董事关于聘任公司高级管理人员的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3597223",
        publish_time: "2017-07-31",
        type: "其他",
        title: "南风股份：2017年第一次临时股东大会决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3612437",
        publish_time: "2017-08-07",
        type: "其他",
        title: "南风股份：关于控股子公司签署联合开发协议的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3624791",
        publish_time: "2017-08-11",
        type: "其他",
        title: "南风股份：关于控股子公司取得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3637909",
        publish_time: "2017-08-16",
        type: "其他",
        title: "南风股份：关于取得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691359",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：2017年半年度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691348",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：董事会关于募集资金2017年半年度存放与使用情况的专项报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691336",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：第四届董事会第二次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691352",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：2017年半年度报告摘要"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691340",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：第四届监事会第二次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691325",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：2017年半年度报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691358",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：独立董事对相关事项的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691344",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：关于会计政策变更的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3691329",
        publish_time: "2017-08-26",
        type: "其他",
        title: "南风股份：关于全资子公司为公司申请银行授信提供担保的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3745008",
        publish_time: "2017-09-11",
        type: "其他",
        title: "南风股份：关于公司2017年非公开发行公司债券取得深交所无异议函的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3753804",
        publish_time: "2017-09-14",
        type: "其他",
        title: "南风股份：关于土地拆迁的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3767666",
        publish_time: "2017-09-21",
        type: "股权质押",
        title: "南风股份：关于持股5%以上股东部分股权解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3773528",
        publish_time: "2017-09-25",
        type: "停牌",
        title: "南风股份：重大事项停牌公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3772882",
        publish_time: "2017-09-25",
        type: "停牌",
        title: "关于南方风机股份有限公司股票临时停牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3786912",
        publish_time: "2017-09-30",
        type: "停牌",
        title: "南风股份：重大事项停牌进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3803760",
        publish_time: "2017-10-16",
        type: "其他",
        title: "南风股份：重大事项进展暨延期复牌公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3810506",
        publish_time: "2017-10-18",
        type: "股权质押",
        title: "南风股份：关于持股5%以上股东股权质押及解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3816554",
        publish_time: "2017-10-23",
        type: "其他",
        title: "南风股份：重大事项进展暨延期复牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3829156",
        publish_time: "2017-10-27",
        type: "其他",
        title: "南风股份：关于终止筹划重大事项暨股票复牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3833724",
        publish_time: "2017-10-28",
        type: "其他",
        title: "南风股份：2017年第三季度报告全文"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3833726",
        publish_time: "2017-10-28",
        type: "其他",
        title: "南风股份：第四届董事会第三次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3833729",
        publish_time: "2017-10-28",
        type: "其他",
        title: "南风股份：2017年第三季度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3881583",
        publish_time: "2017-11-20",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份补充质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3889745",
        publish_time: "2017-11-23",
        type: "其他",
        title: "南风股份：关于子公司获得江苏省科技成果转化专项资金的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3896531",
        publish_time: "2017-11-27",
        type: "其他",
        title: "南风股份：关于子公司获得江苏省科技成果转化专项资金的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3904478",
        publish_time: "2017-11-30",
        type: "其他",
        title: "南风股份：关于公司及子公司取得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3908084",
        publish_time: "2017-12-01",
        type: "股权质押",
        title: "南风股份：关于持股5%以上股东股份质押及补充质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3955994",
        publish_time: "2017-12-22",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3972676",
        publish_time: "2017-12-28",
        type: "其他",
        title: "南风股份：重型金属构件电熔精密成型（3D打印）技术产业化项目的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3981919",
        publish_time: "2018-01-02",
        type: "其他",
        title: "南风股份：关于公司及子公司取得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=3994154",
        publish_time: "2018-01-08",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4015751",
        publish_time: "2018-01-18",
        type: "其他",
        title: "南风股份：关于公司及子公司获得高新技术产品证书及专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4022243",
        publish_time: "2018-01-22",
        type: "其他",
        title: "南风股份：关于全资子公司董事兼副总经理被逮捕的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4022244",
        publish_time: "2018-01-22",
        type: "其他",
        title: "南风股份：关于子公司获得高新技术产品证书及专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4024213",
        publish_time: "2018-01-22",
        type: "其他",
        title: "南风股份：关于全资子公司董事兼副总经理被逮捕的进一步说明"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4040137",
        publish_time: "2018-01-30",
        type: "其他",
        title: "南风股份：2017年年度业绩预告修正公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4046238",
        publish_time: "2018-02-01",
        type: "其他",
        title: "南风股份：关于收到征地拆迁补偿尾款的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4050564",
        publish_time: "2018-02-05",
        type: "停牌",
        title: "关于南方风机股份有限公司股票临时停牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4051873",
        publish_time: "2018-02-06",
        type: "并购重组",
        title: "南风股份：关于筹划重大资产重组停牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4054692",
        publish_time: "2018-02-06",
        type: "其他",
        title: "南风股份：第四届董事会第四次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4067616",
        publish_time: "2018-02-09",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4084160",
        publish_time: "2018-02-23",
        type: "其他",
        title: "南风股份：2017年度业绩快报"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4084161",
        publish_time: "2018-02-23",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4097639",
        publish_time: "2018-03-02",
        type: "并购重组",
        title: "南风股份：重大资产重组进展暨延期复牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4109061",
        publish_time: "2018-03-08",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4123115",
        publish_time: "2018-03-15",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4141382",
        publish_time: "2018-03-22",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4168544",
        publish_time: "2018-03-29",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4197722",
        publish_time: "2018-04-04",
        type: "股权质押",
        title: "南风股份：关于持股5%以上股东股权解除质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4198646",
        publish_time: "2018-04-05",
        type: "并购重组",
        title: "南风股份：关于重大资产重组进展暨延期复牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4198645",
        publish_time: "2018-04-05",
        type: "其他",
        title: "南风股份：第四届董事会第五次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4203317",
        publish_time: "2018-04-09",
        type: "其他",
        title: "南风股份：2018年第一季度业绩预告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4227693",
        publish_time: "2018-04-13",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4277350",
        publish_time: "2018-04-20",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4337678",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于全资子公司收到中标通知书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318982",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：公司章程（2018年4月）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318978",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：独立董事对相关事项的独立意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318974",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：独立董事2017年度述职报告（姚作为）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318970",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：独立董事2017年度述职报告（谢军）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318967",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：独立董事2017年度述职报告（胡志勇）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318960",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：中兴能源装备有限公司2017年度业绩承诺完成情况的专项审核报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318957",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年度非经营性资金占用及其他关联资金往来情况的专项审核说明"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318954",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：第四届董事会第六次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318984",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：内部控制鉴证报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318980",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：监事会议事规则（2018年4月）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318976",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于中兴能源装备有限公司2017年度业绩承诺实现情况及相关重组方对公司进行业绩补偿的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318972",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于召开2017年度股东大会的通知"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318969",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于举行2017年度业绩网上说明会的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318966",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于坏账核销的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318963",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于公司募集资金2017年度存放与使用情况的鉴证报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318962",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：董事会关于2017年度募集资金存放与使用情况的专项报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318959",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于公司2017年度计提资产减值准备的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318956",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：中国国际金融股份有限公司关于中兴能源装备有限公司业绩承诺完成情况的核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4337679",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：更正公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318983",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年年度审计报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318979",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年年度报告摘要"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318975",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年年度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318971",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年年度报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318968",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年度社会责任报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318965",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年度内部控制的自我评价报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318964",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：董事会议事规则（2018年4月）"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318961",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：2017年度监事会工作报告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318958",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：第四届监事会第四次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4318955",
        publish_time: "2018-04-25",
        type: "其他",
        title: "南风股份：关于变更保荐代表人的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4360233",
        publish_time: "2018-04-27",
        type: "其他",
        title: "南风股份：2018年第一季度报告全文"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4380057",
        publish_time: "2018-04-27",
        type: "并购重组",
        title: "南风股份：重大资产重组进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4360235",
        publish_time: "2018-04-27",
        type: "其他",
        title: "南风股份：2018年第一季度报告披露提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4400723",
        publish_time: "2018-05-02",
        type: "其他",
        title: "南风股份：关于控股子公司签署技术服务合同的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4400725",
        publish_time: "2018-05-02",
        type: "其他",
        title: "南风股份：关于公司及子公司通过高新技术企业认定的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4400724",
        publish_time: "2018-05-02",
        type: "其他",
        title: "南风股份：关于全资子公司高管涉嫌环境污染案的进展公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4409862",
        publish_time: "2018-05-05",
        type: "其他",
        title: "南风股份：关于代行董事长、总经理职务的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4409864",
        publish_time: "2018-05-05",
        type: "并购重组",
        title: "南风股份：中信证券股份有限公司关于公司终止重大资产重组事项的专项核查意见"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4409861",
        publish_time: "2018-05-05",
        type: "其他",
        title: "南风股份：第四届董事会第八次会议决议公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4409863",
        publish_time: "2018-05-05",
        type: "并购重组",
        title: "南风股份：关于终止筹划重大资产重组暨股票复牌的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4424121",
        publish_time: "2018-05-08",
        type: "其他",
        title: "南风股份：股价异动公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4424554",
        publish_time: "2018-05-08",
        type: "其他",
        title: "关于对南方风机股份有限公司的关注函"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4426146",
        publish_time: "2018-05-09",
        type: "其他",
        title: "南风股份：关于子公司获得专利证书的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4426139",
        publish_time: "2018-05-09",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分股份补充质押的公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4431132",
        publish_time: "2018-05-10",
        type: "股权质押",
        title: "南风股份：关于控股股东暨实际控制人部分质押股份面临平仓风险的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4434818",
        publish_time: "2018-05-11",
        type: "其他",
        title: "南风股份：股价异动公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4438672",
        publish_time: "2018-05-14",
        type: "其他",
        title: "南风股份：关于召开2017年度股东大会的提示性公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4440719",
        publish_time: "2018-05-14",
        type: "其他",
        title: "关于对南方风机股份有限公司的年报问询函"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4450246",
        publish_time: "2018-05-16",
        type: "其他",
        title: "南风股份：2017年度股东大会的法律意见书"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4450248",
        publish_time: "2018-05-16",
        type: "其他",
        title: "南风股份：回购注销业绩补偿股份的债权人暨减资公告"
        },
        {
        url: "http://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80134470&gather=1&id=4450247",
        publish_time: "2018-05-16",
        type: "其他",
        title: "南风股份：2017年年度股东大会决议公告"
        }
    ];
    var table2Data_new7_1 = [
        {"公告类型":"其它","公告时间":"2018/5/24","公告标题":"南风股份：关于公司涉及诉讼的公告","查看原文":"图标"},
        {"公告类型":"高管辞职","公告时间":"2018/5/24","公告标题":"南风股份：关于董事辞职的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/24","公告标题":"南风股份：关于控股股东暨实际控制人部分股份被司法冻结的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/23","公告标题":"南风股份：关于董事长失联相关事项的进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/18","公告标题":"南风股份：关于董事长失联相关事项的进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/17","公告标题":"南风股份：更正公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/16","公告标题":"南风股份：2017年年度股东大会决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/16","公告标题":"南风股份：2017年度股东大会的法律意见书","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/16","公告标题":"南风股份：回购注销业绩补偿股份的债权人暨减资公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/14","公告标题":"关于对南方风机股份有限公司的年报问询函","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/14","公告标题":"南风股份：关于召开2017年度股东大会的提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/11","公告标题":"南风股份：股价异动公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2018/5/10","公告标题":"南风股份：关于控股股东暨实际控制人部分质押股份面临平仓风险的提示性公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2018/5/9","公告标题":"南风股份：关于控股股东暨实际控制人部分股份补充质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/9","公告标题":"南风股份：关于子公司获得专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/8","公告标题":"关于对南方风机股份有限公司的关注函","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/8","公告标题":"南风股份：股价异动公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/5/5","公告标题":"南风股份：中信证券股份有限公司关于公司终止重大资产重组事项的专项核查意见","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/5/5","公告标题":"南风股份：关于终止筹划重大资产重组暨股票复牌的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/5","公告标题":"南风股份：第四届董事会第八次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/5","公告标题":"南风股份：关于代行董事长、总经理职务的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/2","公告标题":"南风股份：关于全资子公司高管涉嫌环境污染案的进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/2","公告标题":"南风股份：关于公司及子公司通过高新技术企业认定的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/5/2","公告标题":"南风股份：关于控股子公司签署技术服务合同的公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/4/27","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/27","公告标题":"南风股份：2018年第一季度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/27","公告标题":"南风股份：2018年第一季度报告全文","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：更正公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年年度审计报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年年度报告摘要","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年年度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年年度报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年度社会责任报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年度内部控制的自我评价报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：董事会议事规则（2018年4月）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年度监事会工作报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：第四届监事会第四次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于变更保荐代表人的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：内部控制鉴证报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：监事会议事规则（2018年4月）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于中兴能源装备有限公司2017年度业绩承诺实现情况及相关重组方对公司进行业绩补偿的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于召开2017年度股东大会的通知","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于举行2017年度业绩网上说明会的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于坏账核销的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于公司募集资金2017年度存放与使用情况的鉴证报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：董事会关于2017年度募集资金存放与使用情况的专项报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于公司2017年度计提资产减值准备的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：中国国际金融股份有限公司关于中兴能源装备有限公司业绩承诺完成情况的核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：关于全资子公司收到中标通知书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：公司章程（2018年4月）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：独立董事对相关事项的独立意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：独立董事2017年度述职报告（姚作为）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：独立董事2017年度述职报告（谢军）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：独立董事2017年度述职报告（胡志勇）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：中兴能源装备有限公司2017年度业绩承诺完成情况的专项审核报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：2017年度非经营性资金占用及其他关联资金往来情况的专项审核说明","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/25","公告标题":"南风股份：第四届董事会第六次会议决议公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/4/20","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/4/13","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/9","公告标题":"南风股份：2018年第一季度业绩预告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/4/5","公告标题":"南风股份：关于重大资产重组进展暨延期复牌的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/4/5","公告标题":"南风股份：第四届董事会第五次会议决议公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2018/4/4","公告标题":"南风股份：关于持股5%以上股东股权解除质押的公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/3/29","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/3/22","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/3/15","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/3/8","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/3/2","公告标题":"南风股份：重大资产重组进展暨延期复牌的公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/2/23","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/2/23","公告标题":"南风股份：2017年度业绩快报","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/2/9","公告标题":"南风股份：重大资产重组进展公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2018/2/6","公告标题":"南风股份：关于筹划重大资产重组停牌的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/2/6","公告标题":"南风股份：第四届董事会第四次会议决议公告","查看原文":"图标"},
        {"公告类型":"停牌","公告时间":"2018/2/5","公告标题":"关于南方风机股份有限公司股票临时停牌的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/2/1","公告标题":"南风股份：关于收到征地拆迁补偿尾款的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/30","公告标题":"南风股份：2017年年度业绩预告修正公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/22","公告标题":"南风股份：关于子公司获得高新技术产品证书及专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/22","公告标题":"南风股份：关于全资子公司董事兼副总经理被逮捕的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/22","公告标题":"南风股份：关于全资子公司董事兼副总经理被逮捕的进一步说明","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/18","公告标题":"南风股份：关于公司及子公司获得高新技术产品证书及专利证书的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2018/1/8","公告标题":"南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2018/1/2","公告标题":"南风股份：关于公司及子公司取得专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/12/28","公告标题":"南风股份：重型金属构件电熔精密成型（3D打印）技术产业化项目的进展公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/12/22","公告标题":"南风股份：关于控股股东暨实际控制人部分股份解除质押的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/12/1","公告标题":"南风股份：关于持股5%以上股东股份质押及补充质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/11/30","公告标题":"南风股份：关于公司及子公司取得专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/11/27","公告标题":"南风股份：关于子公司获得江苏省科技成果转化专项资金的进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/11/23","公告标题":"南风股份：关于子公司获得江苏省科技成果转化专项资金的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/11/20","公告标题":"南风股份：关于控股股东暨实际控制人部分股份补充质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/28","公告标题":"南风股份：第四届董事会第三次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/28","公告标题":"南风股份：2017年第三季度报告全文","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/28","公告标题":"南风股份：2017年第三季度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/27","公告标题":"南风股份：关于终止筹划重大事项暨股票复牌的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/23","公告标题":"南风股份：重大事项进展暨延期复牌的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/10/18","公告标题":"南风股份：关于持股5%以上股东股权质押及解除质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/10/16","公告标题":"南风股份：重大事项进展暨延期复牌公告","查看原文":"图标"},
        {"公告类型":"停牌","公告时间":"2017/9/30","公告标题":"南风股份：重大事项停牌进展公告","查看原文":"图标"},
        {"公告类型":"停牌","公告时间":"2017/9/25","公告标题":"关于南方风机股份有限公司股票临时停牌的公告","查看原文":"图标"},
        {"公告类型":"停牌","公告时间":"2017/9/25","公告标题":"南风股份：重大事项停牌公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/9/21","公告标题":"南风股份：关于持股5%以上股东部分股权解除质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/9/14","公告标题":"南风股份：关于土地拆迁的进展公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/9/11","公告标题":"南风股份：关于公司2017年非公开发行公司债券取得深交所无异议函的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：2017年半年度报告摘要","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：第四届监事会第二次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：2017年半年度报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：2017年半年度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：董事会关于募集资金2017年半年度存放与使用情况的专项报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：第四届董事会第二次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：独立董事对相关事项的独立意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：关于会计政策变更的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/26","公告标题":"南风股份：关于全资子公司为公司申请银行授信提供担保的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/16","公告标题":"南风股份：关于取得专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/11","公告标题":"南风股份：关于控股子公司取得专利证书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/8/7","公告标题":"南风股份：关于控股子公司签署联合开发协议的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：第四届监事会第一次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：2017年第一次临时股东大会的法律意见书","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：关于聘任董事会秘书的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：第四届董事会第一次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：独立董事关于聘任公司高级管理人员的独立意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/31","公告标题":"南风股份：2017年第一次临时股东大会决议公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/7/27","公告标题":"南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/27","公告标题":"南风股份：关于控股子公司取得专利证书的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/7/19","公告标题":"南风股份：关于控股股东暨实际控制人部分股份补充质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事候选人声明（谢军）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：第三届监事会第十二次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：关于选举产生第四届监事会职工代表监事的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事提名人声明（三）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事提名人声明（二）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事候选人声明（胡志勇）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：关于召开2017年第一次临时股东大会的通知","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：2017年半年度业绩预告修正公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事候选人声明（姚作为）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事关于公司董事会换届选举的独立意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：第三届董事会第二十一次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/14","公告标题":"南风股份：独立董事提名人声明（一）","查看原文":"图标"},
        {"公告类型":"高送转","公告时间":"2017/7/14","公告标题":"南风股份：2016年度权益分派实施的公告","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2017/7/11","公告标题":"南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/11","公告标题":"南风股份：限售股份上市流通的提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/4","公告标题":"南风股份：关于监事会换届选举的提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/7/4","公告标题":"南风股份：关于董事会换届选举的提示性公告","查看原文":"图标"},
        {"公告类型":"高管辞职","公告时间":"2017/6/30","公告标题":"南风股份：关于公司董事会秘书辞职的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/6/30","公告标题":"南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/6/29","公告标题":"南风股份：关于土地拆迁的进展公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/6/28","公告标题":"南风股份：关于控股股东暨实际控制人部分股份解除质押及质押的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/6/27","公告标题":"南风股份：关于控股股东暨实际控制人部分股份解除质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/6/22","公告标题":"南风股份：关于合资子公司入选广东省2016年高新技术企业培育库拟入库企业公示名单的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/6/20","公告标题":"南风股份：关于全资子公司完成工商变更登记的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/6/19","公告标题":"南风股份：重型金属构件电熔精密成型（3D打印）技术产业化项目的进展公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/5/25","公告标题":"南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/22","公告标题":"南风股份：2016年年度股东大会决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/22","公告标题":"南风股份：2016年年度股东大会的法律意见书","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/5/19","公告标题":"南风股份：关于控股股东暨实际控制人进行股票质押式回购交易的公告","查看原文":"图标"},
        {"公告类型":"股权质押","公告时间":"2017/5/17","公告标题":"南风股份：关于控股股东暨实际控制人部分股权解除质押的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：关于公司为控股子公司申请银行授信提供担保的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：第三届董事会第二十次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：关于非公开发行公司债券的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：关于增加2016年年度股东大会临时议案暨2016年年度股东大会的补充通知","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：关于控股子公司为公司发行债券提供反担保的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/10","公告标题":"南风股份：独立董事对相关事项的独立意见","查看原文":"图标"},
        {"公告类型":"并购重组","公告时间":"2017/5/4","公告标题":"南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/5/4","公告标题":"南风股份：部分限售股份上市流通的提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于公司首发募投项目结项并将节余资金永久补充流动资金的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于公司募集资金2016年度存放与使用情况的鉴证报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于公司2016年度计提资产减值准备的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：中兴能源装备有限公司2016年度业绩承诺完成情况的专项审核报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：中国国际金融股份有限公司关于中兴能源装备有限公司2016年度业绩承诺完成情况的核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：中国国际金融股份有限公司关于公司2016年度募集资金存放与实际使用情况的专项核查报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：内部控制鉴证报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于召开2016年年度股东大会的通知","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于控股股东及其他关联方资金占用的专项审核说明","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于举行2016年度业绩网上说明会的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：第三届监事会第十一次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：第三届董事会第十九次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：安信证券股份有限公司关于公司首次公开发行募投项目结余资金永久补充流动资金的核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：关于变更保荐代表人的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：公司章程（2017年4月）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：独立董事对相关事项的独立意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：独立董事2016年度述职报告（姚作为）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：独立董事2016年度述职报告（谢军）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：独立董事2016年度述职报告（胡志勇）","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：董事会关于募集资金2016年度存放与使用情况的专项报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年度社会责任报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年度内部控制的自我评价报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年度财务决算报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：安信证券股份有限公司关于公司募集资金2016年度使用情况的专项核查意见","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2017年第一季度报告全文","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2017年第一季度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年年度审计报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年年度报告摘要","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年年度报告披露提示性公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/21","公告标题":"南风股份：2016年年度报告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/11","公告标题":"南风股份：关于控股子公司完成工商变更登记的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/4/7","公告标题":"南风股份：2017年第一季度业绩预告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/3/20","公告标题":"南风股份：关于控股子公司南方增材科技有限公司获得珠江西岸先进装备制造业发展资金项目经费的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/3/17","公告标题":"南风股份：对控股子公司增资的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/3/17","公告标题":"南风股份：第三届董事会第十八次会议决议公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/3/6","公告标题":"南风股份：关于合资子公司完成工商变更登记的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/2/28","公告标题":"南风股份：关于控股子公司南方增材科技有限公司获得“知识产权工作先进单位”荣誉称号的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/2/27","公告标题":"南风股份：关于全资子公司中兴能源装备有限公司荣获2016年度江苏省科学技术奖一等奖的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/2/24","公告标题":"南风股份：关于全资子公司中兴能源装备有限公司荣获工信部首批制造业单项冠军培育企业的公告","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/2/24","公告标题":"南风股份：2016年度业绩快报","查看原文":"图标"},
        {"公告类型":"其它","公告时间":"2017/1/20","公告标题":"南风股份：关于子公司取得高新技术产品证书及专利证书的公告","查看原文":"图标"}
    ]
    function table2(data) {
        $('#Bulletin_content').bootstrapTable('load', data);
        $('#Bulletin_content').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            // pageSize: 5,//单页记录数
            // pageSize: pageSizeData,//单页记录数
            pageSize: 4,//单页记录数
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
            columns: [
                {
                    title: "公告类型",//标题
                    field: "type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.type==''||row.type=='null'||row.type=='unknown'||!row.type){
                        //     return '未知';
                        // }else {
                        //     return row.type;
                        // };
                        // 暂改为这种
                        if (row['公告类型']==''||row['公告类型']=='null'||row['公告类型']=='unknown'||!row['公告类型']){
                            return '未知';
                        }else {
                            return row['公告类型'];
                        };
                    }
                },
                {
                    title: "公告时间",//标题
                    field: "publish_time",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.publish_time==''||row.publish_time=='null'||row.publish_time=='unknown'||!row.publish_time){
                        //     return '未知';
                        // }else {
                        //     return row.publish_time;
                        // };
                        // 暂改为这种
                        if (row['公告时间']==''||row['公告时间']=='null'||row['公告时间']=='unknown'||!row['公告时间']){
                            return '未知';
                        }else {
                            return row['公告时间'];
                        };
                    }
                },
                {
                    title: "公告标题",//标题
                    field: "title",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.title==''||row.title=='null'||row.title=='unknown'||!row.title){
                        //     return '暂无标题';
                        // }else {
                        //     if(row.title.length>150){
                        //         return '<span style="cursor:pointer;" title="'+row.title+'">'+row.title.substring(0,150)+'...</span>';
                        //     }else {
                        //         return row.title;
                        //     }
                        // };
                        // 暂改为这种
                        if (row['公告标题']==''||row['公告标题']=='null'||row['公告标题']=='unknown'||!row['公告标题']){
                            return '暂无标题';
                        }else {
                            if(row['公告标题'].length>150){
                                return '<span style="cursor:pointer;" title="'+row['公告标题']+'">'+row['公告标题'].substring(0,150)+'...</span>';
                            }else {
                                return row['公告标题'];
                            }
                        };
                    }
                },
                {
                    title: "查看原文",//标题
                    field: "url",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.url==''||row.url=='null'||row.url=='unknown'||!row.url){
                        //     return '未知';
                        // }else {
                        //     return '<span style="cursor:pointer;" onclick="originalText(\''+row.url+'\')" title="查看原文"><i class="fa fa-file-o"></i></span>';
                        // }
                        // 暂改为这种
                        if (row['查看原文']==''||row['查看原文']=='null'||row['查看原文']=='unknown'||!row['查看原文']){
                            return '未知';
                        }else {
                            return row['查看原文'];
                        };

                    }
                },
            ],
        });

        $('#Bulletin_content center.loading').hide();
    }
    // table2(table2Data)
    table2(table2Data_new7_1)
    // 查看原文
    function originalText(url){
        window.open(url);
    }

    // 利好公告
        var profileTableData = [
            {"type":"并购重组","publish_time":"2018/5/5","公告标题":"南风股份：中信证券股份有限公司关于公司终止重大资产重组事项的专项核查意见","url":"图标"},
            {"type":"并购重组","publish_time":"2018/5/5","公告标题":"南风股份：关于终止筹划重大资产重组暨股票复牌的公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/4/27","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/4/20","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/4/13","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/4/5","公告标题":"南风股份：关于重大资产重组进展暨延期复牌的公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/3/29","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/3/22","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/3/15","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/3/8","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/3/2","公告标题":"南风股份：重大资产重组进展暨延期复牌的公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/2/23","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/2/9","公告标题":"南风股份：重大资产重组进展公告","url":"图标"},
            {"type":"并购重组","publish_time":"2018/2/6","公告标题":"南风股份：关于筹划重大资产重组停牌的公告","url":"图标"},
            {"type":"高送转","publish_time":"2017/7/14","公告标题":"南风股份：2016年度权益分派实施的公告","url":"图标"},
            {"type":"并购重组","publish_time":"2017/7/11","公告标题":"南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见","url":"图标"},
            {"type":"并购重组","publish_time":"2017/5/4","公告标题":"南风股份：中国国际金融股份有限公司关于公司发行股份及支付现金购买资产并募集配套资金之限售股解禁的核查意见","url":"图标"}
        ];
        function profileTable(data) {
            $('#Bulletin_profile').bootstrapTable('load', data);
            $('#Bulletin_profile').bootstrapTable({
                data:data,
                search: true,//是否搜索
                pagination: true,//是否分页
                // pageSize: 5,//单页记录数
                // pageSize: pageSizeData,//单页记录数
                pageSize: 4,//单页记录数
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
                columns: [
                    {
                        title: "公告类型",//标题
                        field: "type",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row.type==''||row.type=='null'||row.type=='unknown'||!row.type){
                                return '未知';
                            }else {
                                return row.type;
                            };
                        }
                    },
                    {
                        title: "公告时间",//标题
                        field: "publish_time",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row.publish_time==''||row.publish_time=='null'||row.publish_time=='unknown'||!row.publish_time){
                                return '未知';
                            }else {
                                return row.publish_time;
                            };
                        }
                    },
                    {
                        title: "公告标题",//标题
                        field: "title",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row.title==''||row.title=='null'||row.title=='unknown'||!row.title){
                                return '暂无标题';
                            }else {
                                if(row.title.length>150){
                                    return '<span style="cursor:pointer;" title="'+row.title+'">'+row.title.substring(0,150)+'...</span>';
                                }else {
                                    return row.title;
                                }
                            };
                        }
                    },
                    {
                        title: "查看原文",//标题
                        field: "url",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            if (row.url==''||row.url=='null'||row.url=='unknown'||!row.url){
                                return '未知';
                            }else {
                                return '<span style="cursor:pointer;" onclick="originalText(\''+row.url+'\')" title="查看原文"><i class="fa fa-file-o"></i></span>';
                            }

                        }
                    },
                ],
            });

            $('#Bulletin_profile center.loading').hide();
        }
        profileTable(profileTableData)

// 股东明细  交易分析 // 十大股东
    var top10holders_url = '';

    //  渲染 下拉框
    var seasonBox_url = '/maniPulate/manipulateReport/seasonBox?id=' + id;

    // public_ajax.call_request('get',seasonBox_url,seasonBox);
    var seasonBoxData = [
        {
        seasonid: "2012-01-01",
        season: "2011年第四季度"
        },
        {
        seasonid: "2012-04-01",
        season: "2012年第一季度"
        },
        {
        seasonid: "2012-07-01",
        season: "2012年第二季度"
        },
        {
        seasonid: "2012-10-01",
        season: "2012年第三季度"
        },
        {
        seasonid: "2013-01-01",
        season: "2012年第四季度"
        },
        {
        seasonid: "2013-04-01",
        season: "2013年第一季度"
        },
        {
        seasonid: "2013-07-01",
        season: "2013年第二季度"
        },
        {
        seasonid: "2013-10-01",
        season: "2013年第三季度"
        },
        {
        seasonid: "2014-01-01",
        season: "2013年第四季度"
        },
        {
        seasonid: "2014-04-01",
        season: "2014年第一季度"
        },
        {
        seasonid: "2014-07-01",
        season: "2014年第二季度"
        },
        {
        seasonid: "2014-10-01",
        season: "2014年第三季度"
        },
        {
        seasonid: "2015-01-01",
        season: "2014年第四季度"
        },
        {
        seasonid: "2015-04-01",
        season: "2015年第一季度"
        },
        {
        seasonid: "2015-07-01",
        season: "2015年第二季度"
        },
        {
        seasonid: "2015-10-01",
        season: "2015年第三季度"
        },
        {
        seasonid: "2016-01-01",
        season: "2015年第四季度"
        },
        {
        seasonid: "2016-04-01",
        season: "2016年第一季度"
        },
        {
        seasonid: "2016-07-01",
        season: "2016年第二季度"
        },
        {
        seasonid: "2016-10-01",
        season: "2016年第三季度"
        },
        {
        seasonid: "2017-01-01",
        season: "2016年第四季度"
        },
        {
        seasonid: "2017-04-01",
        season: "2017年第一季度"
        },
        {
        seasonid: "2017-07-01",
        season: "2017年第二季度"
        },
        {
        seasonid: "2017-10-01",
        season: "2017年第三季度"
        },
        {
        seasonid: "2018-01-01",
        season: "2017年第四季度"
        },
        {
        seasonid: "2018-04-01",
        season: "2018年第一季度"
        }
    ];
    function seasonBox(data){
        if(data){
            var str = '';
            var flag = true;
            for(var i=0;i<data.length;i++){
                if(data[i].show == 1 || data[i].show == '1' ){
                    flag = false;//有默认选项 不必设置最后一个选中
                    str += '<option value="'+data[i].seasonid+'" selected="selected">'+ data[i].season + '</option>';
                }else {
                    str += '<option value="'+data[i].seasonid+'">'+ data[i].season + '</option>';
                }

            }

            if(flag == true){
                $('._time2').empty().append(str).children('option:last-child').attr('selected','selected');
            }else {
                $('._time2').empty().append(str);
            }

            // top10holders_url = '/maniPulate/manipulateReport/top10holders?id=' + id +'&seasonid=' + $('._time2').val();
            // public_ajax.call_request('get',top10holders_url,table3);
        }
    }
    seasonBox(seasonBoxData)

    // 更新下拉框时
    // $('._time2').change(function(){
    //     $('#Transaction-1 center.loading').show();
    //     top10holders_url = '/maniPulate/manipulateReport/top10holders?id=' + id +'&seasonid=' + $(this).val();
    //     public_ajax.call_request('get',top10holders_url,table3);
    // });

    var table3Data = [
        {
        '股东类型':'--',
        holder_pct: 12.37,
        ranking: 1,
        holder_name: "杨子善",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 62992592
        },
        {
            '股东类型':'--',
        holder_pct: 10.97,
        ranking: 2,
        holder_name: "仇云龙",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 55857278
        },
        {
            '股东类型':'--',
        holder_pct: 10.54,
        ranking: 3,
        holder_name: "杨子江",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 53655765
        },
        {
            '股东类型':'--',
        holder_pct: 10.24,
        ranking: 4,
        holder_name: "杨泽文",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 52133332
        },
        {
            '股东类型':'--',
        holder_pct: 2.61,
        ranking: 5,
        holder_name: "兴业期货-兴业期货-进取1号集合资产管理计划",
        holder_pct_change: 2.61,
        holder_hold_direction: "新进",
        holder_quantity_change: 13283171,
        holder_quantity: 13283171
        },
        {
            '股东类型':'牛散',
        holder_pct: 1.57,
        ranking: 6,
        holder_name: "季爱琴",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 8010500
        },
        {
            '股东类型':'--',
        holder_pct: 1.46,
        ranking: 7,
        holder_name: "陈卫平",
        holder_pct_change: 0.16,
        holder_hold_direction: "减持",
        holder_quantity_change: 830000,
        holder_quantity: 7436738
        },
        {
            '股东类型':'--',
        holder_pct: 1.07,
        ranking: 8,
        holder_name: "孙振平",
        holder_pct_change: 0.51,
        holder_hold_direction: "减持",
        holder_quantity_change: 2625400,
        holder_quantity: 5435762
        },
        {
            '股东类型':'牛散',
        holder_pct: 1.06,
        ranking: 9,
        holder_name: "高雅萍",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 5420620
        },
        {
            '股东类型':'--',
        holder_pct: 0.95,
        ranking: 10,
        holder_name: "姜志军",
        holder_pct_change: 0,
        holder_hold_direction: "不变",
        holder_quantity_change: 0,
        holder_quantity: 4861312
        }
    ];
    function table3(data) {
        $('#Transaction-1 center.loading').show();

        $('#Transaction-1').bootstrapTable('load', data);
        $('#Transaction-1').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            // pageSize: 5,//单页记录数
            // pageSize: pageSizeData,//单页记录数
            pageSize: 3,//单页记录数
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
            columns: [
                {
                    title: "排名",//标题
                    field: "ranking",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // return index+1;
                        if (row.ranking==''||row.ranking=='null'||row.ranking=='unknown'||!row.ranking){
                            return '未知';
                        }else {
                            return row.ranking;
                        };
                    }
                },
                {
                    title: "股东名称",//标题
                    field: "holder_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_name==''||row.holder_name=='null'||row.holder_name=='unknown'||!row.holder_name||row.holder_name=='none' || row.holder_name=='None'){
                            return '-';
                        }else if(row.holder_name.length>6){
                            return'<span title="'+row['股东名称']+'">'+row['股东名称'].substr(0,6)+'...</span>'
                        }else {
                            return row.holder_name;
                        };
                    }
                },
                // {
                //     title: "股东属性",//标题
                //     field: "ranking",//键名
                //     sortable: true,//是否可排序
                //     order: "desc",//默认排序方式
                //     align: "center",//水平
                //     valign: "middle",//垂直
                //     formatter: function (value, row, index) {
                //         if (row.ranking%2 == 0){
                //             return '个人';
                //         }else {
                //             return '投资者';
                //         };
                //     }
                // },
                {
                    title: "股东类型",//标题
                    field: "ranking",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // if (row.ranking%2 == 0){
                        //     return '个人';
                        // }else {
                        //     return '投资者';
                        // };
                        if (row['股东类型']==''||row['股东类型']=='null'||row['股东类型']=='unknown'||!row['股东类型']){
                            return '未知';
                        }else {
                            return row['股东类型'];
                        };
                    }
                },
                {
                    title: "方向",//标题
                    field: "holder_hold_direction",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_hold_direction==''||row.holder_hold_direction=='null'||row.holder_hold_direction=='unknown'||!row.holder_hold_direction){
                            return '-';
                        }else {
                            return row.holder_hold_direction;
                        };
                    }
                },
                {
                    title: "持股数量(股)",//标题
                    field: "holder_quantity",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_quantity=='null'||row.holder_quantity=='unknown'){
                            return '-';
                        }else {
                            return row.holder_quantity;
                        };
                    }
                },
                {
                    title: "持股数量变动(股)",//标题
                    field: "holder_quantity_change",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_quantity_change==''||row.holder_quantity_change=='null'||row.holder_quantity_change=='unknown'||!row.holder_quantity_change){
                            return '-';
                        }else {
                            return row.holder_quantity_change;
                        };
                    }
                },
                {
                    title: "占总股本比例(%)",//标题
                    field: "holder_pct",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_pct==''||row.holder_pct=='null'||row.holder_pct=='unknown'){
                            return '-';
                        }else {
                            return row.holder_pct;
                        };
                    }
                },
                {
                    title: "持股比例变动(%)",//标题
                    field: "holder_pct_change",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.holder_pct_change==''||row.holder_pct_change=='null'||row.holder_pct_change=='unknown'||!row.holder_pct_change){
                            return '-';
                        }else {
                            return row.holder_pct_change;
                        };
                    }
                },
            ],
        });

        $('#Transaction-1 center.loading').hide();
    }
    table3(table3Data)

    // 按 十大流通股东
        var circulationData = [
            {"名次":"1","股东名称":"仇云龙","股东类型":"0","方向":"新进","持股数(股)":"55,857,278","占总流通股本持股比例":"13.91%","变动比例":"--"},
            {"名次":"2","股东名称":"杨子江","股东类型":"0","方向":"不变","持股数(股)":"53,655,765","占总流通股本持股比例":"13.36%","变动比例":"--"},
            {"名次":"3","股东名称":"杨泽文","股东类型":"0","方向":"不变","持股数(股)":"52,133,332","占总流通股本持股比例":"12.98%","变动比例":"--"},
            {"名次":"4","股东名称":"杨子善","股东类型":"0","方向":"不变","持股数(股)":"15,748,148","占总流通股本持股比例":"3.92%","变动比例":"--"},
            {"名次":"5","股东名称":"兴业期货-兴业期货-进取1号集合资产管理计划","股东类型":"机构投资者","方向":"新进","持股数(股)":"13,283,171","占总流通股本持股比例":"3.31%","变动比例":"--"},
            {"名次":"6","股东名称":"季爱琴","股东类型":"牛散","方向":"不变","持股数(股)":"8,010,500","占总流通股本持股比例":"1.99%","变动比例":"--"},
            {"名次":"7","股东名称":"陈卫平","股东类型":"0","方向":"减持","持股数(股)":"7,436,738","占总流通股本持股比例":"1.85%","变动比例":"-10.04%"},
            {"名次":"8","股东名称":"孙振平","股东类型":"0","方向":"减持","持股数(股)":"5,435,762","占总流通股本持股比例":"1.35%","变动比例":"-8.45%"},
            {"名次":"9","股东名称":"高雅萍","股东类型":"牛散","方向":"不变","持股数(股)":"5,420,620","占总流通股本持股比例":"1.35%","变动比例":"--"},
            {"名次":"10","股东名称":"沈翌霏","股东类型":"0","方向":"新进","持股数(股)":"4,435,459","占总流通股本持股比例":"1.10%","变动比例":"--"}
        ]
        function tablecirculation(data) {
            $('#Transaction-circulation center.loading').show();

            $('#Transaction-circulation').bootstrapTable('load', data);
            $('#Transaction-circulation').bootstrapTable({
                data:data,
                search: true,//是否搜索
                pagination: true,//是否分页
                // pageSize: 5,//单页记录数
                // pageSize: pageSizeData,//单页记录数
                pageSize: 3,//单页记录数
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
                columns: [
                    {
                        title: "排名",//标题
                        field: "ranking",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.ranking==''||row.ranking=='null'||row.ranking=='unknown'||!row.ranking){
                            //     return '未知';
                            // }else {
                            //     return row.ranking;
                            // };
                            if (row['名次']==''||row['名次']=='null'||row['名次']=='unknown'||!row['名次']){
                                return '未知';
                            }else {
                                return row['名次'];
                            };
                        }
                    },
                    {
                        title: "股东名称",//标题
                        field: "holder_name",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_name==''||row.holder_name=='null'||row.holder_name=='unknown'||!row.holder_name||row.holder_name=='none' || row.holder_name=='None'){
                            //     return '-';
                            // }else {
                            //     return row.holder_name;
                            // };
                            if (row['股东名称']==''||row['股东名称']=='null'||row['股东名称']=='unknown'||!row['股东名称']){
                                return '未知';
                            }else if(row['股东名称'].length>6){
                                return'<span title="'+row['股东名称']+'">'+row['股东名称'].substr(0,6)+'...</span>'
                                // return row['股东名称'];
                            }else {
                                return row['股东名称'];
                            };
                        }
                    },
                    // {
                    //     title: "股东属性",//标题
                    //     field: "ranking",//键名
                    //     sortable: true,//是否可排序
                    //     order: "desc",//默认排序方式
                    //     align: "center",//水平
                    //     valign: "middle",//垂直
                    //     formatter: function (value, row, index) {
                    //         if (row.ranking%2 == 0){
                    //             return '个人';
                    //         }else {
                    //             return '投资者';
                    //         };
                    //     }
                    // },
                    {
                        title: "股东类型",//标题
                        field: "ranking",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.ranking%2 == 0){
                            //     return '个人';
                            // }else {
                            //     return '投资者';
                            // };
                            if (row['股东类型']==''||row['股东类型']=='null'||row['股东类型']=='unknown'||!row['股东类型']){
                                return '未知';
                            }else {
                                return row['股东类型'];
                            };
                        }
                    },
                    {
                        title: "方向",//标题
                        field: "holder_hold_direction",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_hold_direction==''||row.holder_hold_direction=='null'||row.holder_hold_direction=='unknown'||!row.holder_hold_direction){
                            //     return '-';
                            // }else {
                            //     return row.holder_hold_direction;
                            // };
                            if (row['方向']==''||row['方向']=='null'||row['方向']=='unknown'||!row['方向']){
                                return '未知';
                            }else {
                                return row['方向'];
                            };
                        }
                    },
                    {
                        title: "持股数(股)",//标题
                        field: "holder_quantity",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_quantity=='null'||row.holder_quantity=='unknown'){
                            //     return '-';
                            // }else {
                            //     return row.holder_quantity;
                            // };
                            if (row['持股数(股)']==''||row['持股数(股)']=='null'||row['持股数(股)']=='unknown'||!row['持股数(股)']){
                                return '未知';
                            }else {
                                return row['持股数(股)'];
                            };
                        }
                    },
                    {
                        title: "持股数量变动(股)",//标题
                        field: "holder_quantity_change",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_quantity_change==''||row.holder_quantity_change=='null'||row.holder_quantity_change=='unknown'||!row.holder_quantity_change){
                            //     return '-';
                            // }else {
                            //     return row.holder_quantity_change;
                            // };
                            if (row['持股数量变动(股)']==''||row['持股数量变动(股)']=='null'||row['持股数量变动(股)']=='unknown'||!row['持股数量变动(股)']){
                                return '未知';
                            }else {
                                return row['持股数量变动(股)'];
                            };
                        }
                    },
                    {
                        title: "占总流通股本持股比例",//标题
                        field: "holder_pct",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_pct==''||row.holder_pct=='null'||row.holder_pct=='unknown'){
                            //     return '-';
                            // }else {
                            //     return row.holder_pct;
                            // };
                            if (row['占总流通股本持股比例']==''||row['占总流通股本持股比例']=='null'||row['占总流通股本持股比例']=='unknown'||!row['占总流通股本持股比例']){
                                return '未知';
                            }else {
                                return row['占总流通股本持股比例'];
                            };
                        }
                    },
                    {
                        title: "持股比例变动(%)",//标题
                        field: "holder_pct_change",//键名
                        sortable: true,//是否可排序
                        order: "desc",//默认排序方式
                        align: "center",//水平
                        valign: "middle",//垂直
                        formatter: function (value, row, index) {
                            // if (row.holder_pct_change==''||row.holder_pct_change=='null'||row.holder_pct_change=='unknown'||!row.holder_pct_change){
                            //     return '-';
                            // }else {
                            //     return row.holder_pct_change;
                            // };
                            if (row['持股比例变动(%)']==''||row['持股比例变动(%)']=='null'||row['持股比例变动(%)']=='unknown'||!row['持股比例变动(%)']){
                                return '未知';
                            }else {
                                return row['持股比例变动(%)'];
                            };
                        }
                    },
                ],
            });

            $('#Transaction-circulation center.loading').hide();
        }
        tablecirculation(circulationData)

// 大宗交易
    var Largetrans_url = '/maniPulate/manipulateReport/Largetrans?id=' + id;
    // public_ajax.call_request('get',Largetrans_url,table4);
    var table4Data = [
        {
        ratio: -0.00439238653001472,
        price: 6.8,
        number: 115,
        seller: "天风证券深圳平安金融中心证券营业部",
        buyer: "中国银河证券杭州艮山西路证券营业部",
        amount: 782,
        date: "2018-05-16"
        },
        {
        ratio: -0.0558912386706949,
        price: 12.5,
        number: 120,
        seller: "申万宏源证券温州车站大道证券营业部",
        buyer: "天风证券深圳滨河路证券营业部",
        amount: 1500,
        date: "2017-04-14"
        }
    ];
    function table4(data) {
        $('#Transaction-2').bootstrapTable('load', data);
        $('#Transaction-2').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            // pageSize: 5,//单页记录数
            // pageSize: pageSizeData,//单页记录数
            pageSize: 3,//单页记录数
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
            columns: [
                {
                    title: "交易日期",//标题
                    field: "date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.date==''||row.date=='null'||row.date=='unknown'||!row.date){
                            return '未知';
                        }else {
                            return row.date;
                        };
                    }
                },
                {
                    title: "成交价(元)",//标题
                    field: "price",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.price==''||row.price=='null'||row.price=='unknown'||!row.price){
                            return '未知';
                        }else {
                            return row.price;
                        };
                    }
                },
                {
                    title: "成交量(万股)",//标题
                    field: "number",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.number==''||row.number=='null'||row.number=='unknown'||!row.number){
                            return '-';
                        }else {
                            return row.number;
                        };
                    }
                },
                {
                    title: "成交额(万元)",//标题
                    field: "amount",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.amount==''||row.amount=='null'||row.amount=='unknown'||!row.amount){
                            return '-';
                        }else {
                            return row.amount;
                        };
                    }
                },
                // word文档里面没这个了
                {
                    title: "折价率(%)",//标题
                    field: "ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.ratio==''||row.ratio=='null'||row.ratio=='unknown'||!row.ratio){
                            return '-';
                        }else {
                            return row.ratio;
                        };
                    }
                },
                {
                    title: "买方营业部",//标题
                    field: "buyer",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.buyer==''||row.buyer=='null'||row.buyer=='unknown'||!row.buyer){
                            return '-';
                        }else {
                            return row.buyer;
                        };
                    }
                },
                {
                    title: "卖方营业部",//标题
                    field: "seller",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.seller==''||row.seller=='null'||row.seller=='unknown'||!row.seller){
                            return '-';
                        }else {
                            return row.seller;
                        };
                    }
                },
            ],
        });

        $('#Transaction-2 center.loading').hide();
    }
    table4(table4Data)

// 财报数据
    var profit_url = '/maniPulate/manipulateReport/profit?id=' + id;
    // public_ajax.call_request('get',profit_url,profit_table);
    var profit_tableData_old = [
        {
        bips: 1.7193,
        business_income: 875.5168,
        net_profits: 30.1007,
        roe: 0.96,
        eps: 0.0591,
        net_profit_ratio: 3.43,
        gross_profit_rate: 30.1133,
        date: "2017年第四季度"
        },
        {
        bips: 0.9964,
        business_income: 507.4136,
        net_profits: 130.0321,
        roe: 4.03,
        eps: 0.2553,
        net_profit_ratio: 25.62,
        gross_profit_rate: 24.8737,
        date: "2017年第三季度"
        },
        {
        bips: 0.5444,
        business_income: 277.2511,
        net_profits: 98.8988,
        roe: 3.09,
        eps: 0.1942,
        net_profit_ratio: 35.67,
        gross_profit_rate: 18.8401,
        date: "2017年第二季度"
        },
        {
        bips: 0.2171,
        business_income: 110.5521,
        net_profits: -19.4855,
        roe: -0.63,
        eps: -0.0382,
        net_profit_ratio: -17.62,
        gross_profit_rate: 18.6643,
        date: "2017年第一季度"
        },
        {
        bips: 1.7574,
        business_income: 894.9178,
        net_profits: 92.7092,
        roe: 2.98,
        eps: 0.182,
        net_profit_ratio: 10.35,
        gross_profit_rate: 35.0173,
        date: "2016年第四季度"
        },
        {
        bips: 0.9556,
        business_income: 486.6343,
        net_profits: 21.8495,
        roe: 0.71,
        eps: 0.0429,
        net_profit_ratio: 4.48,
        gross_profit_rate: 34.0782,
        date: "2016年第三季度"
        },
        {
        bips: 0.6881,
        business_income: 350.4317,
        net_profits: 25.1655,
        roe: 0.82,
        eps: 0.0494,
        net_profit_ratio: 7.18,
        gross_profit_rate: 36.6793,
        date: "2016年第二季度"
        },
        {
        bips: 0.3849,
        business_income: 196.0218,
        net_profits: 16.7074,
        roe: 0.54,
        eps: 0.0328,
        net_profit_ratio: 8.52,
        gross_profit_rate: 34.121,
        date: "2016年第一季度"
        },
        {
        bips: 1.6103,
        business_income: 820.0286,
        net_profits: 44.4442,
        roe: 1.46,
        eps: 0.0872,
        net_profit_ratio: 5.41,
        gross_profit_rate: 36.3983,
        date: "2015年第四季度"
        },
        {
        bips: 1.1622,
        business_income: 591.8368,
        net_profits: 61.9649,
        roe: 2.03,
        eps: 0.1216,
        net_profit_ratio: 10.46,
        gross_profit_rate: 38.3675,
        date: "2015年第三季度"
        },
        {
        bips: 1.352,
        business_income: 344.2406,
        net_profits: 19.051,
        roe: 0.63,
        eps: 0.0748,
        net_profit_ratio: 5.53,
        gross_profit_rate: 32.7905,
        date: "2015年第二季度"
        },
        {
        bips: 0.5898,
        business_income: 150.1741,
        net_profits: 11.3445,
        roe: 0.37,
        eps: 0.0445,
        net_profit_ratio: 7.55,
        gross_profit_rate: 32.7697,
        date: "2015年第一季度"
        },
        {
        bips: 3.2141,
        business_income: 818.3629,
        net_profits: 108.7294,
        roe: 3.62,
        eps: 0.427,
        net_profit_ratio: 13.28,
        gross_profit_rate: 39.3985,
        date: "2014年第四季度"
        },
        {
        bips: 1.8258,
        business_income: 464.8705,
        net_profits: 61.5898,
        roe: 2.08,
        eps: 0.2418,
        net_profit_ratio: 13.24,
        gross_profit_rate: 35.83,
        date: "2014年第三季度"
        },
        {
        bips: 0.9219,
        business_income: 173.3236,
        net_profits: 15.7228,
        roe: 1.24,
        eps: 0.0836,
        net_profit_ratio: 9.07,
        gross_profit_rate: 37.1366,
        date: "2014年第二季度"
        },
        {
        bips: 0.4287,
        business_income: 80.5965,
        net_profits: 10.0871,
        roe: 1.14,
        eps: 0.0536,
        net_profit_ratio: 12.51,
        gross_profit_rate: 37.089,
        date: "2014年第一季度"
        },
        {
        bips: 2.1674,
        business_income: 407.4743,
        net_profits: 46.3563,
        roe: 5.3,
        eps: 0.2465,
        net_profit_ratio: 11.37,
        gross_profit_rate: 38.1326,
        date: "2013年第四季度"
        },
        {
        bips: 1.4762,
        business_income: 277.534,
        net_profits: 41.8897,
        roe: 4.81,
        eps: 0.2228,
        net_profit_ratio: 15.09,
        gross_profit_rate: 35.994,
        date: "2013年第三季度"
        },
        {
        bips: 0.9355,
        business_income: 175.8757,
        net_profits: 29.2102,
        roe: 3.41,
        eps: 0.1553,
        net_profit_ratio: 16.6,
        gross_profit_rate: 36.3285,
        date: "2013年第二季度"
        },
        {
        bips: 0.5064,
        business_income: 95.204,
        net_profits: 19.3867,
        roe: 2.24,
        eps: 0.1031,
        net_profit_ratio: 20.36,
        gross_profit_rate: 37.3994,
        date: "2013年第一季度"
        },
        {
        bips: 1.8474,
        business_income: 347.3166,
        net_profits: 40.6535,
        roe: 4.8,
        eps: 0.2162,
        net_profit_ratio: 11.7,
        gross_profit_rate: 37.3424,
        date: "2012年第四季度"
        },
        {
        bips: 1.1698,
        business_income: 219.9329,
        net_profits: 35.1042,
        roe: 4.1,
        eps: 0.1867,
        net_profit_ratio: 15.96,
        gross_profit_rate: 37.9838,
        date: "2012年第三季度"
        },
        {
        bips: 0.8535,
        business_income: 160.4632,
        net_profits: 25.0642,
        roe: 2.98,
        eps: 0.1333,
        net_profit_ratio: 15.61,
        gross_profit_rate: 38.2633,
        date: "2012年第二季度"
        },
        {
        bips: 0.3775,
        business_income: 70.9708,
        net_profits: 13.3102,
        roe: 1.58,
        eps: 0.0707,
        net_profit_ratio: 18.75,
        gross_profit_rate: 37.1644,
        date: "2012年第一季度"
        },
        {
        bips: 2.3864,
        business_income: 448.6556,
        net_profits: 81.6189,
        roe: 9.9,
        eps: 0.4341,
        net_profit_ratio: 18.19,
        gross_profit_rate: 36.7218,
        date: "2011年第四季度"
        },
        {
        bips: 1.5092,
        business_income: 283.7354,
        net_profits: 52.3024,
        roe: 6.58,
        eps: 0.2782,
        net_profit_ratio: 18.43,
        gross_profit_rate: 34.2202,
        date: "2011年第三季度"
        },
        {
        bips: 0.9227,
        business_income: 173.4801,
        net_profits: 30.8745,
        roe: 3.99,
        eps: 0.1642,
        net_profit_ratio: 17.79,
        gross_profit_rate: 33.8333,
        date: "2011年第二季度"
        },
        {
        bips: 0.969,
        business_income: 91.0943,
        net_profits: 16.5913,
        roe: 2.18,
        eps: 0.1765,
        net_profit_ratio: 18.21,
        gross_profit_rate: 32.4005,
        date: "2011年第一季度"
        }
    ];
    // 只显示特定时间内
    var profit_tableData = [
        {
            bips: 1.7193,
            business_income: 875.5168,
            net_profits: 30.1007,
            roe: 0.96,
            eps: 0.0591,
            net_profit_ratio: 3.43,
            gross_profit_rate: 30.1133,
            date: "占营业总收入百分比（最新）"
        },
        {
            bips: 1.7193,
            business_income: 875.5168,
            net_profits: 30.1007,
            roe: 0.96,
            eps: 0.0591,
            net_profit_ratio: 3.43,
            gross_profit_rate: 30.1133,
            date: "同行业均值（最新）"
        },
        {
            bips: 0.2223,
            business_income: 113.2126,
            net_profits: -17.7767,
            roe: -0.57,
            eps: -0.0349,
            net_profit_ratio: -15.7,
            gross_profit_rate: 24.2,
            date: "2018年第一季度"
        },
        {
        bips: 1.7193,
        business_income: 875.5168,
        net_profits: 30.1007,
        roe: 0.96,
        eps: 0.0591,
        net_profit_ratio: 3.43,
        gross_profit_rate: 30.1133,
        date: "2017年第四季度"
        },
        {
        bips: 0.9964,
        business_income: 507.4136,
        net_profits: 130.0321,
        roe: 4.03,
        eps: 0.2553,
        net_profit_ratio: 25.62,
        gross_profit_rate: 24.8737,
        date: "2017年第三季度"
        },
        {
        bips: 0.5444,
        business_income: 277.2511,
        net_profits: 98.8988,
        roe: 3.09,
        eps: 0.1942,
        net_profit_ratio: 35.67,
        gross_profit_rate: 18.8401,
        date: "2017年第二季度"
        },
        {
        bips: 0.2171,
        business_income: 110.5521,
        net_profits: -19.4855,
        roe: -0.63,
        eps: -0.0382,
        net_profit_ratio: -17.62,
        gross_profit_rate: 18.6643,
        date: "2017年第一季度"
        },
    ];

    function profit_table(data) {
        $('#profit-content').bootstrapTable('load', data);
        $('#profit-content').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: 5,//单页记录数
            // pageSize: pageSizeData,//单页记录数
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
            columns: [
                {
                    title: "时间",//标题
                    field: "date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.date=='null'||row.date=='unknown'){
                            return '未知';
                        }else {
                            return row.date;
                        };
                    }
                },

                {
                    title: "营业总收入（万元）",//标题
                    field: "roe",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.roe=='null'||row.roe=='unknown'){
                            return '未知';
                        }else {
                            return row.roe;
                        };
                    }
                },
                {
                    title: "营业总成本（万元）",//标题
                    field: "net_profit_ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.net_profit_ratio=='null'||row.net_profit_ratio=='unknown'){
                            return '-';
                        }else {
                            return row.net_profit_ratio;
                        };
                    }
                },
                {
                    title: "营业利润（万元）",//标题
                    field: "gross_profit_rate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.gross_profit_rate=='null'||row.gross_profit_rate=='unknown'){
                            return '-';
                        }else {
                            return row.gross_profit_rate;
                        };
                    }
                },
                {
                    title: "营业外收入（万元）",//标题
                    field: "net_profits",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.net_profits=='null'||row.net_profits=='unknown'){
                            return '-';
                        }else {
                            return row.net_profits;
                        };
                    }
                },
                {
                    title: "利润总额（万元）",//标题
                    field: "eps",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.eps=='null'||row.eps=='unknown'){
                            return '-';
                        }else {
                            return row.eps;
                        };
                    }
                },
                {
                    title: "净利润（万元）",//标题
                    field: "business_income",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.business_income=='null'||row.business_income=='unknown'){
                            return '-';
                        }else {
                            return row.business_income;
                        };
                    }
                },

            ],
        });

        $('#profit-content center.loading').hide();
    }
    profit_table(profit_tableData)

// 历史信用
    var credit_url = '/maniPulate/manipulateReport/credit/?id='+id;
    // public_ajax.call_request('get',credit_url,creditHistory);
    // 假数据
        var creditHistoryData = [
            {
            date: "2015-12-18",
            abstract: "未及时披露公司重大事项,未依法履行其他职责",
            type: "违规行为公告"
            },
            {
            date: "2015-02-13",
            abstract: "未依法履行其他职责",
            type: "违规行为公告"
            },
            {
            date: "2010-12-31",
            abstract: "未依法履行其他职责",
            type: "违规行为公告"
            }
        ];
    function creditHistory(data) {
        $('#creditHistory_content').bootstrapTable('load', data);
        $('#creditHistory_content').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            // pageSize: 5,//单页记录数
            pageSize: pageSizeData,//单页记录数
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
            columns: [
                {
                    title: "时间",//标题
                    field: "date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.date==''||row.date=='null'||row.date=='unknown'||!row.date){
                            return '未知';
                        }else {
                            return row.date;
                        };
                    }
                },
                {
                    title: "类型",//标题
                    field: "type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.type==''||row.type=='null'||row.type=='unknown'||!row.type){
                            return '未知';
                        }else {
                            return row.type;
                        };
                    }
                },
                {
                    title: "摘要",//标题
                    field: "abstract",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.abstract==''||row.abstract=='null'||row.abstract=='unknown'||!row.abstract){
                            return '暂无标题';
                        }else {
                            if(row.abstract.length>150){
                                return '<span style="cursor:pointer;" title="'+row.abstract+'">'+row.abstract.substring(0,150)+'...</span>';
                            }else {
                                return row.abstract;
                            }
                        };
                    }
                },
            ],
        });

        $('#creditHistory_content center.loading').hide();
    }
    creditHistory(creditHistoryData)