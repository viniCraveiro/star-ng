import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbsService } from 'src/app/service/ubsService'; 


import { UbsRoutingModule } from './ubs-routing.module';
import { UbsComponent } from './ubs.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    UbsComponent
  ],
  imports: [
    CommonModule,
    UbsRoutingModule,
    TableModule,
    ButtonModule
  ],
  providers: [UbsService]
})
export class UbsModule { }