import { ImageWrapper } from "./ImageGalleryItem.styled"
import { Component } from "react";
import { ModalWindow } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }
    toggleModal = () => {
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
    }
render() {
    const { web, alt, full } = this.props;
      return (
        <ImageWrapper onClick={this.toggleModal}>
            <img src={web} alt={alt} width="360" />
              <ModalWindow isShow={this.state.isModalOpen}
                  close={this.toggleModal}
                  url={full}
                  alt={alt}/>
        </ImageWrapper>
    )
    }
}

