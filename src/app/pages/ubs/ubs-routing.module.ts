import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbsComponent } from './ubs.component';

const routes: Routes = [
    { path: '', component: UbsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UbsRoutingModule { }