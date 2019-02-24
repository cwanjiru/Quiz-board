$(document).ready(function(){
  $("form#quiz-board").submit(function(event) {
    event.preventDefault();
    var one =parseInt($("input:radio[name=test]:checked").val());
    var two =parseInt($("input:radio[name=test1]:checked").val());
    var three =parseInt($("input:radio[name=test2]:checked").val());
    var four =parseInt($("input:radio[name=test3]:checked").val());
    var five =parseInt($("input:radio[name=test4]:checked").val());
      var total =(one+two+three+four+five);
      var percent =((total/50)*100)    
         $("#results").text("you have scored:" +percent+"%");


  });
});
