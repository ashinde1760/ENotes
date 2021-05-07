import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModuleModule} from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HeaderFooterRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }
