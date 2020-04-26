/* IMPORTS */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { UserModel } from "../../models/user.model";


/* DEFINITION */
@Injectable( { providedIn: 'root' } )


/* EXPORT */
export class AuthService {

  // Define API address
  private apiUrl = '/api/auth'

  // Inject HttpCLient into the class
  constructor( private http: HttpClient ) { }

  // Function to register user
  public registerUser(user: UserModel): Promise<any> {

    // Delete repeatePassword property from the user object (for checkFields)
    delete user.repeatePassword;

    // Header configuration
    let myHeader = new HttpHeaders().set('Content-Type', 'application/json')

    // Make an HTTP GET call
    return this.http.post(this.apiUrl + '/register', user, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handelError)
  }

  // Fonction to parse SUCCESS response
  private getData(response: any) {
    // return res || {};
    return Promise.resolve(response || {});
  }

  // Fonction to parse ERROR response
  private handelError(response: any) {
    return Promise.reject(response.error);
  }
}
