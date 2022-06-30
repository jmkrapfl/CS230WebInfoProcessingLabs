/*
   CS230 ghost

   Author: Jessica Krapfl
   Date:   26/02/2022

   Filename:  CS230Ghost.js
*/

function hideAllOnStart()//hides the buttons on start this is called in the body tag like <body onload=hideAllOnStart()>
{
    document.getElementById('a1').style.visibility='hidden';
    document.getElementById('a2').style.visibility='hidden';
    document.getElementById('a3').style.visibility='hidden';
    document.getElementById('a4').style.visibility='hidden';
    document.getElementById('a5').style.visibility='hidden';
    document.getElementById('a6').style.visibility='hidden';
}

function show()//shows the buttons when the animate button is clicked
{
    document.getElementById('a1').style.visibility='visible';
    document.getElementById('a2').style.visibility='visible';
    document.getElementById('a3').style.visibility='visible';
    document.getElementById('a4').style.visibility='visible';
    document.getElementById('a5').style.visibility='visible';
    document.getElementById('a6').style.visibility='visible';
}

function STS()//side to side animation 
{
    console.log("hello");
    document.getElementById('STSRect').beginElement();
    document.getElementById('STSDome').beginElement();
    document.getElementById('STSLEye').beginElement();
    document.getElementById('STSLEyeP').beginElement();
    document.getElementById('STSREye').beginElement();
    document.getElementById('STSREyeP').beginElement();
    //if the circles are hidden from bounce() show them
    document.getElementById('x1').style.visibility='visible';
    document.getElementById('x2').style.visibility='visible';
    document.getElementById('x3').style.visibility='visible';
    document.getElementById('x4').style.visibility='visible';
    document.getElementById('x5').style.visibility='visible';
    document.getElementById('x6').style.visibility='visible';
    document.getElementById('x7').style.visibility='visible';
    document.getElementById('x8').style.visibility='visible';
    document.getElementById('x9').style.visibility='visible';
    document.getElementById('x10').style.visibility='visible';
    document.getElementById('x11').style.visibility='visible';
    document.getElementById('x12').style.visibility='visible';
    document.getElementById('x13').style.visibility='visible';
    document.getElementById('x14').style.visibility='visible';
}

function colorChange()//color change animation
{
    document.getElementById('colorChangeRect').beginElement();
    document.getElementById('colorChangeDome').beginElement();
}

function wiggle()//wiggle animation
{
    document.getElementById('wiggleRect').beginElement();
    document.getElementById('wiggleDome').beginElement();
    document.getElementById('wiggleLEye').beginElement();
    document.getElementById('wiggleLEyeP').beginElement();
    document.getElementById('wiggleREye').beginElement();
    document.getElementById('wiggleREyeP').beginElement();
    document.getElementById('wigglec1').beginElement();
    document.getElementById('wigglec2').beginElement();
    document.getElementById('wigglec3').beginElement();
    document.getElementById('wigglec4').beginElement();
    document.getElementById('wigglec5').beginElement();
    document.getElementById('wigglec6').beginElement();
    document.getElementById('wigglec7').beginElement();
    document.getElementById('wigglec8').beginElement();
    document.getElementById('wigglec9').beginElement();
    document.getElementById('wigglec10').beginElement();
    document.getElementById('wigglec11').beginElement();
    document.getElementById('wigglec12').beginElement();
    document.getElementById('wigglec13').beginElement();
    document.getElementById('wigglec14').beginElement();
}

function squiggle()//squiggle animation
{
    document.getElementById('c1').beginElement();
    document.getElementById('c2').beginElement();
    document.getElementById('c3').beginElement();
    document.getElementById('c4').beginElement();
    document.getElementById('c5').beginElement();
    document.getElementById('c6').beginElement();
    document.getElementById('c7').beginElement();
    document.getElementById('c8').beginElement();
    document.getElementById('c9').beginElement();
    document.getElementById('c10').beginElement();
    document.getElementById('c11').beginElement();
    document.getElementById('c12').beginElement();
    document.getElementById('c13').beginElement();
    document.getElementById('c14').beginElement();
}

function blink()//blink animation
{
    document.getElementById('blinkL').beginElement();
    document.getElementById('blinkR').beginElement();
}

function bounce()//bounce animation
{
    document.getElementById('bounceRect').beginElement();
    document.getElementById('bounceDome').beginElement();
    document.getElementById('bounceLEye').beginElement();
    document.getElementById('bounceLEyeP').beginElement();
    document.getElementById('bounceREye').beginElement();
    document.getElementById('bounceREyeP').beginElement();
    document.getElementById('bouncec1').beginElement();
    document.getElementById('bouncec2').beginElement();
    document.getElementById('bouncec3').beginElement();
    document.getElementById('bouncec4').beginElement();
    document.getElementById('bouncec5').beginElement();
    document.getElementById('bouncec6').beginElement();
    document.getElementById('bouncec7').beginElement();
    document.getElementById('bouncec8').beginElement();
    document.getElementById('bouncec9').beginElement();
    document.getElementById('bouncec10').beginElement();
    document.getElementById('bouncec11').beginElement();
    document.getElementById('bouncec12').beginElement();
    document.getElementById('bouncec13').beginElement();
    document.getElementById('bouncec14').beginElement();
    //hide extra circles
    document.getElementById('x1').style.visibility='hidden';
    document.getElementById('x2').style.visibility='hidden';
    document.getElementById('x3').style.visibility='hidden';
    document.getElementById('x4').style.visibility='hidden';
    document.getElementById('x5').style.visibility='hidden';
    document.getElementById('x6').style.visibility='hidden';
    document.getElementById('x7').style.visibility='hidden';
    document.getElementById('x8').style.visibility='hidden';
    document.getElementById('x9').style.visibility='hidden';
    document.getElementById('x10').style.visibility='hidden';
    document.getElementById('x11').style.visibility='hidden';
    document.getElementById('x12').style.visibility='hidden';
    document.getElementById('x13').style.visibility='hidden';
    document.getElementById('x14').style.visibility='hidden';
}

function showSVG()//shows the svg code
{
    var LetMeSeeTheSVG=document.getElementById('svgZone');
    LetMeSeeTheSVG.textContent= "<svg class= ghostie id=ghost width=500 height=500 viewBox=\"0 0 500 500\">" + document.getElementById('ghost').innerHTML + "</svg>";
}

function downloadButton()//downloads the svg used https://stackoverflow.com/questions/29702758/html-button-to-save-div-content-using-javascript to help me figure it out
{
    var a = document.body.appendChild(document.createElement("a"));
    a.download = "svg.html";  
    a.href = "data:text/html," + "<svg class= ghostie id=ghost width=500 height=500 viewBox=\"0 0 500 500\">" + document.getElementById('ghost').innerHTML + "</svg>"; 
    a.click();
}
