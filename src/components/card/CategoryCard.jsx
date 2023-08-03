import { Link } from "react-router-dom"
import PropTypes from 'prop-types'; 
import './card.css'

const CategoryCard = (props) => {
  const { avatar, lastName, firstName, phoneNumber, email, delet, edit, id } = props;
  return (
    <div className="card mb-4">
      <img src={avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title line-clamp">{lastName}</h5>
        <p className="card-title line-clamp">{firstName}</p>
        <p className="card-title line-clamp">{phoneNumber}</p>
        <p className="card-title line-clamp">{email}</p>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <Link to={`/categories/${id}`} className="btn btn-primary">
            Go products {id}
          </Link>
          <Link className="btn btn-danger" onClick={delet}>
            Delete
          </Link>
        </div><br />
        <Link className="btn btn-primary" onClick={edit}>
          Edit
        </Link>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  avatar: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.string,
  delet: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default CategoryCard