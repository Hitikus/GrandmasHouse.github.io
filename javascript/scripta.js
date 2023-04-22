



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-header-inner") {
      x.className += " responsive";
    } else {
      x.className = "main-header-inner";
    }
}


//dropdown menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const DropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    DropDownMenu.classList.toggle('open');

 
}

var btnContainer = document.getElementById("main-nav");
var buttons = btnContainer.getElementsByClassName("btn");

for(var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";

})
}







//Gallery
$(document).ready(function(){

  $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');

      var filter = $(this).attr('data-filter')

      if(filter == 'all'){
          $('.image').show(400);
      }else{
          $('.image').not('.'+filter).hide(200);
          $('.image').filter('.'+filter).show(400);
      }

  });

  $('.gallery').magnificPopup({

      delegate:'a',
      type:'image',
      gallery:{
          enabled:true
      }

  });

});


