import ImageCard from './ImageCard';

function ImageGallery({ images, onRemoveImage }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {images.map((i, index) => (
        <div key={index} className="col">
          <ImageCard url={i} onRemove={() => onRemoveImage(i)} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
