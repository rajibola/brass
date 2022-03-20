import {createFilter} from 'redux-persist-transform-filter';

const TransfersFilter = createFilter('Transfers', ['data']);

export const AllFilters = [TransfersFilter];
