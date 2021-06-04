import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterRoutingModule } from './header-footer-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModuleModule} from '../shared-module/shared-module.module';
import { Home_navComponent } from './home_nav/home_nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Home_navComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HeaderFooterRoutingModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    Home_navComponent
  ]
})
export class HeaderFooterModule { }
