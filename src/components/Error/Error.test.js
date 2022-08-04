import {render, screen} from "@testing-library/react";
import {Error} from "./index";

test('should render error with code 400 and message Bad Request', () => {
    render(<Error code={400} message='Bad Request' />);

    expect(screen.getByText('400')).toBeInTheDocument();
    expect(screen.getByText('Bad Request')).toBeInTheDocument();
});