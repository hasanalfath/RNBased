export const INITIAL_ROUTE = 'HomeScreen';

export function getBaseUrl(path) {
    INIT_OPTIONS.ENDPOINT_PROTOCOL = 'https';
    INIT_OPTIONS.ENDPOINT_HOSTNAME = 'pocketbank-mock-api.stagingapps.net';
    INIT_OPTIONS.ENDPOINT_PORT = '443';

    return `${INIT_OPTIONS.ENDPOINT_PROTOCOL}://${INIT_OPTIONS.ENDPOINT_HOSTNAME}:${INIT_OPTIONS.ENDPOINT_PORT}${path}`;
}