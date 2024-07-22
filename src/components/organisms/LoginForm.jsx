import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/ButtonAdmi.jsx';

const LoginForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-center">Correo Electrónico:</label>
                <Input type="text" placeholder="Ingrese su correo" className="text-center" />
            </div>
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-center">Contraseña:</label>
                <Input type="password" placeholder="Ingrese su contraseña" className="text-center" />
            </div>
            <Button text="Iniciar Sesión" className="text-center" />
        </form>
    );
};

export default LoginForm;
