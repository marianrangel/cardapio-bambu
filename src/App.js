import React from "react";

const menuItems = [
  { 
    name: "Camarão Internacional", 
    description: "Camarões refogados, arroz cremoso com presunto e queijo gratinado.", 
    price: "R$ 79,90", 
    imageUrl: "https://example.com/camarao-internacional.jpg" 
  },
  { 
    name: "Peixe à Delícia", 
    description: "Filé de peixe empanado com banana frita e molho branco.", 
    price: "R$ 69,90", 
    imageUrl: "https://example.com/peixe-a-delicia.jpg" 
  },
  { 
    name: "Carne de Sol do Sertão", 
    description: "Carne de sol na manteiga da terra, acompanhada de baião de dois e macaxeira.", 
    price: "R$ 85,00", 
    imageUrl: "https://example.com/carne-de-sol.jpg" 
  },
  { 
    name: "Moqueca de Camarão", 
    description: "Moqueca de camarão servida com arroz e pirão.", 
    price: "R$ 99,90", 
    imageUrl: "https://example.com/moqueca-de-camarao.jpg" 
  }
];

const MenuItem = ({ name, description, price, imageUrl }) => {
  return (
    <div className="border-b last:border-none pb-4 mb-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-lg mb-2" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-green-600 font-bold mt-2">{price}</p>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Cardápio Coco Bambu</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            imageUrl={item.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
