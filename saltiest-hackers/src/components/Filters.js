import React, { useState, useEffect } from 'react';
import { Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, InputLabel, makeStyles, MenuItem, Select, Typography, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    boxContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    searchBar: {
        marginBottom: '2%',
    },
    resetButton: {
        marginTop: '2%',
    },
    filterSelect: {
        minWidth: '100px',
    }
})

const Filters = (props) => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('');
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
    // Search by name function
    const filterByName = (term) => {
        setSort('');
        const newArr = [ ...props.data ];
        const filtered = newArr.filter((comment) => {
            return comment.author.includes(term)
        })
        props.setDisplay(filtered);
    }
    // useEffect to update the list as the search term changes
    useEffect(() => {
        filterByName(search)
    }, [search])
    // Function containing all switch logic for filters
    const filterSwitch = (filter) => {
        if(filter) {
            switch (filter) {
                case 'ascSalt': 
                    sortBySaltiness('ascending', 'saltiness');
                    break;
                case 'descSalt':
                    sortBySaltiness('descending', 'saltiness');
                    break;
                case 'alpha':
                    sortBySaltiness('ascending', 'author');
                    break;
                case 'revAlpha':
                    sortBySaltiness('descending', 'author');
                    break;
                case 'date':
                    sortBySaltiness('descending', 'time');
                    break;
                case 'revDate':
                    sortBySaltiness('ascending', 'time');
                    break;
                default:
                    console.error('Invalid filter type')
                    break;
            }
        }
    }
    // useEffect to update the list with relevant filters 
    useEffect(() => {
        filterSwitch(sort);  
    }, [sort])
    // Function to reset display back to the original data and empty filter state
    const resetDisplay = () => {
        props.setDisplay(props.data);
        setSearch('');
        setSort('');
    }
    const classes = useStyles();
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.boxContent}>
                <TextField onChange={(e) => setSearch(e.target.value)} value={search} label='Search' fullWidth={true} className={classes.searchBar}/>
                <InputLabel htmlFor='sort' id='sort-label'>Sort By</InputLabel> 
                <Select className={classes.filterSelect} onChange={(e) => setSort(e.target.value)} id='sort' labelId='sort-label' autoWidth value={sort}>
                    <MenuItem value=''>None</MenuItem>
                    <MenuItem value='ascSalt'>Saltiness (low - high)</MenuItem>
                    <MenuItem value='descSalt'>Saltiness (high - low)</MenuItem>
                    <MenuItem value='alpha'>Alphabetically</MenuItem>
                    <MenuItem value='revAlpha'>Reverse Alphabetically</MenuItem>
                    <MenuItem value='date'>Newest</MenuItem>
                    <MenuItem value='revDate'>Oldest</MenuItem>
                </Select>
                <Button onClick={() => resetDisplay()} variant='outlined' className={classes.resetButton}>Reset</Button>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Filters;