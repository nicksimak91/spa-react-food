import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  const goBack = useNavigate();

  return (
    <>
      <button className="btn" onClick={() => goBack(-1)}>
        Назад
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
