import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, isLoading, wishlist, toggleWishlist }) => {
    if (isLoading) {
        return (
            <div className="product-grid-loading">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="skeleton-card"></div>
                ))}
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="no-results">
                <p>No products found.</p>
            </div>
        );
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isLiked={wishlist ? wishlist.includes(product.id) : false}
                    toggleLike={() => toggleWishlist && toggleWishlist(product.id)}
                />
            ))}
        </div>
    );
};

export default ProductGrid;
