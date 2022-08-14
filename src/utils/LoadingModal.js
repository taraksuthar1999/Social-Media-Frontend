import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Modal } from "@mui/material";
import FocusTrap from "focus-trap-react";

import Loading from "./Loading";
import { ClickAwayListener } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoadingModal(props) {
  //   const [open, setOpen] = React.useState(props.state);
  const ref = React.useRef(null);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      //   props.handler();
      //   setOpen && setOpen(false);
    }
  };

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
        >
          {/* <div ref={ref} className="modal-area">
            <button
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              className="_modal-close"
            >
              <span id="close-modal" className="_hide-visual">
                Close
              </span>
              <svg className="_modal-close-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </button>
            <div className="modal-body">
              <Loading />
            </div>
          </div> */}
          <Loading />
        </aside>
      </Modal>
    </div>
  );
}
