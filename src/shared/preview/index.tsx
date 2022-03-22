import moment from 'moment';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ModalView} from 'shared';
import {TwoItemList} from 'shared/two-list-item';
import {PreviewProps as Props} from 'types/types';
import {formatMoney} from 'utils';
import {styles} from './styles';

export const Preview: FC<Props> = ({data, onExit}) => {
  return (
    <ModalView visible={!!data} onClickExit={onExit}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Fund transfer from Ridwan Ajibola to {data?.recipient.name}
        </Text>
        <TwoItemList properties="Amount" value={formatMoney(data?.amount)} />
        <TwoItemList
          properties="Transaction Date"
          value={moment(data?.createdAt).format('lll')}
        />
        <TwoItemList properties="Sender" value={'Ridwan Ajibola'} />
        <TwoItemList properties="Reference Number" value={data?.reference} />
        <TwoItemList properties="Receiver" value={data?.recipient.name} />
        <TwoItemList
          properties="Account Number"
          value={data?.recipient.details.account_number}
        />
        <TwoItemList
          properties="Receiving Bank"
          value={data?.recipient.details.bank_name}
        />

        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimer}>
            Disclaimer: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quas iusto consequatur consequuntur placeat recusandae minus iste
            autem quod fugit architecto. Consequuntur nihil soluta, illum minima
            reiciendis ducimus aspernatur beatae reprehenderit fuga ullam
            incidunt deleniti? Natus aliquid nostrum minus dignissimos adipisci.
          </Text>
        </View>
      </View>
    </ModalView>
  );
};
