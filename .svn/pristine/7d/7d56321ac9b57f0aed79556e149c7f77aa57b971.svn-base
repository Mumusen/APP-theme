/**
 * Created by Administrator on 2017/3/8.
 */
//设备类型判断  修改状态栏
$.binLib = {};


function judDevice(dom,num){
    var top = parseInt(dom.parent().next().css('marginTop'));
    top += num;
    var type = api.systemType;
    var a = dom.parent().attr('class');
    //alert(a);
    var b = a.split(' ');
    var c = String(b[1]);
    console.log(c);
    if(type === 'ios'){
        dom.addClass('iosHeader');
        if(c !== undefined){
            dom.parent().next().css({
                marginTop:top+'px'
            });
            dom.css({
                display:'block'
            });
        }else{
            dom.css({
                display:'block'
            });
        }
    }else{
        dom.css({
            display:'none'
        });
    }
}

//关闭窗口

function closeWindow(tag){
    api.closeWin({
        name:tag
    })
}
//关闭frame

function closeFrame(tag){
    api.closeFrame({
        name:tag
    })
}

//打开窗口

function openWindow(tag,obj){
    api.openWin({
        name:tag,
        url:'./'+tag+'.html',
        pageParam: obj,
        allowEdit:true,
        showProgress:true
    })
}
//打开frame

function openFrameWin(tag,obj){
    api.openFrame({
        name: tag,
        url: './'+tag+'.html',
        pageParam:obj,
        rect: {
            x: 0,
            y: 0,
            w: api.winWidth,
            h: api.winHeight
        },
        bounces:false,
        animation:{
            type:"push",                //动画类型（详见动画类型常量）
            subType:"from_right",       //动画子类型（详见动画子类型常量）
            duration:300                //动画过渡时间，默认300毫秒
        },
        showProgress:true

    })
}

//判断密码是否非法
function testPwd(pwd){
    var exp = new RegExp('^[A-Za-z0-9]{6,12}$','ig'); //ig;
    var t = pwd.val();
    return exp.test(t);
}

//检测是否为空
function testNull(para){
    if(para.val() === ""){
        return true
    }else{
        return false
    }
}

//获取验证码 定时器
function testCode(btn){
    var s = 59;
    var timer = setInterval(function () {
        var str = s+'s';
        btn.addClass("on").css({color:"#ccc"}).attr({disabled:"disabled"}).html(str);
        if(s === 0){
            clearInterval(timer);
            btn.removeAttr("disabled").css({color:"#fc4444"}).html('重新发送');
        }
        s--;
    },1000)
}

//截取字符串
function substri(s,n){
    return s.substring(0,n);
}
//调用 暂无数据 页面 frame

function openNoData(x,y){
    api.openFrame({
        name: 'noData',
        url: './noData.html',
        rect: {
            x: x,
            y: y,
            w: api.winWidth,
            h: api.winHeight
        },
        pageParam: {
            name: 'test'
        },
        bounces: true,
        bgColor: 'rgba(0,0,0,0)',
        vScrollBarEnabled: true,
        hScrollBarEnabled: true
    });
}
//格式化金额
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;   
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
    var l = s.split(".")[0].split("").reverse(),   
    r = s.split(".")[1];   
    t = "";   
    for(i = 0; i < l.length; i ++ )   
    {   
       t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
    }   
    return t.split("").reverse().join("") + "." + r;   
 }
 //年月日格式化 排序  传入格式必须是arr1 = ['2017-04','2015-05','2016-07','2016-11','2017-12','2015-04','2017-04','2017-04','2017-04']
function ymdSort(arr){
    var timeArr = [];
    var formatArr = [];
//        var arr1 = ['2017-04','2015-05','2016-07','2016-11','2017-12','2015-04','2017-04','2017-04','2017-04'];
    arr = arr.sort();
    var arrYM = arr.reverse();
//        console.log(arr1);
    for(var i = 0;i < arrYM.length;i++){
        if(arrYM[i] !== arrYM[i+1]){
            timeArr.push(arrYM[i]);
        }
    }
//        console.log(timeArr);
    for(var j = 0;j < timeArr.length; j++){
        var ym = timeArr[j];
        var format = ym.replace('-','年')+'月';
        formatArr.push(format)
//            console.log(ym);
    }
    //console.log(formatArr);
    return formatArr
}

//退出应用提示
function fnInitEventListenner() {
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        api.confirm({
            title: '提示',
            msg: '是否退出应用',
            buttons: ['确定', '取消']
        }, function(ret, err) {
            if (ret.buttonIndex == 1) {
                api.closeWidget();
            }
        });
    });
}

function openLoading(){
    $('.commonLoading').css('display','block');
}
function closeLoading(){
    $('.commonLoading').css('display','none');
}
//主页面frame
function openFrameOutHF(name,url,obj,num){
    api.openFrame({
        name: name,
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: api.winWidth,
            h: $api.dom('#main').offsetHeight+num
        },
        reload: true,
        pageParam: obj,
        showProgress:true
    });
}

//关闭多个frameGroup
function closeMoreFrameGroup(arr){
    for(var i = 0;i<arr.length;i++){
        api.closeFrameGroup({
            name: arr[i]
        });
    }
}

//检测更新弹出框
function TestUpdateBox() {

    this.init = function (obj,callback) {
        var $this = this;
        var ret = {};
        this.pageHTML(obj);

        $('.buttonContainer').on('click','button',function () {
            var indextype = $(this).attr('data-index');
//            console.log("cancel");
//             if(indextype === 'cancel'){
            $('.testUpdate').remove();
            // }
            ret.resultCheck = indextype;
            ret.query = '.testUpdate';
            callback(ret);
//            $('.clickEventIndex').html($(this).attr('data-index'));
        });
    }

    this.pageHTML = function (data) {
        var html =
            '<div class="testUpdate">'+
            '<div class="title">更新提示</div>'+
            '<div class="updateContent">'+
            '<p class="version">版本号: <span>'+data.version+'</span></p>'+
            '<p class="content">更新内容： <span>'+data.content+'</span></p>'+
            '</div>'+
            '<div class="buttonContainer">'+
            '<button class="cancel" data-index="cancel">取消</button>'+
            '<button class="confirm" data-index="confirm">确认</button>'+
            '</div><b class="clickEventIndex" style="display: none;"></b>'+
            '</div>';

        $('body').append(html);


    }

}

//加载更多
function LoadingMore() {
    this.open = function (obj, styleCss) {
        var isJquery = obj instanceof jQuery;//是否为jquery对象

        if(styleCss === undefined || styleCss === null){
            styleCss = {};
        }

        if (isJquery) {//如果为jquery对象
            //styleCss可以不传入
            //传入后
            var isObject = Object.prototype.toString.call(styleCss);//是否为对象
            //判断传入的是否是对象
            if(isObject === '[object Object]'){
                var html = this.loadingHTML(styleCss);
                obj.append(html);//渲染页面
                if(styleCss.color === undefined || styleCss.color === null){
                    styleCss.color = "#49406f";
                }
                $('.loadingMore').css({
                    color: styleCss.color
                });
            }else{
                throw new Error(styleCss + "is not Object");
            }

        } else {
            throw new Error(obj + "is not jquery Object");
        }
    }

    this.loadingHTML = function (styleCss) {
        //loading图路径
        if(styleCss.url === undefined || styleCss.url === null){
            styleCss.url = "../image/loading_more.gif";
        }

        var html =
            '<div class="loadingMore">' +
            '<span><img src="'+styleCss.url+'"><b>正在加载...</b></span>' +
            '</div>';
        return html;
    }

    this.close = function () {
        $('.loadingMore').remove();
    }

    
}
//公共样式弹窗
function commonAlertWindow(obj) {
    var html =
        '<div class="commonAlertBox">' +
            '<div class="alertContent">' +
                obj.message+
            '</div>' +
        '</div>';
    $('body').append(html);

    setTimeout(function () {
        $('.commonAlertBox').remove();
    },obj.time)
}
// WaitLoading等待加载
function WaitLoading(){
    this.open = function(){
        var html = '<div class="loading"></div>';
        $('body').append(html);
    }
 
    this.close = function() {
        // $('.loading').remove();
        setTimeout(function () {
            $('.loading').remove();
        },600)
    }
}

// 下拉刷新



//ajax url公共配置
function url(){
    // return 'http://192.168.0.240:8081/';
    // return 'https://www.renrenqutou.com/';
    return 'http://192.168.0.106:8080/';
}