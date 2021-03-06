/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com 
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : https://github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */
function launchParticlesJS(d,c){pJS={canvas:{el:document.querySelector("#"+d+" > canvas"),w:document.querySelector("#"+d+" > canvas").offsetWidth,h:document.querySelector("#"+d+" > canvas").offsetHeight},particles:{color:"#fff",shape:"circle",opacity:1,size:2.5,size_random:true,nb:200,line_linked:{enable_auto:true,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:true,rotateX:65000,rotateY:65000}},anim:{enable:true,speed:1},array:[]},interactivity:{enable:true,mouse:{distance:100},detect_on:"canvas",mode:"grab"},retina_detect:false,fn:{vendors:{interactivity:{}}}};
if(c){if(c.particles){if(c.particles.color){pJS.particles.color=c.particles.color;}if(c.particles.shape){pJS.particles.shape=c.particles.shape;}if(c.particles.opacity){pJS.particles.opacity=c.particles.opacity;
}if(c.particles.size){pJS.particles.size=c.particles.size;}if(c.particles.size_random==false){pJS.particles.size_random=c.particles.size_random;}if(c.particles.nb){pJS.particles.nb=c.particles.nb;
}if(c.particles.line_linked){if(c.particles.line_linked.enable_auto==false){pJS.particles.line_linked.enable_auto=c.particles.line_linked.enable_auto;}if(c.particles.line_linked.distance){pJS.particles.line_linked.distance=c.particles.line_linked.distance;
}if(c.particles.line_linked.color){pJS.particles.line_linked.color=c.particles.line_linked.color;}if(c.particles.line_linked.opacity){pJS.particles.line_linked.opacity=c.particles.line_linked.opacity;
}if(c.particles.line_linked.width){pJS.particles.line_linked.width=c.particles.line_linked.width;}if(c.particles.line_linked.condensed_mode){if(c.particles.line_linked.condensed_mode.enable==false){pJS.particles.line_linked.condensed_mode.enable=c.particles.line_linked.condensed_mode.enable;
}if(c.particles.line_linked.condensed_mode.rotateX){pJS.particles.line_linked.condensed_mode.rotateX=c.particles.line_linked.condensed_mode.rotateX;}if(c.particles.line_linked.condensed_mode.rotateY){pJS.particles.line_linked.condensed_mode.rotateY=c.particles.line_linked.condensed_mode.rotateY;
}}}if(c.particles.anim){if(c.particles.anim.enable==false){pJS.particles.anim.enable=c.particles.anim.enable;}if(c.particles.anim.speed){pJS.particles.anim.speed=c.particles.anim.speed;
}}}if(c.interactivity){if(c.interactivity.enable==false){pJS.interactivity.enable=c.interactivity.enable;}if(c.interactivity.mouse){if(c.interactivity.mouse.distance){pJS.interactivity.mouse.distance=c.interactivity.mouse.distance;
}}if(c.interactivity.mode){pJS.interactivity.mode=c.interactivity.mode;}if(c.interactivity.detect_on){pJS.interactivity.detect_on=c.interactivity.detect_on;
}}pJS.retina_detect=c.retina_detect;}pJS.particles.color_rgb=hexToRgb(pJS.particles.color);pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color);
if(pJS.retina_detect){if(window.devicePixelRatio>1){pJS.retina=true;pJS.canvas.w=pJS.canvas.el.offsetWidth*2;pJS.canvas.h=pJS.canvas.el.offsetHeight*2;
pJS.particles.anim.speed=pJS.particles.anim.speed*2;pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*2;pJS.particles.line_linked.width=pJS.particles.line_linked.width*2;
pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*2;}}pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d");};pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w;
pJS.canvas.el.height=pJS.canvas.h;window.onresize=function(){if(pJS.retina){pJS.canvas.w=pJS.canvas.el.offsetWidth*2;pJS.canvas.h=pJS.canvas.el.offsetHeight*2;
}else{pJS.canvas.w=pJS.canvas.el.offsetWidth;pJS.canvas.h=pJS.canvas.el.offsetHeight;}pJS.canvas.el.width=pJS.canvas.w;pJS.canvas.el.height=pJS.canvas.h;
pJS.fn.canvasPaint();if(!pJS.particles.anim.enable){pJS.fn.particlesRemove();pJS.fn.canvasRemove();a();}};};pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h);
};pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h);};pJS.fn.particle=function(e,f){this.x=Math.random()*pJS.canvas.w;
this.y=Math.random()*pJS.canvas.h;if(pJS.retina){if(pJS.particles.size_random){this.radius=Math.random()*pJS.particles.size*2;}else{this.radius=pJS.particles.size*2;
}}else{if(pJS.particles.size_random){this.radius=Math.random()*pJS.particles.size*1;}else{this.radius=pJS.particles.size*1;}}this.color=e;this.opacity=f;
this.vx=-0.5+Math.random();this.vy=-0.5+Math.random();this.draw=function(){pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")";
pJS.canvas.ctx.beginPath();switch(pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,this.radius*2,this.radius*2);
break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y);pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius*2);pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius*2);
pJS.canvas.ctx.closePath();break;}pJS.canvas.ctx.fill();};};pJS.fn.particlesCreate=function(){for(var e=0;e<pJS.particles.nb;e++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity));
}};pJS.fn.particlesAnimate=function(){for(var f=0;f<pJS.particles.array.length;f++){var h=pJS.particles.array[f];h.x+=h.vx*(pJS.particles.anim.speed/2);
h.y+=h.vy*(pJS.particles.anim.speed/2);if(h.x-h.radius>pJS.canvas.w){h.x=h.radius;}else{if(h.x+h.radius<0){h.x=pJS.canvas.w+h.radius;}}if(h.y-h.radius>pJS.canvas.h){h.y=h.radius;
}else{if(h.y+h.radius<0){h.y=pJS.canvas.h+h.radius;}}for(var e=f+1;e<pJS.particles.array.length;e++){var g=pJS.particles.array[e];if(pJS.particles.line_linked.enable_auto){pJS.fn.vendors.distanceParticles(h,g);
}if(pJS.interactivity.enable){switch(pJS.interactivity.mode){case"grab":pJS.fn.vendors.interactivity.grabParticles(h,g);break;}}}}};pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h);
pJS.fn.particlesAnimate();for(var e=0;e<pJS.particles.array.length;e++){var f=pJS.particles.array[e];f.draw("rgba("+f.color.r+","+f.color.g+","+f.color.b+","+f.opacity+")");
}};pJS.fn.particlesRemove=function(){pJS.particles.array=[];};pJS.fn.vendors.distanceParticles=function(l,j){var g=l.x-j.x,f=l.y-j.y,k=Math.sqrt(g*g+f*f);
if(k<=pJS.particles.line_linked.distance){var e=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath();pJS.canvas.ctx.strokeStyle="rgba("+e.r+","+e.g+","+e.b+","+(pJS.particles.line_linked.opacity-k/pJS.particles.line_linked.distance)+")";
pJS.canvas.ctx.moveTo(l.x,l.y);pJS.canvas.ctx.lineTo(j.x,j.y);pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath();
if(pJS.particles.line_linked.condensed_mode.enable){var g=l.x-j.x;f=l.y-j.y;var i=g/(pJS.particles.line_linked.condensed_mode.rotateX*1000),h=f/(pJS.particles.line_linked.condensed_mode.rotateY*1000);
j.vx+=i;j.vy+=h;}}};pJS.fn.vendors.interactivity.listeners=function(){if(pJS.interactivity.detect_on=="window"){var e=window;}else{var e=pJS.canvas.el;
}e.onmousemove=function(f){if(pJS.retina){pJS.interactivity.mouse.pos_x=f.pageX*2;pJS.interactivity.mouse.pos_y=f.pageY*2;}else{pJS.interactivity.mouse.pos_x=f.pageX;
pJS.interactivity.mouse.pos_y=f.pageY;}pJS.interactivity.status="mousemove";};e.onmouseleave=function(f){pJS.interactivity.mouse.pos_x=0;pJS.interactivity.mouse.pos_y=0;
pJS.interactivity.status="mouseleave";};};pJS.fn.vendors.interactivity.grabParticles=function(j,i){var m=j.x-i.x,k=j.y-i.y,h=Math.sqrt(m*m+k*k);var l=j.x-pJS.interactivity.mouse.pos_x,f=j.y-pJS.interactivity.mouse.pos_y,g=Math.sqrt(l*l+f*f);
if(h<=pJS.particles.line_linked.distance&&g<=pJS.interactivity.mouse.distance&&pJS.interactivity.status=="mousemove"){var e=pJS.particles.line_linked.color_rgb_line;
pJS.canvas.ctx.beginPath();pJS.canvas.ctx.strokeStyle="rgba("+e.r+","+e.g+","+e.b+","+(pJS.particles.line_linked.opacity-g/pJS.interactivity.mouse.distance)+")";
pJS.canvas.ctx.moveTo(j.x,j.y);pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y);pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width;
pJS.canvas.ctx.stroke();pJS.canvas.ctx.closePath();}};function a(){pJS.fn.canvasInit();pJS.fn.canvasSize();pJS.fn.canvasPaint();pJS.fn.particlesCreate();
pJS.fn.particlesDraw();}function b(){pJS.fn.particlesDraw();requestAnimFrame(b);}a();if(pJS.particles.anim.enable){b();}if(pJS.interactivity.enable){pJS.fn.vendors.interactivity.listeners();
}}window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1000/60);
};})();function hexToRgb(c){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(b,function(e,h,f,d){return h+h+f+f+d+d;});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null;}window.particlesJS=function(d,c){if(typeof(d)!="string"){c=d;d="particles-js";
}if(!d){d="particles-js";}var b=document.createElement("canvas");b.style.width="100%";b.style.height="100%";var a=document.getElementById(d).appendChild(b);
if(a!=null){launchParticlesJS(d,c);}};
/* videojs */

if ( document.getElementById('zebrafish') ) {
  videojs.autoSetup();
  videojs('zebrafish').ready(function () {
    var myPlayer = this,
      id = myPlayer.id(),
      aspectRatio = 480 / 360;

    function resizeVideoJS() {
      var width = document.getElementById(id).parentElement.offsetWidth;
      myPlayer.width(width).height(width * aspectRatio);
    }

    resizeVideoJS();
    window.onresize = resizeVideoJS;
  });
}


/* stellar 
$(function () {
  $.stellar({
    hideDistantElements: false,
    responsive: true,
    horizontalScrolling: false,
    verticalScrolling: true,
  });
}); */
(function ($) {
  
  $('[data-role="preload-entries"]').hide();

  var loaded = 0,
    queque = 6,
    containerBlog = $('#blog'),
    amountNewEntries = 3;

  var $doc = $(document),
      $win = $(window);

  $doc.on('ready', function () {

    var $container = $('#blog').imagesLoaded(function () {
      $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.item',
        },
        getSortData: {
          date: function ($elem) {
            console.log('asd', $($elem).find('.date').text() );
            return Date.parse($($elem).find('.date').text());
          }
        }
      });

      loadJson();


      /*
    //flipboard json
     $.getJSON( "test.json", function( data ) {

       console.log('asd', data);

        $.each( data, function( key, val ) {

          var type = "post",
              title = data[key].title,
              title = data[key].title,
              excerpt = data[key].excerptText,
              url = data[key].sourceURL,
              image = (data[key].inlineItems)? data[key].inlineItems[1].image.largeURL : "" ,
              date = "",
              tags = "",
              experimentClass = "";

          var newEntry =  loadEntry(type, experimentClass, title, excerpt, url, image, date, tags);
          $container.append(newEntry).isotope('appended', newEntry );

          //debug console.log( key, title, excerpt, image, date, tags );
          
        });
      }); */


    });


  });

  $win.on('load', function () {

    $('#blog').isotope();

    $('#blog').delay(200).queue(function (next) {
      $(this).isotope();
      console.log('isotope1');
      next();
    });

    $('#blog').delay(1000).queue(function (next) {
      $(this).isotope();
      console.log('isotope2');
      next();
    });
    
    $('.container-full').removeClass('hidden');


  });




  function loadJson() {

    console.log('loadjson');
    
    
    var jqxhr = $.getJSON( "data.json", function(data) {
      
      $('[data-role="preload-entries"]').show();

    })
    .done(function(data) {
      
      $('[data-role="preload-entries"]').hide();
      
      $.each(data.entries, function (key, val, count) {

        if (queque > 0 && key > loaded && key < loaded + amountNewEntries) {

          var type = val.type,
            title = val.title,
            excerpt = val.excerpt,
            url = val.url,
            image = val.image,
            date = val.date,
            tags = val.tags,
            experimentClass = val.experimentClass;
            customContent = val.customContent;

          var newEntry = loadEntry(type, experimentClass, customContent, title, excerpt, url, image, date, tags);
          containerBlog.append(newEntry).isotope('appended', newEntry);

          loaded++;
          queque--;
        }

        /* //debug 
            console.log( key, title, excerpt, image, date, tags ); */
      });
      
      /* $('#blog').isotope({ sortBy: 'date', sortAscending : false}); */
      
    })
    .fail(function() {
      console.log( "error json" );
  });


  }





  /* stellar */
  /*
jQuery(document).ready(function(){
    if( !isMobile.any() && $(document).width() > 480 ){
       $(function () {
        $.stellar({
          hideDistantElements: false,
          responsive: true,
          horizontalScrolling: false,
          verticalScrolling: true,
        });
      });
    }
}); */


  /* add queque results */


  $('button').click(function () {
    queque += (queque > 0) ? 0 : amountNewEntries;
    loadJson();
  });


  /* tags click */

  $('.list-tags > li').click(function () {

  });


  /* particle background */

  particlesJS('particles-js', {
    particles: {
      color: '#eee',
      shape: 'circle',
      opacity: 1,
      size: 2,
      size_random: true,
      nb: 60,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#eee',
        opacity: 0.46,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 2
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 200
      },
      mode: 'grab'
    },
    retina_detect: true
  });




  /* menu-hamburger */

  $('.side-menu').hide();
  $('#hamburger-icon').click(function () {
    if (!$('.side-menu').is(":visible")) {
      $('.side-menu').show();
    }

    console.log('spike');


    if ($('#canvas-wrap').hasClass('menu-open')) {
      console.log(1);
      $('#canvas-wrap').removeClass('menu-open');
    } else {
      $('#canvas-wrap').addClass('menu-open');
      console.log(2);
    }

    if ($('.side-menu').hasClass('bounceInLeft')) {
      console.log(1);
      $('.side-menu').removeClass('animated bounceInLeft').addClass('animated bounceOutLeft');
    } else {
      $('.side-menu').removeClass('animated bounceOutLeft').addClass('animated bounceInLeft');
      console.log(2);
    }
    //$('.side-menu').toggleClass('bounceOutLeft bounceInLeft');
  });

  /* txt-rotator */

  $(".rotator").textrotator({
    animation: "dissolve",
    separator: "-",
    speed: 2600
  });
  
  
  /* zoom open entry experiment */
  $('#blog').on('click', '.blog-btn', function (event) {
    $(this).parents('.item').toggleClass('active');
    $('.fullscreen-overlay').toggleClass('').toggleClass('fadeOut fadeIn');
    $($($(this).parents('.item')[0]).find('.customContent')).toggleClass('hidden');
    console.log($(this));
  });

  /* filters */

  $('#filters').on('click', 'li', function (event) {
    event.preventDefault();

    $('#filters > li').removeClass('active');
    $(this).addClass('active');

    var filterValue = $(this).attr('data-filter');
    $('#blog').isotope({
      filter: filterValue
    });
  });

  
  /* scroll load new entries */
  
  $(window).scroll(function(){
    var scrollTop     = $(window).scrollTop(),
    windowHeight = $(window).height(),
    documentHeight = $(document).height(),
    distanceBottom = documentHeight - windowHeight - scrollTop;
    
    if(distanceBottom < 200){
      queque += (queque > 0) ? 0 : amountNewEntries;
      loadJson();
    }
  });

  /* load new item blog */

  function loadEntry(type, experimentClass, customContent, title, excerpt, url, image, date, tags) {

    var taglist = "",
      tagClasses = "",
      tagFilters = "",
      customContentIcon = "",
      customContentHtml = "",
      preview;

    $.each(tags, function (index, value) {
      tagClasses += ' ' + value;
      tagFilters += ' .' + value + ',';
    });


    $.each(tags, function (index, value) {
      taglist += '<li data-filter="' + tagFilters + '" class="' + value + '">' + value + '</li>';
    });



    if (type == 'post') {
      preview = '<div class="image" style=" background: url(\'' + image + '\') no-repeat center center"></div>';
    } else if (type == 'experiment') {
      preview = '<div class="blog-image"><div class="' + experimentClass + '"><img src="' + image + '" width="100"></div></div>';
    }
    
    if(customContent){
      customContentIcon = '<a href="#!" class="btn blog-btn"><i class="fa fa-angle-right"></i></a>';
      customContentHtml = customContent;
    }


    var template = $('<div class="col-md-4 col-sm-4 col-xs-12 item ' + tagClasses + '">' +
      '<div class="blog-item animated fadeInUp">' +
      '<div class="blog-header">' +
      '<div class="blog-image">' +
      preview +
      '</div>' +
      customContentIcon + 
      '</div>' +
      '<div class="blog-content">' +
      '<h2><a href="' + url + '">' + title + '</a></h2>' +
      '<p class="description">' + excerpt + '</p>' +
      '<div clasS="customContent animated fadeIn hidden">' + customContentHtml + '</div>' +
      '<div class="row">' +
      '<div class="col-md-4">' +
      '<hr>' +
      '</div>' +
      '</div>' +
      '<ul class="list list-inline list-tags">' +
      taglist +
      '</ul>' +
      '<p class="date">' + date + '</p>' +
      '</div>' +
      '</div>' +
      '</div>');

    return template;

  }


  /* check mobile */
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };




})(jQuery)
/* Preload */

$(window).load(function () {
  $('.spinner').fadeOut(300);
  $('#preloader').delay(500).fadeOut('slow');
  $('body').delay(400).css({
    'overflow': 'visible'
  });
  $('.blog').removeClass('hidden');
})