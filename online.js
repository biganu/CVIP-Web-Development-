const codeEditor = document.getElementById('code-editor');
const outputFrame = document.getElementById('output-frame');

function updateOutput() {
    const code = codeEditor.value;
    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDocument.body.innerHTML = code;
}

codeEditor.addEventListener('input', updateOutput);

// Initial output update
updateOutput();
