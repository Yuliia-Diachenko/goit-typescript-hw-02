import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY = "69yOTvYJnlJO0U8Bzwk4qjVDL3voBtaSOfE3p7pRGv4";

export const getImages = async (query, page, per_page) => {

        const response = await axios.get(`/search/photos?client_id=${KEY}`, {
          params: {
            query,
            page,
            per_page
           },
        });

return response.data;

};
