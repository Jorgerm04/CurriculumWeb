<?php
// Verificar si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los valores enviados
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validar los campos 
    if (empty($name) || empty($email) || empty($message)) {
        echo "Por favor, complete todos los campos.";
    } else {
        // Mostrar los datos por pantalla
        echo "Nombre: " . $name . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Mensaje: " . $message . "<br>";
        
        if(mail("jorgeroch@elcampico.org","Job offer",$message)){  //Me da error al enviar y he configurado un correo como remitente y todo.
            echo "Correo enviado correctamente";
        } else{
            echo("El correo no se ha enviado correctamente");
        }
    }
} else {
    echo "No se ha enviado ningún formulario.";
}
?>