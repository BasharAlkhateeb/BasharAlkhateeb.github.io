const input = document.getElementById("input");
const btns = document.querySelectorAll(".btn");
const change = document.querySelectorAll(".btn-grey");


function calculater(){
  let string='';
  let value='' ;
  
  window.addEventListener("submit",function(s){
     value = document.getElementById("input").value;
   newValue=eval(value);
  document.getElementById("input").value=newValue;
  
  s.preventDefault();
  })

  
btns.forEach(function(btn){
 
  btn.addEventListener("click",function(){
  
    let arr=[];
    
    let c= 0 ;
    arr[c]=btn.textContent;
    c++;
 

 string+=arrayList(arr);
 document.getElementById("input").value=string;
console.log(string);
  })

})
change.forEach(function(equalorC){
equalorC.addEventListener("click",function(s){
if(s.currentTarget.classList.contains("btn-equal")){
  let calc=eval(string);
  document.getElementById("input").value=calc;
string=calc;
  value='';
}
else if (s.currentTarget.classList.contains("btn-clear")){
  document.getElementById("input").value="";
  string='';
value='';
}
})
})
function arrayList (arr){
  let b='';
    let x;
  for (let i = 0 ; i<arr.length;i++){
  
  
    x='';
    
  x=arr[i];
  
  b=b+x;
  
    }
    return b;
}

}
calculater();