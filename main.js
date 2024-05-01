import './node_modules/styled-qr-code/lib/styled-qr-code.js'
const qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data: "https://www.patrimonionacional.es/",
            image: "./images/logotipo.png",
            dotsOptions: {
                color: "#BE9857",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#76D987",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 5,
                imageSize:0.5
            }
        });

        qrCode.append(document.getElementById("canvas"));
        //qrCode.download({ name: "qr", extension: "svg" });