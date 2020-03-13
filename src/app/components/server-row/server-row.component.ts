import { Component, OnInit, Input } from '@angular/core';
import { Tomcat} from '../../models/server.model';

@Component({
  selector: 'app-server-row',
  templateUrl: './server-row.component.html',
  styleUrls: ['./server-row.component.scss']
})
export class ServerRowComponent implements OnInit {

  @Input() tomcat: Tomcat;

  private showToggleRow: boolean;

  constructor() {
    this.showToggleRow = false;
  }

  ngOnInit() {
  }

  public toggle() {
    this.showToggleRow = !this.showToggleRow;
  }

}
