import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import TextField from '@material-ui/core/es/TextField/TextField';
import Box from '@material-ui/core/es/Box/Box';
import * as cuid from "cuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardEitor.css'

export const NewCardEditor = ({columnId, updateColumn}) => {
    const [state, setState] = useState({
        show: false,
        newData: {
            title: 'new card name',
            description: 'new card description',
        },
    });

    const handleClose = () => setState({
        ...state,
        show: false,
    });
    const handleShow = () => setState({
        show: true,
        newData: {},
    });
    const handleSave = () => {
        updateColumn(columnId, {
            ...state.newData,
            id: cuid()
        });
        handleClose();
    };
    const handleTitleChange = (event) => {
        setState({
            ...state,
            newData: {
                ...state.newData,
                title: event.target.value
            }
        })
    };
    const handleDescChange = (event) => {
        setState({
            ...state,
            newData: {
                ...state.newData,
                description: event.target.value
            }
        })
    };

    return (
        <>
        <div variant='primary' onClick={handleShow} className='newCardFont newCardStyle margin-lb-16'>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'
                 xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z'
                    fill='#5E6C84'/>
            </svg>
            Add Card
        </div>

        <Modal show={state.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adding new card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='formStyle'>
                    <Box p={1} bgcolor='background.paper'>
                        <TextField
                            required
                            id='standard-required'
                            label='Title'
                            defaultValue={state.newData.title}
                            className='w-100'
                            onChange={handleTitleChange}
                        />
                    </Box>
                    <Box p={1} bgcolor='background.paper'>
                        <TextField
                            id='outlined-multiline-static'
                            label='Description'
                            multiline
                            rows='4'
                            defaultValue={state.newData.description}
                            variant='outlined'
                            className='w-100'
                            onChange={handleDescChange}
                        />
                    </Box>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='secondary'
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                {(state.newData && state.newData.title)
                    ? < Button
                        variant='primary'
                        onClick={() => {
                            handleSave()
                        }}
                    >
                        Add Card
                    </Button>
                    : < Button
                        variant='primary'
                        onClick={() => {
                            handleSave()
                        }}
                        disabled
                    >
                        Add Card
                    </Button>
                }
            </Modal.Footer>
        </Modal>
        </>
    );
};
