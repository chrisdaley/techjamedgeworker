// API endPoint not cookie return empty json response.
import {Cookies, SetCookie} from 'cookies';
import {logger} from 'log';

export function onClientRequest(request) {
  logger.log("I am totally going to set a header in onClientRequest");
  let cookies = new Cookies(request.getHeader('Cookie'));
  var cartCookie = cookies.get('cart');
  if (!cartCookie) {
    request.respondWith(200, {'Content-Type': ['application/json; charset=utf-8']}, '[]');
  }
}

export function onClientResponse(request, response) {
    logger.log("I am totally going to set a header in onClientResponse");
    response.setHeader('X-Powered-By','Akamai EdgeWorkers');
    response.setHeader('test','2.5.1');
}

export function onOriginRequest(request) {
  
}

export function onOriginResponse(request, response) {
  
}
