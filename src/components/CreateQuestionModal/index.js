import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/CreateRounded";

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
        marginBottom: 10,
    },
    button: {
        marginLeft: 30,
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [grade, setGrade] = useState(0);
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [explain, setExplain] = useState("");

    const handleGradeChange = (e) => {
        setGrade(e.target.value);
    };
    const handleQues = (e) => {
        setQuestion(e.target.value);
    };
    const handleAnswersChange = (e, index) => {
        e.persist();
        setAnswers((answers) =>
            answers
                .slice(0, index)
                .concat([e.target.value])
                .concat(answers.slice(index + 1, answers.length))
        );
    };
    const handleTrueAnswerChange = (e) => {
        setTrueAnswer(e.target.value);
    };
    const handleExplainChange = (e) => {
        setExplain(e.target.value);
    };
    const toggleModalCreate = () => {
        setOpen(!open);
    };
    const handleCreateQues = () => {
        console.log(grade);
        console.log(question);
        console.log(answers);
        console.log(trueAnswer);
        console.log(explain);
    };

    return (
        <div>
            <IconButton variant='contained' color='primary' onClick={toggleModalCreate}>
                <CreateIcon />
            </IconButton>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={toggleModalCreate}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <TextField onChange={handleQues} className={classes.question} label='Câu hỏi' />
                        <FormControl variant='filled' className={classes.formControl}>
                            <InputLabel id='demo-simple-select-filled-label'>Lớp</InputLabel>
                            <Select labelId='demo-simple-select-filled-label' value={grade} onChange={handleGradeChange}>
                                {[6, 7, 8, 9].map((grade) => (
                                    <MenuItem key={grade} value={grade}>
                                        {grade}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {["Đáp án 1", "Đáp án 2", "Đáp án 3", "Đáp án 4"].map((answer, index) => (
                            <TextField key={index} className={classes.question} label={answer} value={answers[index]} onChange={(e) => handleAnswersChange(e, index)} />
                        ))}
                        <FormControl variant='filled' className={classes.formControl}>
                            <InputLabel id='demo-simple-select-filled-label'>Đáp án đúng</InputLabel>
                            <Select labelId='demo-simple-select-filled-label' value={trueAnswer} onChange={handleTrueAnswerChange}>
                                {[1, 2, 3, 4].map((answerIndex) => (
                                    <MenuItem key={answerIndex} value={answerIndex - 1}>
                                        {answerIndex}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <textarea onChange={handleExplainChange} className={classes.explain} placeholder='Giải thích' rows='8' cols='100' />
                        <Button onClick={toggleModalCreate} variant='contained' color='secondary'>
                            Hủy
                        </Button>
                        <Button onClick={handleCreateQues} className={classes.button} variant='contained' color='primary'>
                            Tạo
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
