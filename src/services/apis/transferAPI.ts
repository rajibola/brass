import apiHandler from 'services/apiHandler';

export default {
  createRecipient: (bank_code: string, account_number: number, name: string) =>
    apiHandler.post(`/transferrecipient`, {
      type: 'nuban',
      name,
      bank_code,
      account_number,
      currency: 'NGN',
    }),

  initiateTransfer: (amount: number, recipient: number) =>
    apiHandler.post(`/transfer`, {
      source: 'balance',
      amount,
      recipient,
      reason: 'Null',
    }),

  getTransfers: () => apiHandler.get(`/transfer`),
};
