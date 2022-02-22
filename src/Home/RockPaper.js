import {  useEffect, useState } from "react";
import '../Home/RockPaper.css';
import {ReactComponent as Paper} from '../images/icon-paper.svg'
import {ReactComponent as Triangle} from '../images/bg-triangle.svg'
import {ReactComponent as Rock} from '../images/icon-rock.svg'
import {ReactComponent as Scissors} from '../images/icon-scissors.svg'
import {ReactComponent as Logo} from '../images/logo.svg'
import {Modal} from './Modal'
import {Winner} from './Winner'

export default function RockPaper(){
    const[userChoice,setUserChoice] = useState('');
    const [result,setResult] =useState('')
   
    const[score,setScore] = useState(0);
    const [modalShown, toggleModal] =useState(false);
    const [winnerModal, setWinnerModal] =useState(false);
    const items = ['rock', 'paper', 'scissors'];
    const[win , setWin] = useState('');
    
    useEffect(() => {
    
          switch (userChoice + result) {
            case 'paperrock': 
            case 'rockscissors':
            case 'scissorspaper':
            setWin('Winner')
            setScore(score+1)
            setWinnerModal(!winnerModal);
                 break;
             case 'rockpaper': 
              case 'scissorsrock':
             case 'paperscissors':
              setWin('Lossser')
                 setScore(score-1)
                 setWinnerModal(!winnerModal);
                 break;
                 case 'paperpaper': 
              case 'rockrock':
             case 'scissorsscissors':
              setWin('Tie')
                 setScore(score)
                 setWinnerModal(!winnerModal);
                 break;
            default :
            console.log("error");
            break;
          
        }
    },[userChoice,result]);
    function Clickevent(name){
        var getResult = items[Math.floor(Math.random() * items.length)];
        setResult(getResult)
        setUserChoice(name)
       setUserChoice(name)
       
    }
    return(
       
    <>
        <div className="header">
            <div className="logo-header">
                <Logo/>
                <div className="score">
                    <div className="textScore"><p>score</p></div>
                    <div className="outScore">{score}</div>
                </div>
            </div>
            <div className="container">
                <div className="triangle">
                    <Triangle/>
                </div>    
                <div className="papericon" onClick={()=>Clickevent('paper')}>
                    <Paper  />
                </div>
                <div className="rockicon" onClick={()=>Clickevent('rock')}>
                    <Rock  />
                </div>
                <div className="scissorsicon"  onClick={()=>Clickevent('scissors')}>
                    <Scissors />
                </div>

            </div>
            <div>
         <button className="rule-btn" onClick={() => {
          toggleModal(!modalShown);
        }}>Rules</button>
             </div>
         </div>
         <Modal
         
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
      </Modal>
      <Winner
            userChoiceobj= {userChoice}
          resultobj ={result}
            winobj = {win}
         shown={winnerModal}
         close={() => {
           setWinnerModal(false);
         }}
       >
       </Winner>
         
         </>
    )
}