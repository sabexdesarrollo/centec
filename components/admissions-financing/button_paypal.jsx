"use client";

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const products = [
  { name: "Course One", price: "100.00" },
  { name: "Course Two", price: "50.00" },
  { name: "Course Three", price: "30.00" },
  { name: "Course Four", price: "40.00" },
  { name: "Course Five", price: "60.00" },
];

const ButtonPaypal = () => {
  const [selectedProductName, setSelectedProductName] = useState("");

  const handleProductChange = (event) => {
    setSelectedProductName(event.target.value);
  };
  console.log(process.env.PAYPAL_CLIENT_ID)
  const handleCreateOrder = async () => {
    const product = products.find(
      (product) => product.name === selectedProductName
    );

    if (product) {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const order = await res.json();
        return order.id;
      } catch (error) {
        console.error("Error al crear la orden:", error);
      }
    }
  };

  return (
    <section className="bg-gray-50 mx-2 p-2">
      <PayPalScriptProvider
        options={{
          clientId:
            "AY52Lwk5hegcAFdmfh34YUNBLCh6n3_a8-hO8Pw8na068p-vL2BGki1ljfEY1_AgqvYCEqchvDAyP1eA",
          locale: "es_ES",
        }}
      >
        <select
          className="bg-secondaryDarkBlue rounded-md text-gray-300 p-2 px-4"
          value={selectedProductName}
          onChange={handleProductChange}
        >
          <option value="">Selecciona un producto</option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>

        {selectedProductName && (
          <div className="py-2">
            <PayPalButtons
              style={{ color: "blue" }}
              createOrder={handleCreateOrder}
            />
          </div>
        )}
      </PayPalScriptProvider>
    </section>
  );
};

export default ButtonPaypal;

/* import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const ButtonPaypal = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "AY52Lwk5hegcAFdmfh34YUNBLCh6n3_a8-hO8Pw8na068p-vL2BGki1ljfEY1_AgqvYCEqchvDAyP1eA",
      }}
    >
      <PayPalButtons
        style={{
          color: "white",
        }}
        createOrder={async () => {
          const res = await fetch("/api/checkout", {
            method: "POST",
          });
          const order = await res.json();
          console.log(order);
          return order.id;
        }}
      />
    </PayPalScriptProvider>
  );
};

export default ButtonPaypal; */
