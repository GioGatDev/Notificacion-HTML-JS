var button = document.getElementById('notificacion');


button.addEventListener('click', function () {
	notificacion();  //callback a función notify
});

function notificacion(){
	//verificación de compatibilidad 
	if (!("Notification" in window)) {
		alert("Este navegador no soporta notificaciones");
	}
	//Notificación con permisos 
	else if (Notification.permission === "granted") {

		var notifi = new Notification("Esto es una notificación");

	}
	//Activar permisos para notificación
	else if (Notification.permission !== "denied") {
		Notification.requestPermission(function(){
			if (Notification.permission === "granted") {

		var notifi = new Notification("Bienvenido");
			}

		});
	}
}