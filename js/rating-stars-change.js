var mediaAvaliações1; //A media de avaliações deve ser a soma das "notas(quantidade de estrelas)" dividido pela quantidade de avaliações.
var mediaAvaliações2;
var mediaAvaliações3;




function removerEstrela(mediaAvaliacoes, classeAvaliacoes){


	var restoMedia = mediaAvaliacoes%1;
	var mediaInteira = mediaAvaliacoes - restoMedia;
	

	


	/*var estrelaFull = document.createElement("I");
	var faFaStar = document.createAttribute("class");
	faFaStar.value = "fa fa-star text-warning";
	estrelaFull.setAttributeNode(faFaStar);*/



	for (let  i = 5; i>=mediaInteira; i--){
		
		if(mediaInteira<5){
		if(i>mediaInteira){
			var campoEstrelas = document.querySelectorAll(classeAvaliacoes)[i-1];
			campoEstrelas.setAttribute("class", "fa fa-star-half text-warning");
			campoEstrelas.style.opacity = '0';}

			if(i == mediaInteira && restoMedia!=0){
			var campoEstrelas = document.querySelectorAll(classeAvaliacoes)[i];
			campoEstrelas.style.opacity = '100%';
			
		};};

			console.log(i+" , "+ mediaInteira);	 
	}

}

/*
removerEstrela(0, "div.campoEstrelas1 i");
removerEstrela(1, "div.campoEstrelas2 i");
removerEstrela(2, "div.campoEstrelas3 i");
*/
/*
removerEstrela(3, "div.campoEstrelas1 i");
removerEstrela(4, "div.campoEstrelas2 i");
removerEstrela(5, "div.campoEstrelas3 i");
*/


/*
removerEstrela(0.5, "div.campoEstrelas1 i");
removerEstrela(1.5, "div.campoEstrelas2 i");
removerEstrela(2.5, "div.campoEstrelas3 i");
*/


removerEstrela(3.5, "div.campoEstrelas1 i");
removerEstrela(4.5, "div.campoEstrelas2 i");
removerEstrela(5.5, "div.campoEstrelas3 i");
