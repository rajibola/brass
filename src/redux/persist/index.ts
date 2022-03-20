import AsyncStorage from '@react-native-async-storage/async-storage';
import createRematchPersist from '@rematch/persist';
import {AllFilters} from '../filters';

const blacklist: any[] = [];

export const persistPlugin = createRematchPersist({
  //   whitelist: [],
  key: 'primary',
  blacklist,
  //   throttle: 3000,
  version: 2,
  storage: AsyncStorage,
  transforms: AllFilters,
});
