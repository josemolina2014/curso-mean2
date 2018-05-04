import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// Importamos el módulo http del paquete http de Angular
import { HttpModule, JsonpModule } from '@angular/http';

import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { UserEditComponent} from './components/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
