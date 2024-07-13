function add(a ,b){
    var num1 =document.getElementById("one")
    var num2  =document.getElementById("two")
    var result=document.getElementById("result")
    var a =Number(num1.value)
    var b=Number(num2.value)
    
    console.log(a+b);
    result.textContent=a+b
   }