/*let count=0
function incrementcount(){
    count++
    document.getElementById("exampleRadios4").textContent = count
}
document.getElementById("exampleRadios4").addEventListener('click',incrementcount)
console.log(count)*/

/*let x= document.getElementById("exampleRadios1")
console.log(x)

let y= document.getElementById("exampleRadios4")
console.log(y)*/

let count=0
var btncounter=document.querySelector("#exampleRadios4")
btncounter.addEventListener('click',function(){
    count++;
    console.log(count);
})
btncounter=document.querySelector("#exampleRadios6")
btncounter.addEventListener('click',function(){
    count++;
    console.log(count);
})
console.log("slow learner");
document.write("slow learner2");
document.write(count);

document.write("afyter if");

/*btncounter.addEventListener('click',function(){
    count++;
    document.querySelector(#result).innerHTML=count
})*/

