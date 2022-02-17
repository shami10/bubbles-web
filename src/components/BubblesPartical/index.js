import React from "react";

import Particles from 'react-particles-js';

const Bubbles = () => {
    return <>
        <Particles 
            params={{
                particles: {
                    shape: {
                        type: 'images',
                        image: [
                            {src: 'path/to/first/image.svg', height: 20, width: 20},
                            {src: 'path/to/second/image.jpg', height: 20, width: 20},
                        ]
                    }
                }
            }}
        />
    </>
}

export default Bubbles