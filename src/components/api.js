import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const pixabayKey = '39292728-1eb1db6d28a9fb64c22d19118'

export const options = {
  params: {
    key: pixabayKey,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: "12",
    page: "1",
    q: ""
  }
}

export const fetchColletion = async (options) => {
    const response = await axios('', options);
    return response.data.hits
}