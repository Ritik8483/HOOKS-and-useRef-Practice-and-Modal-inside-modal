import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalFirst from "./ModalFirst";
import ModalSecond from "./ModalSecond";

const ModalContainer = () => {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Button onClick={() => setOpenFirstModal(true)}>
          Open First modal
        </Button>
      </div>
      {openFirstModal && (
        <ModalFirst
          openFirstModal={openFirstModal}
          setOpenFirstModal={setOpenFirstModal}
          openSecondModal={openSecondModal}
          setOpenSecondModal={setOpenSecondModal}
        />
      )}
      {openSecondModal && (
        <ModalSecond
          openSecondModal={openSecondModal}
          setOpenSecondModal={setOpenSecondModal}
          setOpenFirstModal={setOpenFirstModal}
        />
      )}
    </div>
  );
};

export default ModalContainer;
