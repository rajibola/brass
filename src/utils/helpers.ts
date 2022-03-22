import EnvDev from '../env.dev';
import EnvProd from '../env.prod';

export const getModelKeys = (model: any) =>
  Object.keys(model.effects({})).map(a => `${model.name}/${a}`);

export const getInitials = (name: string) =>
  name
    .match(/(\b\S)?/g)
    ?.join('')
    .toUpperCase();

export const ENV = __DEV__ ? EnvDev : EnvProd; // Environment Management
