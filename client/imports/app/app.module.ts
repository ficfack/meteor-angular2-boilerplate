import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }

/*
import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';

@NgModule({
    entryComponents: [
        MyApp
    ],
    declarations: [
        MyApp
    ],
    providers: [
        { provide: ErrorHandler }
    ]
})
export class AppModule {}
*/