import {ReactComponent as Rock} from '../images/icon-rock.svg'
import {ReactComponent as Scissors} from '../images/icon-scissors.svg'
import {ReactComponent as Paper} from '../images/icon-paper.svg'


export function Winner({shown,close,resultobj,userChoiceobj,winobj})

{
  
    function showplayer(userChoiceobj){
        
        
        switch(userChoiceobj)
        {
        case  'paper':
        return <Paper className="paper-boder " />
        case  'rock':
        return <Rock  className="rock-boder "/>
        case  'scissors':
        return <Scissors  className="scissors-boder "/>
        default:
            break
    }
    }
    function showresult(resultobj)
{
    switch(resultobj)
    {
        case  'paper':
        return <Paper  className="paper-boder "/>
        case  'rock':
        return <Rock  className="rock-boder "/>
        case  'scissors':
        return <Scissors  className="scissors-boder "/>
        default:
            break
    }

}   
 return shown ? (
        
      <div
        className="modal-backdrop"
        onClick={() => {
          // close modal when outside of modal is clicked
          close();
        }}
      >
        <div
          className="result-content"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        > 
            
            <div className="player-result">
                {showplayer(userChoiceobj)}
            </div>
            <div className="result-card">
                {winobj}
                 <button  className="rule-btn1" onClick={close}>Close</button>
            </div>
            <div className="auto-result">
                {showresult(resultobj)}
            </div>
      
        </div>
      </div>
    ) : null;
  }
