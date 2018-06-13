// 雷达图
var radarBox_chart2 = echarts.init(document.getElementById('radarBox2'));
radarBox_chart2.showLoading({
    text: '加载中...',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(0,0,0,.1)',
});
var radarOption2 = {
    backgroundColor: 'transparent',
    title: {
        // text: '基础雷达图'
    },
    tooltip: {
        confine:true,
    },
    radar: {
        radius:'77%',
        splitNumber:2,
        shape: 'circle',
        splitLine: {
            lineStyle: {
                type:'solid',
                color: [
                    '#1894f5'
                ]
            }
        },
        name: {
            textStyle: {
                color: '#fff',
                fontSize:16
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(10, 101, 218, 0.3)',
                opacity: 1,
                shadowBlur: 45,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eee',
            }
        },
        axisTick: {
            lineStyle: {
                color: 'red',
                shadowColor:'red'
            }
        },
        indicator: [
            { name: '行情异动', max: 1},
            { name: '大宗交易', max: 1},
            { name: '股东减持', max: 1},
            { name: '股权质押', max: 1},
            { name: '市场消息', max: 1},
            { name: '投资者\n异动', max: 1},
            { name: '财报异常', max: 1},
            { name: '利好公告', max: 1}
        ]
    },
    series: [{
        name: '南风股份（300004）',
        type: 'radar',
        areaStyle: {normal: {
                color:'#1cbbf5'
            }},
        itemStyle:{
            normal:{
                color:'#fff'
            }
        },
        lineStyle:{
            normal:{
                color:'#00c6ff',
                type:'solid',
            }
        },
        data : [
            {
                value :[0.4,0.99,0.9,0.8,0.25,0.95,0.2,0.6],
                name : ''
            }
        ]
    }]
};
setTimeout(function(){
    radarBox_chart2.hideLoading();
    radarBox_chart2.setOption(radarOption2);
},1000)

// 底部柱状折线图====

// k线图
var upColor2 = '#fc97af';
var upBorderColor2 = '#fc97af';
var downColor2 = 'transparent';
var downBorderColor2 = '#87f7cf';

// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)

// bigData.js
// var data02 = splitData(bigData);
var data02 = splitData(bigData_new2);

// 处理数据
function splitData(rawData) {
    var categoryData2 = [];//x轴-- 时间
    var values2 = []; //K线图 --

    //var turnoverData = [];//收盘价 大盘指数 --折线图

    var volumeData2 = [];//成交量 --柱状图

    //var scatterData2 = [];//成交量 --柱状图

    var m5Data2 = [];

    for (var i = 0; i < rawData.length; i++) {
        categoryData2.push(rawData[i]['日期']);

        // turnoverData.push({
        //     value:rawData[i]['收盘价(元)']
        //     // value:rawData[i]['上证指数']
        // });//成交额

        volumeData2.push((rawData[i]['成交量']/1000000).toFixed(2));//成交量

        values2.push([rawData[i]['开盘价(元)'],rawData[i]['收盘价(元)'],rawData[i]['最低价(元)'],rawData[i]['最高价(元)']]);

        m5Data2.push(Number(rawData[i]['M5']).toFixed(2))

    }
    return {
        categoryData2: categoryData2,
        values2: values2,
        //turnover :turnoverData,
        volume :volumeData2,
        //scatter:scatterData2
        m5Data2 : m5Data2
    };
}
var scatterData2 = [];
$.each(things2,function (index,item) {
    var color='';
    if (item['事件类型']=='行情异动'){
        color='#ee506e';
    }else if (item['事件类型']=='大宗交易'){
        color='#ed4aff';
    }else if (item['事件类型']=='股东减持'){
        color='#46cd3c';
    }else if (item['事件类型']=='股权质押'){
        color='#fff957';
    }else if (item['事件类型']=='市场消息'){
        color='#cd0020';
    }else if (item['事件类型']=='牛散入场'||item['事件类型']=='私募入场'){
        color='#ac4fcd';
    }else if (item['事件类型']=='财报异动'){
        color='#00ff0b';
    }else if (item['事件类型']=='利好公告'){
        color='#1cd8ff';
    }else {
        color = '#0093e1';
    }
        scatterData2.push(
        {
            value:[item['日期'],4000,item['事件类型'],item['事件简述']],
            itemStyle:{
                normal:{
                    color:color,
                },
                emphasis:{
                    color:'#ffaa00',
                }

            },
        },
    );//散点图 预警点
});

//工业机械指数
// var industyData=[];
// $.each(bigData,function (index,item) {
//     industyData.push(item['收盘价(元)']);
// });
//深圳成指
var gemData2=[];
$.each(bigData3,function (index,item) {
    gemData2.push(item['收盘价(元)']);
});

// 预警区间小旗
var sectionData2 = [
    {
        value:['2014/5/29',4000,'上市公司伙同他人 -- 2014年5月29日 开始'],
        symbol: 'image:///static/images/公共-红旗 (4).png',//小旗 矢量图
        // itemStyle:{
        //     normal:{
        //         // color:'#fff',
        //         color:'#ffee51',
        //     },
        //     emphasis:{
        //         color:'#ffaa00',
        //     }
        // },
    },
    {
        value:['2014/12/9',4000,'上市公司伙同他人 -- 2014年12月9日 结束'],
        symbol: 'image:///static/images/公共-红旗 (4).png',//小旗 矢量图
        // itemStyle:{
        //     normal:{
        //         color:'#ffee51',
        //     },
        //     emphasis:{
        //         color:'#ffaa00',
        //     }
        // },
    },
]

// 折线图 预警点
//  图表配置
var line_chart2 = echarts.init(document.getElementById('totalLine2'),'chalk');
line_chart2.showLoading({
    text: '加载中...',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(0,0,0,.1)',
});

var lineOption2 = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'axis',//x轴 触发
        // trigger: 'item',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            }
        }
    },
    legend: {
        data:[
            // '交易量','自身价格','MA5','大盘指数'],
            {name:'交易量',

            },
            {name:'自身价格'},
            {name:'交易量'},
            {name:'MA5',
                // textStyle:{
                //     color:'#f7f494'
                // },
                // itemStyle:{
                //     color:'#f7f494'
                // }

            },
            {name:'大盘指数'},
            {name:'深圳成指'},
            {name:''},
        ],
        x:'10%',
        y:'10'
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    grid: [{
        left: 70,
        right: 50,
        // height: '40%'
        height: '50%'
    }, {
        left: 70,
        right: 50,
        top: '75%',
        height: '18%'
    }],
    // 缩放
    dataZoom: [
        {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 70,
            end: 100,
            // borderColor:"red",
        },
        {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: 'bottom',
            start: 70,
            end: 100,
            fillerColor:'rgba(66,66,66,0.57)',
            // borderColor:"red",
            // handleColor: 'red'//手柄颜色
            textStyle:{
                color:'#fff'
            }
        }
    ],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            // data: day30
            data: data02.categoryData2,
            axisLine:{
                onZero: true,
                lineStyle:{
                    color:'#fff',

                }
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            // data: day30,
            data: data02.categoryData2,
            position: 'bottom',
            show:false,
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
        },
    ],
    yAxis : [
        {
            name : '股价(元)',//k线图（上 左y轴）
            type : 'value',
            // max : 500
            scale: true,
            splitArea: {
                show: false
            },
            nameTextStyle:{
                color:'#fff',
                fontWeight:'700'
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },

            splitLine:{
                show:false,
                lineStyle:{
                    color:'#ccc',
                    opacity:.3
                }
            }
        },
        {
            name:'深圳成指',//折线图 （上 右y轴）
            type: 'value',
            scale: true,//只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
            splitArea: {
                show: false
            },
            nameTextStyle:{
                color:'#fff',
                fontWeight:'700'
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#ccc',
                    opacity:.1
                }
            }
        },
        {
            gridIndex: 1,
            name : '交易量(百万股)',//柱状图
            type : 'value',
            inverse: false,
            // nameLocation: 'start',
            nameLocation: 'end',
            position:'left',
            // nameRotate:90,
            axisLabel:{
                // rotate:45
            },
            scale: true,
            splitArea: {
                show: false
            },
            nameTextStyle:{
                color:'#fff',
                fontWeight:'700'
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
        },
        {
            name:'预警点',//散点图 （上 右y轴）
            show:false,
            type: 'value',
            scale: false,//只在数值轴中（type: 'value'）有效。是否是脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。在设置 min 和 max 之后该配置项无效。
            max:4000,
            splitArea: {
                show: false
            },
            axisPointer:{
                label:{
                    backgroundColor:'#666666'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#ccc',
                    opacity:.3
                }
            }
        },
        // {
        //     boundaryGap: [0, '50%'],
        //     type: 'value',
        //     name: '工业机械指数',
        //     position: 'right',
        //     offset: -70,
        //     splitNumber: 10,
        //     nameTextStyle:{
        //         color:'#fff',
        //         fontWeight:'700'
        //     },
        //     axisLine:{
        //         lineStyle:{
        //             color:'#fff'
        //         }
        //     },
        //     axisPointer:{
        //         label:{
        //             backgroundColor:'#666666'
        //         }
        //     },
        //     splitLine:{
        //         show:true,
        //         lineStyle:{
        //             color:'#ccc',
        //             opacity:.1
        //         }
        //     }
        // },
    ],
    series: [
        {
            name:'交易量',//柱状图
            type:'bar',
            // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            // data:day30Data,
            data: data02.volume,
            xAxisIndex: 1,
            yAxisIndex: 2,
            // hoverAnimation: false,
            // barWidth:10
            itemStyle:{
                normal:{
                    color:'#31aff1'
                }

            }
        },
        {
            name:'自身价格',//k线图
            type:'candlestick',
            // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            data: data02.values2,
            itemStyle: {
                normal: {
                    color: upColor2,
                    color0: downColor2,
                    borderColor: upBorderColor2,
                    borderColor0: downBorderColor2,
                    borderWidth:2
                }
            },
        },
        {
            name: 'MA5',
            type: 'line',
            data: data02.m5Data2,
            smooth: true,
            lineStyle: {
                normal: {
                    opacity: 0.5
                    // color:'#f7f494'
                }
            }
        },
        // {
        //     name:'大盘指数',//折线图
        //     type:'line',
        //     data: data02.turnover,//暂 用收盘价
        //     yAxisIndex: 0,
        //     symbol:'circle',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        //     lineStyle: {
        //         normal: {
        //             // color: '#fff',
        //             // color: '#e01f54',
        //             width:1
        //         }
        //     },
        // },
        // {
        //     name:'工业机械指数',//折线图
        //     type:'line',
        //     data: industyData,//暂 用收盘价
        //     yAxisIndex: 1,
        //     symbol:'circle',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        //     lineStyle: {
        //         normal: {
        //             // color: '#fff',
        //             // color: '#e01f54',
        //             width:1
        //         }
        //     },
        // },
        {
            name:'深圳成指',//折线图
            type:'line',
            data: gemData2,//暂 用收盘价
            yAxisIndex: 1,
            symbol:'circle',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            lineStyle: {
                normal: {
                    // color: '#fff',
                    // color: '#e01f54',
                    width:1
                }
            },
        },
        {
            name:'预警点',//预警点
            type: 'scatter',
            yAxisIndex: 3,
            // symbol: 'path://M853.333 682.667L739.556 398.222l113.777-284.444H227.556v-56.89h-56.89v853.334h-56.888v56.89h170.666v-56.89h-56.888V682.667h625.777z m-85.333-512l-91.022 227.555L768 625.778H227.556V170.667H768z',//小旗 矢量图
            symbol: 'circle',
            symbolSize:15,
            // itemStyle:{
            //     normal:{
            //         color:'#ee506e',
            //     },
            //     emphasis:{
            //         color:'#ffaa00',
            //     }
            //
            // },
            data: scatterData2,
            cursor: 'pointer',
            hoverAnimation:true,
            tooltip: {
                // show:false
                trigger: 'item',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    }
                },
                // backgroundColor:'rgba(0,0,0,.5)',
                // backgroundColor:'#343d5f',
                backgroundColor:'#0e2c55',
                // backgroundColor:'rgba(52,61,92,.5)',
                borderColor:'rgba(52,61,92,.5)',
                borderWidth: 1,
                padding: 5,
                textStyle:{
                    // fontSize: 16,
                    fontSize: 18,
                    color:'#fff',
                    fontWeight:700
                },
                extraCssText: 'box-shadow: 0 0 3px rgba(52,61,92,.5);',
                formatter:function(params){
                    var txt=params.value[3].replace(/(.{20})/g,'$1<br>');
                    // return params.value[0]+' --- '+params.value[2]+'<br/>'+txt;
                    return '【'+params.value[2]+'】'+ ' --- '+params.value[0]+'<br/>'+txt;
                }
            }
        },
        {
            name:'预警区间',//预警点
            type: 'scatter',
            yAxisIndex: 3,
            // symbol: 'path://M853.333 682.667L739.556 398.222l113.777-284.444H227.556v-56.89h-56.89v853.334h-56.888v56.89h170.666v-56.89h-56.888V682.667h625.777z m-85.333-512l-91.022 227.555L768 625.778H227.556V170.667H768z',//小旗 矢量图
            // symbol: 'image:///static/images/公共-红旗(1).png',//小旗 矢量图
            symbolSize:25,
            data: sectionData2,
            cursor: 'pointer',
            hoverAnimation:true,
            symbolOffset:[0,-10],
            tooltip: {
                // show:false
                trigger: 'item',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999',
                    }
                },
                backgroundColor:'#0e2c55',
                borderColor:'rgba(52,61,92,.5)',
                borderWidth: 1,
                padding: 5,
                textStyle:{
                    // fontSize: 16,
                    fontSize: 18,
                    color:'#fff',
                    fontWeight:700
                },
                extraCssText: 'box-shadow: 0 0 3px rgba(52,61,92,.5);',
                formatter:function(params){
                    // console.log(params);
                    // var txt=params.value[3].replace(/(.{20})/g,'$1<br>');
                    var txt=params.value[2];

                    // return '【'+params.value[2]+'】'+ ' --- '+params.value[0]+'<br/>'+txt;
                    return txt;
                }
            }
        },
    ]
};

setTimeout(function(){
    line_chart2.hideLoading();
    line_chart2.setOption(lineOption2);
},1000);