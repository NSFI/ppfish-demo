import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicForm from './components/BasicForm';
import AdvancedForm from './components/AdvancedForm';
import StepForm from './components/StepForm';
import Step1 from './components/StepForm/Step1';
import Step2 from './components/StepForm/Step2';
import Step3 from './components/StepForm/Step3';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/formPage/basic" component={BasicForm} />
        <Route path="/formPage/advanced" component={AdvancedForm} />
        <Switch>
          <Route path="/formPage/step/step1" render={props =>
            <StepForm {...props}>
              <Step1 {...props} />
            </StepForm>}
          />
          <Route path="/formPage/step/step2" render={props =>
            <StepForm {...props}>
              <Step2 {...props} />
            </StepForm>
          }
          />
          <Route path="/formPage/step/step3" render={props =>
            <StepForm {...props}>
              <Step3 {...props} />
            </StepForm>}
          />
        </Switch>
      </Switch>
    );
  }
}
export default App;

