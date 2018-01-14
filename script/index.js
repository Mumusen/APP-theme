var themeList = {
    theme: function(){
        this.choiceEditTab();
        this.riseBtn();
    },
    choiceEditTab :function() {
        var $li = $('#tabBox span');
        var $ul = $('.theme .rise');
        $ul.eq(0).css('display', 'block');
        $li.mouseover(function() {
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('active');
            $ul.css('display', 'none');
            $ul.eq($t).css('display', 'block');
        });
    },
    riseBtn : function(){
        $(".rise").on("click","li .right a",function(){
            var _this = this;
            if(_this.classList.contains("follow-no")){
                console.log("包含 follow-no 这个class");
                $(this).removeClass("follow-no");
            }else{
                $(this).addClass("follow-no")
            }
        });
    }
    
}



$.binLib.indexTheme = function (){
    themeList.theme();
}