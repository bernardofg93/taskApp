import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export const FloatButton = ({ setActionModal }) => {
    
    const classes = useStyles();

    const openModal = () =>{
       setActionModal(true);
    }

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" onClick={openModal}>
                <AddIcon />
            </Fab>
        </div>
    )
}