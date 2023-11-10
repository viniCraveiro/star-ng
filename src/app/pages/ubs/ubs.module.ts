import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UbsRoutingModule } from './ubs-routing.module';
import { UbsComponent } from './ubs.component';


@NgModule({
  declarations: [
    UbsComponent
  ],
  imports: [
    CommonModule,
    UbsRoutingModule
  ]
})
export class UbsModule { }
