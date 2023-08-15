import apiHandler from 'services/apiHandler';

export default {
  verifyAccount: (bank_code: string, account_number: string) =>
    apiHandler.get(
      `/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
    ),

  getBanks: () => apiHandler.get('/bank?country=nigeria'),
};
