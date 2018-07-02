var subir_bajar = prompt("subes o bajas?");
var piso_seleccionado = prompt ("a que piso quieres ir?");
const primer_piso = 1;
const ultimo_piso = 20;

if (subir_bajar === "subo") {
	var piso_actual = 1; 
	for (piso_actual; piso_actual<=ultimo_piso; piso_actual++) {
		console.log ( "estas en el piso " + piso_actual);
		if (piso_actual==piso_seleccionado) {
			alert ("llegaste");
		}
	}
}


if (subir_bajar === "bajo") {
	var pisoActual = 20; 
	for (pisoActual; pisoActual>=primer_piso; pisoActual--) {
		console.log ( "estas en el piso " + pisoActual);
		if (pisoActual==piso_seleccionado) {
			alert ("llegaste");
		}
	}
}