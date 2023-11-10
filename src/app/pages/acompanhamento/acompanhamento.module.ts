import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcompanhamentoRoutingModule } from './acompanhamento-routing.module';
import { AcompanhamentoComponent } from './acompanhamento.component';


@NgModule({
  declarations: [
    AcompanhamentoComponent
  ],
  imports: [
    CommonModule,
    AcompanhamentoRoutingModule
  ]
})
export class AcompanhamentoModule { }
