import Server from './models/server.model';
import { ServerService } from './services/server.service';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import {map} from 'rxjs/operators';



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
    timer(0, 10000).subscribe(() => this.getServers() );
  }

  private getServers(): void {
    this.serverService.getServers().pipe(map(res => res.data))
      .subscribe(servers => {
        if(JSON.stringify(servers) !== JSON.stringify(this.serverList)) {
          this.serverList = servers;
        }
    })
  }

 
}
