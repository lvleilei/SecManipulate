var chart1 = echarts.init(document.getElementById('chart-1'));
chart1.showLoading({
    text: '加载中...',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(0,0,0,.1)',
});
var option1 = {
    backgroundColor: 'transparent',
    title: {
        // text: '基础雷达图'
    },
    tooltip: {
        show:false,
        confine:true,
    },
    series: [{
        type: "liquidFill",
        radius: "90%",
        data: [{
            value: 0.0057,
            itemStyle: {
                normal: {
                    color: "#f25051",
                }
            }
        }],
        shape: "diamond",
        backgroundStyle: {
            color: "rgba(255, 255, 255, 0)"
        },
        name: "",
        label: {
            normal: {
                show: true,
                color: "#fff",
                insideColor: "#fff",
                fontSize: 60,
                fontWeight: "bold",
                align: "center",
                baseline: "middle",
                position: "inside",
                formatter:function (param) {
                    return '0.57%'
                }
            }
        },
        outline: {
            show:true,
            borderDistance: 15,
            itemStyle: {
                color: "none",
                // borderColor: "#1b6cc9",
                borderColor: "#f25051",
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: "rgba(0, 0, 0, 0.25)"
            }
        }
    }]
};
setTimeout(function(){
    chart1.hideLoading();
    chart1.setOption(option1);
},800);
var chart2 = echarts.init(document.getElementById('chart-2'));
chart2.showLoading({
    text: '加载中...',
    color: '#fff',
    textColor: '#fff',
    maskColor: 'rgba(0,0,0,.1)',
});
var option2 = {
    backgroundColor: 'transparent',
    title: {
        // text: '基础雷达图'
    },
    tooltip: {
        confine:true,
        show:false
    },
    series: [{
        type: "liquidFill",
        radius: "90%",
        data: [{
            value: 0.2,
            itemStyle: {
                normal: {
                    color: "#1b6cc9"
                }
            }
        }],
        shape: "diamond",
        backgroundStyle: {
            color: "rgba(255, 255, 255, 0)"
        },
        name: "",
        label: {
            normal: {
                show: true,
                color: "#fff",
                insideColor: "#fff",
                fontSize: 60,
                fontWeight: "bold",
                align: "center",
                baseline: "middle",
                position: "inside",
                formatter: function() {
                    return '低';
                },
            },
        },
        outline: {
            show: true,
            borderDistance: 15,
            itemStyle: {
                color: "none",
                borderColor: "#1b6cc9",
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: "rgba(0, 0, 0, 0.25)"
            }
        }
    }]
};
setTimeout(function(){
    chart2.hideLoading();
    chart2.setOption(option2);
},800);
window.onresize = function () {
    setTimeout(function () {
        chart1.resize();
        chart2.resize();
    },300);
};