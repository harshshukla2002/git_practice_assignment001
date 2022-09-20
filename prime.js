function prime(num){
	let factor=0;
	for(let i=1;i<=num;i++){
		if(num%i==0){
			factor++;
		}
	}
	if(factor==2){
		return true
	}
	return false
}

let bag=prime(17);

if(bag==true){
	console.log("Prime");
}
else {
	console.log("Not Prime");
}