//js for slider (swiper js)
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });



      /*  const media = ()=>{
            let q = matchMedia("(max-width:860px)");
            if(q.matches){
                document.querySelector("navbar").style.top="-130px";
            }
            else{
                document.querySelector("navbar").style.top="-176px";      //for navbar scroll
            }
            onload = media;
            onresize = media;
        }  */