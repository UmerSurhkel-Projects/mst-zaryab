import { Modal } from 'react-bootstrap';

const GenericModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className="material-icons group-add-btn">group_add</span>{title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default GenericModal;
