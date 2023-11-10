import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { MedicsComponent } from './medics.component';


@NgModule({
  declarations: [
    MedicsComponent
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule
  ]
})
export class MedicsModule { }
