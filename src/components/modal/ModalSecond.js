import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalSecond = ({
  openSecondModal,
  setOpenSecondModal,
  setOpenFirstModal,
}) => {
  console.log("SECOND");

  return (
    <div>
      <Modal show={openSecondModal} onHide={() => setOpenSecondModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Second</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => {
              setOpenSecondModal(false);
              setOpenFirstModal(true);
            }}
            variant="secondary"
          >
            Return to modal First
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSecond;
