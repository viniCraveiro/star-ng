import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
            { path: 'utilities', data: { breadcrumb: 'Utilities' }, loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
            { path: 'ecommerce', data: { breadcrumb: 'E-Commerce' }, loadChildren: () => import('./demo/components/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./demo/components/apps/apps.module').then(m => m.AppsModule) },

            //=====================ROTAS==================
            { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
            { path: 'medicos', data: { breadcrumb: 'Medicos' }, loadChildren: () => import('./pages/medics/medics.module').then(m => m.MedicsModule) },
            { path: 'medicamentos', data: { breadcrumb: 'Medicamentos' }, loadChildren: () => import('./pages/medicamento/medicamento.module').then(m => m.MedicamentoModule) },
            { path: 'ubs', data: { breadcrumb: 'Unidade basica de saude' }, loadChildren: () => import('./pages/ubs/ubs.module').then(m => m.UbsModule) },
            { path: 'user', data: { breadcrumb: 'Usuario' }, loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
            { path: 'agendamento', data: { breadcrumb: 'Agendamento' }, loadChildren: () => import('./pages/agendamento/agendamento.module').then(m => m.AgendamentoModule) },
            { path: 'acompanhamento', data: { breadcrumb: 'Acompanhamento' }, loadChildren: () => import('./pages/acompanhamento/acompanhamento.module').then(m => m.AcompanhamentoModule) },
        ]
    },
    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'wizard', data: { breadcrumb: 'Wizard' }, loadChildren: () => import('./demo/components/pages/wizard/wizard.module').then(m => m.WizardModule) },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: 'notfound2', loadChildren: () => import('./demo/components/notfound2/notfound2.module').then(m => m.Notfound2Module) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
