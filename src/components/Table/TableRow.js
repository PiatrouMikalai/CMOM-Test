import PropTypes from 'prop-types';
import {TableCell} from './TableCell';

export function TableRow({row, columns, onRowClick}) {
    const getTableCells = () => {
        return columns.map(column => {
            const {key, cellValueWrapper} = column;
            const value = row[key];
            return (
                <TableCell
                    key={key}
                    value={value}
                    cellValueWrapper={cellValueWrapper}
                />
            )
        })
    };

    const onRowClickWrapper = () => {
        onRowClick(row);
    }

    const cells = getTableCells();

    return (
        <tr className="table-row" onClick={onRowClickWrapper}>
            {cells}
        </tr>
    )
}

TableRow.propTypes = {
    row: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            name: PropTypes.string,
            cellValueWrapper: PropTypes.func
        })
    ).isRequired,
    onRowClick: PropTypes.func
};