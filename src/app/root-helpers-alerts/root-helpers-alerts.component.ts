import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessage, CloseType } from './interfaces';

@Component({
  selector: 'app-root-helpers-alerts',
  templateUrl: './root-helpers-alerts.component.html',
  styleUrls: ['./root-helpers-alerts.component.css']
})
export class RootHelpersAlertsComponent  {

  @Input() dismissable: boolean;
  rawMessage: IMessage;
  @Output() messageChange = new EventEmitter();

  @Input()
  get message(): IMessage {
    return this.rawMessage;
  }

  set message(value: IMessage) {
    this.rawMessage = value;
    this.messageChange.emit(this.rawMessage);
  }
}
