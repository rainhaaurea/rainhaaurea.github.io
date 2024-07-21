

    
	let sim =document.querySelector('#ck')
	let pontos = 3

function certo(){

	if (sim.value.toUpperCase() == "ARFAXADE"){
     
	
	alert('Parabéns!')
	
	}else{
		alert(`Infelizmente não foi ${sim}. Tente novamente`)
		pontos-=1
		console.log(pontos)
		if (pontos<0){
			alert('Fim de jogo')
	
	
}
}
}




 
 
