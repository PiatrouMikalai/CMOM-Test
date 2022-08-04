import PropTypes from 'prop-types';
import {TableColumn} from './TableColumn';

export function TableHead({columns}) {

    const getTableColumns = () => {
        return columns.map(column => {
            const {key, name} = column;
            return (
                <TableColumn key={key} name={name}/>
            )
        })
    };

    const tableColumns = getTableColumns();
    return (
        <thead className="table-head">
            <tr className="table-head-row">
                {tableColumns}
            </tr>
        </thead>
    )
}

TableHead.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            name: PropTypes.string,
            cellValueWrapper: PropTypes.func
        })
    ).isRequired,
};