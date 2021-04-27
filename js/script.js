// $(document).ready(function() {

    // let width = $('body').width()
let windowWidth = $(window).width()

   $(window).bind('scroll', function() {
    if ($(document).scrollTop() > ($('header').height() + 50)) {
        $('header').addClass('scroll-a')

   } else if ($(document).scrollTop() < ($('header').height() + 50)) {
        $('header').removeClass('scroll-a')
    } 

  })

 


   // $(window).bind('scroll', function() {
    
   //   })
   // } else if ($(document).scrollTop() > ($('header').height() + $('article').height()) {

   // }

    // $('.like').bind('click', function() {

    //   // let count = +$(this).siblings('.comment__counter').text()



    //   $(this).parent('.comment__clock').find('span').text() = "1000"
    // })

    $('.main-btn ').bind('click', function() {
      $('.white-popup').addClass('popup-open')
      $('.overlay').show()
      $('html').addClass('scroll-block')
    })

    $('.navbar-toggler').bind('click', function() {
      let scrollMenu = $(document).scrollTop()
      $('html').addClass('scroll-block')
      $(document).scrollTop(scrollMenu)
    })

  $('.mobile-screen__close').bind('click', function() {
    $('.navbar-collapse').removeClass('show')
    $('html').removeClass('scroll-block')
    $(document).scrollTop(scrollMenu)
   })

    let plus = true

    $('.like').bind('click', function() {

       let count = $(this).parent('.comment__clock').find('.comment__counter').text()
       if (plus == true) {
          count = +count+1
          $(this).parent('.comment__clock').find('.comment__counter').text(count)
          $(this).css('color', 'black')
          plus = false
       } else if (plus == false) {
          count = +count-1
          $(this).parent('.comment__clock').find('.comment__counter').text(count)
          $(this).css('color', '#757575')
          plus = true
       }

       
    })



    if (windowWidth <= 575) {
      $('.header__line').appendTo('.header__row')
      $('.navbar-brand').appendTo('.header__block')
      $('.header__buttons').appendTo('.header__block')
      $('.header__link').appendTo('.header__buttons')
      $('.header__line').prependTo('.main')
    }

    // $(window).resize(function() {
    //   if (windowWidth <= 575) {
    //   $('.header__line').appendTo('.header__row')
    //   $('.navbar-brand').appendTo('.header__block')
    //   $('.header__buttons').appendTo('.header__block')
    // }
    // })


    $('#registerForm').bind('click', function() {
      $('.white-popup').addClass('popup-open')
      $('.overlay').show()
      $('html').addClass('scroll-block')
    })

    $('.close').bind('click', function() {
      $('.white-popup').removeClass('popup-open')
      $('.overlay').hide()
      $('html').removeClass('scroll-block')
    })

    $('.overlay').bind('click', function() {
      $('.white-popup').removeClass('popup-open')
      $('.overlay').hide()
      $('html').removeClass('scroll-block')
    })











        // $('header').addClass('scroll-a')
   // }


   // if ($('header').width() > width) {

   // }


   

   // if  (he)
   //  $('header').addClass('scroll-a')
  


   
// })
