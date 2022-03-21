export const getModelKeys = (model: any) =>
  Object.keys(model.effects({})).map(a => `${model.name}/${a}`);

export const getInitials = (name: string) =>
  name
    .match(/(\b\S)?/g)
    ?.join('')
    .toUpperCase();
