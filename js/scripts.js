$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

$(function(){

  let filter = $("[data-filter]");
  filter.on("click", function(event){
      event.preventDefault();

      let cat = $(this).data('filter');

      if(cat == 'all') {
          $("[data-cat]").removeClass("hide");
      } else {
          $("[data-cat]").each(function(){

              let workCat = $(this).data('cat');
  
              if(workCat != cat) {
                  $(this).addClass('hide');
              } else {
                  $(this).removeClass('hide');
              }
      });
      }
      });
  });