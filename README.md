# RootHelpersAlerts

This is a simple alert component, to help show different level of alerts and easy configurations on how you want it to act. Also, supports confirmation alert. Oh yea! easy to style to follow your own feel.



## Installation
```sh
npm i root-helpers-alerts
```



Update your `app.module.ts` **imports** array  
```typescript
import { RootHelpersAlertsComponent } from './root-helpers-alerts/root-helpers-alerts.component';

...
imports: [
    AppComponent,
    RootHelpersAlertsComponent,
    ....
  ]
```

 
## Usage
```
  <app-root-helpers-alerts [(message)]="message" [dismissable]="true"></app-root-helpers-alerts>
```
* **message**: is a two bounded attribute which takes in `IMessage`
  ```typescript
        export interface IMessage {
        type: MessageType,
        message: string,
        title?: string
        } 
  ```
  `type` can be `MessageType.info`, `MessageType.success`, `MessageType.error` or `MessageType.warning`
 
