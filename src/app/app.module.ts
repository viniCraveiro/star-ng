import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { SplitterModule } from 'primeng/splitter';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SplitterModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
