import * as authenticationActionType from './authentication-action-type';

export const updateDataUser = params => (
    {
        type: authenticationActionType.UPDATE_DATA_USER,
        payload: params,
    }
);

export const updateAttrUser = (key, data) => (
    {
        type: authenticationActionType.REMOVE_ATTR_USER,
        payload: {
            data,
            key,
        },
    }
);

export const loginGetToken = (request, axios, BASE_URL) => () => new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/token`, request, {
        header: {
            'Content-Type': 'application/json',
        },
    })
    .then(
        (res) => {
            resolve(res);
        },
        (error) => {
            reject(error.response);
        },
    );
});

export const updateDataLogin = data => (dispatch) => {
        dispatch(updateDataUser(data));
    };

export const logoutRemoveToken = (axios, BASE_URL, token) => () => new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/revoke`, { accessToken: token }, {
        header: {
            'Content-Type': 'application/json',
        },
    })
    .then(
        (res) => {
            resolve(res);
        },
        (error) => {
            reject(error.response);
        },
    );
});

export const updateDataLogout = saveUsername => (dispatch) => {
    if (!saveUsername) {
        dispatch(updateAttrUser('saveUsername', false));
    }
    dispatch(updateAttrUser('token', ''));
    dispatch(updateAttrUser('isLogin', false));
};

export const checkDevice = (request, axios, BASE_URL) => () => new Promise((resolve, reject) => {
    // ${BASE_URL}/checkDevice
    // MOCK
    axios.post(
        'https://private-855c58-mock80.apiary-mock.com/users/checkDeviceJson',
        request,
        {
            header: {
                'Content-Type': 'application/json',
            },
        },
    )
    .then(
        (res) => {
            resolve(res);
        },
        (error) => {
            reject(error.response);
        },
    );
});

export const confirmOTPNewDevice = (request, axios, BASE_URL) => () => new Promise((resolve, reject) => {
    // ${BASE_URL}/checkDevice
    // MOCK
    axios.post(
        'https://private-855c58-mock80.apiary-mock.com/users/newDeviceConfirm',
        request, {
            header: {
                'Content-Type': 'application/json',
            },
        },
    )
    .then((res) => {
        resolve(res);
    }, (error) => {
        reject(error.response);
    });
});