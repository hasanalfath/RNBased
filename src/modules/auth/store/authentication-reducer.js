import * as authenticationActionType from './authentication-action-type';

const initialState = {
    username: '',
    token: '',
    saveUsername: false,
    isLogin: false,
    accountNumber: '',
    customerId: '',
    merchantName: '',
    merchantAddress: '',
    qrCode: '',
    brandIcon: '',
};
/**
 * Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
 * reducer (object) An object whose values correspond to different reducing functions that need to be combined into one
 * @param {*} state
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case authenticationActionType.UPDATE_DATA_USER:
            return {
                ...state,
                username: payload.username,
                saveUsername: payload.saveUsername,
                isLogin: payload.isLogin,
                token: payload.token,
                accountNumber: payload.accountNumber,
                customerId: payload.customerId,
                merchantName: payload.merchantName,
                merchantAddress: payload.merchantAddress,
                qrCode: payload.qrCode,
                brandIcon: payload.brandIcon,
            };
        case authenticationActionType.REMOVE_ATTR_USER:
            return { ...state, [payload.key]: payload.data };

        default:
            return state;
    }
};

export default reducer;