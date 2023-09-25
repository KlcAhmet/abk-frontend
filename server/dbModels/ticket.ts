export type ITicket = {
  name: string;
  mail: string;
  message: string;
};

export type ITicketResponse = {
  statusCode: 200 | 400 | 422 | 429;
  headers?: {}; // TODO: should be delete
}