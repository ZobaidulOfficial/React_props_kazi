import './App.css';
import Button from './componets/button/Button';
import From from './componets/input/From';

import ButtonValidator from './componets/button/ButtonValidator';

const App = () => {
  return (
    <div>
      <ButtonValidator text='Submit Button' variant='error'  sizes='leag'/>
    </div>
  )
}


export default App;