import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentoRoutingModule } from './medicamento-routing.module';
import { MedicamentoComponent } from './medicamento.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [MedicamentoComponent],
    imports: [
        CommonModule,
        MedicamentoRoutingModule,
        AutoCompleteModule,
        FormsModule,
    ],
})
export class MedicamentoModule {}
