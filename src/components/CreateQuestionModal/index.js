import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    question: {
        width: 800,
    },
    explain: {
        display: "block",
        fontSize: 20,
        marginTop: 10,
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [grade, setGrade] = React.useState(0);
    const [answers, setAnswers] = React.useState([{ label: "Đáp án 1" }, { label: "Đáp án 2" }, { label: "Đáp án 3" }, { label: "Đáp án 4" }]);
    const [trueAnswer, setTrueAnswer] = React.useState(0);
    const handleChange = (event) => {
        setGrade(event.target.value);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant='contained' color='primary' onClick={handleOpen}>
                Tạo mới
            </Button>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <TextField className={classes.question} id='standard-basic' label='Câu hỏi' />
                        <FormControl variant='filled' className={classes.formControl}>
                            <InputLabel id='demo-simple-select-filled-label'>Lớp</InputLabel>
                            <Select labelId='demo-simple-select-filled-label' id='demo-simple-select-filled' value={grade} onChange={handleChange}>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                            </Select>
                        </FormControl>
                        {answers.map((answer) => (
                            <TextField className={classes.question} id='standard-basic' label={answer.label} />
                        ))}
                        <FormControl variant='filled' className={classes.formControl}>
                            <InputLabel id='demo-simple-select-filled-label'>Đáp án đúng</InputLabel>
                            <Select labelId='demo-simple-select-filled-label' id='demo-simple-select-filled' value={trueAnswer} onChange={handleChange}>
                                <MenuItem value={6}>1</MenuItem>
                                <MenuItem value={7}>2</MenuItem>
                                <MenuItem value={8}>3</MenuItem>
                                <MenuItem value={9}>4</MenuItem>
                            </Select>
                        </FormControl>
                        <textarea className={classes.explain} placeholder='Giải thích' rows='8' cols='100' />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
