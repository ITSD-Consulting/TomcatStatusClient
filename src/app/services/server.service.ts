import Server from '../models/server.model';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ServersResponse } from '../models/servers.response';

@Injectable()
export class ServerService {

  // URL der Statuspage selbst
  api_url = 'http://192.168.10.63:1010';
  //api_url = 'http://localhost:3000';
  serverURL = `${this.api_url}/api/servers`;

  constructor(
    private http: HttpClient
  ) { }

  //Read todo, takes no arguments
  getServers(): Observable<ServersResponse>{
    return this.http.get<ServersResponse>(this.serverURL);
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