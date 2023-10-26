import { ImageWrapper } from "./ImageGalleryItem.styled"
import Modal from 'react-modal';
import { Component } from "react";

const customStyles = {
  content: {
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
     const { url } = this.props;
      return (
        <ImageWrapper onClick={this.openModal}>
            <img src={url} width="360" />
             <Modal
                  isOpen={this.state.isModalOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  shouldCloseOnOverlayClick={true}
                  shouldCloseOnEsc={true}
                >
        <p>I`m here</p>
      </Modal>
        </ImageWrapper>
    )
    }
}


