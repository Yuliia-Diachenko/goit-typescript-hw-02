export interface Image {
    id: string,
    alt_description: string,
    urls: {
      small: string,
      regular: string
    }
 }
 
export interface ImageGalleryProps {
    items: Image[],
   openModal: (image: Image) => void;
}
