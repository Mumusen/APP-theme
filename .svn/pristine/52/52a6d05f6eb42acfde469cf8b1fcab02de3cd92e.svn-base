function firstCharts(){
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['09:30','10:00','11:030/13:00','14:00','15:00'],
                axisLine: {
                    show:true,
                    lineStyle:{
                        color:'#e6e1e1'
                    }
                },
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    show:true,
                    lineStyle:{
                        color:'#e6e1e1'
                    }
                },
                axisTick:{
                    show:false
                }
            }
        ],
        series : [
            {
                name:'****',
                type:'line',
                stack: '总量',
                symbol:'none',  //这句就是去掉点的
                smooth:true,  //这句就是让曲线变平滑的
                areaStyle: {normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0.5, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 0.8, color: 'white' // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
                    opacity:0.4,
                }},
                data:[120, 132, 101, 134, 90]

            }
        ]
    };
    var firstCharts = echarts.init(document.getElementById('firstChartsContainer'));
    firstCharts.setOption(option);
}
function secondCharts(){
    option = {
        tooltip : {
            trigger: 'item'
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3','#e5cf0d','#97b552'],
        calculable : false,
        series : [
            {
                name:'面积模式',
                type:'pie',
                radius : ['30%', '70%'],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value:10, name:'苹果产业链'},
                    {value:5, name:'苹果产业链1'},
                    {value:15, name:'苹果产业链2'},
                    {value:25, name:'苹果产业链3'},
                    {value:20, name:'苹果产业链4'},
                    {value:35, name:'苹果产业链5'},
                    {value:30, name:'苹果产业链6'},
                    {value:40, name:'苹果产业链7'}
                ]
            }
        ]
    };
    var secondCharts = echarts.init(document.getElementById('secondChartsContainer'));
    secondCharts.setOption(option);
}