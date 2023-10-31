import { List, ListItem } from "./ImageGallery.styled"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({collection}) => {
    return (
        <List>
            {collection.map(elm => {
                console.log(elm)
                return (<ListItem key={elm.id}><ImageGalleryItem
                    web={elm.webformatURL}
                    full={elm.largeImageURL}
                    alt={elm.tags} /></ListItem>) 
            })}
        </List>
    )
}
