import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

export const FormTask = ({ allDataDb, handleClose }) => {

    console.log(allDataDb);

    const classes = useStyles();

    //leer los datos 
    const [formValues, setFormValues] = useState({
        tarea: '',
        desc: ''
    });

    //Establecer los datos
    const learnValues = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    //obtener los valores
    // const { tarea, desc } = formValues;

    //Guardar los datos 
    const saveValues = (e) => {
        console.log(allDataDb);
        e.preventDefault();

        let arrValues = [];

        if (allDataDb) {
            arrValues = allDataDb;
        }

        arrValues.push(formValues);
        localStorage.setItem('db', JSON.stringify(arrValues));

        handleClose();

        arrValues = [];
    }

    return (
        <form
            className={classes.root}
            noValidate autoComplete="off"
            onChange={learnValues}
            onSubmit={saveValues}
        >
            <TextField
                id="standard-basic"
                label="Nombre de la tarea"
                name="tarea"
            />
            <TextField
                id="standard-basic"
                label="Descripcion de la tarea"
                name="desc"
            />
            <Button type="submit" variant="contained" color="primary">
                Primary
            </Button>
        </form>
    );
}
