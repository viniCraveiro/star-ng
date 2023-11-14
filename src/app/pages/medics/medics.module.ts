import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { MedicsComponent } from './medics.component';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MedicsService } from 'src/app/service/medicsService';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    MedicsComponent
  ],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    TableModule,
    RatingModule,
    FormsModule,
    TagModule
  ],
  providers: [MedicsService]
})
export class MedicsModule { }
