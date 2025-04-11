const md1 = document.getElementById("#main-data1");
const md2 = document.getElementById("#main-data2");
const md3 = document.getElementById("#main-data3");
const md4 = document.getElementById("#main-data4");

md2.style.display = 'none';
md3.style.display = 'none';
md4.style.display = 'none';

document.getElementById(".main-data1").addEventListener('input',function(){
    if (document.getElementById(".main-data1").value.length > 0) { // Example condition: show if input is not empty
        document.getElementById(".main-data2").style.display = 'block';
    } else {
        document.getElementById(".main-data2").style.display = 'none';
    }
});
document.getElementById(".main-data2").addEventListener('input',function(){
    if (document.getElementById(".main-data2").value.length > 0) { // Example condition: show if input is not empty
        document.getElementById(".main-data3").style.display = 'block';
    } else {
        document.getElementById(".main-data3").style.display = 'none';
    }
});

document.getElementById(".main-data3").addEventListener(InputEvent,function(){
    if (document.getElementById(".main-data3").value.length > 0) { // Example condition: show if input is not empty
        document.getElementById(".main-data4").style.display = 'block';
    } else {
        document.getElementById(".main-data4").style.display = 'none';
    }
});

if(md2.value == "1"){
    md3.max ="2";
};

if(md2.value == "2"){
    md3.min = "3";
    md3.max = "4";
}

if(md2.value == "3"){
    md3.min = "5";
    md3.max = "6";
}

if(md2.value == "4"){
    md3.ariaValueMin = "7";
    md3.ariaValueMax = "8";
}

document.getElementById(".main-data4").addEventListener(InputEvent,function(){
    if ((document.getElementById(".main-data1").value.length > 0) && (document.getElementById(".main-data1").value.length > 0) && (document.getElementById(".main-data1").value.length > 0) && (document.getElementById(".main-data1").value.length > 0)) {
        document.getElementById(".main-button").style.backgroundColor = "green";
    } else {
        document.getElementById(".main-button").style.backgroundColor = "rgb(248, 102, 102)";
    }
});

