import { useEffect, useState } from 'react';
import ImageForm from './components/ImageForm';
import ImageGallery from './components/ImageGallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(storedImages);
  }, []);

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

  const addImage = (url) => {
    setImages([...images, url]);
  };

  const removeImage = (urlToRemove) => {
    const newImages = images.filter((url) => url !== urlToRemove);
    setImages(newImages);
  };

  //<img src="https://picsum.photos/600/400" alt="" />

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Galeria de Imagenes</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ImageForm onAddImage={addImage} />
        </div>
      </div>
      <ImageGallery images={images} onRemoveImage={removeImage} />
    </div>
  );
}

export default App;
