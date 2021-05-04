import { Router } from "@angular/router";

export class Login {
  router : any;
  constructor(router: any) {
    this.router = router;
  }
  email = "ashinde1760@gmail.com";
  password = "Akki@123";
  msg = "Incorrect username or password";

  getData(loginObj: any): any{
    if ((this.email === loginObj.email) && (this.password === loginObj.password)) {
      this.router.navigate(['/homepage']);
    }
    else {
      this.router.navigate(['/login']);
      return this.msg;
      
    }


  }
}
