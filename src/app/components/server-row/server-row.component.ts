import { Component, OnInit, Input } from '@angular/core';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { Tomcat} from '../../models/server.model';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-server-row',
  templateUrl: './server-row.component.html',
  styleUrls: ['./server-row.component.scss']
})
export class ServerRowComponent implements OnInit {

  @Input() tomcat: Tomcat;

  public showToggleRow: boolean;

  constructor(private serverService: ServerService) {
    this.showToggleRow = false;
  }

  ngOnInit() {}

  public toggle() {
    this.showToggleRow = !this.showToggleRow;
  }

  public startServer(tomcat): void {
    if(tomcat.type === 'libre') {
      this.serverService.startLibreServer(tomcat);
    } else {
      //this.serverService.startServer(tomcat);
    }
  }

  public stopServer(tomcat): void {
    if(tomcat.type === 'libre') {
      this.serverService.stopLibreServer(tomcat);
    } else {
      //this.serverService.stopServer(tomcat);
    }
  }

  public startMetabaseServer(pTomcat) {
    this.serverService.startMetabaseServer(pTomcat);
  }

  public stopMetabaseServer(pTomcat) {
    this.serverService.stopMetabaseServer(pTomcat);
  }

  public get dbParamsList(): string[] {
    if(!this.tomcat.databaseParams) {
      return [];
    }

    return this.tomcat.databaseParams.split('\n');
  }

  public get metabaseParamsList(): string[] {
    if(!this.tomcat.metabaseStatus) {
      return [];
    }

    return this.tomcat.metabaseStatus.split('\n');
  }

  public get isMetabaseRunning(): boolean {
    if(!this.tomcat.metabaseStatus) {
      return null;
    }

    return this.tomcat.metabaseStatus.indexOf('metabase.jetty.status=running') > 0;
  }

}
