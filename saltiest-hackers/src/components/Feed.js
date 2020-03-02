import React, { useState } from 'react';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';

const Feed = () => {
    const [data] = useState(dummy);
    const [display, setDisplay] = useState(dummy);
    return (
        <React.Fragment>
            <h1>Comment Feed</h1>
            {data.map((comment) => {
                return (
                    <Comment comment={comment} />
                )
            })}
        </React.Fragment>
    )
}

export default Feed;