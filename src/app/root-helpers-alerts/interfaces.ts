export enum MessageType {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning'
}

export interface IMessage {
  type: MessageType;
  message: string;
  title?: string;
}

export enum CloseType {
  TIMES, NORMAL
}
