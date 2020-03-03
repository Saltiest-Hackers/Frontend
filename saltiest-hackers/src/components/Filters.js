import React, { useState } from 'react';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, InputLabel, makeStyles, MenuItem, Select, Typography, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    boxContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    resetButton: {
        marginTop: '2%',
    },
})

const Filters = (props) => {
    // Function to sort list either by ascending or descending value; alphabetically or numerically
    const sortBySaltiness = (direction, prop) => {
        let num = 0;
        if (direction === 'ascending') {
            num = 1;
        } else if (direction === 'descending') {
            num = -1;
        }
        const newArr = [ ...props.display ];
        newArr.sort((a, b) => {
            if (a[prop] > b[prop]) {
                return (num);
            }
            else if (a[prop] < b[prop]) {
                return -(num);
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
    // Function containing all switch logic for filters
    const filterSwitch = (sort) => {
        if(sort) {
            switch (sort) {
                case 'ascSalt': 
                    sortBySaltiness('ascending', 'saltiness');
                    break;
                case 'descSalt':
                    sortBySaltiness('descending', 'saltiness');
                    break;
                case 'alpha':
                    sortBySaltiness('ascending', 'username');
                    break;
                case 'revAlpha':
                    sortBySaltiness('descending', 'username');
                    break;
            }
        }
    }
    // Function to reset display back to the original data
    const resetDisplay = () => props.setDisplay(props.data);
    const classes = useStyles();
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.boxContent}>
                <InputLabel htmlFor='sort'>Sort By</InputLabel> 
                <Select onChange={(e) => filterSwitch(e.target.value)} id='sort' labelId='sort'>
                    <MenuItem value=''>None</MenuItem>
                    <MenuItem value='ascSalt'>Saltiness (low - high)</MenuItem>
                    <MenuItem value='descSalt'>Saltiness (high - low)</MenuItem>
                    <MenuItem value='alpha'>Alphabetically</MenuItem>
                    <MenuItem value='revAlpha'>Reverse Alphabetically</MenuItem>
                </Select>
                <TextField onChange={(e) => filterByName(e.target.value)} label='Search' fullWidth={true} />
                <Button onClick={() => resetDisplay()} variant='outlined' className={classes.resetButton}>Reset</Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Filters;