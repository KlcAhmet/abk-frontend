export type ITicket = {
  name: string;
  mail: string;
  message: string;
};

export type ITicketResponse = {
  statusCode: 200 | 400 | 422 | 429 | 500;
}