import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import cafeImage from '/Imagenes/cafe09.jpg';  

function Login  () {
    const handleLogin = () => {
        alert('Inicio de sesión enviado');
        
    };

    return (
        <div 
            className="flex items-center justify-center h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${cafeImage})` }}  
        >
         <div className="bg-[#CFB494] p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl text-white  mb-4 text-center">Administrador</h1>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default Login;
