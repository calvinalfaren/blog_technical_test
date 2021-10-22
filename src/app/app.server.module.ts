import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';

@NgModule({
    declarations: [
    ],
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }