import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Тауар</th>
          <th style={{ width: "20%" }}>Бағасы</th>
          <th style={{ width: "20%" }}>Дана саны</th>
          <th style={{ width: "20%" }} className="text-end">
            Барлығы
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>${item.price} </td>
            <td>{item.qty} </td>
            <td className="text-end"> ${item.qty * item.price}</td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Тауар бағасы:</dt> <dd>${order.itemsPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt>Жеткізу бағасы:</dt> <dd>${order.shippingPrice}</dd>
              </dl>
              <dl className="dlist">
                <dt>Соңғы бағасы:</dt>
                <dd>
                  <b className="h5">${order.totalPrice}</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Статусы:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Төлем жүргізілді
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Төленбеді
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
