import PropTypes from 'prop-types';

export function TableCell({value, cellValueWrapper}) {

    const renderValue = cellValueWrapper
        ? cellValueWrapper(value)
        : value;

    return (
        <td className="table-cell">
            <div className="table-cell__content">{renderValue}</div>
        </td>
    )
}

TableCell.propTypes = {
    value: PropTypes.any,
    cellValueWrapper: PropTypes.func
};