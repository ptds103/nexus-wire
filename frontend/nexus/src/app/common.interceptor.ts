// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class CommonInterceptor implements HttpInterceptor {

//   constructor() {}



//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     let username =sessionStorage.getItem('username');
//     let password =sessionStorage.getItem('basicauth');
//     //let username ="david99"
//     //let password ="david"

//         // return next.handle(request.clone({setHeaders:{Authorization: 'Basic' +" "+ btoa(username + ':' + password)}}))
//         //return next.handle(request.clone({setHeaders:{Whatsup:"buddy"}}))
//          return next.handle(request)        

//     }

//     //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//     //const API_KEY ="Basic";
   
//   }

