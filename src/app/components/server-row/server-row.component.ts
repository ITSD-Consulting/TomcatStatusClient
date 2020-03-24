import { Component, OnInit, Input } from '@angular/core';
import { Tomcat} from '../../models/server.model';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-server-row',
  templateUrl: './server-row.component.html',
  styleUrls: ['./server-row.component.scss']
})
export class ServerRowComponent implements OnInit {

  @Input() tomcat: Tomcat;

  private showToggleRow: boolean;

  constructor(private serverService: ServerService) {
    this.showToggleRow = false;
  }

  ngOnInit() {
  }

  public toggle() {
    this.showToggleRow = !this.showToggleRow;
  }

  public startServer(tomcat): void {
    this.serverService.startServer(tomcat);
  }

  public stopServer(tomcat): void {
    this.serverService.stopServer(tomcat);
  }

}
