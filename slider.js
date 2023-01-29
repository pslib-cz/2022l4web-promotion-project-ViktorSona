let slider = tns({  
    container: ".slider",
    speed: 1000,
    items: 1,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayButtonOutput: false,
    controls: false,
    controlsContainer: ".controls",
    prevButton: ".prev",
    nextButton: ".next",
    gutter: 20,         
    responsive:{
      580:{
        items: 2
      },
      1030:{
        controls: true,
        items: 3
      }
    }
  });
