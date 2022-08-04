import {render, screen} from "@testing-library/react";
import {Loading} from "./index";

test('should render loading', () => {
    const { container } = render(<Loading />);

    expect(container.getElementsByClassName('loading')[0]).toBeInTheDocument();
});