export const enum HttpActionState {
  Init = 'INIT',
  Busy = 'BUSY',
  Done = 'DONE'
}
export interface IHttpActionError {
  status?: number;
  message: string;
  error?: string;
}

export interface IHttpActionErrorProps {
  error: IHttpActionError
}
