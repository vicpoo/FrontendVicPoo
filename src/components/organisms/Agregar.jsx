import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function Agregar (){
    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
            <div className="w-full max-w-xs">
                <label className="block text-white text-center">ID:</label>
                <Input type="text" placeholder="Ingrese su ID" className="text-center" />
            </div>
            <div className="w-full max-w-xs">
                <label className="block text-white text-center">Contraseña:</label>
                <Input type="password" placeholder="Ingrese su contraseña" className="text-center" />
            </div>
            <Button text="entrar" className="text-center" />
        </form>
    );
}