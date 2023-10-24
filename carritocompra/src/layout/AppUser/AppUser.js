
import './App.css';
import PrimarySearchAppBar from '../../components/appBar/PrimarySearchAppBar';
import SimpleContainer from '../../components/container/SimpleContainer';

function AppUser() {
  return (
        <div>
        <header>
          <PrimarySearchAppBar/>
        </header>
        <br></br>
        <main>
          <SimpleContainer/>
        </main>
        </div>
       
  );
}

export default AppUser;
