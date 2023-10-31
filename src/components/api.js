import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'
const pixabayKey = '39292728-1eb1db6d28a9fb64c22d19118'

const options = {
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

export const fetchColletion = async ({page, query}) => {
    options.params.q = query;
    options.params.page = page;
    const response = await axios('', options);
    return response.data
}

export const perPage = Number(options.params.per_page)