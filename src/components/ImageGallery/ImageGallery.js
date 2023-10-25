import { List, ListItem } from "./ImageGallery.styled"
import { nanoid } from "nanoid"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({collection}) => {
    return (
        <List>
            {collection.map(elm => {
                return (<ListItem key={nanoid()}><ImageGalleryItem url={ elm.webformatURL} /></ListItem>) 
            })}
        </List>
    )
}
