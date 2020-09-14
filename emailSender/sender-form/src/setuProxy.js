var xhr = new XMLHttpRequest();
if (!('withCredentials' in xhr)) {
  alert('Browser does not support CORS.');
  return;
}
xhr.open(method, url);