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
import {useEffect} from '@wordpress/element';
import {Fragment,useState,Suspense} from '@wordpress/element';

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

export default function Edit({ attributes, setAttributes, toggleSelection, clientId,
	uniqueID }) {

		const [categories, setCategories] = useState([]);
		const [selectedCategory, setSelectedCategory] = useState('');
		const [products, setProducts] = useState([]);
		const homeUrl = themehunkblock.homeUrl;

		// useEffect hook to fetch product categories
		useEffect(() => {
			// Fetch product categories
			fetch(`${homeUrl}/wp-json/wc/store/v1/products/categories`)
			  .then(response => response.json())
			  .then(data => {
				setCategories(data);
			  })
			  .catch(error => {
				console.error('Error fetching categories:', error);
			  });
		  }, []);

		  // useEffect hook to fetch products based on selected category
			useEffect(() => {
				if (selectedCategory) {
				// Fetch products based on selected category
				fetch(`${homeUrl}/wp-json/wc/store/v1/products?category=${selectedCategory}`)
					.then(response => response.json())
					.then(data => {
					setProducts(data);
					})
					.catch(error => {
					console.error('Error fetching products:', error);
					});
				}
			}, [selectedCategory]);

			// Event handler for category selection change
			const handleCategoryChange = e => {
				setSelectedCategory(e.target.value);
			};
	
		const blockProps = useBlockProps();
        return (
			<div>
			<h2>Show All Products with Filter Category</h2>
			{categories.length > 0 ? (
			  <div>
				<label htmlFor="category">Select Category:</label>
				<select id="category" value={selectedCategory} onChange={handleCategoryChange}>
				  <option value="">All</option>
				  {categories.map(category => (
					<option key={category.id} value={category.id}>
					  {category.name}
					</option>
				  ))}
				</select>
			  </div>
			) : (
			  <p>Loading categories...</p>
			)}
			{products.length > 0 ? (
			  <ul>
				{products.map(product => (
				  <li key={product.id}>
					<h3>{product.name}</h3>
					<p>Price: {product.price}</p>
					<p>Description: {product.description}</p>
					<img src={product.images[0].src} alt={product.name} />
				  </li>
				))}
			  </ul>
			) : (
			  <p>Loading products...</p>
			)}
		  </div>
        );
}