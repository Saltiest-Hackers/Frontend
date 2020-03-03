import React from 'react';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Filters = (props) => {
    const sortBySaltiness = () => {
        const newArr = [ ...props.display ];
        newArr.sort((a, b) => {
            if (a.saltiness > b.saltiness) {
                return 1;
            }
            else if (a.saltiness < b.saltiness) {
                return -1;
            }
            return 0;
        });
        props.setDisplay(newArr);
    }
    const filterByName = (term) => {
        const newArr = [ ...props.data ];
        const filtered = newArr.filter((comment) => {
            return comment.username.includes(term)
        })
        props.setDisplay(filtered);
    }
    const resetDisplay = () => props.setDisplay(props.data);
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <TextField onChange={(e) => filterByName(e.target.value)} />
                <Button onClick={() => sortBySaltiness()} variant='outlined'>Sort</Button>
                <Button onClick={() => resetDisplay()} variant='outlined'>Reset</Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Filters;