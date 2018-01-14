var themeInvest= {
    //初始化
    init:function(){
        this.foundRendering();
        this.billboardRenderingNew();
        this.billboardRenderingFive();
    },
    //资金流向数据渲染
    foundRendering:function(){
        api.ajax({
            url: 'http://192.168.0.168:777/fundflow/getFundflow'
           // method: 'get',

        }, function(ret, err) {
            var fundflowInHtml='';
            var fundflowOutHtml='';
            if(ret.code){
                var inResult=ret.inResult;
                var outResult=ret.outResult;
                for(var i=0;i<inResult.length;i++){
                    var info = inResult[i];
                    fundflowInHtml+='<li class="clearfix" onclick="openWindow(\'themeDetails\',{},\'push\')" data-ID="'+info.id+'">' +
                                    '     <span>'+info.conceptStockName+'</span>' +
                                    '     <span>'+yuanToYi(info.flowInTotal)+'</span>' +
                                    '     <span class="percentage">'+(info.chg*100).toFixed(2)+'%'+'</span>\n' +
                                    '</li>'
                }
                for(var i=0;i<outResult.length;i++){
                    var info = outResult[i];
                    fundflowOutHtml+='<li class="clearfix" onclick="openWindow(\'themeDetails\',{},\'push\')" data-ID="'+info.id+'">' +
                        '     <span>'+info.conceptStockName+'</span>' +
                        '     <span>'+yuanToYi(info.flowInTotal)+'</span>' +
                        '     <span class="percentage">'+(info.chg*100).toFixed(2)+'%'+'</span>\n' +
                        '</li>'
                }
                $('.foundflowIn ul').html(fundflowInHtml);
                $('.foundflowOut ul').html(fundflowOutHtml);
                changeColor();
            }
        });

    },
    //龙虎榜交易数据渲染
    billboardRenderingNew:function(){
        api.ajax({
            url:'http://192.168.0.168:777/stock/getConceptHeroList?days=1'
        },function(ret){
            var newHtml='';
            if(ret.code){
                var conceptStockHeroList=ret.conceptStockHeroList;
                for(var i=0; i<conceptStockHeroList.length;i++){
                    var info=conceptStockHeroList[i];
                    newHtml+='<li class="clearfix" onclick="openWindow(\'themeDetails\',{},\'push\')" data-ID="'+info.id+'">' +
                        '         <span>'+info.conceptName+'</span>' +
                        '         <span>'+yuanToYi(info.dealTotal)+'</span>' +
                        '         <span class="valColor">'+yuanToYi(info.netAmount).fixed(2)+'</span>' +
                        '         <span>'+info.stockName+'</span>' +
                        '     </li>'
                }
                $('.newest ul').html(newHtml);
                changeColor();
            }
        })
    },
    billboardRenderingFive:function(){
        api.ajax({
            url:'http://192.168.0.168:777/stock/getConceptHeroList?days=5'
        },function(ret){
            var nearlyDayHtml='';
            if(ret.code){
                var conceptStockHeroList=ret.conceptStockHeroList;
                for(var i=0; i<conceptStockHeroList.length;i++){
                    var info=conceptStockHeroList[i];
                    nearlyDayHtml+='<li class="clearfix" onclick="openWindow(\'themeDetails\',{},\'push\')" data-ID="'+info.id+'">' +
                        '         <span>'+info.conceptName+'</span>' +
                        '         <span>'+yuanToYi(info.dealTotal)+'</span>' +
                        '         <span class="valColor">'+yuanToYi(info.netAmount).fixed(2)+'</span>' +
                        '         <span>'+info.stockName+'</span>' +
                        '     </li>'
                }
                $('.nearFive ul').html(nearlyDayHtml);
                changeColor();
            }
        })
    }
}
