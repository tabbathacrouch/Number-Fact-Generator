import React from 'react';
import 'tachyons';

function Display({ numberFact }) {  

    return (
        <div id="numberFact" className='tc ma2 grow bg-lightest-blue br3 pa3 dib bw2 shadow-3 h4 w-75'>
            {numberFact}
        </div>
    )
}

export default Display
