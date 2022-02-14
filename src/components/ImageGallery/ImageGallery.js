import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map((img) => {
        return (
          <ImageGalleryItem
            key={img.id}
            image={img}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
}
export default ImageGallery;
