import { useEffect } from "react";
import ReactModal from "react-modal";
import { ImageModalProps } from "./ImageModal.type";
import css from './ImageModal.module.css';

const ImageModal: React.FC<ImageModalProps> = ({
  data: {
    alt_description,
    urls: { regular },
  },
  closeModal,
}) => {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <ReactModal
      isOpen={true}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          width: "80%",
          height: "80%",
          margin: "auto",
          padding: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }}
    >
      <img
        src={regular}
        alt={alt_description}
        width="100%" height="100%" className={css.image}
      />
    </ReactModal>
  );
};

export default ImageModal;