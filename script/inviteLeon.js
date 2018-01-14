$('#inviteBtn').click(function(){
    $('.invite-layer').show();
})
$('.invite-close').click(function(){
    $('.invite-layer').hide();
})

$('body').on('click','.invite-layer',function(e){
    e.stopPropagation();
});