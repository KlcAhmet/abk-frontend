import { ITicket } from '~/server/dbModels';
import * as yup from 'yup';

export type IValidationErrors = {
  value?: any,
  nameRequired?: boolean,
  nameMax?: boolean,
  mailInvalid?: boolean,
  mailMax?: boolean,
  mailRequired?: boolean,
  messageRequired?: boolean,
  messageMax?: boolean,
};

export async function createTicketValidate(ticket: ITicket): Promise<{ isValid: boolean, validationErrors: object }> {
  let ticketSchema = yup.object({
    name: yup.string()
      .required('nameRequired')
      .max(100, 'nameMax'),
    mail: yup.string()
      .email('mailInvalid')
      .required('mailRequired')
      .max(100, 'mailMax'),
    message: yup.string()
      .required('messageRequired')
      .max(1000, 'messageMax'),
  });

  try {
    await ticketSchema.validate(ticket, { abortEarly: false });

    return {
      isValid: true,
      validationErrors: {},
    };
  } catch (err: any) {
    const validationErrors: IValidationErrors = {};
    err.errors.forEach((key: any) => {
      // @ts-ignore
      validationErrors[key] = true;
    });

    return {
      isValid: false,
      validationErrors: validationErrors,
    };
  }
}