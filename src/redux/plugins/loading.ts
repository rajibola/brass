import createLoadingPlugin from '@rematch/loading';
import {Transfers} from 'redux/models';
import {getModelKeys} from 'utils/helpers';

export const loadingPlugin = createLoadingPlugin({
  whitelist: [...getModelKeys(Transfers)],
});
