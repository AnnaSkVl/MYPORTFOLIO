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
/*
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
  });*/
  const filter = document.querySelector('#filterButtons');
  const items = document.querySelectorAll('[data-cat]');
  
  filter.addEventListener('click', filterButtonClickHandler);
  
  function filterButtonClickHandler(evt) {
    const btn = evt.target.closest('[data-filter]');
    if (btn) {
      const cat = btn.dataset.filter;
      if (cat === 'all') showAll();
      else showCat(cat);
    }
  }
  
  function showAll() {
    items.forEach(item => item.classList.remove('hidden'));
  }
  
  function showCat(cat) {
    items.forEach(item => {
      const isHidden = item.dataset.cat !== cat;
      item.classList.toggle('hidden', isHidden);
    });
  }