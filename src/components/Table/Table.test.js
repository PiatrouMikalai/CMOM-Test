import {render, screen} from "@testing-library/react";
import {Table} from "./index";

describe('should render table', () => {
    const list = [{id: 1, role: 'admin'}, {id: 2, role: 'user'}];
    const columns = [{key: 'id', name: 'ID'}, {key: 'role', name: 'Role'}];

    render(<Table list={list} columns={columns} />);
    const table = screen.getByRole('table');
    const rows = screen.getAllByRole('row');

    it('table grid', () => {
        expect(table).toBeInTheDocument();
        expect(rows.length).toBe(3);
    });
});