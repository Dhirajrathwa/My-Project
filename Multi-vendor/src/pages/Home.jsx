import { useState, useEffect,useContext } from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import "./home.css"
import ProductCard from '../components/ProductCard';
import { ProductContext } from "../context/ProductContext";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const { products, setProducts } = useContext(ProductContext);
  const [apiProducts, setApiProducts] = useState([]);
  const [search ,setSearch]=useState("");
  const [category, setCategory] = useState("All");
  useEffect(() => {
   fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        data = data;
        setApiProducts(data.products);
      });

  }, []);

  const allProducts = [...products, ...apiProducts];
  const categories = ["All", ...new Set(allProducts.map(p => p.category))];
  const filterProducts=allProducts.filter(product=>{
   const matchSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || product.category === category;

  return matchSearch && matchCategory;
});

  return (
    <>
      <Navbar />
     
      <Banner /> 
       <div  className="search" >Search here
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
       <div className="product-list">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            style={{
              margin: "5px",
              padding: "8px 15px",
              background: category === cat ? "#ff9800" : "#ddd",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div
        className="product-list"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {filterProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  

      <ContactSection />

    </>
  );
}

