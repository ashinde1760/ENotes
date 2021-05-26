import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'
import{UserdataService} from './userdata.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any,next:any)
  {
    let service=this.injector.get(UserdataService);
    let tokenizerReq=req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${service.getToken()}`
        }
      })
      return next.handle(tokenizerReq)
  }

}
