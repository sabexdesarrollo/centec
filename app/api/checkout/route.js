/* import 'server-only' */

import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  const product = await req.json();

  console.log("product", product);

  const request = new paypal.orders.OrdersCreateRequest();

  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: product.price,
        },
      },
    ],
  });

  const response = await client.execute(request);
  console.log(response);

  return NextResponse.json({
    id: response.result.id,
  });
}

/* 
import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";
import { products } from "@/components/admissions-financing/button_paypal";

/* const products = [
  { name: "Course One", price: "100.00" },
  { name: "Course Two", price: "50.00" },
  { name: "Course Three", price: "30.00" },
  { name: "Course Four", price: "40.00" },
  { name: "Course Five", price: "60.00" },
]; 

const clientId = "AY52Lwk5hegcAFdmfh34YUNBLCh6n3_a8-hO8Pw8na068p-vL2BGki1ljfEY1_AgqvYCEqchvDAyP1eA";
const clientSecret = "ELjAy-ZLrQcACQkFsaIUgIYkfyLgzKfYRb2TgGfs4wVLrDvYC6uslzZMq-6CJl4tvYd4L2YckLp_sNUE";

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req) {
  try {
    const [ productName ] = req.body;

    const product = products.find((p) => p.name === productName);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    const request = new paypal.orders.OrdersCreateRequest();

    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: product.price,
          },
        },
      ],
    });

    const response = await client.execute(request);
    console.log(response);

    return NextResponse.json({
      id: response.result.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error.message, { status: 500 });
  }
}

} */
