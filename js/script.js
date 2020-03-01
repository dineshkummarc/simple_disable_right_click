var message="The right click mouse button has been disable by the Administrator";

function mouseBtn(){
	if(document.all){
		alert(message);
		return false;
	}
}

function disableBtn(e){
	if(document.layers||(document.getElementById&&!document.all)){
		if (e.which==2||e.which==3){
			alert(message);
			return false;
		}
	}
}

if (document.layers){
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=disableBtn;
}else{
	document.onmouseup=disableBtn;document.oncontextmenu=mouseBtn;
}

document.oncontextmenu=new Function("return false");