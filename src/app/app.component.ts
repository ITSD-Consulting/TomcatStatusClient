import Server from './models/server.model';
import { ServerService } from './services/server.service';
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/startWith';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private serverService: ServerService
  ) { }

  //An Empty list for the visible todo list
  serverList: Server[];

  ngOnInit(): void {
    //At component initialization the 

    IntervalObservable.create(10000).startWith(0).subscribe((val) => this.getServers() );
  }

  private getServers(): void {
    this.serverService.getServers()
      .subscribe(servers => {
        this.serverList = servers;
    })
  }

  public startServer(tomcat): void {
    this.serverService.startServer(tomcat);
  }

  public stopServer(tomcat): void {
    this.serverService.stopServer(tomcat);
  }
}
