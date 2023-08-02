import { Button, Form, Modal } from "react-bootstrap"
import PropTypes from 'prop-types'; 
import { cloneElement, useState } from "react";

const ModalForm = ({show = false, closeModal,  name = "", children, values= {}, submit}) => {
  const [ validated, setValidated ] = useState(false);
  const [ data, setData ] = useState(values)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      submit(data)
      closeModal()
    } else {
      setValidated(true)
    }
  };

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  return (
    <Modal className="modall" show={show} onHide={closeModal}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{cloneElement(children,  { handleChange, data })}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add {name}
            </Button>
          </Modal.Footer>
        </Form>
    </Modal>
  )
}

ModalForm.propTypes = {
  show: PropTypes.bool,
  closeModal : PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
  // addCategory: PropTypes.func,
  submit: PropTypes.func,
  values: PropTypes.object,
};

export default ModalForm