import transferAPI from 'services/apis/transferAPI';
import {reducerActions as reducers} from './reducers';

interface UserResponse {
  data: ReadonlyArray<ITransferHistory>;
}

const State = {
  data: [],
};
export const Transfers = {
  name: 'Transfers',
  state: State,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getAllTranfers() {
      try {
        const result = await transferAPI.getTransfers();
        const data = (await result) as UserResponse;
        if (data) {
          dispatch.Transfers.setState({data: data});
          return data || [];
        }
      } catch (error) {
        console.log(error);
        dispatch.Billers.setError(true);
      }
    },
  }),
};

export interface ITransferHistory {
  amount: number;
  createdAt: string;
  currency: string;
  domain: string;
  failures: null;
  id: number;
  integration: number;
  reason: string;
  reference: string;
  source: string;
  source_details: null;
  status: string;
  titan_code: null;
  transfer_code: string;
  transferred_at: null;
  updatedAt: string;
  recipient: {
    active: true;
    createdAt: string;
    currency: string;
    description: null;
    domain: string;
    email: null;
    id: number;
    integration: number;
    metadata: null;
    name: string;
    recipient_code: string;
    type: string;
    updatedAt: string;
    is_deleted: false;
    isDeleted: false;
    details: {
      authorization_code: null;
      account_number: string;
      account_name: string;
      bank_code: string;
      bank_name: string;
    };
  };
  session: {
    provider: null;
    id: null;
  };
  fee_charged: number;
}
