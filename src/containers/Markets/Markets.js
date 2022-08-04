import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getCoinsMarkets} from '../../utils/requests';
import {isEmpty} from '../../utils/utils';
import {Table} from '../../components/Table';
import {Error} from '../../components/Error';
import {Loading} from '../../components/Loading';

import './markets.css';

export function Markets() {
    const [list, setList] = useState([]);
    const [error, setError] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        getCoinsMarkets()
            .then(response => setList(response))
            .catch(error => setError(error));
    }, []);

    const renderIcon = (value) => {
        return <img className="currency-icon" src={value} loading="lazy" alt=""/>;
    };

    const navigateToCoinInfo = (row) => {
        navigate(`/${row.id}`, { replace: false });
    };

    const columns = [
        {key: 'image', name: '', cellValueWrapper: renderIcon},
        {key: 'name', name: 'Name'},
        {key: 'symbol', name: 'Symbol'},
        {key: 'current_price', name: 'Current Price'},
        {key: 'high_24h', name: 'High 24 hour Price'},
        {key: 'low_24h', name: 'Low 24 hour Price'},
    ];

    if (!isEmpty(error)) {
        return (
            <div className="centered">
                <Error code={error.code} message={error.message}/>
            </div>
        );
    }

    if (list.length === 0) {
        return (
            <div className="centered">
                <Loading/>
            </div>
        );
    }

    return (
        <div className="markets">
            <div className="markets__table">
                <Table
                    list={list}
                    columns={columns}
                    onRowClick={navigateToCoinInfo}
                />
            </div>
        </div>
    )
}