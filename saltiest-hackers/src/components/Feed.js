import React, { useState } from 'react';

import dummy from '../assets/MOCK_DATA.json'
import { Card } from '@material-ui/core';

const Feed = () => {
    const [data, setData] = useState(dummy);
    return (
        <React.Fragment>
            <h1>Comment Feed</h1>
            {data.map((comment) => {
                return (
                    <Card>
                        <h3>{comment.username}</h3>
                        <p>{comment.saltiness}</p>
                        <p>{comment.comment}</p>
                    </Card>
                )
            })}
        </React.Fragment>
    )
}

export default Feed;