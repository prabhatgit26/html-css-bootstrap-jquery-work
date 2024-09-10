function add(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue+secondValue;
    document.getElementById('result').innerHTML=result;
}
function sub(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue-secondValue;
    document.getElementById('result').innerHTML=result;
}
function mult(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue*secondValue;
    document.getElementById('result').innerHTML=result;
}
function div(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue/secondValue;
    document.getElementById('result').innerHTML=result;
}
function mod(){
    var firstValue=parseInt(document.getElementById("firstValue").value);
    var secondValue=parseInt(document.getElementById("secondValue").value);
    
    var result=firstValue%secondValue;
    document.getElementById('result').innerHTML=result;
}



