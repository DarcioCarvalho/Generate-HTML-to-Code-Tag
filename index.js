function generateTextToCodeTag() {
  const htmlCodeTextArea = document.querySelector("#htmlCode");
  const resultTextArea = document.querySelector("#result");

  const htmlCodeConverted = String(htmlCodeTextArea.value).replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const htmlCodeConvertedListed = htmlCodeConverted.split("\n");

  const htmlCodeConvertedAndFormated = htmlCodeConvertedListed.map(line => {
    if (line.trim() === "") {
      return line;
    }
    return `    ${line}`;
  }).join("\n");

  console.log("htmlCodeConvertedAndFormated:", htmlCodeConvertedAndFormated);

  const textGenerated = `<pre>\n  <code>\n${htmlCodeConvertedAndFormated}\n  </code>\n</pre>`;

  resultTextArea.value = textGenerated;
  console.log("htmlCode TextArea:", textGenerated);
}

function copyToClipboard() {
  const resultTextArea = document.querySelector("#result");

  if (!resultTextArea.value) {
    alert("There isn't text to copy...");
    return;
  }

  resultTextArea.select();
  resultTextArea.setSelectionRange(0, 99999); //For Mobile device

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }

  alert("Text copied to Clipboard!!!")
}