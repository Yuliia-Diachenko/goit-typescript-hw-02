import axios from "axios";
import {ImageResponse} from "./api-gallery.types"
axios.defaults.baseURL = "https://api.unsplash.com/";

type Key = string;

const KEY: Readonly<Key> = "69yOTvYJnlJO0U8Bzwk4qjVDL3voBtaSOfE3p7pRGv4";

export const getImages = async (query: string, per_page: number): Promise<ImageResponse> => {

        const response = await axios.get(`/search/photos?client_id=${KEY}`, {
          params: {
            query,            
            per_page
           },
        });

return response.data;

};
