import css from "./App.module.css";
import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMore";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import React from "react";
import { getImages } from "../../Api/api-gallery";
import { Image } from "./App.types";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
 
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setShowBtn(data.total_pages !== page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (topic: string) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () : void => {
    setPage(page + 1);
  };

 const openModal = (image: Image) => {
    setIsOpen(true);
    setSelectedImage(image);
  }

  const  closeModal = () : void => {
    setSelectedImage(null);
  }
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items={images} openModal={openModal} />
      {isLoading && <Loader />}
      {showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isError && <ErrorMessage />}
      {selectedImage && (
        <ImageModal
          // image={selectedImage}
          closeModal={closeModal}
          data={selectedImage}
        />
      )}
    </div>
  );
}