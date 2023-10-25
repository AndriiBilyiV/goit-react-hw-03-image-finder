import { ImageWrapper } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({url}) => {
    return (
        <ImageWrapper>
        <img  src={url} width="360"/>
        </ImageWrapper>
    )
}