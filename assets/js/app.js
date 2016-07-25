function cambios(e){
    if(!$("."+e).hasClass('active')){
        $(".desplega").removeClass('active');
        $("."+e).addClass('active bounceInLeft animated');
    }    
}
$(".tab").on("click",function(){
    console.log($(this).attr("val"));
    cambios($(this).attr("val"));
    
});
var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var demo = new CountUp("number", 0, 57.9, 1, 2.5, options);
var demo2 = new CountUp("number2", 0, 63, 0, 2.5, options);

var waypoint = new Waypoint({
  element: document.getElementById('numberscroll'),
  handler: function(direction) {
      if(direction == "down"){
          console.log('Scrolled to waypoint!')
          demo.start();
    } 
  },
  offset:200
})
var waypoint2 = new Waypoint({
  element: document.getElementById('numberscroll'),
  handler: function(direction) {
      if(direction == "down"){
          console.log('Scrolled to waypoint!')
          demo2.start();
    } 
  },
  offset:200
})




