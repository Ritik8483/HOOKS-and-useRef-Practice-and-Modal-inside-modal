import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalSecond from "./ModalSecond";

const ModalFirst = ({
  openFirstModal,
  setOpenFirstModal,
  openSecondModal,
  setOpenSecondModal,
}) => {
  console.log("FIRST");
  return (
    <div>
      <Modal show={openFirstModal} onHide={() => setOpenFirstModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ModalFirst</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => {
              setOpenSecondModal(true);
              setOpenFirstModal(false);
            }}
            variant="secondary"
          >
            Open Second Modal
          </Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      {/* {openFirstModal && (
        <ModalSecond
          openSecondModal={openSecondModal}
          setOpenSecondModal={setOpenSecondModal}
        />
      )} */}
    </div>
  );
};

export default ModalFirst;
