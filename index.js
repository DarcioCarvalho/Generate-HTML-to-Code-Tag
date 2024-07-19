function generateTextToCodeTag() {
  const htmlCodeTextArea = document.querySelector("#htmlCode");
  const resultTextArea = document.querySelector("#result");

  const htmlCodeConverted = String(htmlCodeTextArea.value).replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const htmlCodeConvertedListed = htmlCodeConverted.split("\n");

  const whiteSpaceInitial = String(htmlCodeConvertedListed[0]).indexOf("&lt;"); /* String.padStart(String(htmlCodeConvertedListed[0]).indexOf("<"), " ");  */

  const htmlCodeConvertedAndFormatted = htmlCodeConvertedListed.map(line => {
    if (whiteSpaceInitial) {
      line = String(line).substring(whiteSpaceInitial)
    }

    if (line.trim() === "") {
      return line;
    }
    return `    ${line}`;
  }).join("\n");

  const textGenerated = !!htmlCodeConvertedAndFormatted.length ? `<pre>\n  <code>\n${htmlCodeConvertedAndFormatted}\n  </code>\n</pre>` : "";

  resultTextArea.value = textGenerated;
}

function copyToClipboard() {
  const resultTextArea = document.querySelector("#result");

  if (!resultTextArea.value) {
    alert("Não existe texto para copiar...");
    return;
  }

  resultTextArea.select();
  resultTextArea.setSelectionRange(0, 99999); //For Mobile device

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }

  alert("Texto copiado na área de transferência!!!")
}