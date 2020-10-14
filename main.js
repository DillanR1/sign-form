const signaturePad = new SignaturePad(document.getElementById('signature-pad'));
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('clear');
  
  saveButton.addEventListener('click', function (event) {
    const data = signaturePad.toDataURL('image/png');
  
  // Send data to server instead...
    window.open(data);
  });
  
  cancelButton.addEventListener('click', function (event) {
    signaturePad.clear();
  });