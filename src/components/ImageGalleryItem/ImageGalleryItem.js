import { ImageWrapper, Image } from "./ImageGalleryItem.styled"
import Modal from 'react-modal';
import { Component } from "react";
import { nanoid } from "nanoid";

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

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }
    openModal = () => {
        this.setState({isModalOpen: true})
    }
    closeModal = () => {
        this.setState({isModalOpen: false})
    }
render() {
    const { web, alt, full } = this.props;
      return (
        <ImageWrapper onClick={this.openModal}>
            <img src={web} alt={alt} width="360" />
              <Modal
                  key={nanoid()}
                  isOpen={this.state.isModalOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Full size photo"
                  shouldCloseOnEsc={true}
                  shouldCloseOnOverlayClick={true}
                >
                  <Image src={full} alt={alt} />
      </Modal>
        </ImageWrapper>
    )
    }
}

