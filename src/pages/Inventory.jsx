import React from "react";
import InventoryMenu from "../components/organisms/InventoryMenu";

const Inventory = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Imagenes/cafe09.jpg')" }}>
          <InventoryMenu />
        </div>
      );
}
export default Inventory;