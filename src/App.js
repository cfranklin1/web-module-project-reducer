import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, {initialState} from "./reducers";
import { applyNumber, applyOperator, clearDisplay, memoryValue} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state, dispatch);
  const applyNumClick = (num) => {
    dispatch(applyNumber(num));
  }

  const applyOpClick = (op) => {
    dispatch(applyOperator(op));
  }

  const clearDisplayClick = (click) => {
    dispatch(clearDisplay(click));
  }

  const memoryValueClick = (click) => {
    dispatch(memoryValue(click));
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt="red-logo"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => memoryValueClick()}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applyNumClick(1)} />
              <CalcButton value={2} onClick={() => applyNumClick(2)}/>
              <CalcButton value={3} onClick={() => applyNumClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyNumClick(4)}/>
              <CalcButton value={5} onClick={() => applyNumClick(5)}/>
              <CalcButton value={6} onClick={() => applyNumClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyNumClick(7)}/>
              <CalcButton value={8} onClick={() => applyNumClick(8)}/>
              <CalcButton value={9} onClick={() => applyNumClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => applyOpClick('+')}/>
              <CalcButton value={"*"} onClick={() => applyOpClick('*')}/>
              <CalcButton value={"-"} onClick={() => applyOpClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayClick()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
