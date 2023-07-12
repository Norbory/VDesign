let usuario = {
    email: "mandros.angelof@pucp.edu.pe",
    contra: "12345",
}

const form = document.getElementById('form')
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'TU_ACCESS_KEY_ID',
    secretAccessKey: 'TU_SECRET_ACCESS_KEY',
    region: 'eu-central-1'
  });

const dynamodb = new AWS.DynamoDB();
 

form.addEventListener('submit', function(event) {
event.preventDefault();
const yourCorreo = document.getElementById('correo').value 
const yourContra = document.getElementById('contra').value 
const yourPhone = document.getElementById('phone').value
const textBoton = document.querySelector(".access-button").value

if (textBoton=="ACCEDER"){
    // if ((yourContra==usuario.contra)&&(yourCorreo==usuario.email)){
    //     window.alert("Bienvenido de vuelta "+ yourCorreo)
    // }
    // else{
    //     window.alert("Este usuario no existe")
    // }
    var params = {
        TableName: 'Usuarios_VDesign',
        Key: {
          'email': { S: yourCorreo },
          'password': { S: yourContra }
        }
      };
    
      dynamodb.getItem(params, function(err, data) {
        if (err) {
          console.log('Error:', err);
          return;
        }
    
        if (data.Item) {
          window.alert('El usuario existe en la base de datos');
          // Realiza las acciones necesarias si el usuario existe
        } else {
            window.alert('El usuario no existe en la base de datos');
          // Realiza las acciones necesarias si el usuario no existe
        }
      });
} else {
    var params = {
        TableName: 'Usuarios_VDesign',
        Item: {
          'email': { S: yourCorreo },
          'password': { S: yourContra },
          'phoneNumber': { N: yourPhone }
        }
      };
    
      dynamodb.putItem(params, function(err, data) {
        if (err) {
          console.log('Error:', err);
          return;
        }
    
        window.alert('Usuario registrado exitosamente');
        // Realiza las acciones necesarias después de registrar el usuario
      });
}
})

function cambiarRegistro() {
    var phoneContainer = document.getElementById("phone-container");
    phoneContainer.style.display = "block";
    const yourPhone = document.getElementById('phone');
    yourPhone.setAttribute("required", "required");
    var valueBoton = document.querySelector(".access-button");
    valueBoton.value = "REGISTRASRE"
    var bloques = document.querySelector(".bloque0");
    bloques.style.order = "2";
    var bloques = document.querySelector(".bloque1");
    bloques.style.order = "1";
  }

function cambiarLogin() {
    var phoneContainer = document.getElementById("phone-container");
    phoneContainer.style.display = "none";
    const yourPhone = document.getElementById('phone');
    yourPhone.removeAttribute("required");
    var valueBoton = document.querySelector(".access-button");
    valueBoton.value = "ACCEDER"
    var bloques = document.querySelector(".bloque0");
    bloques.style.order = "1";
    var bloques = document.querySelector(".bloque1");
    bloques.style.order = "2";
  }