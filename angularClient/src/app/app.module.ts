/* Import */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // permet les calls http dans l'app
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// App router
import { AppRouter } from "./app-router.module"; // AppRouter est un module

//
import { AppComponent } from './app.component';

// Modules
import { UserInterfaceModule } from './shared/user-interface/user-interface.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* DEFINITION */
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    UserInterfaceModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})


/* EXPORT */
export class AppModule { }
