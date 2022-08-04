import PropTypes from 'prop-types';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';

import './css/table.css';

export function Table({list, columns, onRowClick}) {
    return (
        <table className="table">
            <TableHead columns={columns} />
            <TableBody list={list} columns={columns} onRowClick={onRowClick} />
        </table>
    );
}

Table.propTypes = {
    /**
     * List of data to display
     * @type {Array.<Object>}
     *
     * @example
     * const list = [{id: 1, role: 'admin', image: 'https://...'}, {id: 2, role: 'user', image: 'https://...'}];
     */
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * @typedef Column
     * @type {Object}
     * @property {string} key - the key by which the value from the array object will be taken
     * @property {string} name - an optional, the name that will be displayed in the header of the table
     * @property {function(value):any} cellValueWrapper - an optional, function to change the value in a cell
     */
    /**
     * Description of columns to display. The columns will be displayed in the order of the objects in the array.
     * @type {Array.<Column>}
     *
     * @example
     * const columns = [{key: 'id', name: 'ID'}, {key: 'role', name: 'Role'}, {key: 'image', name: 'Image', cellValueWrapper: (image) => <img src={image} alt='' />}]
     */
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            name: PropTypes.string,
            cellValueWrapper: PropTypes.func
        })
    ).isRequired,
    /**
     * Gets called when the user clicks on the row
     * @param {Object} row - The row data
     * @return {void}
     */
    onRowClick: PropTypes.func
};