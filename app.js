$(function () {
    $('li').on('mouseover', function () {
        $(this).css('opacity', '1')
    })
    $('li').on('mouseout', function () {
        $(this).css('opacity', '0.5')
    })


    function css(i) {
        var offset = $('.bigBox').offset();
        return $(".pic" + i).on('click', function () {
            $(".large" + i).fadeToggle()
            $('body').css('background', 'black')
            $('li').css('opacity', '1')
            $('.box').css('opacity', '0.1')
            $('.x').css('opacity', '1')
            $('.bottoms').css('opacity','1')
            $('header').css('opacity','0')
            $('section').css('opacity','0')
            $('.bigBox').offset({ top:900});
        })

    }
    for (var i = 1; i < 17; i++) {
        css(i)
    }


    $('.next').on('click', function () {

        $('ol').each( function () {

            if($(this).attr('style')=='display: block;'){
               $(this).fadeOut(0,function () {
                   $(this).next().fadeIn()
               })
            }

        })
    })

    $('.prev').on('click', function () {

        $('ol').each( function () {
            if($(this).attr('style')=='display: block;'){
                $(this).fadeOut(0,function () {
                    $(this).prev().fadeIn()
                })
            }
        })
    })

    $('.x').on('click', function (e) {
        $('.box2').css('display', 'none');
        $('body').css('background', '#f6f6f6')
        $('li').css('opacity', '0.5')
        $('.box').css('opacity', '1');
        location.reload();




    })


})




