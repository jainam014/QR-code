let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
// let generateQr = document.getElementById("generate-qr");
const generateQrBtn = document.querySelector("#generate-qr")

generateQrBtn.addEventListener('click', (event) => {
    event.preventDefault();
    generateQr();
});



function generateQr() {
    qrImage.src = "https:api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.style.padding = '15px 0';
    imgBox.style.display = 'flex';
    imgBox.style.justifyContent = 'center';
    imgBox.style.marginTop = '15px';
}

document.querySelector("#qrText").addEventListener('input', (event) => {
    if(event.target.value !== null && event.target.value !== undefined) {
        generateQrBtn.removeAttribute('disabled');
    }
});