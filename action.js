let usuario = {
    email: "mandros.angelof@pucp.edu.pe",
    contra: "12345",
}

const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
event.preventDefault();
const yourCorreo = document.getElementById('correo').value 
const yourContra = document.getElementById('contra').value 

if ((yourContra==usuario.contra)&&(yourCorreo==usuario.email)){
    window.alert("Bienvenido de vuelta "+ yourCorreo)
}
else{
    window.alert("Este usuario no existe")
}
})