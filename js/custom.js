$(document).ready(function($) {
var nav = $('.cus_nav_outr');
$(window).scroll(function() {
if ($(this).scrollTop() > 75) {
nav.addClass("hdr_fix");
} else {
nav.removeClass("hdr_fix");
}
});
});


!!window['addEventListener'] && new WOW().init();

$('.banner-slider').slick({
     dots:false,
     arrow:false,
     autoplay:true,
     autoplaySpeed:4000,
     speed: 1800,
     centerMode: false,
     slidesToShow:1,
     slidesToScroll: 1,
});


var swiper = new Swiper('.people-slider', {
    slidesPerView: 2,
    spaceBetween : 260,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
    autoHeight: true,
    navigation:false,
    speed: 1800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        668: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        900: {
          spaceBetween: 146.25,
        },
        1200: {
          spaceBetween: 195,
        },
        1441: {
          spaceBetween: 227.5,
        },
        1681: {
          slidesPerView: 2,
          spaceBetween: 260,
        }
    }    

});

var swiper = new Swiper('.similar-pro-slider', {
    slidesPerView: 4,
    spaceBetween : 42,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
    autoHeight: true,
    navigation:false,
    speed: 1800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 42,
        }
    }    

});

$('.zoom-slider').slick({
     dots:false,
     arrow:false,
     autoplay:true,
     autoplaySpeed:4000,
     speed: 1800,
     centerMode: false,
     slidesToShow:4,
     slidesToScroll: 1,
});

$(window).on({
   load: function(){
      $(this).trigger('resize');
    } 
  });



$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any width like 600px
    fit: true,   // 100% fit in a container
    closed: 'accordion', // Start closed if in accordion view
    activate: function(event) { // Callback function if tab is switched
    var $tab = $(this);
    var $info = $('#tabInfo');
    var $name = $('span', $info);
    $name.text($tab.text());
    $info.show();
    }
    });
});



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  /*When Side bar Close Body Scroll Continue*/
    /*var element = document.getElementById("myDIV");*/
    var headerr=document.getElementById('hdr_no_scrl');
    headerr.classList.remove("no_scroll_css");
    var body=document.getElementById('hdr_no_scrl').parentElement;
    body.classList.toggle("no_scroll_css");
}

/*No scroll whn Click*/
/*Store Whare Click*/
var hamburger = document.getElementById('ham_icn');
/*On this event adding class Through Id -- */
hamburger.addEventListener('click', function() {
        var headerr=document.getElementById('hdr_no_scrl');
        headerr.classList.toggle("no_scroll_css");
        var body=document.getElementById('hdr_no_scrl').parentElement;
        body.classList.toggle("no_scroll_css");
});


$('.add').click(function () {		
  var th = $(this).closest('.qn-innr').find('.count');    	
  th.val(+th.val() + 1);
});
$('.sub').click(function () {
  var th = $(this).closest('.qn-innr').find('.count');    	
    	if (th.val() > 1) th.val(+th.val() - 1);
});




 $(function(){
    var container = $('.file-innr'), inputFile = $('#file'), img, btn, txt = 'Upload Image', txtAfter = '';

    if(!container.find('#upload').length){
        container.find('.input').append('<input type="button" value="'+txt+'" id="upload">');
        btn = $('#upload');
        container.prepend('<img src="" class="hidden" alt="Uploaded file" id="uploadImg" width="100">');
        img = $('#uploadImg');
    }

    btn.on('click', function(){
        img.animate({opacity: 0}, 300);
        inputFile.click();
    });

    inputFile.on('change', function(e){
        container.find('label').html( inputFile.val() );

        var i = 0;
        for(i; i < e.originalEvent.srcElement.files.length; i++) {
            var file = e.originalEvent.srcElement.files[i], 
                reader = new FileReader();

            reader.onloadend = function(){
                img.attr('src', reader.result).animate({opacity: 1}, 700);
            }
            reader.readAsDataURL(file);
            img.removeClass('hidden');
        }

        btn.val( txtAfter );
    });
});

//15-10-2020

$(document).ready(function () {
    $('#horizontalTab2').easyResponsiveTabs({
    type: 'default', //Types: default, vertical, accordion           
    width: 'auto', //auto or any width like 600px
    fit: true,   // 100% fit in a container
    closed: 'accordion', // Start closed if in accordion view
    activate: function(event) { // Callback function if tab is switched
    var $tab = $(this);
    var $info = $('#tabInfo');
    var $name = $('span', $info);
    $name.text($tab.text());
    $info.show();
    }
    });
});


$('.btnn1').click(function() {
    $('.content2-innr').removeClass("active-tab");
    $('.content1-innr').toggleClass("active-tab");
});   
$('.btnn2').click(function() {
    $('.content1-innr').removeClass("active-tab");
    $('.content2-innr').toggleClass("active-tab");
});



//20-10-2020
var swiper = new Swiper('.blog-details-slider', {
    slidesPerView: 3,
    spaceBetween : 36,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
    autoHeight: true,
    navigation:false,
    speed: 1800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
          spaceBetween: 0,
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 36,
        }
    }    

});

// 31-10-2020

 $(".accordion").accordion();

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.729520,-73.809090), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#192331"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":0}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#193a56"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#193a56"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#193a56"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#29446b"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ffffff"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#192331"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#29446b"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#29446b"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map1');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.729520,-73.809090),
        map: map,
        icon: 'images/marker.png',
        //title: '!'
    });

    var infowindow = new google.maps.InfoWindow({ // Create a new InfoWindow

  content:" <p><em><img src='images/marker.png' /></em><strong>Lorem ipsum dolor sit <br>amet, consectetur <br>adipiscing elit 700 002</strong></p>" // HTML contents of the InfoWindow

});

google.maps.event.addListener(marker, 'click', function() { // Add a Click Listener to our marker

  infowindow.open(map,marker); // Open our InfoWindow

});
}