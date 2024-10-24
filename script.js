function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    const qrCodeContainer = document.getElementById("qrCode");

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    if (qrText.trim() === "") {
        alert("Please enter text to generate a QR code");
        return;
    }

    // Create a new QR code
    new QRCode(qrCodeContainer, {
        text: qrText,
        width: 128,
        height: 128,
    });
}
