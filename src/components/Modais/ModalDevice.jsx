import Modal from "react-modal";
import PropTypes from "prop-types";

export const ModalDevice = ({ isOpen, onRequestClose, style, children }) => {
  const customStyle = {
    content: {
      top: "10%",
      left: "45%",
      right: "auto",
      bottom: "auto",
      width: "max-content",
      marginRight: "-50%",
      transform: "translate(-40%, -10%)",
      background: `${(theme) => theme.color.backgroundPrincipal}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      gap: "1em",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyle}>
      {children}
    </Modal>
  );
};

ModalDevice.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  style: PropTypes.func,
  children: PropTypes.node.isRequired,
};
