function ImageCard({ url, onRemove }) {
  return (
    <div className="card shadow-sm">
      <img
        src={url}
        alt="Imagen cargada"
        className="card-img-top img-fluid"
        style={{ height: '200px', objectFit: 'cover' }}

      />
      <div className="card-body text-center">
        <button onClick={onRemove} className="btn btn-danger btn-sm">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
