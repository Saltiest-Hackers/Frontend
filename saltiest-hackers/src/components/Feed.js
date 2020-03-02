import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';


const Feed = () => {
    const [data] = useState(dummy);
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        setDisplay(data);
    }, [data])
    const sortBySaltiness = () => {
        const newArr = [ ...data ];
        newArr.sort((a, b) => {
            if (a.saltiness > b.saltiness) {
                return 1;
            }
            else if (a.saltiness < b.saltiness) {
                return -1;
            }
            return 0;
        });
        setDisplay(newArr);
    }
    return (
        <React.Fragment>
            <h1>Comment Feed</h1>
            <Button variant='contained' onClick={() => sortBySaltiness()}>Sort</Button>
            {display.map((comment) => {
                return (
                    <Comment comment={comment} />
                )
            })}
        </React.Fragment>
    )
}

export default Feed;