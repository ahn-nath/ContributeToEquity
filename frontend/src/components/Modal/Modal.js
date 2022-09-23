import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import "./Modal.css";

// props and API
import { useState } from 'react';

const Modal = props => {
    // parameters
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // add objects to feed component later
        // make request to get representatives
        fetch("api/representatives/98116")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },
        []);

    return ReactDOM.createPortal(
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                    </div>


                    <div className="modal-body">
                        {items.map(item => (


                            <Card
                                style={{
                                    backgroundColor: "#f9f9f9",
                                    padding: 20
                                }}
                            >
                                <CardContent>
                                    <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="h5" component="h2">
                                        {item.name}

                                    </Typography>


                                    <Typography

                                        color="textSecondary"
                                    >
                                        Share your contribution with a government representative and invite them to support the project
                                    </Typography>

                                    <Typography
                                        style={{
                                            marginBottom: 12,
                                            marginTop: 20
                                        }}
                                        color="blue"
                                    >
                                        Twitter username: {item.twitter}
                                    </Typography>


                                </CardContent>
                            </Card>

                        ))}
                    </div>


                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("root")
    );
};

export default Modal;
