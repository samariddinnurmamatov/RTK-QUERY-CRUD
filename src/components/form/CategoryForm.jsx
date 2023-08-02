import PropTypes from 'prop-types'; 
import { Fragment } from 'react';
import { Form } from "react-bootstrap"


const CategoryForm = ({ handleChange, data }) => {
  
  return (
    <Fragment>
      <Form.Group className="mb-3">
          <Form.Label>Category avatar</Form.Label>
          <Form.Control
            name="avatar"
            onChange={handleChange}
            value={data.avatar}
            required
            type="text"
            placeholder="Category avatar"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="lastName"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="PhoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            value={data.phoneNumber}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>
    </Fragment>
  )
}

CategoryForm.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
};

export default CategoryForm;