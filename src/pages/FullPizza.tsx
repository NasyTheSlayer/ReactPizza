import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const FullPizza = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://65772c6d197926adf62d8f5b.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Помилка при отримані піци!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza img" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} грн</h4>
      <Link to={'/'}>
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
