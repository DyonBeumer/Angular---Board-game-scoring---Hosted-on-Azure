
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameRegistrationFormComponent } from './Components/game-registration-form/game-registration-form.component';
import { GameComponent } from './Components/game/game.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { HttpGameDataService } from './Services/http-game-data-service.service';
import { GWTRegistrationFormComponent } from './Components/gwtregistration-form/gwtregistration-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GameRegistrationFormComponent,
    GameComponent,
    GWTRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HttpGameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
