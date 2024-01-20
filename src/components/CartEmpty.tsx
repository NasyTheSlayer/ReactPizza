import React from "react";
import { Link } from "react-router-dom";

import emptyCart from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина порожня <span>😕</span>
      </h2>
      <p>
        Скоріше за все, ви не замовляли ще піцу.
        <br />
        Щоб замовити піцу, перейди на головну сторінку.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};
