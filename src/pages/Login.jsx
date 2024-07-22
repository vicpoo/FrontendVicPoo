import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import NavbarExit from '../components/molecules/NavbarExit'; 

function Login() {
    const handleLogin = () => {
        alert('Inicio de sesión enviado');
    };

    return (
        <div className='bg-gray-300 min-h-screen flex flex-col'>
            <NavbarExit /> 
            <div className="flex items-start justify-center flex-grow bg-gray-300 py-12">
                <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl text-gray-800 mb-4 text-center">Inicio de Sesión</h1>
                        <LoginForm onSubmit={handleLogin} />
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                        {/* Aquí puedes añadir tu imagen */}
                        <img src="/public/Imagenes/collage login.jpg" alt="Imagen de inicio de sesión" className="w-48 h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
