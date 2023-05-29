import './Error404.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div>
      <h1>Parece que no te hubiese gustado el final de la Pelí!</h1> 
      <section className="error-container">
        <span>
          <span>QUE</span>
        </span>
        <span>LA FUERZA</span>
        <span>
          <span>ME ACOMPAÑE</span>
        </span>
      </section>
      <div className="link-container">
        <Link to="/" className="Option ButtonLink" type="button" class="btn btn-info">
          Te recomendamos otra selección desde nuestro MENÚ PRINCIPAL
        </Link>
      </div>
    </div>
  );
};

export default Error404;