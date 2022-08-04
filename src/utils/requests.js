const promisify = (promiseCallback) => new Promise(promiseCallback);

const manageErrors = (response) => {
    if(!response.ok){
          const responseError = {
               message: response.statusText || 'Something went wrong',
               code: response.status
    };
        throw(responseError);
    }
    return response;
}

export const getCoinsMarkets = (currency = 'eur', order = 'market_cap_desc', page= 10) =>
    promisify((resolve, reject) => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?' + new URLSearchParams({
            vs_currency: currency,
            order: order,
            per_page: page
        }))
            .then(manageErrors)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(error => reject(error));
    });

export const getCoin = (id) =>
    promisify((resolve, reject) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(manageErrors)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(error => reject(error));
    });