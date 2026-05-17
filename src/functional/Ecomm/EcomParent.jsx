import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Categories from "./Categories";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function EcomParent() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredArray = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredProducts(filteredArray);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search, products]);

  const fetchProducts = async () => {
    const url = `https://fakestoreapi.com/products`;

    setLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        toast.error("Something went wrong with api.");
      }
      const data = await response.json();

      setProducts(data);
      setLoading(false);
    } catch (err) {
      toast.error("Something Went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Categories />
      <ProductCard products={filteredProducts} />
    </>
  );
}
