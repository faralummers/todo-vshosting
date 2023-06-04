import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { TodoReducer } from "./store/todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./store/todo.effects";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, MatSnackBarModule, BrowserAnimationsModule, StoreModule.forRoot({
    router: routerReducer,
    todo: TodoReducer
  }),
    EffectsModule.forRoot([TodoEffects]),
    RouterModule.forRoot([
      // routes
    ]),
    StoreDevtoolsModule.instrument(),
    // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
    StoreRouterConnectingModule.forRoot(), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
