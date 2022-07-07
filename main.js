
let decisec = 0
let sec = 0
let min = 0
let hour = 0

let stopwatch = () =>{
  decisec++
  if (decisec == 10){
    sec++
    decisec = 0
    if(sec == 60){
      min++
      sec = 0
      if(min == 60){
        hour++
        min = 0
      }
    }
  }
  $(".time").text(hour +":"+ min +":"+ sec +":"+ decisec);
  
}

/*jQuery ボタン押した時のボタンのクラス変更*/
$(document).ready(function(){

  $("#start").click(function() {
    $("#start,#reset").addClass("clicked");
    $("#stopped").removeClass("clicked");
  });

  $("#stopped").click(function(){
    $(this).addClass("clicked");
    $("#start, #reset").removeClass("clicked");
  });

  $("#reset").click(function(){
    $(this).addClass("clicked");
    $("#start").removeClass("clicked");
    $(".time").text("0:0:0:0");
  });
});

/*ボタンを押した時のインターバルスタート、ストップ、リセット*/
let interval;

start.addEventListener("click", function() {
  interval = setInterval(stopwatch, 100);
})

stopped.addEventListener("click",function(){
  clearInterval(interval);
})

reset.addEventListener("click",function(){
  desisec =0;
  sec = 0;
  min = 0;
  hour = 0;
  
})


