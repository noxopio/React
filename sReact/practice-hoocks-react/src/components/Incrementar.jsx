import React from 'react'

import PropTypes from 'prop-types';

export const Incrementar = React.memo(({ incrementar }) => {
    console.log('me renderize');
    
    return (
        <button onClick={() => incrementar(10)}>+1</button>
    );
});

// Incrementar.displayName = 'Incrementar';

// Incrementar.propTypes = {
//     incrementar: PropTypes.func.isRequired,
// };
