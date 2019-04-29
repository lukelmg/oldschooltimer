function endYear() {
    var countDownDate = new Date("June 14, 2019 10:53:1").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var ss = seconds - 1;
        document.getElementById("endYear").innerHTML = days + "d " + hours + "h " + minutes + "m ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("endYear").innerHTML = "EXPIRED";
        }
    }, 1000);
} endYear();//timer until end of year
  function checkToggle() {

    var checkBox = document.getElementById("togglePoint");

    if (checkBox.checked == true) { //LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   

        document.getElementById("firstEndText").style.color = "black"; //time text
        document.getElementById("secondEndText").style.color = "black";
        document.getElementById("thirdEndText").style.color = "black";
        document.getElementById("fourthEndText").style.color = "black";
        document.getElementById("fifthEndText").style.color = "black";
        document.getElementById("sixthEndText").style.color = "black";
        document.getElementById("seventhEndText").style.color = "black";
        document.getElementById("eighthEndText").style.color = "black";
        document.getElementById("endText").style.color = "#db3d3d";

        document.getElementById("firstEnd").style.color = "black"; //actual times
        document.getElementById("secondEnd").style.color = "black";
        document.getElementById("thirdEnd").style.color = "black";
        document.getElementById("fourthEnd").style.color = "black";
        document.getElementById("fifthEnd").style.color = "black";
        document.getElementById("sixthEnd").style.color = "black";
        document.getElementById("seventhEnd").style.color = "black";
        document.getElementById("eighthEnd").style.color = "black";
        document.getElementById("endText").style.color = "#db3d3d";
        document.getElementById("time").style.color = "db3d3d";

        document.getElementById("dayContainer").style.backgroundColor = "e2e2e2"; //schedule container

        document.getElementById("schoolScheduleTxt").style.color = "black"; //schedule text
        document.getElementById("darklightTxt").style.color = "black"; //dark/light toggle switch

        document.getElementById("betaButton").style.backgroundColor = "db3d3d";

        document.getElementById("copy").style.color = "black";

        document.getElementById("endYear").style.color = "black";
        document.getElementById("endYearTxt").style.color = "black";

        document.getElementById("daySelectTxt").style.color = "black";
        document.getElementById("daySelectTxt2").style.color = "black";
        document.getElementById("daySelectTxt3").style.color = "black";
        document.getElementById("daySelectTxt4").style.color = "black";

        document.getElementById("tabTxt").style.color = "black";

        document.body.style.backgroundColor = "ffffff"; //background color
      
        document.getElementById("lunchTxt").style.color = "black";
      
         document.getElementById("yearContainer").style.backgroundColor = "e2e2e2";
      
        document.getElementById("title").style.color = "db3d3d";

    } 
    else { //DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   

        document.getElementById("firstEndText").style.color = "white"; //time text
        document.getElementById("secondEndText").style.color = "white";
        document.getElementById("thirdEndText").style.color = "white";
        document.getElementById("fourthEndText").style.color = "white";
        document.getElementById("fifthEndText").style.color = "white";
        document.getElementById("sixthEndText").style.color = "white";
        document.getElementById("seventhEndText").style.color = "white";
        document.getElementById("eighthEndText").style.color = "white";
        document.getElementById("endText").style.color = "14ffe3";

        document.getElementById("firstEnd").style.color = "white"; //actual times
        document.getElementById("secondEnd").style.color = "white";
        document.getElementById("thirdEnd").style.color = "white";
        document.getElementById("fourthEnd").style.color = "white";
        document.getElementById("fifthEnd").style.color = "white";
        document.getElementById("sixthEnd").style.color = "white";
        document.getElementById("seventhEnd").style.color = "white";
        document.getElementById("eighthEnd").style.color = "white";
        document.getElementById("time").style.color = "14ffe3";

        document.getElementById("dayContainer").style.backgroundColor = "2e303a"; //

        document.getElementById("schoolScheduleTxt").style.color = "white";
        document.getElementById("darklightTxt").style.color = "white";

        document.getElementById("betaButton").style.backgroundColor = "13dbc3";

        document.getElementById("copy").style.color = "white";

        document.getElementById("endYear").style.color = "white";
        document.getElementById("endYearTxt").style.color = "white";

        document.getElementById("daySelectTxt").style.color = "white";
        document.getElementById("daySelectTxt2").style.color = "white";
        document.getElementById("daySelectTxt3").style.color = "white";
        document.getElementById("daySelectTxt4").style.color = "white";
      
        document.getElementById("tabTxt").style.color = "white";
      
        document.body.style.backgroundColor = "1f2026";
      
        document.getElementById("lunchTxt").style.color = "white";
      
        document.getElementById("yearContainer").style.backgroundColor = "252c38";
      
        document.getElementById("title").style.color = "14ffe3";
    }
} //toggle for dark/light mode
  function tabSwitch() {
    var checkBox = document.getElementById("togglePoint2");
    if (checkBox.checked == true) {
     
     tabControl = 'off';
      //alert(tabControl);
    }
    else
    {
     
     tabControl = 'on';
      // alert(tabControl);
    }
} 
  function lunch() {
  var lunch = document.getElementById("togglePoint3");
  if (lunch.checked == true) {
  lunchMode = 'on';
 if (radVal == 'A') {
       
        h4 = 10; m4 = 50;
        h5 = 11; m5 = 38;
        h6 = 12; m6 = 26;
        h7 = 13; m7 = 14;

    }
    if (radVal == 'B') {
      
        h4 = 10; m4 = 55;
        h5 = 11; m5 = 42;
        h6 = 12; m6 = 29;
        h7 = 13; m7 = 16;

    }
    if (radVal == 'C') {
      
        h4 = 10; m4 = 17;
        h5 = 10; m5 = 51;
        h6 = 11; m6 = 25;
        h7 = 11; m7 = 59;
  
    }
    if (radVal == 'D') {
      
        h4 = 11; m4 = 40;
        h5 = 12; m5 = 14;
        h6 = 12; m6 = 48;
        h7 = 13; m7 = 22;
    }
  }
  else
  {
  lunchMode = 'off';

  }
  
}
  
var h1 = 8;  var m1 = 29; //initial variables for A mode
var h2 = 9;  var m2 = 17;
var h3 = 10; var m3 = 5;
var h4 = 10; var m4 = 53;
var h5 = 11; var m5 = 41;
var h6 = 12; var m6 = 29;
var h7 = 13; var m7 = 17;
var h8 = 14; var m8 = 5;
var he = 14; var me = 53;
/*
var  h1 = 8;  var m1 = 37;
var  h2 = 9;  var m2 = 24;
var  h3 = 10; var m3 = 11;
var  h4 = 10; var m4 = 58;
var  h5 = 11; var m5 = 45;
var  h6 = 12; var m6 = 32;
var  h7 = 13;  var m7 = 19;
var  h8 = 14; var m8 = 6;
var  he = 14; var me = 53;
*/  
var radVal = 'A';
var seconds;
var tabControl = 'on';
var lunchMode = 'off';
var timeDetect1;
var timeDetect2;
var timeDetect3;
var timeDetect4;
var timeDetect5;
var timeDetect6;
var timeDetect7;
var timeDetect8;
var timeDetecte;
var lunch4;
var lunch5;
var lunch6;
var lunch7;
var seconds;

document.mainForm.onclick = function() { //check schedule radio buttons
    radVal = document.mainForm.rads.value;

    if (radVal == 'A') {
        h1 = 8;  m1 = 29;
        h2 = 9;  m2 = 17;
        h3 = 10; m3 = 5;
        h4 = 10; m4 = 53;
        h5 = 11; m5 = 41;
        h6 = 12; m6 = 29;
        h7 = 13; m7 = 17;
        h8 = 14; m8 = 5;
        he = 14; me = 53;
    }
    if (radVal == 'B') {
        h1 = 8;  m1 = 37;
        h2 = 9;  m2 = 24;
        h3 = 10; m3 = 11;
        h4 = 10; m4 = 58;
        h5 = 11; m5 = 45;
        h6 = 12; m6 = 32;
        h7 = 13; m7 = 19;
        h8 = 14; m8 = 6;
        he = 14; me = 53;
    }
    if (radVal == 'C') {
        h1 = 8;  m1 = 22;
        h2 = 9;  m2 = 4;
        h3 = 9;  m3 = 46;
        h4 = 10; m4 = 20;
        h5 = 10; m5 = 54;
        h6 = 11; m6 = 28;
        h7 = 12; m7 = 2;
        h8 = 12; m8 = 31;
        he = 13; me = 0;
    }
    if (radVal == 'D') {
        h1 = 10; m1 = 9;
        h2 = 10; m2 = 39;
        h3 = 11; m3 = 9;
        h4 = 11; m4 = 43;
        h5 = 12; m5 = 17;
        h6 = 12; m6 = 51;
        h7 = 13; m7 = 25;
        h8 = 14; m8 = 9;
        he = 14; me = 53;
    }
}
function checkChecks() {
    var checks = document.getElementById("checks").value;
} //check the radio buttons

function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
} //set up ticks
function puzzle() {
  window.location.href = 'https://schooltimer.glitch.me/lantern006.html'; 
}
function tick1() { //first Period
    var start = new Date;
    start.setHours(h1, m1, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    seconds = ss;
    if (hh <= 24 && hh >= 8) {
        document.getElementById("firstEndText").innerHTML = "Period 1 Is Over!";
        document.getElementById('firstEnd').innerHTML = '';
        timeDetect1 = 0;
    } else {
       document.getElementById("firstEndText").innerHTML = "Period 1 Ends In:" + "&nbsp";
        document.getElementById('firstEnd').innerHTML = hh + ":" + mm + ":" + ss;
      timeDetect1 = 1;
       if (tabControl == 'on') {
         document.title= hh + ":" + mm + ":" + ss;
        }
    }
}//period 1
function tick2() { //second Period
    var start = new Date;
    start.setHours(h2, m2, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh <= 24 && hh >= 8) {
        document.getElementById("secondEndText").innerHTML = "Period 2 Is Over!";
        document.getElementById('secondEnd').innerHTML = '';
      timeDetect2 = 1;
    } else {
       document.getElementById("secondEndText").innerHTML = "Period 2 Ends In:" + "&nbsp";
        document.getElementById('secondEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect2 = 0;
      if (tabControl == 'on' && timeDetect1 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 2
function tick3() { //third Period
    var start = new Date;
    start.setHours(h3, m3, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh <= 24 && hh >= 8) {
        document.getElementById("thirdEndText").innerHTML = "Period 3 Is Over!";
        document.getElementById('thirdEnd').innerHTML = '';
      timeDetect3 = 0;
    } else {
       document.getElementById("thirdEndText").innerHTML = "Period 3 Ends In:" + "&nbsp";
        document.getElementById('thirdEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect3 = 1;
        if (tabControl == 'on' && timeDetect2 == 1)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 3
function tick4() { //fourth Period
	var start = new Date;
	start.setHours(h4, m4, 0);
	var now = new Date;
	if (now > start) {
		start.setDate(start.getDate() + 1);
	}
	var remain = ((start - now) / 1000);
	var hh = pad((remain / 60 / 60) % 60);
	var mm = pad((remain / 60) % 60);
	if (lunchMode == 'on') {
		 if (radVal == 'A') {
        h4 = 10; m4 = 50;
    }
    if (radVal == 'B') {
        h4 = 10; m4 = 55;
    }
    if (radVal == 'C') {
        h4 = 10; m4 = 17;
    }
    if (radVal == 'D') {
        h4 = 11; m4 = 40;
    }
	}
  if (lunchMode == 'on') {
   document.getElementById("fourthEndText").innerHTML = "Period 4 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("fourthEndText").innerHTML = "Period 4 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('fourthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect4 = 1;
    if (tabControl == 'on' && timeDetect3 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('fourthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("fourthEndText").innerHTML = "Period 4 Is Over!"; 
    } else {
        document.getElementById("fourthEndText").innerHTML = "Period 4 Lunch Is Over!"; 
    }
    timeDetect4 = 0;
  }

} //period 4
function tick5() { //fourth Period
    var start = new Date;
    start.setHours(h5, m5, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (radVal == 'A') {
        h5 = 11; m5 = 38;
    }
    if (radVal == 'B') {
        h5 = 11; m5 = 42;
    }
    if (radVal == 'C') {
        h5 = 10; m5 = 51;
    }
    if (radVal == 'D') {
        h5 = 12; m5 = 14;
    }
	}
  if (lunchMode == 'on') {
   document.getElementById("fifthEndText").innerHTML = "Period 5 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("fifthEndText").innerHTML = "Period 5 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('fifthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
      timeDetect5 = 1;
    if (tabControl == 'on' && timeDetect4 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('fifthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("fifthEndText").innerHTML = "Period 5 Is Over!"; 
    } else {
       document.getElementById("fifthEndText").innerHTML = "Period 5 Lunch Is Over!";  
    }
    timeDetect5 = 0;
  }

}//period 5
function tick6() { //fourth Period
    var start = new Date;
    start.setHours(h6, m6, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (radVal == 'A') {
        h6 = 12; m6 = 26;
    }
    if (radVal == 'B') {
        h6 = 12; m6 = 29;
    }
    if (radVal == 'C') {
        h6 = 11; m6 = 25;
    }
    if (radVal == 'D') {
        h6 = 12; m6 = 48;
    }
	}
  	if (lunchMode == 'on') {
		mm = mm - 3;
	}
  if (lunchMode == 'on') {
   document.getElementById("sixthEndText").innerHTML = "Period 6 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('sixthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect6 = 1;
    if (tabControl == 'on' && timeDetect5 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('sixthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Is Over!"; 
    } else {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Lunch Is Over!";  
    }
    timeDetect6 = 0;
  }

}//period 6
function tick7() { //fourth Period
    var start = new Date;
    start.setHours(h7, m7, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (radVal == 'A') {
        h7 = 13; m7 = 14;
    }
    if (radVal == 'B') {
        h7 = 13; m7 = 16;
    }
    if (radVal == 'C') {
        h7 = 11; m7 = 59;
    }
    if (radVal == 'D') {
        h7 = 13; m7 = 22;
    }
	}
  	if (lunchMode == 'on') {
		mm = mm - 3;
	}
   if (lunchMode == 'on') {
   document.getElementById("seventhEndText").innerHTML = "Period 7 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("seventhEndText").innerHTML = "Period 7 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('seventhEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect7 = 1;
    if (tabControl == 'on' && timeDetect6 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('seventhEnd').innerHTML = ' ';
     if (lunchMode == 'off') {
    document.getElementById("seventhEndText").innerHTML = "Period 7 Is Over!"; 
     } else {
      document.getElementById("seventhEndText").innerHTML = "Period 7 Lunch Is Over!";   
     }
    timeDetect7 = 0;
  }
}//period 7
function tick8() { //fourth Period
    var start = new Date;
    start.setHours(h8, m8, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  
   if (hh <= 24 && hh >= 8) {
        document.getElementById("eighthEndText").innerHTML = "Period 8 Is Over!";
        document.getElementById('eighthEnd').innerHTML = '';
        timeDetect8 = 0;
    } else {
       document.getElementById("eighthEndText").innerHTML = "Period 8 Ends In:" + "&nbsp";
        document.getElementById('eighthEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect8 = 1;
      if (tabControl == 'on' && timeDetect7 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 8
function ticke() { //fourth Period
    var start = new Date;
    start.setHours(he, me, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh <= 24 && hh >= 8) {
        document.getElementById('time').innerHTML = "SCHOOL IS OVER!";
        if (tabControl == 'off'){
        document.title = "SCHOOL IS OVER!"; 
      }

      timeDetecte = 0;
    } else {
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + seconds;
       // document.title = hh + ":" + mm + ":" + seconds;
      timeDetecte = 1;
       if (tabControl == 'on' && timeDetect8 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      } 
          if (tabControl == 'off'){
        document.title =  hh + ":" + mm + ":" + seconds;
      }

    }
}//end of day

function repeat() {
    tick1(); tick2(); tick3(); tick4(); tick5(); tick6(); tick7(); tick8(); ticke();
  
    document.addEventListener('DOMContentLoaded', tick1);
    document.addEventListener('DOMContentLoaded', tick2);
    document.addEventListener('DOMContentLoaded', tick3);
    document.addEventListener('DOMContentLoaded', tick4);
    document.addEventListener('DOMContentLoaded', tick5);
    document.addEventListener('DOMContentLoaded', tick6);
    document.addEventListener('DOMContentLoaded', tick7);
    document.addEventListener('DOMContentLoaded', tick8);
    document.addEventListener('DOMContentLoaded', ticke);
    setTimeout(repeat, 1000);
} repeat();//timeouts for each tick
