var loc = window.location.href;
var url = new URL(loc);
var code = url.searchParams.get("code");

var obj = document.getElementById("code");
var objcopy = document.getElementById("codecopy");

obj.innerText = "/spo " + code;
objcopy.value = "/spo " + code;

function copyToClipboard() {
  objcopy.select();
  objcopy.setSelectionRange(0, 9999);

  document.execCommand("copy");
  document.getElementById("copied").innerText = "Copied to clipboard!";
  document.getSelection().removeAllRanges();
}