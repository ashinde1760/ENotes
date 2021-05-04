import { UserdataService } from '../userdata.service';

export class Reg {
  data = new UserdataService;
  formObj: any;

  //taking data from compnent.ts file and send to service file
  regForm(regFormModule: any) {
    this.formObj = regFormModule;
    this.data.getData(this.formObj);
  }

}
