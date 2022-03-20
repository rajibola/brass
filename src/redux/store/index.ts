import {init} from '@rematch/core';
import * as models from 'redux/models';
import {persistPlugin} from 'redux/persist';
import {loadingPlugin} from 'redux/plugins';

export default init({
  models,
  //   plugins: [loadingPlugin, persistPlugin],
  //   redux: {
  //     middlewares: [logger],
  //   },
});
