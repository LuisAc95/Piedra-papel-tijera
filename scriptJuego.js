	var victoriaUsuario=0;
	var victoriaPc=0;
	
	
	function jugar(opcionUsuario) {

		
		var opciones=[0,1,2];

		var limiteMinimo=0;
		var	limiteMaximo=2;
		
		var eleccionPc = Math.floor(Math.random() * (limiteMaximo - limiteMinimo +1) + limiteMinimo);
		
		var eleccionJugador = opcionUsuario;
		var obj = document.getElementById("resultado");
		var obj_us = document.getElementById("usuario");
		var obj_pc = document.getElementById("pc");
		
		if (eleccionJugador==0) {
			if (opciones[eleccionPc]==0) { //Opcion Piedra
				//console.log(eleccionJugador+'Empate'+eleccionPc); Prueba 
				obj_us.innerHTML = "<label id='usuario' style='color: #FF6666;'>Piedra</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #FF6666;'>Piedra</label>";
				obj.innerHTML = "<h2>Empataste :/</h2>";
			}else if (opciones[eleccionPc]==1){
				//console.log(eleccionJugador+'Pierde'+eleccionPc);Prueba 
				victoriaPc++;
				obj_us.innerHTML = "<label id='usuario' style='color: #FF6666;'>Piedra</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #6699FF;'>Papel</label>";
				obj.innerHTML = "<h2>Perdiste :c</h2>";
			}else{	
				//console.log(eleccionJugador+'Gana'+eleccionPc);Prueba 
				victoriaUsuario++;
				obj_us.innerHTML = "<label id='usuario' style='color: #FF6666;'>Piedra</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #339966;'>Tijera</label>";
				obj.innerHTML = "<h2>Ganaste :D</h2>";
			}
		}else if (eleccionJugador==1) { //Opcion Papel
			if (opciones[eleccionPc]==0) {
				//console.log(eleccionJugador+'Gana'+eleccionPc);Prueba 
				obj_us.innerHTML = "<label id='usuario' style='color: #6699FF;'>Papel</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #FF6666;'>Piedra</label>";
				victoriaUsuario++;
				obj.innerHTML = "<h2>Ganaste :D</h2>";
				
			}else if (opciones[eleccionPc]==1){
				//console.log(eleccionJugador+'Empate'+eleccionPc);Prueba
				obj_us.innerHTML = "<label id='usuario' style='color: #6699FF;'>Papel</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #6699FF;'>Papel</label>"; 
				obj.innerHTML = "<h2>Empataste :/</h2>";
			}else{	
				//console.log(eleccionJugador+'Pierde'+eleccionPc);Prueba 
				victoriaPc++;
				obj_us.innerHTML = "<label id='usuario' style='color: #6699FF;'>Papel</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #339966;'>Tijera</label>";
				obj.innerHTML = "<h2>Perdiste :c</h2>";
			}
		}else if (eleccionJugador==2) { //Opcion Tijeras
			if (opciones[eleccionPc]==0) {
				//console.log(eleccionJugador+'Pierde'+eleccionPc);Prueba 
				victoriaPc++;
				obj_us.innerHTML = "<label id='usuario' style='color: #339966;'>Tijera</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #6699FF;'>Piedra</label>";
				obj.innerHTML = "<h2>Perdiste :c</h2>";
			}else if (opciones[eleccionPc]==1){
				//console.log(eleccionJugador+'Gana'+eleccionPc);Prueba 
				victoriaUsuario++;
				obj_us.innerHTML = "<label id='usuario' style='color: #339966;'>Tijera</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #FF6666;'>Papel</label>";
				obj.innerHTML = "<h2>Ganaste :D</h2>";
				
			}else{	
				//console.log(eleccionJugador+'Empate'+eleccionPc);Prueba 
				obj_us.innerHTML = "<label id='usuario' style='color: #339966;'>Tijera</label>";
				obj_pc.innerHTML = "<label id='pc'  style='color: #339966;'>Tijera</label>";
				obj.innerHTML = "<h2>Empataste :/</h2>";
			}
		}	

		var puntajeUsuario=0;
		puntajeUsuario = victoriaUsuario+puntajeUsuario;
		var puntajePc=0;
		puntajePc=victoriaPc+puntajePc;
		document.getElementById("score").value = puntajeUsuario;
		document.getElementById("scorepc").value = puntajePc;
	}