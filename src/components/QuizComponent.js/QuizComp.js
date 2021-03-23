import React from 'react';
import QuestionBox from './QuestionBox';
import QuizService from './quizService/QuizService';
import Result from './Result';
import './QuizComp.css';


export default class QuizComp extends React.Component{

    state={
        questionBank:[],
        score:0,
        responses:0
    };

    getQuestions=()=>{
        QuizService().then(question=>{
            this.setState({
                questionBank:question
            });
        })
    }

    componentDidMount(){
        this.getQuestions()
    }

    computeAnswers=(answer, correctAnswer)=>{
        if(answer===correctAnswer){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            responses:this.state.responses<5?this.state.responses+1:5
        });
    }

    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })
    }

    render(){
        return(
            <div className="container">
                <div className="title">Quiz Bee</div>
                {this.state.questionBank.length>0 && this.state.responses<5 &&
                this.state.questionBank.map(({question,answers, correct, questionId})=>
                (<QuestionBox key={questionId} question={question} options={answers} 
                    selected={answer=>this.computeAnswers(answer, correct)} />)
                )}

                {this.state.responses===5?<Result score={this.state.score} playAgain={this.playAgain} />   :null }
            </div>
        );
    }
}