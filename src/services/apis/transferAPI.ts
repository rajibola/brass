import apiHandler from 'services/apiHandler';

export default {
  createRecipient: (bank_code: string, account_number: string, name: string) =>
    apiHandler.post('/transferrecipient', {
      type: 'nuban',
      name,
      bank_code,
      account_number,
      currency: 'NGN',
    }),

  initiateTransfer: (amount: number, recipient: string) =>
    apiHandler.post('/transfer', {
      source: 'balance',
      amount,
      recipient,
      reason: 'Null',
    }),

  getTransfers: () => apiHandler.get('/transfer'),
};
