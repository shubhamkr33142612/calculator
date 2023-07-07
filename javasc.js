// var cls = document.getElementById("clear");
// var preval = document.getElementById("pre");
var total;
// var result;
var newval;


function clearALL() {
	// document.getElementById("pre").innerHTML = " ";
	// console.log({result});
	document.getElementById("inp").value = null;
    total = 0;
	// console.log({result});


	// document.getElementById("cur").innerHTML = "";
}
function number(x) {
   
	total = document.getElementById("inp").value += x;
	// console.log(document.getElementById("inp").value);
}

function calcu() {
	// result = eval(total);
	if(total ==0){
		document.getElementById("inp").value= "";
	}else{
	// document.getElementById("inp").value = result;
	document.getElementById("inp").value = eval(total);}
    // result = 0;
	// console.log(result);
}
// var arrres =[];
// arrres[result];

function backone() {
    // newval = total.slice(0, -1);
    // if(arrres.length==0){
    //     result = 0
    // }else{
	// console.log({ total });
	newval = total.slice(0, -1);
	// console.log({ newval });
	document.getElementById("inp").value = newval;
	total = newval;
    
}


