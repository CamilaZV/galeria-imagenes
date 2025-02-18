import { useState } from 'react';

function ImageForm({ onAddImage }) {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl.trim()) return;
    onAddImage(imageUrl);
    setImageUrl(''); //LIMPIA EL INPUT DESPUES DE AGREGAR
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa la URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Agregar Imagen</button>
    </form>
  );
}

export default ImageForm;
