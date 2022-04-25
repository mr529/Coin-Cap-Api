import {createAction, props} from '@ngrx/store';
import { cryptodata } from 'src/app/models/crypto';

export const LoadCryptoDetailsAction = createAction(
    'Load Crypto Details',
    props<{cryptoname: string}>()
);

export const LoadCryptoDetailsSuccess = createAction(
    'Load Crypto Details Success',
    props<{cryptoname: cryptodata}>()
);

export const LoadCryptoListAction = createAction(
    'Load Crypto Details',
    props<{cryptoname: string}>()
);

export const LoadCryptoListSuccess = createAction(
    'Load Crypto Details Success',
    props<{cryptoname: cryptodata[]}>()
);
