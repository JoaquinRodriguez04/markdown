import './App.css';
import MarkEditor from './components/MarkEditor';
import MarkNavbar from './components/MarkNavbar';
import MarkPreview from './components/MarkPreview';
import { MarkProvider } from './components/markContext';

function App() {

  return (
    <MarkProvider>
      <main className='app-container'>
        <MarkNavbar/>
        <section className='mark-main-container'>
          <MarkEditor/>
          <MarkPreview/>
        </section>
      </main>
    </MarkProvider>
  )
};

export default App;
