import React from 'react';
import { Icons } from './Icons';

const ProductCard = ({ product, isLiked, toggleLike }) => {
    return (
        <article className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                    loading="lazy"
                />
            </div>
            <div className="product-info-minimal">
                <div className="product-text-row">
                    <h3 className="product-title-minimal" title={product.title}>
                        {product.title}
                    </h3>
                </div>
                <div className="product-desc-row">
                    <p className="product-signup-text">
                        <span className="product-pricing">Sign in or Create an account to see pricing</span>
                    </p>
                    <button
                        className={`wishlist-icon ${isLiked ? 'liked' : ''}`}
                        onClick={toggleLike}
                        aria-label="Add to Wishlist"
                    >
                        {isLiked ? <Icons.HeartFilled /> : <Icons.Heart />}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
