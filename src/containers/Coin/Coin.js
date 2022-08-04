import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import parse from 'html-react-parser';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import {getCoin} from '../../utils/requests';
import {filterEmptyStrings, isEmpty} from '../../utils/utils';

import './coin.css';

export function Coin() {
    const [coin, setCoin] = useState({});
    const [error, setError] = useState({});
    let {coinId} = useParams();

    useEffect(() => {
        getCoin(coinId)
            .then(response => setCoin(response))
            .catch(error => setError(error));
    }, []);

    const getRenderHomepageLinks = (link) => <a href={link} target="_blank" rel="noreferrer">{link}</a>;

    const {image, name, symbol, hashing_algorithm, description, market_data, links, genesis_date} = coin;
    const homepageLinks = filterEmptyStrings(links?.homepage);
    const renderHomepageLinks = getRenderHomepageLinks(homepageLinks);

    if (!isEmpty(error)) {
        return (
            <div className="centered">
                <Error code={error.code} message={error.message}/>
            </div>
        )
    }

    if (isEmpty(coin)) {
        return (
            <div className="centered">
                <Loading/>
            </div>
        );
    }

    return (
        <div className="coin">
            <div className="coin__main-info">
                <div className="card currency">
                    <img className="currency__icon" src={image?.thumb} alt={name} loading="lazy"/>
                    <span className="currency__name">{name}</span>
                    <span className="currency__symbol">{symbol}</span>
                </div>
                <div className="card currency-data">
                    <div className="info-block">
                        <span className="info-block__title">Hashing algorithm</span>
                        <span className="info-block__value">{hashing_algorithm || '-'}</span>
                    </div>
                    <div className="info-block">
                        <span className="info-block__title">Market cap in Euro</span>
                        <span className="info-block__value">{market_data?.market_cap?.eur || '-'}</span>
                    </div>
                    <div className="info-block">
                        <span className="info-block__title">Genesis date</span>
                        <span className="info-block__value">{genesis_date || '-'}</span>
                    </div>
                    <div className="info-block">
                        <span className="info-block__title">Homepage</span>
                        <div className="info-block__value">{renderHomepageLinks || '-'}</div>
                    </div>
                </div>
            </div>
            <div className="card coin__description">
                <div className="info-block">
                    <span className="info-block__title">Description</span>
                    <div className="info-block__value">{parse(description?.en)}</div>
                </div>
            </div>
        </div>
    )
}