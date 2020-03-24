$(document).on("click","#btn2",function(){

  document.getElementById('btn2').style.width = '400px';
  document.getElementById('btn2').innerHTML="businessbargain@outlook.com";
  document.getElementById("btn2").id = "rev";
});

$(document).on("click","#rev",function(){

  document.getElementById('rev').style.width = '100px';
  document.getElementById('rev').innerHTML="Email";
  document.getElementById("rev").id = "btn2";
});

$(document).on("click","#btn3",function(){

  document.getElementById('btn3').style.width = '300px';
  document.getElementById('btn3').innerHTML="+1(647)527-3327";
  document.getElementById("btn3").id = "rev1";
});

$(document).on("click","#rev1",function(){

  document.getElementById('rev1').style.width = '100px';
  document.getElementById('rev1').innerHTML="Phone";
  document.getElementById("rev1").id = "btn3";
});
