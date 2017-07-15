
function convertHTML(mystring) {
  // &colon;&rpar;
  return mystring.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

convertHTML("Dolce & Gabbana");
