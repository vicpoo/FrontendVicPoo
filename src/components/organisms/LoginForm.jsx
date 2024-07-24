import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://100.27.97.251/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.user);
                onSubmit(data);
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-center">Username</label>
                <Input
                    type="text"
                    placeholder="Ingrese su username"
                    className="text-center"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="w-full max-w-xs">
                <label className="block text-gray-700 text-sm font-bold mb-2 text-center">Contraseña:</label>
                <Input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="text-center"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button text="Iniciar Sesión" type="submit" className="text-center" />
        </form>
    );
};

export default LoginForm;
