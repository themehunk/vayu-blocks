
import { __ } from '@wordpress/i18n';
import { Fragment, useState, useEffect } from '@wordpress/element';

export default function Edit() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const productsPerPage = 4; // Number of products to display per page

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost/wp4/wp-json/wc/store/v1/products?page=${currentPage}&per_page=${productsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setHasNextPage(data.length === productsPerPage); // Check if there are more products on the current page
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [currentPage]);

  return (
    <Fragment>
      <div className="product-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <button disabled={!hasNextPage} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </Fragment>
  );
}
