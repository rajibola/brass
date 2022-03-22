import {TextStyle, ViewStyle} from 'react-native';

export interface IParams {}

export type RootStackParamList = {
  Home: {item: IParams};
  History: {item: IParams};
};

interface BankResponse {
  banks: ReadonlyArray<IBanks>;
  isLoading?: boolean | string;
  isVerifying?: boolean | string;
}

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

export interface IVerifyAccount {
  account_number: string;
  account_name: string;
  bank_id: number;
}

//

interface TransferResponse {
  data: ReadonlyArray<ITransferHistory>;
  isLoading: boolean;
}

export interface TransferProps {
  amount: string;
  bank_code: string;
  account_number: string;
  recipient_name: string;
  onSuccess?: () => void;
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

export interface ButtonComponentProps {
  data: any[];
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export interface SearchBarProps {
  onChangeText: (text: string) => void;
  value: string;
  [x: string]: any;
}

export interface TextFieldProps {
  onChangeText?: (e: string) => void;
  placeholder: string;
  clickable?: boolean;
  onPress?: () => void;
  value?: string;
  [x: string]: any;
}

export interface TransactionListProps {
  name: string;
  status: string;
  amount: number;
  date: string;
  onPress?: (e: any) => void;
}

export interface VerifyAccountProps {
  bank_code: string;
  account_number: string;
}
