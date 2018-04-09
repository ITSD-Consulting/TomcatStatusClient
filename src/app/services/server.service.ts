import Server from '../models/server.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ServerService {

  api_url = 'http://192.168.10.63:1010';
  //api_url = 'http://localhost:3000';
  serverURL = `${this.api_url}/api/servers`;

  constructor(
    private http: HttpClient
  ) { }

  //Read todo, takes no arguments
  getServers(): Observable<Server[]>{
    return this.http.get(this.serverURL)
    .map(res  => <Server[]> res["data"]);
  }

  startServer(pTomcat) {
    let startUrl = `${this.serverURL}/start`;
    return this.http.post(startUrl, pTomcat).subscribe();
  }

  stopServer(pTomcat) {
    let stopUrl = `${this.serverURL}/stop`;
    return this.http.post(stopUrl, pTomcat).subscribe();
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}