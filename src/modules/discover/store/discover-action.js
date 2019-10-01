export const getList = (axios) => () => new Promise((resolve, reject) => {
    axios.get('http://private-e46fdf-rnbased.apiary-mock.com/questions', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(
            (response) => {
                resolve(response);
            },
            (error) => {
                reject(error);
            },
        );
});
