/**
 * WordPress dependencies.
 */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { useViewportMatch, useMediaQuery} from '@wordpress/compose';
import { useSelect, useDispatch  } from '@wordpress/data';
import { omitBy } from 'lodash';
import hexToRgba from 'hex-rgba';
import {Fragment,useState,Suspense,useEffect} from '@wordpress/element';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes, toggleSelection, clientId, uniqueID }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const homeUrl = ThBlockData.homeUrl;
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect hook to fetch product categories
  useEffect(() => {
    // Fetch product categories
    fetch(`${homeUrl}/wp-json/wc/store/v1/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // useEffect hook to fetch products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      // Fetch products based on selected category
      fetch(`${homeUrl}/wp-json/wc/store/v1/products?category=${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    } else {
      setIsLoading(true);
      // Fetch all products if no category is selected
      fetch(`${homeUrl}/wp-json/wc/store/v1/products`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
  }, [selectedCategory, currentPage]);
  
  // Event handler for tab click
  const handleTabClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Show star rating
  const RatingStars = ({ rating, maxRating = 5, filledColor = 'gold', emptyColor = 'lightgray' }) => {
    const starCount = Math.min(Math.floor(rating), maxRating);

    return (
      <div>
        {Array(maxRating)
          .fill()
          .map((_, index) => (
            <span key={index} style={{ color: index < starCount ? filledColor : emptyColor }}>
              &#9733;
            </span>
          ))}
      </div>
    );
  };

  const productsPerPage = 3; // Number of products to display per page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="th-product-block-wrapper">
      {products.length > 0 ? (
        <>
          <div className="th-product-block-cat-filter">
            <ul className="category-tabs">
              <li className={!selectedCategory ? 'active' : ''} onClick={() => handleTabClick('')}>
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={selectedCategory === category.id ? 'active' : ''}
                  onClick={() => handleTabClick(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="th-product-block-product-content">
            <div className="th-product-block-product-item-wrap">
              {isLoading && <div className="th-block-loader"></div>}
              {displayedProducts.map((product) => (
                <div className="th-product-item" key={product.id}>
                  <div className="th-product-block-content-wrap">
                    <div className="th-product-imgae">
                      {product.on_sale && <span className="sale-tag">Sale</span>}
                      <div className="th-product-sale"></div>
                      <img src={product.images[0].thumbnail} alt={product.name} />
                    </div>
                    <div className="th-product-cat">
                      {product.categories.map((category) => (
                        <a key={category.id} href={category.link}>
                          {category.name}
                        </a>
                      ))}
                    </div>
                    <h3 className="th-product-title">
                      <a key={product.id} href={product.permalink}>
                        {product.name}
                      </a>
                    </h3>
                    <div
                      className="th-product-price"
                      dangerouslySetInnerHTML={{ __html: product.price_html }}
                    ></div>
                    <div className="th-product-rating">
                      <RatingStars rating={parseFloat(product.average_rating)} maxRating={5} filledColor="gold" emptyColor="lightgray" />
                    </div>
                    <div className="th-product-btn">{product.add_to_cart.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="th-pagination">
              <button disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}>
                          <span className="dashicons dashicons-arrow-left-alt2"></span>
                        </button>
                        <button
                disabled={endIndex >= products.length}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span className="dashicons dashicons-arrow-right-alt2"></span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
