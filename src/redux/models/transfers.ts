import transferAPI from 'services/apis/transferAPI';
import {reducerActions as reducers} from './reducers';

interface UserResponse {
  data: ReadonlyArray<ITransferHistory>;
  isLoading: boolean;
}

const State: UserResponse = {
  data: [],
  isLoading: false,
};
export const Transfers = {
  name: 'Transfers',
  state: State,
  reducers,
  effects: (dispatch: {[key: string]: any}) => ({
    async getAllTranfers() {
      try {
        dispatch.Transfers.setState({isLoading: true});
        const result = await transferAPI.getTransfers();
        const data = (await result) as UserResponse;
        if (data) {
          dispatch.Transfers.setState({isLoading: false});
          dispatch.Transfers.setState({data: data});
          return data || [];
        }
      } catch (error) {
        console.log(error);
        dispatch.Transfers.setState({isLoading: false});
        dispatch.Transfers.setError(true);
      }
    },

    async initiateTransfer({
      amount,
      bank_code,
      account_number,
      recipient_name,
    }: TransferProps) {
      try {
        dispatch.Transfers.setState({isLoading: true});
        const recipient = await transferAPI.createRecipient(
          bank_code,
          account_number,
          recipient_name,
        );
        const receipientData = (await recipient) as ICreateTransfer;
        const result = await transferAPI.initiateTransfer(
          +amount,
          receipientData.recipient_code,
        );
        dispatch.Transfers.setState({isLoading: false});
        return result;
      } catch (error) {
        console.log(error);
        dispatch.Transfers.setState({isLoading: false});

        dispatch.Transfers.setError(true);
      }
    },
  }),
};

export interface TransferProps {
  amount: string;
  bank_code: string;
  account_number: string;
  recipient_name: string;
}

export interface ICreateTransfer {
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
}

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
