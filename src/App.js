import "./App.css";
import { format } from "date-fns";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ReactComponent as Logo} from './assets/facebook_logo.svg'

function App(props) {
  return (
    <div>

      <div className="upperSide">
        <div className="time">{format(new Date(), "dd.MM.yyyy hh:mm")} </div>
         
        <div className="logo"> <Logo width={40} left={50}  />  </div>
          <div className="search"> 
              <input className="search-in" type="text" /> 
          </div>
        
      </div>

      <div className="text">
        <div className="text1">Hey</div>
        <div className="text2">Let's</div>

        <div className="text3">Give</div>

        <div className="text4">All</div>

        <div className="text5">You Can</div>
      </div>
    </div>
  );
}

export default App;
