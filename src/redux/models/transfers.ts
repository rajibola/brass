import {Alert} from 'react-native';
import transferAPI from 'services/apis/transferAPI';
import {ICreateTransfer, TransferProps, TransferResponse} from 'types/types';
import {reducerActions as reducers} from './reducers';

const State: TransferResponse = {
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
        const data = (await result) as TransferResponse;
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
      onSuccess,
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
        onSuccess?.();
        Alert.alert('Transfer successful!');
        return result;
      } catch (error) {
        console.log(error);
        dispatch.Transfers.setState({isLoading: false});

        dispatch.Transfers.setError(true);
      }
    },
  }),
};
