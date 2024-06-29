export 
interface ImageModalProps {
  data: {
    alt_description: string,
    urls: { regular: string },
  },
  closeModal: () => void,

}