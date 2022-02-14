import "./App.css";
import { Fragment, useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import fetchImages from "./services/getService";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [prevVal, setPrevVal] = useState("");

  useEffect(() => {
    if (!value) return;
    setIsLoading(true);
    try {
      if (prevVal === value) {
        fetchImages(value, page).then((res) => {
          setIsLoading(false);
          setImages([...images, ...res.hits]);
          setPrevVal(value);
        });
      } else {
        fetchImages(value, page).then((res) => {
          setIsLoading(false);
          setPage(1);
          setImages([...res.hits]);
          setPrevVal(value);
        });
      }
    } catch (error) {
      console.log(error);
    }

    if (page > 1) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  }, [value, page]);

  const handleSubmit = (value) => {
    setValue(value);
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  const toggleModal = (e) => {
    if (isModalOpen && e.currentTarget !== e.target) return;
    setIsModalOpen(!isModalOpen);
  };

  const onImageClick = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  return (
    <Fragment>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <Button onLoadMoreClick={onLoadMoreClick} />
      )}
      {isModalOpen && <Modal image={largeImageURL} onClose={toggleModal} />}
    </Fragment>
  );
}

export default App;
