//点击日期出现下拉框
function clickDate(){
    $('.show-date').on('click',function(){
        $('.bind-mark').show();
        $('.popupsList').show();
        $('.bind-mark').click(function(){
            $('.popupsList').hide();
            $(this).hide();
        })
    })
}