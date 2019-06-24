import { Component } from '@angular/core';
import {CloseType, IMessage, MessageType} from './root-helpers-alerts/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RootHelpersAlerts';
  message: IMessage;
  message2: IMessage;


  constructor() {
    this.message = {
      message: 'Sample message alert',
      type: MessageType.info
    };
    this.message2 = {
      message: 'Sample message alert with title',
      title: 'This is Title',
      type: MessageType.info
    };
  }


}
