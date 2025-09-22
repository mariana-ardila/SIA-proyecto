export let expresiones = {
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo electrónico
    password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono : /^\d{7,14}$/, // Solo números, entre 7 y 14 dígitos
    direccion : /^[a-zA-Z0-9\s\#\-\.\,]{5,100}$/, // Letras, números, espacios y algunos caracteres especiales
    documento : /^\d{7,14}$/ // Solo números, entre 7 y 14 dígitos
}