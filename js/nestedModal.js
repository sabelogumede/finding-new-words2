$('#commentsModal').on('show', function() {
    $('#modalNewWordList').css('opacity', .5);
    $('#modalNewWordList').unbind();
});
$('#commentsModal').on('hidden', function() {
    $('#modalNewWordList').css('opacity',1);
    $('#modalNewWordList').removeData('modal').modal({});
});