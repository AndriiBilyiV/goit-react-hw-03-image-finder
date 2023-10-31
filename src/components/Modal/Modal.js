import { Image } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import Modal from 'react-modal';
import { nanoid } from "nanoid";

Modal.setAppElement('#root');

const customStyles = {
    content: {
    userSelect: "none",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {zIndex: "1000"}
};

export const ModalWindow = ({isShow, close,url,alt}) => {
    return (
         <Modal
                  key={nanoid()}
                  isOpen={isShow}
                  onRequestClose={close}
                  style={customStyles}
                  contentLabel="Full size photo"
                  shouldCloseOnEsc={true}
                  shouldCloseOnOverlayClick={true}
                >
                  <Image src={url} alt={alt} />
      </Modal>
    )
}
  