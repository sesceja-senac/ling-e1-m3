var control = true;

setInterval(function(){
  control = !control;
  if(control){
    document.querySelector('.bg').style.backgroundColor = "#e0b722";
  } else {
    document.querySelector('.bg').style.backgroundColor = "#0071bc";
  }
}, 4000);