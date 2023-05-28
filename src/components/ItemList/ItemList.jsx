import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ producto }) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div id="imagenes" className="carousel-inner">
        {producto.map((prod, index) => (
          <div id="divDetalles" className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={prod.image} className="d-block w-100" alt={prod.name} />
            <div id="divDetalle" className="carousel-caption d-md-block">
             <Item key={prod.id} {...prod} />
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
    </div>
  );
};

export default ItemList;
