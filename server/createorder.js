/* import client from '@/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';

// Endpoint para crear una orden
export default async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  // Configura la orden según tus necesidades
  // ...

  try {
    const response = await client().execute(request);
    res.status(200).json(response.result);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la orden de PayPal' });
  }
};

// Endpoint para capturar una orden
export default async (req, res) => {
  const orderId = req.body.orderId; // Obtén el ID de la orden desde el front-end
  const request = new paypal.orders.OrdersCaptureRequest(orderId);

  try {
    const response = await client().execute(request);
    res.status(200).json(response.result);
  } catch (error) {
    res.status(500).json({ error: 'Error al capturar la orden de PayPal' });
  }
};
 */