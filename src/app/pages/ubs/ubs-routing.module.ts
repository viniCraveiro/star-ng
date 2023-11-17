import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbsComponent } from './ubs.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path: '', component: UbsComponent },
    { path: 'detail', component: DetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UbsRoutingModule { }
