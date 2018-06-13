
// 预警数
    var warningNumber_url='/maniPulate/manipulateWarning';
    // public_ajax.call_request('get',warningNumber_url,warningNumber);
    var warningNumberData = {
        seasonnum: 30,
        monthnum: 5,
        weeknum: 25
    }
    function warningNumber(data){
        if(data){
            $('#container .firstScreen .com-1').text(data.seasonnum);
            $('#container .firstScreen .com-2').text(data.monthnum);
            $('#container .firstScreen .com-3').text(data.weeknum);
        }
    }
    warningNumber(warningNumberData);

// 适配分辨率
    var pageData=6;
    if (screen.width <= 1536){
        pageData=6;
    }else {
        pageData=10;
    }


//第一屏   疑似操纵预警
    var loadingHtml = '<center class="loading">正在加载中...</center>';
    $('#recordingTable').append(loadingHtml);

    var earlyWarning_url='/maniPulate/manipulateWarningText';
    // public_ajax.call_request('get',earlyWarning_url,earlyWarning);


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
                        //     return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // }else {
                        //     stock_name = row.stock_name;
                        //     return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // };
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
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
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
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
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
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
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
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
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
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
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
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
    // 是否操纵
        $('#recordingTable').on('change','input.chk',function(){
            var _id = $(this).attr('_id');

            console.log('===========================');
            // console.log($(this).is(':checked'));
            var ifmanipulate = '';
            if($(this).is(':checked')){
                ifmanipulate = '1';
            }else {
                ifmanipulate = '0';
            }

            var rumanUser_url = '/maniPulate/manipulateWarningUser?id='+_id+'&ifmanipulate='+ifmanipulate;
            console.log(rumanUser_url);
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

    // earlyWarning(bigMainpulateData);

    // ========================
    var three=[
        {"股票名称":"南风股份","股票代码":"300004","开始时间":"2017/1/20","结束时间":"2018/5/16","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.202466598","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"1"},
        {"股票名称":"华友钴业","股票代码":"603799","开始时间":"2018/3/28","结束时间":"2018/6/6","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.185712842","操纵状态":"正在操纵","预警等级":"三级","预警指数":"97","是否新增":"1"},
        {"股票名称":"兴源环境","股票代码":"300266","开始时间":"2017/9/6","结束时间":"2018/6/5","操纵类型":"上市公司伙同他人","所属行业":"水利、环境和公共设施管理业","最大涨幅":"0.120867401","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"1"},
        {"股票名称":"易世达","股票代码":"300125","开始时间":"2018/5/14","结束时间":"2018/5/21","操纵类型":"上市公司单独","所属行业":"科学研究和技术服务业","最大涨幅":"0.061959654","操纵状态":"已完成","预警等级":"三级","预警指数":"96","是否新增":"1"},

        {"股票名称":"索菲亚","股票代码":"002572","开始时间":"2017/7/27","结束时间":"2018/5/14","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.155519304","操纵状态":"已完成","预警等级":"三级","预警指数":"96","是否新增":"1"},
        {"股票名称":"南风股份","股票代码":"300004","开始时间":"2018/1/10","结束时间":"2018/2/2","操纵类型":"内幕交易","所属行业":"制造业","最大涨幅":"0","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"1"},
        {"股票名称":"京天利","股票代码":"300399","开始时间":"2018/4/24","结束时间":"2018/5/2","操纵类型":"上市公司单独","所属行业":"信息传输、软件和信息技术服务业","最大涨幅":"0.018466704","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"1"},
        {"股票名称":"富春股份","股票代码":"300299","开始时间":"2018/4/27","结束时间":"2018/5/2","操纵类型":"上市公司单独","所属行业":"信息传输、软件和信息技术服务业","最大涨幅":"-0.099639856","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"1"},
        {"股票名称":"安妮股份","股票代码":"002235","开始时间":"2018/4/20","结束时间":"2018/4/26","操纵类型":"上市公司单独","所属行业":"制造业","最大涨幅":"0.093061224","操纵状态":"已完成","预警等级":"三级","预警指数":"98","是否新增":"1"},
        {"股票名称":"桐昆股份","股票代码":"601233","开始时间":"2017/10/23","结束时间":"2018/3/22","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.874112331","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"1"},
        {"股票名称":"中泰化学","股票代码":"002092","开始时间":"2017/9/22","结束时间":"2018/3/21","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.186923077","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"1"},
        {"股票名称":"美晨生态","股票代码":"300237","开始时间":"2018/1/23","结束时间":"2018/3/21","操纵类型":"上市公司伙同他人","所属行业":"建筑业","最大涨幅":"0.248962656","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"1"},
        {"股票名称":"天神娱乐","股票代码":"002354","开始时间":"2017/9/14","结束时间":"2018/2/26","操纵类型":"上市公司伙同他人","所属行业":"信息传输、软件和信息技术服务业","最大涨幅":"0.0995","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"长园集团","股票代码":"600525","开始时间":"2017/10/30","结束时间":"2018/2/23","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.16329588","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"南极电商","股票代码":"002127","开始时间":"2017/9/6","结束时间":"2018/2/2","操纵类型":"上市公司伙同他人","所属行业":"租赁和商务服务业","最大涨幅":"0.235504014","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"金亚科技","股票代码":"300028","开始时间":"2015/2/16","结束时间":"2015/6/9","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"3.311296534","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"安硕信息","股票代码":"300380","开始时间":"2014/11/1","结束时间":"2015/5/27","操纵类型":"上市公司伙同他人","所属行业":"信息传输、软件和信息技术服务业","最大涨幅":"6.746600103","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"宏达新材","股票代码":"002211","开始时间":"2014/5/29","结束时间":"2014/12/9","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"1.124513619","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"新洋丰","股票代码":"000902","开始时间":"2014/5/1","结束时间":"2014/9/30","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.493887531","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"神剑股份","股票代码":"002361","开始时间":"2014/8/21","结束时间":"2014/8/25","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"-0.002717391","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"襄阳轴承","股票代码":"000678","开始时间":"2014/8/15","结束时间":"2014/8/18","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.1003861","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"上海物贸","股票代码":"600822","开始时间":"2014/8/7","结束时间":"2014/8/11","操纵类型":"抢帽子型","所属行业":"批发和零售业","最大涨幅":"0.023692004","操纵状态":"已完成","预警等级":"三级","预警指数":"96","是否新增":"0"},
        {"股票名称":"天原集团","股票代码":"002386","开始时间":"2014/8/1","结束时间":"2014/8/4","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.005931198","操纵状态":"已完成","预警等级":"三级","预警指数":"96","是否新增":"0"},
        {"股票名称":"富奥股份","股票代码":"000030","开始时间":"2014/6/20","结束时间":"2014/6/23","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.011326861","操纵状态":"已完成","预警等级":"三级","预警指数":"96","是否新增":"0"},
        {"股票名称":"*ST海润","股票代码":"600401","开始时间":"2014/6/6","结束时间":"2014/6/11","操纵类型":"上市公司单独","所属行业":"制造业","最大涨幅":"0.024691358","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"北京君正","股票代码":"300223","开始时间":"2013/7/5","结束时间":"2013/7/8","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.042865531","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"0"},
        {"股票名称":"恒康医疗","股票代码":"002219","开始时间":"2013/5/9","结束时间":"2013/7/5","操纵类型":"上市公司伙同他人","所属行业":"制造业","最大涨幅":"0.310160428","操纵状态":"已完成","预警等级":"三级","预警指数":"99","是否新增":"0"},
        {"股票名称":"三泰电子","股票代码":"002312","开始时间":"2013/5/15","结束时间":"2013/5/20","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.093701997","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"博晖创新","股票代码":"300318","开始时间":"2013/4/18","结束时间":"2013/4/19","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.01509434","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"0"},
        {"股票名称":"万马股份","股票代码":"002276","开始时间":"2013/3/8","结束时间":"2013/3/11","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"0.016157989","操纵状态":"已完成","预警等级":"三级","预警指数":"97","是否新增":"0"},
        {"股票名称":"利源精制","股票代码":"002501","开始时间":"2013/3/1","结束时间":"2013/3/4","操纵类型":"抢帽子型","所属行业":"制造业","最大涨幅":"-0.058611362","操纵状态":"已完成","预警等级":"三级","预警指数":"95","是否新增":"0"},
    ]
    function earlyWarning_618(data) {
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
                    field: "股票名称",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['股票名称']==''||row['股票名称']=='null'||row['股票名称']=='unknown'||!row['股票名称']){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row['股票名称']+'">'+row['股票名称']+'</span>';
                        };
                    }
                },
                {
                    title: "股票代码",//标题
                    field: "股票代码",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {

                        if (row['股票代码']==''||row['股票代码']=='null'||row['股票代码']=='unknown'||!row['股票代码']){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row['股票代码']+'">'+row['股票代码']+'</span>';
                        };
                    }
                },
                {
                    title: "开始时间",//标题
                    field: "开始时间",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['开始时间']==''||row['开始时间']=='null' || row['开始时间']==null ||row['开始时间']=='unknown'||!row['开始时间']){
                            return '未知';
                        }else {
                            return row['开始时间'];
                        };
                    }

                },
                {
                    title: "结束时间",//标题
                    field: "结束时间",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['结束时间']==''||row['结束时间']=='null' || row['结束时间']==null ||row['结束时间']=='unknown'||!row['结束时间']){
                            return '未知';
                        }else {
                            return row['结束时间'];
                        };
                    }
                },
                {
                    title: "操纵类型",//标题
                    field: "操纵类型",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['操纵类型']==''||row['操纵类型']=='null' || row['操纵类型']==null ||row['操纵类型']=='unknown'||!row['操纵类型']){
                            return '未知';
                        }else {
                            return row['操纵类型'];
                        };
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "所属行业",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row['所属行业']==''||row['所属行业']=='null' || row['所属行业']==null ||row['所属行业']=='unknown'||!row['所属行业']){
                            return '未知';
                        }else if(row['所属行业'].length >=5){
                            industryName = row['所属行业'].slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row['所属行业']+'">'+industryName+'</span>';
                        }else {
                            industryName = row['所属行业'];
                            return '<span style="cursor:pointer;color:white;" title="'+row['所属行业']+'">'+industryName+'</span>';
                        };
                    }
                },
                {
                    // title: "涨幅",//标题
                    title: "最大涨幅",//标题
                    field: "最大涨幅",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increaseRatio;
                        if(row['最大涨幅'] === 0){
                            return '0%';
                        }else if (row['最大涨幅']==''||row['最大涨幅']=='null'||row['最大涨幅']=='unknown'||!row['最大涨幅']){
                            return '未知';
                        }else {
                            increaseRatio = (row['最大涨幅'] *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "操纵状态",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['操纵状态']==''||row['操纵状态']=='null' || row['操纵状态']==null ||row['操纵状态']=='unknown'||!row['操纵状态']){
                            return '未知';
                        }else {
                            return row['操纵状态'];
                        };
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
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                    }
                },
                {
                    title: "预警等级",//标题
                    field: "预警等级",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['预警等级']==''||row['预警等级']=='null' || row['预警等级']==null ||row['预警等级']=='unknown'||!row['预警等级']){
                            return '未知';
                        }else {
                            return row['预警等级'];
                        };
                    }
                },
                {
                    title: "预警指数",//标题
                    field: "预警指数",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row['预警指数']==''||row['预警指数']=='null' || row['预警指数']==null ||row['预警指数']=='unknown'||!row['预警指数']){
                            return '未知';
                        }else {
                            return row['预警指数'];
                        };
                    }
                },
                // {
                //     title: "是否证监会判罚",//标题
                //     field: "ifpunish",//键名
                //     sortable: true,//是否可排序
                //     order: "desc",//默认排序方式
                //     align: "center",//水平
                //     valign: "middle",//垂直
                //     formatter: function (value, row, index) {
                //         if (row.ifpunish==''||row.ifpunish=='null' || row.ifpunish==null ||row.ifpunish=='unknown'||!row.ifpunish){
                //             return '未知';
                //         }else {
                //             return row.ifpunish;
                //         };
                //     }
                // },
                // {
                //     title: "是否操纵",//标题
                //     field: "ifmanipulate",//键名
                //     sortable: true,//是否可排序
                //     order: "desc",//默认排序方式
                //     align: "center",//水平
                //     valign: "middle",//垂直
                //     formatter: function (value, row, index) {
                //         var str = '';
                //         if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                //             str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                //         }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                //             str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                //         }
                //         // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                //         return str;
                //     }
                // },
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
    earlyWarning_618(three)

    // ========================

    // 跳转详情页
    function jumpFrame_1(stock, id, manipulate_type_num) {
        var html = '';
        stock=escape(stock);
        html='/index/setDetail?stock='+stock+'&id='+id +'&manipulate_type_num='+manipulate_type_num;
        // window.location.href=html;
        window.open(html);
    }

// 二级可疑股票池

    var earlyWarning_second_url='/maniPulate/manipulateWarningText';
    // public_ajax.call_request('get',earlyWarning_second_url,earlyWarning_second);
    function earlyWarning_second(data) {
        $('#recordingTable_second').bootstrapTable('load', data);
        $('#recordingTable_second').bootstrapTable({
            data:data.splice(20,data.length),
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
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
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
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
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
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
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
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
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
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
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
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
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
        $('#recordingTable_second center.loading').hide();
        $('.recordingTable_second .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };

    earlyWarning_second(bigMainpulateData);

// 三级可疑股票池

    var earlyWarning_third_url='/maniPulate/manipulateWarningText';
    // public_ajax.call_request('get',earlyWarning_third_url,earlyWarning_third);
    function earlyWarning_third(data) {
        $('#recordingTable_third').bootstrapTable('load', data);
        $('#recordingTable_third').bootstrapTable({
            data:data.splice(300,data.length),
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
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
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
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
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
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
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
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
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
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
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
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
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
        $('#recordingTable_third center.loading').hide();
        $('.recordingTable_third .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };
    earlyWarning_third(bigMainpulateData)
