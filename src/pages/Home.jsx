import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    setSearchParams({ search: str });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        searchParams.toString()
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(searchParams.toString().split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [searchParams]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export { Home };
