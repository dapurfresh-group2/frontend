import React from "react";

export default function OrderDetail({ note, orderDetailProduct }) {
  console.log(orderDetailProduct);

  return (
    <div>
      <div className="border-bottom py-3">
        <div className="mx-3">
          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "rgba(136, 136, 136, 1)",
              marginBottom: "9px",
            }}
          >
            Detail Pesanan
          </p>

          {orderDetailProduct && orderDetailProduct.map(item => {
            return (
              <div key={item.product.id} className="d-flex justify-content-between">
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "rgba(68, 68, 68, 1)",
                  }}
                >
                  {item.product.name}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "rgba(68, 68, 68, 1)",
                  }}
                >
                  {item.quantity} x {item.product.weight}
                </p>
              </div>
            )
          })}



          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "rgba(136, 136, 136, 1)",
              marginBottom: "9px",
              marginTop: "9px",
            }}
          >
            Catatan Tambahan
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "rgba(68, 68, 68, 1)",
            }}
          >
            {note}
          </p>
        </div>
      </div>
    </div>
  );
}
