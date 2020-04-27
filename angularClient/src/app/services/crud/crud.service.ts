
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/* DEFINITION */
@Injectable()
export class CrudService {

  // Inject module(s) in the service
  constructor(private HttpClient: HttpClient) { };

  // CRUD method: read one item
  public readOneItem(collection: String, param: String): Promise<any> {
    return this.HttpClient
      .get(`/${collection}/${param}`)
      .toPromise()
      .then(this.getData)
      .catch(this.handleError);
  };

  // CRUD method: read all items
  public readAllItems(collection: String): Promise<any> {
    return this.HttpClient
      .get(`/${collection}`)
      .toPromise()
      .then(this.getData)
      .catch(this.handleError);
  };

  // CRUD method: create item
  public createItem(collection: String, data: any): Promise<any> {
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient
      .post(`/${collection}`, data, { headers: myHeader })
      .toPromise()
      .then(this.getData)
      .catch(this.handleError);
  };

  // CRUD method: edit an item
  public updateItem(collection: String, id: String, data: any): Promise<any> {
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient
      .put(`/${collection}/${id}`, data, { headers: myHeader })
      .toPromise()
      .then(this.getData)
      .catch(this.handleError);
  };

  // CRUD method: delete an item
  public deleteItem(collection: String, id: String): Promise<any> {
    // Set header
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Launch request
    return this.HttpClient
      .delete(`/${collection}/${id}`, { headers: myHeader })
      .toPromise()
      .then(this.getData)
      .catch(this.handleError);
  };

  /* METHODS TO GET API RESPONSES */
  // Get the API response
  private getData = (apiResponse: any) => apiResponse || {};

  // Get the API error
  private handleError = (apiError: any) => Promise.reject(apiError.error);

};
