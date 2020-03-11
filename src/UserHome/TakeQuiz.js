import React, { Component } from 'react';
import './TakeQuiz.css';

let a = "";
// var timerValue = "";
// var responseResult = '';

class TakeQuiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: 0,
            answer: 0,
            currentQuestion: 0,
            score: 0,
            selectedAnswer: undefined,
            correctAnswer: [],
            selectedAnswerValue: undefined,
            marksAdded: false,
            totalScored: 0,
            totalQuestion: 9,
            testCompleted: false,
            answerClicked: false,
            timerstarted: false,
            dataImported: false,
            timer: 5,
            dataReach: false,
            finalScoreUpdated: false,
            categorySelected: 17,
            levelSelected: 'medium'
        }
        this.submitAnswer = this.submitAnswer.bind(this)
        this.saveSelectedAnswer = this.saveSelectedAnswer.bind(this)
        this.takeTestAgain = this.takeTestAgain.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.getQuizData = this.getQuizData.bind(this)
        this.calculatingScore = this.calculatingScore.bind(this)
    };


    startTimer() {
        clearInterval(a)
        console.log("reached func after submit")
        if (this.state.currentQuestion === this.state.totalQuestion) {
            this.calculatingScore()
        }
        else {
            a = setInterval(
                () => {
                    if (this.state.timer === 0) {
                        clearInterval(a)
                        this.setState({
                            currentQuestion: this.state.currentQuestion + 1,
                            selectedAnswerValue: undefined,
                            answerClicked: false,
                            timer: 5,
                        })
                        this.startTimer()
                    }
                    else {
                        this.setState({
                            timer: this.state.timer - 1
                        });
                    }
                }, 1000)
        }
    }


    getQuizData = async () => {
        console.log('1')
        var api_call = fetch(`https://opentdb.com/api.php?amount=10&category=${this.state.categorySelected}&difficulty=${this.state.levelSelected}&type=multiple`);
        console.log('2')
        var responseResult = await api_call.then(response => response.json())
        console.log('3')
        console.log(responseResult)

        var questionData = [];
        var correctAnswerData = [];
        var optionsData = [];

        for (var i = 0; i < 10; i++) {
            questionData.push(responseResult.results[i].question)
            correctAnswerData.push(responseResult.results[i].correct_answer)
            optionsData.push(responseResult.results[i].incorrect_answers)
            optionsData[i].push(responseResult.results[i].correct_answer)
        }
        var j, x, i;
        for (var a = 0; a < optionsData.length; a++) {
            for (i = optionsData[a].length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = optionsData[a][i];
                optionsData[a][i] = optionsData[a][j];
                optionsData[a][j] = x;
            }
        }

        if (!this.state.dataImported) {
            this.setState({
                question: questionData,
                correctAnswer: correctAnswerData,
                answer: optionsData,
                dataImported: true,
            })
        }
        console.log(this.state.correctAnswer)
        console.log(this.state.question.length)
    }



    componentDidUpdate() {
        if (this.state.finalScoreUpdated) {
            this.calculatingScore();
            console.log('this is your score ' + this.state.score)
            console.log('this is your current question ' + (this.state.currentQuestion + 1))
            console.log(this.state.totalQuestion + 1)
        }
        else {
            console.log('this is your score ' + this.state.score)
            console.log('this is your current question ' + (this.state.currentQuestion + 1))
            console.log(this.state.totalQuestion + 1)
        }
    }


    componentWillMount() {
        this.getQuizData()
    }


    componentDidMount() {
        this.startTimer()
    }


    saveSelectedAnswer(elementLocation) {
        this.setState({
            selectedAnswer: elementLocation.target.id,
            selectedAnswerValue: elementLocation.target.className,
            answerClicked: true,
        })
    };

    calculatingScore() {
        console.log('your score before test ending is : ' + this.state.score)
        let acheivedScore = (this.state.score * 100) / (this.state.question.length);
        this.setState({
            testCompleted: true,
            totalScored: acheivedScore,
            finalScoreUpdated: false
        });
    }

    submitAnswer() {
        let answerValue = this.state.selectedAnswerValue

        if (this.state.currentQuestion === this.state.question.length - 1) {
            if (answerValue === this.state.correctAnswer[this.state.currentQuestion]) {
                if (!this.state.marksAdded) {

                    let calculatingScore = this.state.score
                    this.setState({
                        marksAdded: true,
                        score: calculatingScore + 1,
                        finalScoreUpdated: true,
                    })
                    console.log(this.state.score)
                }
            }
            else {
                console.log("WrongSelected")
                this.setState({
                    finalScoreUpdated: true,
                })
            }

            if (this.state.finalScoreUpdated) {
                this.setState({
                    testCompleted: true,
                    timer: 0
                });
            }
            clearInterval(a)
        }
        else {
            if (answerValue === this.state.correctAnswer[this.state.currentQuestion]) {
                if (!this.state.marksAdded) {

                    let calculatingScore = this.state.score
                    this.setState({
                        marksAdded: true,
                        score: calculatingScore + 1,
                    })
                    console.log(this.state.score)
                }
            }
            else {
                console.log("WrongSelected")
            }
            // clearInterval(a)
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
                marksAdded: false,
                answerClicked: false,
                timer: 5,
            });
            // clearInterval(a)
            console.log("reached func")
            this.startTimer()
            console.log("function shall be called uptill now")
        }

    };

    takeTestAgain() {
        this.setState({
            currentQuestion: 0,
            testCompleted: false,
            score: 0,
            selectedAnswer: undefined,
            selectedAnswerValue: undefined,
            totalScored: 0,
            answerClicked: false,
            timer: 5,
        })
        this.startTimer()
    }

    render() {
        if (!this.state.dataImported) {
            return <center><div className='imgh'></div></center>
        }
        else {
            var answerOptions = this.state.answer[this.state.currentQuestion].map((i, index) => <li key={i} id={index} onClick={this.saveSelectedAnswer} className={this.state.answer[this.state.currentQuestion][index]}>{i}</li>);
            var totalScoreOfUser = this.state.totalScored;
            var button = <button onClick={this.submitAnswer}>Submit</button>
            var again = <button onClick={this.takeTestAgain}>Take again</button>
            var counterDisplay = <p>{this.state.question[this.state.currentQuestion]}<p className='timer'>00:{this.state.timer}</p></p>
        }
        return (
            <div className="abc">
                <h2>QuizApp Using ReactJS</h2>
                <h3><b>{(!this.state.testCompleted) ? counterDisplay : "your score is"}</b></h3>
                <ul className='options'>
                    {(!this.state.testCompleted) ? answerOptions : totalScoreOfUser}
                </ul>
                {(!this.state.testCompleted) ? ((this.state.answerClicked) ? button : "") : again}
            </div>
        );
    }
}

export default TakeQuiz;