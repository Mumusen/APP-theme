function secondCharts(){
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
       /* legend: {
            orient: 'vertical',
            left: 'center',
            top:'bottom',
            data: ['上涨家数','下跌家数','平盘家数','停牌家数']
        },*/
        color:['#ec584c','#1a57e3','#ffe400','#4bb0f5'],
        calculable:true,
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '50%',
                center: ['50%', '40%'],
                data:[
                    {value:12, name:'上涨家数'},
                    {value:5, name:'下跌家数'},
                    {value:1, name:'平盘家数'},
                    {value:1, name:'停牌家数'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    var secondCharts = echarts.init(document.getElementById('secondChartsContainer'));
    secondCharts.setOption(option);
}