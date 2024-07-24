import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';



const CoffeeForm = () => {
    const [name, setName] = useState('');
    const [origin, setOrigin] = useState('');
    const [altitude, setAltitude] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = () => {
        console.log({
            name,
            origin,
            altitude,
            rating,
        });
        // Puedes agregar la lógica para enviar los datos a tu backend aquí
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded-md shadow-md  bg-white">
            <h2 className="text-xl font-bold mb-4">Agregar Café</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nombre del Café</label>
                <Input 
                    type="text" 
                    placeholder="Nombre del Café" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Origen</label>
                <Input 
                    type="text" 
                    placeholder="Origen" 
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Altura</label>
                <Input 
                    type="number" 
                    placeholder="Altura (m)" 
                    value={altitude}
                    onChange={(e) => setAltitude(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Calificación</label>
                <Input 
                    type="number" 
                    placeholder="Calificación (1-5)" 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            <Button
                onClick={handleSubmit} 
                text="Agregar" 
                className="w-full"
            />
            
        </div>
    );
};

export default CoffeeForm;