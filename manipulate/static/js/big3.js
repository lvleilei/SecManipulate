$(document).ready(function () {

    $('#nav').css('position','fixed')
    $('.contentBox').css({minHeight:$(window).height(),height:$(window).height(),paddingTop:$('#nav').outerHeight(true)});

    var loadOption = {
        text: '加载中...',
        color: '#fff',
        textColor: '#fff',
        maskColor: 'rgba(0,0,0,.1)',
    };
    // var colorItem = ['#c24e4f','#ffee51','#4583d0','#9bc259'];
    var colorItem = ['#c24e4f','#e3b61f','#13b5b1','#9bc259'];
    // var backgroundColor = 'rgba(0,0,0,.2)';transparent
    // var backgroundColor = 'rgba(70, 70, 70, 0.5)';
    var backgroundColor = 'rgb(14, 20, 66)';

    // 左上 行业分布

    // var industryData = [
    //     "制造业","金融业",
    //     "信息服务业",
    //     "采矿业",
    //     "建筑业",
    //     "娱乐业",
    //     "零售业","农林牧渔业", "供应业","运输业","房地产业",
    //     "科学服务业","综合业","公共管理业",
    //     "社会工作业","餐饮业","其他服务业"
    //     //"商务服务业", "教育业",
    // ];
    var industryData = [
        '制造业',
        '金融业',
        '信息传输、软件和信息技术服务业',
        '采矿业',
        '建筑业',
        '文化体育和娱乐业',
        '批发和零售业',
        '农林牧渔业',
        '电力、热力、燃气及水生产和供应业',
        '交通运输、仓储和邮政业',
        '房地产业',
        '科学研究和技术服务业',
        '综合',
        '水利、环境和公共设施管理业',
        '卫生和社会工作',
        '住宿和餐饮业',
        '居民服务、修理和其它服务业',
        '租赁和商务服务业',
        '教育',

    ];
    // var industry_valueData = [477,86,60,46,41,33,32,30,28,26,24,23,22,15,11,4,4];
    var industry_valueData = [477,86,60,46,41,33,32,30,28,26,24,23,22,15,11,4,4,0,0];
    var industryData_new = [];
    for(var i=0;i<industryData.length;i++){
        // if(industryData[i].length > 5){
        //     industryData[i] = industryData[i].substr(0,5)+'...'
        // }
        industryData_new.push(
            {
                value:industryData[i],
                textStyle:{
                    fontSize:16,
                    // fontWeight:'500',
                }
            }
        );

    }

    var mychart_topBox_left = echarts.init(document.getElementById('topBox_left'),'chalk');
    mychart_topBox_left.showLoading(loadOption);
    var mychart_topBox_leftOption = {
        //color: 'rab(106, 188, 164)',
        // backgroundColor: 'transparent',
        backgroundColor: backgroundColor,
        title:{
            text:'行业分布'
        },
        // 缩放
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
            },
            {
                show: false,
                type: 'slider',
                top: 'bottom',
                start: 0,
                end: 100,
                fillerColor:'rgba(66,66,66,0.57)'
            }
        ],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : industryData_new,
                axisTick: {
                    alignWithLabel: true
                },
                // axisLabel:{},
                name:'行业',
                nameGap:4,
                nameTextStyle:{
                    color:'#fff'
                },
                axisLabel:{
                    rotate:45,
                    formatter:function(value,index){
                        if(value.length>5){
                            return value.substr(0,5)+'...';
                        }else {
                            return value;
                        }
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'家',
                nameTextStyle:{
                    color:'#fff'
                }
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {
                        color: '#00e9db',
                        opacity: 1,
                    }
                },
                data: industry_valueData
            }
        ]
    }
    setTimeout(function(){
        mychart_topBox_left.hideLoading();
        mychart_topBox_left.setOption(mychart_topBox_leftOption);
    }, 500);

    // 中上 预警态势
    var dateData = [
        '2018/3/6',
        '2018/3/7',
        '2018/3/8',
        '2018/3/9',
        '2018/3/10',
        '2018/3/11',
        '2018/3/12',
        '2018/3/13',
        '2018/3/14',
        '2018/3/15',
        '2018/3/16',
        '2018/3/17',
        '2018/3/18',
        '2018/3/19',
        '2018/3/20',
        '2018/3/21',
        '2018/3/22',
        '2018/3/23',
        '2018/3/24',
        '2018/3/25',
        '2018/3/26',
        '2018/3/27',
        '2018/3/28',
        '2018/3/29',
        '2018/3/30',
        '2018/3/31',
        '2018/4/1',
        '2018/4/2',
        '2018/4/3',
        '2018/4/4',
        '2018/4/5',
        '2018/4/6',
        '2018/4/7',
        '2018/4/8',
        '2018/4/9',
        '2018/4/10',
        '2018/4/11',
        '2018/4/12',
        '2018/4/13',
        '2018/4/14',
        '2018/4/15',
        '2018/4/16',
        '2018/4/17',
        '2018/4/18',
        '2018/4/19',
        '2018/4/20',
        '2018/4/21',
        '2018/4/22',
        '2018/4/23',
        '2018/4/24',
        '2018/4/25',
        '2018/4/26',
        '2018/4/27',
        '2018/4/28',
        '2018/4/29',
        '2018/4/30',
        '2018/5/1',
        '2018/5/2',
        '2018/5/3',
        '2018/5/4',
        '2018/5/5',
        '2018/5/6',
        '2018/5/7',
        '2018/5/8',
        '2018/5/9',
        '2018/5/10',
        '2018/5/11',
        '2018/5/12',
        '2018/5/13',
        '2018/5/14',
        '2018/5/15',
        '2018/5/16',
        '2018/5/17',
        '2018/5/18',
        '2018/5/19',
        '2018/5/20',
        '2018/5/21',
        '2018/5/22',
        '2018/5/23',
        '2018/5/24',
        '2018/5/25',
        '2018/5/26',
        '2018/5/27',
        '2018/5/28',
        '2018/5/29',
        '2018/5/30',
        '2018/5/31',
        '2018/6/1',
        '2018/6/2',
        '2018/6/3',
        '2018/6/4',
        '2018/6/5',
        '2018/6/6',
    ]

    var timesData = [
        42,
        39,
        41,
        38,
        37,
        37,
        37,
        37,
        35,
        32,
        31,
        31,
        31,
        31,
        29,
        28,
        20,
        15,
        15,
        15,
        15,
        15,
        16,
        15,
        17,
        16,
        16,
        16,
        17,
        17,
        16,
        16,
        16,
        16,
        16,
        16,
        17,
        17,
        19,
        18,
        18,
        18,
        19,
        19,
        18,
        21,
        21,
        21,
        23,
        25,
        25,
        27,
        26,
        26,
        26,
        26,
        26,
        26,
        17,
        17,
        17,
        16,
        17,
        17,
        17,
        18,
        19,
        19,
        19,
        20,
        17,
        20,
        20,
        21,
        21,
        21,
        22,
        28,
        31,
        31,
        30,
        29,
        29,
        33,
        32,
        33,
        30,
        30,
        27,
        27,
        28,
        27,
        20,
    ]

    var mychart_topBox_mid = echarts.init(document.getElementById('topBox_mid'),'chalk');
    mychart_topBox_mid.showLoading(loadOption);
    var mychart_topBox_midOption = {
        backgroundColor: 'transparent',
        title:{
            text:'预警态势'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            // backgroundColor: 'rgba(245, 245, 245, 0.8)',
            // borderWidth: 1,
            // borderColor: '#ccc',
            // padding: 10,
            // textStyle: {
            //     color: '#000'
            // },
            // position: function (pos, params, el, elRect, size) {
            //     var obj = {top: 10};
            //     obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            //     return obj;
            // },
            // extraCssText: 'width: 170px'
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        // 缩放
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
            },
            {
                show: false,
                type: 'slider',
                top: 'bottom',
                start: 0,
                end: 100,
                fillerColor:'rgba(66,66,66,0.57)'
            }
        ],
        //color: colorItem,

        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data: dateData,
            name:'时间',
            nameGap:4,
            axisLabel:{rotate:45},
            nameTextStyle:{
                color:'#fff'
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
        },
        yAxis: {
            type: 'value',
            name:'次',
            nameTextStyle:{
                color:'#fff'
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
        },
        series: [{
            name:'预警态势',
            // data: [820, 932, 901, 934, 1290, 1330, 1320],
            data: timesData,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
        }]
    }
    setTimeout(function(){
        mychart_topBox_mid.hideLoading();
        mychart_topBox_mid.setOption(mychart_topBox_midOption);
    }, 500)

    // 右上 板块分布
    var plateData = ['创业板', '中小板', '主板'];
    var plate_valueData = [];
    // for(var i=0;i<plateData.length;i++){
    //     plate_valueData.push({
    //         name: plateData[i],
    //         value:Math.round(Math.random()*100)+20
    //     });
    // }

    var mychart_topBox_right = echarts.init(document.getElementById('topBox_right'),'chalk');
    mychart_topBox_right.showLoading(loadOption);
    var mychart_topBox_rightOption = {
        color: colorItem,
        backgroundColor: backgroundColor,
        title:{
            text:'板块分布'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y:'15%',
            data: plateData
        },
        series: [
            {
                name:'板块分布',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: [
                    {
                        name: '创业板',
                        value:19.65,
                        // itemStyle: {
                        //     normal: {
                        //         color:'#00ffb4',
                        //         opacity: 1,
                        //     }
                        // },
                    },
                    {
                        name: '中小板',
                        value:29.31,
                        // itemStyle: {
                        //     normal: {
                        //         color:'#c487ee',
                        //         opacity: 1,
                        //     }
                        // },
                    },
                    {
                        name: '主板',
                        value:51.04,
                        // itemStyle: {
                        //     normal: {
                        //         color:'#deb140',
                        //         opacity: 1,
                        //     }
                        // },
                    }
                ]
            },
            {
                name:'',
                type:'pie',
                radius: ['20%', '30%'],
                avoidLabelOverlap: false,
                hoverAnimation:false,
                startAngle:270,
                label: {
                    normal: {
                        show: true,
                        position: 'center',

                    },
                    // emphasis: {
                    //     show: true,
                    //     textStyle: {
                    //         fontSize: '16',
                    //         fontWeight: 'bold'
                    //     }
                    // }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {name:'100%',value:100},
                ],
                tooltip:{
                    show:false
                }
            },
        ]
    }
    setTimeout(function(){
        mychart_topBox_right.hideLoading();
        mychart_topBox_right.setOption(mychart_topBox_rightOption);
    }, 500)

    // ====

    // 左下 股票走势分布
    var trendData = [
        "-70%~-75%",
        "-65%~-70%",
        "-60%~-65%",
        "-55%~-60%",
        "-50%~-55%",
        "-45%~-50%",
        "-40%~-45%",
        "-35%~-40%",
        "-30%~-35%",
        "-25%~-30%",
        "-20%~-25%",
        "-15%~-20%",
        "-10%~-15%",
        "-5%~-10%",
        "0%~-5%",
        "0%~5%",
        "5%~10%",
        "10%~15%",
        "15%~20%",
        "20%~25%",
        "25%~30%",
        "30%~35%",
        "35%~40%",
        "40%~45%",
        "45%~50%",
        "50%~55%",
        "55%~60%",
        "60%~65%",
        "65%~70%",
        "70%~75%",
        "75%~80%",
        "80%~85%",
        "85%~90%",
        "90%~95%",
        "95%~100%"
    ];
    var trend_valueData = [
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        4,
        2,
        11,
        11,
        11,
        18,
        20,
        6,
        3,
        1,
        0,
        2,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    // for(var i=0;i<trendData.length;i++){
    //     trend_valueData.push(Math.round(Math.random()*100)+20);
    // }

    var mychart_botBox_left = echarts.init(document.getElementById('botBox_left'),'chalk');
    mychart_botBox_left.showLoading(loadOption);
    var mychart_botBox_leftOption = {
        //color: colorItem,
        backgroundColor: backgroundColor,
        title:{
            text:'操纵时长'
        },
        // 缩放
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
            },
            {
                show: false,
                type: 'slider',
                top: 'bottom',
                start: 0,
                end: 100,
                fillerColor:'rgba(66,66,66,0.57)'
            }
        ],

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                // data:['上市公司伙同他人','上市公司单独','抢帽子型','内幕交易']
                data : [
                    {
                        value:['上市公司伙同他人'],
                        textStyle:{
                            fontSize:16,
                            fontWeight:'500',
                        }
                    },
                    {
                        value:['上市公司单独'],
                        textStyle:{
                            fontSize:16,
                            fontWeight:'500',
                        }
                    },
                    {
                        value:['抢帽子型'],
                        textStyle:{
                            fontSize:16,
                            fontWeight:'500',
                        }
                    },
                    {
                        value:['内幕交易'],
                        textStyle:{
                            fontSize:16,
                            fontWeight:'500',
                        }
                    },
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // axisLabel:{rotate:45},
                name:'',
                nameTextStyle:{
                    color:'#eee',
                    fontWeight:'500',
                },
                axisLabel: {fontSize: 12,},
            }
        ],
        yAxis : [
            {
                type : 'value',
                name:'天',
                nameTextStyle:{
                    color:'#eee',
                    // fontWeight:'500'
                },
            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth: '40%',
                itemStyle: {
                    normal: {
                        color: '#0096f3',
                        opacity: 1,
                    }
                },
                data: [38.12,5.79,3.07,23.00]
            }
        ]
    }
    setTimeout(function(){
        mychart_botBox_left.hideLoading();
        mychart_botBox_left.setOption(mychart_botBox_leftOption);
    }, 500)

    // 中下 横向条形图
    var gain = 0.9;
    var gap = 0;
    // var myColor=['#e63810','#ff6b00','#e3b61f','#13b5b1'];
    var myColor=['#e63810','#e3b61f','#13b5b1'];
    var myBgColor=['rgba(230,56,16,0.2)','rgba(255,107,0,0.2)','rgba(227,182,31,0.2)','rgba(19,181,177,0.2)'];
    //柱子数据
    // var data = [8, 15, 10,6];
    var data = ['68.19','22.04','9.77'];

    var mychart_botBox_mid = echarts.init(document.getElementById('botBox_mid'),'chalk');
    mychart_botBox_mid.showLoading(loadOption);
    var mychart_botBox_midOption = {
        color: colorItem,
        backgroundColor: backgroundColor,
        title:{
            text:'上市时间'
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'cross'
        //     },
        // },
        grid: {
            left: '3%',
            top:'10%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name:'单位：件',
            show:false,
            // nameGap:35+gap,
            // nameTextStyle:{
            //     color:'#ffffff',
            //     fontSize:16*gain,
            // },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle:{
                    color:'rgba(160,160,160,0.3)',
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,0.8)',
                    fontSize:14*gain,
                }
            }
        },
        yAxis:[
            {
                type: 'category',
                show:false,
                axisTick: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color:'rgba(160,160,160,0.3)',
                    }
                },
                axisLabel:{
                    show: false,
                    textStyle:{
                        color:function(param,index){
                            return myColor[index]
                        },
                        fontSize:13*gain,
                    }
                },
                // data: ['01','02','03','04']
                data: ['7年以上','3~7年','0~3年']
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: []
            },
        ],
        series: [
            {
                type: 'bar',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                            var num=myBgColor.length;
                            return myBgColor[params.dataIndex%num]
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label:{
                    normal:{
                        show:true,
                        formatter: function(params) {
                            var stuNum = 0;
                            data.forEach(function(value, index, array) {
                                if (params.dataIndex == index) {
                                    stuNum = value;
                                }
                            })
                            return stuNum+'%' ;
                        },
                        position: 'top',
                        textStyle:{
                            // color:function(params) {
                            //     var num=myBgColor.length;
                            //     return myBgColor[params.dataIndex%num]
                            // },
                            color:'#fff',
                            fontSize:25*gain,
                        }
                    }
                },
                barWidth: '25%',
                // data: [33, 33, 33,33]
                data: [100, 100, 100]
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        position:'left',
                        offset:[0,-25],
                        align:'left',
                        textStyle:{
                            color:function(params) {
                                var num=myBgColor.length;
                                return myBgColor[params.dataIndex%num]
                            },
                            fontSize:25*gain,
                        }

                    }
                },
                barWidth: '25%',
                data: data
            }
        ]
    }
    setTimeout(function(){
        mychart_botBox_mid.hideLoading();
        mychart_botBox_mid.setOption(mychart_botBox_midOption);
    }, 500)

    // 右下 市值分布
    var marketData = ['0-100亿', '100-500亿', '500-2000亿', '2000亿以上'];
    var market_valueData = [
        {name:'0-100亿',value:54.68},
        {name:'100-500亿',value:30.98},
        {name:'500-2000亿',value:9.25},
        {name:'2000亿以上',value:5.09},
    ];

    var mychart_botBox_right = echarts.init(document.getElementById('botBox_right'),'chalk');
    mychart_botBox_right.showLoading(loadOption);
    var mychart_botBox_rightOption = {
        color: colorItem,
        backgroundColor: backgroundColor,
        title:{
            text:'市值分布'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y:'15%',
            data: marketData
        },
        series: [
            {
                name:'市值分布',
                type:'pie',
                // radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                clockwise: false,
                label:{
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        itemStyle:{
                            fontSize:26
                        }
                    }
                },
                data: market_valueData
            },

        ]
    }
    setTimeout(function(){
        mychart_botBox_right.hideLoading();
        mychart_botBox_right.setOption(mychart_botBox_rightOption);
    }, 500)

});