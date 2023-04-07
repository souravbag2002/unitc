let feet = document.getElementById("feet");
let meter = document.getElementById("meter");
let inch = document.getElementById("inch");
let cm = document.getElementById("cm");
let km = document.getElementById("km");
let mile = document.getElementById("mile");

function feetToOther(val){
    meter.value=val/3.2808;
    inches.value=val*12;
    cm.value=val/0.032808;
    km.value=val/3280.8;
    mile.value=val*0.00018939;
}
function meterToOther(val){
    feet.value=val*3.2808;
    inches.value=val*39.370;
    cm.value=val/0.01;
    km.value=val/1000;
    mile.value=val*0.00062137;
}
function inchesToOther(val){
    feet.value=val*0.083333;
    meter.value=val*39.370;
    cm.value=val/0.39370;
    km.value=val/39370;
    mile.value=val*0.000015783;
}
function cmToOther(val){
    feet.value=val*0.032808;
    meter.value=val/100;
    inches.value=val*0.39370;
    km.value=val/100000;
    mile.value=val*0.0000062137;
}
function kmToOther(val){
    feet.value=val*3280.8;
    inches.value=val*39370;
    cm.value=val*100000;
    meter.value=val*1000;
    mile.value=val*0.62137;
}
function milesToOther(val){
    feet.value=val*5280;
    inches.value=val*63360;
    cm.value=val/0.0000062137;
    km.value=val/0.62137;
    meter.value=val/0.00062137;
}

function convertToOthers (convertFrom,value) {
    switch (convertFrom) {
        case "feet":feetToOther(parseFloat(value)); break;
        case "meter":meterToOther(parseFloat(value)); break;
        case "inch":inchesToOther(parseFloat(value)); break;
        case "cm":cmToOther(parseFloat(value)); break;
        case "km":kmToOther(parseFloat(value)); break;
        case "mile":milesToOther(parseFloat(value)); break;
    }
}