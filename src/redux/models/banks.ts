import bankAPI from 'services/apis/bankAPI';
import {BankResponse, IVerifyAccount, VerifyAccountProps} from 'types/types';
import {reducerActions as reducers} from './reducers';

const State: BankResponse = {
  banks: [],
  isLoading: false,
  isVerifying: false,
};
export const Banks = {
  name: 'Banks',
  state: State,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getBanks() {
      try {
        const result = await bankAPI.getBanks();
        const data = (await result) as BankResponse['banks'];
        if (data) {
          dispatch.Banks.setState({banks: data});
          return data || [];
        }
      } catch (error) {
        console.log(error);
        dispatch.Banks.setError(true);
      }
    },

    async verifyAccount({bank_code, account_number}: VerifyAccountProps) {
      try {
        dispatch.Banks.setState({isVerifying: 'Verifying account...'});
        const recipient = await bankAPI.verifyAccount(
          bank_code,
          account_number,
        );
        const receipientData = (await recipient) as IVerifyAccount;
        dispatch.Banks.setState({isVerifying: false});
        return receipientData;
      } catch (error) {
        console.log(error);
        dispatch.Banks.setState({isVerifying: false});
        dispatch.Banks.setError(true);
      }
    },
  }),
};
