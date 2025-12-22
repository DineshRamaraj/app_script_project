import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import { Icons } from './components/Icons';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [sortOption, setSortOption] = useState('recommended');

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [occasions] = useState(['Casual', 'Formal', 'Party', 'Gym']);
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const [fabrics] = useState(['Cotton', 'Polyester', 'Silk', 'Denim']);
  const [selectedFabrics, setSelectedFabrics] = useState([]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const prodRes = await fetch('https://fakestoreapi.com/products');
        const prods = await prodRes.json();

        const enhancedProds = prods.map(p => ({
          ...p,
          occasion: occasions[Math.floor(Math.random() * occasions.length)],
          fabric: fabrics[Math.floor(Math.random() * fabrics.length)]
        }));

        setProducts(enhancedProds);
        setFilteredProducts(enhancedProds);

        const uniqueCats = [...new Set(prods.map(p => p.category))];
        setCategories(uniqueCats);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedOccasions.length > 0) {
      result = result.filter(p => selectedOccasions.includes(p.occasion));
    }
    if (selectedFabrics.length > 0) {
      result = result.filter(p => selectedFabrics.includes(p.fabric));
    }
    if (sortOption === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortOption === 'popular') {
      result.sort((a, b) => b.rating.count - a.rating.count);
    }

    setFilteredProducts(result);
  }, [sortOption, products, selectedCategories, selectedOccasions, selectedFabrics]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryToggle = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(x => x !== cat) : [...prev, cat]);
  };
  const handleOccasionToggle = (occ) => {
    setSelectedOccasions(prev => prev.includes(occ) ? prev.filter(x => x !== occ) : [...prev, occ]);
  };
  const handleFabricToggle = (fab) => {
    setSelectedFabrics(prev => prev.includes(fab) ? prev.filter(x => x !== fab) : [...prev, fab]);
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="hero-section text-center">
          <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <div className="filter-bar-container">
          <div className="container filter-bar-inner">
            <div className="filter-bar-left">
              <span className="item-count">{filteredProducts.length} ITEMS</span>
              <button className="toggle-filter-btn hidden md:flex" onClick={toggleSidebar}>
                {isSidebarVisible ? <Icons.ChevronLeft /> : <Icons.ChevronRight />}
                {isSidebarVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
              </button>
              <button className="toggle-filter-btn md:hidden">FILTER</button>
            </div>
            <div className="filter-bar-right">
              <select
                className="sort-dropdown"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="high-low">PRICE : HIGH TO LOW</option>
                <option value="low-high">PRICE : LOW TO HIGH</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container content-layout">
          {isSidebarVisible && (
            <div className="sidebar-wrapper hidden md:block">
              <Filters
                categories={categories}
                occasions={occasions}
                fabrics={fabrics}

                selectedCategories={selectedCategories}
                selectedOccasions={selectedOccasions}
                selectedFabrics={selectedFabrics}

                onSelectCategory={handleCategoryToggle}
                onSelectOccasion={handleOccasionToggle}
                onSelectFabric={handleFabricToggle}
              />
            </div>
          )}

          <div className={`grid-wrapper ${!isSidebarVisible ? 'full-width' : ''}`}>
            <ProductGrid
              products={filteredProducts}
              isLoading={loading}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
