import PropTypes from 'prop-types';

export function TableColumn({name}) {
    return (
        <th className="table-column">
            <div className="table-column__content">{name}</div>
        </th>
    )
}

TableColumn.propTypes = {
    name: PropTypes.string,
};