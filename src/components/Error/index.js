import PropTypes from 'prop-types';

import './css/error.css';

export function Error({code, message}) {
    return (
        <div className="error">
            <span className="error__code">{code}</span>
            <span className="error__message">{message}</span>
        </div>
    )
}

Error.propTypes = {
    code: PropTypes.number,
    message: PropTypes.string
};