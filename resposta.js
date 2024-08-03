

let nome= prompt('Olá, qual é o seu nome?')

let pontos = 0
 let resp = document.querySelector ('#r')
 let dest = document.querySelector ('#s')
 let eut = document.querySelector ('#su')
 let sho = document.querySelector ('#f')
 let cent= document.querySelector('#a')
 
 function conc(){
	 if (resp.value.toUpperCase() == "ELISEU"){
     pontos += 100
 
 
 console.log(pontos);
 
	 if  (dest.value.toUpperCase() == "ZERUIA"){
     pontos +=10
	 
 
 
 console.log(pontos);
	 if (cent.value.toUpperCase() == 'CORNÉLIO'){
		 alert('Parabéns. Você acertou.')
		 pontos +=20
		 
		 console.log(pontos)
	 if(sho.value.toUpperCase() =='Edom'){
		 pontos +=50
		 
		 console.log(pontos)
	 if (eut.value.toUpperCase() =='EUTICO'){
		 pontos+=100
			 
		 console.log(pontos)
	 }
	 }
 }
 }
 }}
 function total(){
	 alert(`Parabéns ${nome}, você chegou ao final e fez ${pontos} pontos.`)
 }
 
