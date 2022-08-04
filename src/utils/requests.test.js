import {getCoin, getCoinsMarkets} from "./requests";

test('get coins market response data should contain 10 items', () => {
    expect.assertions(1);
    return getCoinsMarkets('eur', 'market_cap_desc', 10).then(data => {
        expect(data.length).toBe(10);
    });
});

test('get coins market fails with an error', () => {
    expect.assertions(1);
    return getCoinsMarkets('incorrect').catch(error => {
        expect(error).toEqual({code: 400, message: 'Bad Request'});
    });
});

test('get coin response data should be an object', () => {
    expect.assertions(1);
    return getCoin('bitcoin').then(data => {
        expect(typeof data).toBe('object');
    });
});

test('get coin fails with an error', () => {
    expect.assertions(1);
    return getCoin('incorrect').catch(error => {
        expect(error).toEqual({code: 404, message: 'Not Found'});
    });
});