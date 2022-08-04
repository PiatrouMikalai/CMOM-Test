import PropTypes from 'prop-types';
import {TableRow} from './TableRow';

export function TableBody({list, columns, onRowClick}) {
    const getTableRows = () => {
        return list.map(row => {
            const {id} = row;
            return (
                <TableRow
                    key={id}
                    row={row}
                    columns={columns}
                    onRowClick={onRowClick}
                />
            )
        })
    };

    const rows = getTableRows();
    return (
        <tbody className="table-body">
            {rows}
        </tbody>
    )
}

TableBody.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            name: PropTypes.string,
            cellValueWrapper: PropTypes.func
        })
    ).isRequired,
    onRowClick: PropTypes.func
};