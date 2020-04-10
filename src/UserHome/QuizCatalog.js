import React, { Component } from 'react';
import './QuizCatalog.css'
import img1 from './rsz_1ai.jpg'
import img2 from './jslogo2.png'
import img3 from './download.jpg'
import img4 from './tf.png'
import img5 from './full.jpg'
import img6 from './aglie.png'
import img7 from './noe.png'
import img8 from './react.png'

class QuizCatalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizSelected: false,
            Topic: [
                'Introduction to JavaScript',
                'Introduction to ReactJS',
                'Machine Learning For Beginners',
                'DeepLearning with Tensorflow 2.0',
                'DeepLearning with Tensorflow',
                'FullStacK Developer',
                'Agile Practice Quiz',
                'AI Beginners Guide',
                'Pandas for DataScience',
                'NodeJS Quiz For Beginner',
                'Introduction to Terraform',
                'Ansible CI/CD'
            ],
            launchSecurityPanelg: false,
            indexSelected: null,
            backImage: [img2, img8, img3, img4, img4, img5, img6, img1, img1, img7, img1, img1],
            questionNumber: 40,
            TimeLength: ['01:00', '00:55', '00:45', '00:35', '01:30', '01:00', '00:55', '00:45', '00:35', '01:30', '01:00', '01:45'],
            Difficuty: ['Easy', 'Hard', 'Medium', 'Easy', 'Easy', 'Medium', 'Hard', 'Easy', 'Medium', 'Medium', 'Hard', 'Easy']
        }
        this.onClickStartQuiz = this.onClickStartQuiz.bind(this)
        this.goBack = this.goBack.bind(this)
        this.launchSecurityPanel = this.launchSecurityPanel.bind(this)
    }
    onClickStartQuiz(event) {
        console.log(event.target.id)
        this.setState({
            quizSelected: true,
            indexSelected: event.target.id
        })
    }
    goBack() {
        this.setState({
            quizSelected: false,
            indexSelected: null,
            launchSecurityPanel: false
        })
    }
    launchSecurityPanel(e) {
        this.setState({
            launchSecurityPanelg: true
        })
    }
    render() {
        if (this.state.quizSelected) {
            return (
                <div className='box'>
                    <h3>IMPORTANT NOTICE !!</h3>
                    <div className='notice'>
                        The quiz can be attempt only once. so, be prepared.
                        you may revise the course and important information
                        before attempting.
                         <hr />
                        Topic: {this.state.Topic[this.state.indexSelected]}<hr />
                        Number of Questions: {this.state.questionNumber}<hr />
                        TimeLength: {this.state.TimeLength[this.state.indexSelected]}<hr />
                        Difficuty: {this.state.Difficuty[this.state.indexSelected]}<hr />
                        <button className='btn google' onClick={this.goBack}>Go Back</button><button className='btn fb' onClick={this.launchSecurityPanel}>Next</button>
                    </div>
                </div>
            )
        }
        else if (this.state.launchSecurityPanelg) {
            return (
            <div className='box'>
                <h3>ENTER SECURITY KEY</h3>
                <div className='notice'>
                    <input type='text' className='security' />
                    <br />
                    <button className='btn fb'>Launch Quiz</button><button className='btn google' onClick={this.goBack}>Go Back</button>
                </div>
            </div>
            )
        }
        else {

            return (



                <div className='quizcatalog'>
                    <div className='hea'>Select Quiz From The List Below <i class="fas fa-sticky-note"></i> </div>
                    {
                        this.state.Topic.map((i, index) =>
                            <div className='cards' key={i} onClick={this.onClickStartQuiz} id={index} style={{ backgroundImage: `url(${this.state.backImage[index]})` }}>
                                <div className='cardcontent' onClick=''>
                                    <b className='title' >{i}</b>
                                    <br />
                                    <hr />
                                    <div className='QT'>Question:{this.state.questionNumber}</div>
                                    <br />
                                    <div className='TT'>Time Length: {this.state.TimeLength[index]}</div>
                                    <br />
                                    <div className='DT'>Difficuty: {this.state.Difficuty[index]}</div>
                                </div>
                            </div>)
                    }

                </div>

            );
        }
    }
}

export default QuizCatalog;
