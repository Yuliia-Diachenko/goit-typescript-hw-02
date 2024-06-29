export interface Image {
    id: string,
    alt_discription: string,
    urls: {
      small: string,
      regular: string
    }
 }
 
export interface ImageGalleryProps {
    items: Image[],
   openModal: (image: Image) => void;
}
