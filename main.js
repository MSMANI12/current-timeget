
var today=new Date();
var hour=today.getHours();
console.log(hour);

if(hour<12){
	document.write("morning");
}else if(12<=hour && 17>hour){
	document.write("AfterNoon");
}
else if(hour>=17 && 20>hour){
	document.write("Evening");
}
else{
	document.write("Night");
}