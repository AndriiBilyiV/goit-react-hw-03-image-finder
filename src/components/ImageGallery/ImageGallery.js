import { List, ListItem } from "./ImageGallery.styled"
import { nanoid } from "nanoid"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({collection}) => {
    return (
        <List>
            {collection.map(elm => {
                return (<ListItem key={nanoid()}><ImageGalleryItem
                    web={elm.webformatURL}
                    full={elm.largeImageURL}
                    alt={elm.tags} /></ListItem>) 
            })}
        </List>
    )
}
