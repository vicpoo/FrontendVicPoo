import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/organisms/LoginForm';
import NavbarExit from '../components/molecules/NavbarExit';
import toast from 'react-hot-toast';

function Login() {
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            const { rol_id_fk } = data.user;

            if (rol_id_fk === 1) {
                toast.success('Inicio de sesión exitoso como Administrador');
                navigate('/Administrador');
            } else if (rol_id_fk === 2) {
                toast.success('Inicio de sesión exitoso como Vendedor');
                navigate('/vendedor');
            } else if (rol_id_fk === 3) {
                toast.success('Inicio de sesión exitoso como Inventario');
                navigate('/Inventario');
            } else {
                toast.error('Rol desconocido');
            }
        } catch (error) {
            toast.error('Error al iniciar sesión: ' + error.message);
        }
    };

    return (
        <div className='bg-pink-300 min-h-screen flex flex-col'>
            <NavbarExit />
            <div className="flex items-start justify-center flex-grow bg-pink-300 py-12">
                <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl text-gray-800 mb-4 text-center">Inicio de Sesión</h1>
                        <LoginForm onSubmit={handleLogin} />
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                        <img src="./Imagenes/collage login.jpg" alt="Imagen de inicio de sesión" className="w-48 h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
