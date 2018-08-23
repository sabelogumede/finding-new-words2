$(document).ready(function() {

    $('.comments').hide();

    $('#word').click(function() {
        $('.modalNewWordList').hide();
        $('.comments').show();
    });

    $('#backTowords').click(function() {
        $('.comments').hide();
        $('.modalNewWordList').show();
        
    });

    // $('#modalWordsList').click(function() {
    //     $('.modalNewWordList').hide();
    // })

});