import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentoRoutingModule } from './medicamento-routing.module';
import { MedicamentoComponent } from './medicamento.component';


@NgModule({
  declarations: [
    MedicamentoComponent
  ],
  imports: [
    CommonModule,
    MedicamentoRoutingModule
  ]
})
export class MedicamentoModule { }
