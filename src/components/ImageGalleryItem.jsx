import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img src={imageUrl} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;