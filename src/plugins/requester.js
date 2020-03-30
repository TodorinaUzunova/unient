
const baseUrl = "https://baas.kinvey.com";

const appKey='kid_rJ_PXY02S';
const appSecret="eb18e36a686e4488bbd362263d05cc6b";

function createAuthorization(type){
   return type==="Basic"
   ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
   : `Kinvey ${sessionStorage.getItem('authtoken')}`;
}   

function makeHeaders(httpMethod, data, type) {
  const headers = {
    method: httpMethod,
    headers: {
      "Authorization": createAuthorization(type),
      "Content-Type": "application/json"
    }
  };
   console.log(headers);
  if (httpMethod === "PUT" || httpMethod === "POST") {
    headers.body = JSON.stringify(data);
  }
  return headers;
}

function handleError(e) {
  if (!e.ok) {
    throw new Error(e.statusText);
  }
  return e;
}
function deserializeData(x) {
  if(x.status===204){
     return x;
  }
  return x.json();
}
function fetchData(kinveyModule, endPoint, headers) {
  const url = `${baseUrl}/${kinveyModule}/${appKey}/${endPoint}`;
  return fetch(url, headers)
    .then(handleError)
    .then(deserializeData);
}

export function get(kinveyModule, endPoint, type ) {
  const headers = makeHeaders("GET", type);
  return fetchData(kinveyModule, endPoint, headers);
}
export function post(kinveyModule, endPoint, data, type) {
  const headers = makeHeaders("POST", data, type);
  return fetchData(kinveyModule, endPoint, headers);
}
export function put(kinveyModule, endPoint,data, type) {
    const headers = makeHeaders("PUT", data, type);
  return fetchData(kinveyModule, endPoint, headers);
}
export function del(kinveyModule, endPoint, type) {
    const headers = makeHeaders("DELETE", type);
  return fetchData(kinveyModule, endPoint, headers);
}