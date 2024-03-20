// pages/api/tuEndpoint.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Procesa el valor seleccionado que se envía en el cuerpo de la solicitud
    const { opcionSeleccionada } = req.body;
    // Aquí puedes agregar la lógica para manejar la opción seleccionada, como guardarla en una base de datos

    // Envía una respuesta al cliente
    res.status(200).json({ message: 'Valor recibido correctamente' });
  } else {
    // Maneja otros métodos HTTP o devuelve un error
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
