import React, { useState, useEffect } from 'react';
import './styles.css';
import { NavBar } from './components/NavBar';
import { FloatButton } from './components/FloatButton';
import { ModalTask } from './components/ModalTask';
import { CardTask } from './components/CardTask';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export const TaskApp = () => {

    const [actionModal, setActionModal] = useState(false);
    const [reloadAction, setReloadAction] = useState(false);

    //estado para obtener los resultados del localstorager
    const [allDataDb, setAllDataDb] = useState([]);

    //obtener los datos del localstorage
    useEffect(() => {
        const allDbStorage = localStorage.getItem('db');

        const jsonAlldbStorage = JSON.parse(allDbStorage)
        setAllDataDb(jsonAlldbStorage);
        setReloadAction(false);
    }, [reloadAction]);

    //funcion para eliminar un elemento 
    const deleteTask = (index) => {

        allDataDb.splice(index, 1);
        setAllDataDb(allDataDb);
        localStorage.setItem('db', JSON.stringify(allDataDb));

        setReloadAction(true);
    }

    return (
        <div>
            <NavBar />
            <FloatButton
                setActionModal={setActionModal}
            />
            <Container>
                <Grid container spacing={2} >

                    {
                        allDataDb.map((task, index) => (
                            <Grid item xs={3}>
                                <CardTask
                                    task={task}
                                    index={index}
                                    deleteTask={deleteTask}
                                />
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
            <ModalTask
                actionModal={actionModal}
                setActionModal={setActionModal}
                allDataDb={allDataDb}
            />
        </div>
    )
}