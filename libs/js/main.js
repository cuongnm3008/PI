

// Giải pháp quản lý tổng thể 
$(document).ready(function () {
    var owl = $("#slideshow");
    owl.owlCarousel({
        center: true,
        loop: false,
        dots: false,
        nav: false,
        items: 1,
    });

    // listen change state menu tabs when slide was changed 
    owl.on('changed.owl.carousel', function (event) {
        var tabs = document.querySelectorAll('.tab_navigation li');
        var tabActive = document.querySelector('.tab_navigation li.active')
        tabActive?.classList.remove("active")
        tabs[event.item.index]?.classList.add("active")
    })


    // Change content slide when clicked to menu tabs
        $('.desktop .tab_navigation li').click(function (event) {
            index = $(this).index();
            $('.tab_navigation li').removeClass('active');
            $(this).addClass('active');
            $("#slideshow").trigger("to.owl.carousel", [index, 1])
        });

        $('#tabCotents .tab_content').hide();
        
        $('#tabCotents .tab_content:first').show();
        $('#tabCotents li:first').addClass('active');
  
        $('#tabCotents li').click(function (event) {
            index = $(this).index();
            $('#tabCotents li').removeClass('active');
            $(this).addClass('active');
            $('#tabCotents .tab_content').hide();
            $('#tabCotents .tab_content').eq((index+1)/2-1).show();
        });

});

//Bảng giá
$(document).ready(function () { 
    $("#supplies-tablet").owlCarousel({
              center: false,
              loop: false,
              dots: true,
              navs: false,
            //   autoplay: true,
            //   autoplayTimeout : 3000,
              responsive: {
                  0: {
                      items: 1,
                  },
                  768: {
                    items: 2,
                  },
                  992: {
                      items: 2,
                  },
                  1200: {
                    items: 3,
                },
              },
      });
});

// Giải đáp những thắc mắc về  Phần mềm
$(document).ready(function () {

    // set first tab is actived
    $('#tabs .tab_content:first').show();
    $('#tabs .item:first').addClass('active');
    

    //Change content when click to tabs
    $('#tabs .item').click(function (event) {
        index = $(this).index();
        if ($(this).hasClass("active")) {
            $('#tabs .tab_content').hide();
            $('#tabs .item').removeClass('active');
        } else {
            $('#tabs .item').removeClass('active');
            $(this).addClass('active');
            $('#tabs .tab_content').hide();
            $('#tabs .tab_content').eq(index).show();
        }
    });
});

// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backTop').fadeIn();
        } else {
            $('#backTop').fadeOut();
        }
    });
});

$('#backTop').click(function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 0);
});


// Tablet navbar
$(document).ready(function () {
    $(".btn-tablet").click(function () {
        $('#wapper-tablet-menu').attr('style', 'width: 450px ');
        $('header .bg-overflow').attr('style', 'display: block ');
    });
    $("#closePhoneMenu").click(function () {
        $('#wapper-tablet-menu').attr('style', 'width: 0px ');
        $('header .bg-overflow').attr('style', 'display: none ');
    });
});