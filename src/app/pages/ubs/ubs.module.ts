import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbsService } from 'src/app/service/ubsService'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UbsRoutingModule } from './ubs-routing.module';
import { UbsComponent } from './ubs.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    UbsComponent
  ],
  imports: [
    CommonModule,
    UbsRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UbsService]
})
export class UbsModule { }