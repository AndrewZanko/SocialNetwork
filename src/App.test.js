import Main from './App';
import ReactDOM from 'react-dom';


test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});
