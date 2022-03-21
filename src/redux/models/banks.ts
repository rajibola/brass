import bankAPI from 'services/apis/bankAPI';
import transferAPI from 'services/apis/transferAPI';
import {reducerActions as reducers} from './reducers';

interface UserResponse {
  banks: ReadonlyArray<IBanks>;
}

const State: UserResponse = {
  banks: [],
};
export const Banks = {
  name: 'Banks',
  state: State,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getBanks() {
      try {
        const result = await bankAPI.getBanks();
        const data = (await result) as UserResponse;
        console.log(data);
        if (data) {
          dispatch.Banks.setState({banks: data});
          return data || [];
        }
      } catch (error) {
        console.log(error);
        dispatch.Banks.setError(true);
      }
    },

    async verifyAccount(data: any) {
      const {bank_code, account_number} = data;
      try {
        const recipient = await bankAPI.verifyAccount(
          bank_code,
          account_number,
        );
        const receipientData = (await recipient) as IVerifyAccount;

        return receipientData;
      } catch (error) {
        console.log(error);
        dispatch.Banks.setError(true);
      }
    },
  }),
};

export interface IBanks {
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: null;
  pay_with_bank: false;
  active: true;
  is_deleted: false;
  country: string;
  currency: string;
  type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
[];

export interface IVerifyAccount {
  account_number: string;
  account_name: string;
  bank_id: number;
}