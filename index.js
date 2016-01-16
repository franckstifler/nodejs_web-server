function printInTwoSeconds(message){
	setTimeout(function(){
		console.log(message);
	}, 10000);
}

printInTwoSeconds("Hello async!");