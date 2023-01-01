$(function () {
    $('#menu-button').click(function () {
      //  alert("Ho gya toggle button click.");
      // $(this).next('#dropdown').slideToggle(); 
       $('#dropdown').slideToggle();
    });
  
    $(document).click(function (e) {
       var target = e.target;
       if (!$(target).is('#menu-button') && !$(target).parents().is('#menu-button'))
       //{ $('.dropdown').hide(); }
       $('#dropdown').slideUp(); 
    });
  });