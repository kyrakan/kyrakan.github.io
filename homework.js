alert(Date());

function img(){
    document.getElementById('hisoka').src='https://i.pinimg.com/originals/a3/c7/2b/a3c72b0d915c0727e18111e773547249.png'
}
function change(){
	var select = document.getElementById('intro');
  select.innerHTML ='Hello world';
}
function paragraph(){
    var select = document.getElementById('change2');
    select.style.backgroundColor='pink';
    select.style.fontFamily='Arial';
    select.style.textAlign='center';
}
function ftoc(f) {
    document.getElementById('demo').innerHTML = (5/9) * (f-32);
}

function sum2(){
    var a =parseFloat(prompt('first number:'));
    var b= parseFloat(prompt('second number:'));
    document.getElementById('sum').innerHTML=a+b;
 }
 function names(){

 var c=prompt('please enter the first name:');
 var d=prompt('please entger the second name');
  document.getElementById('five').innerHTML="Nice to meet you"+" "+c+" "+d;
}
 
