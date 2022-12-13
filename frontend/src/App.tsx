import Header from './components/header';
import { Main } from './AppStyle';
import Providers from './Providers';
import PopUp from './components/popUp';
import RoutesPage from './router';
function App() {
  return (
    <Main>
      <Providers>
      <Header/>
      <PopUp/>
      <RoutesPage/>
      </Providers>
    </Main>
  );
}

export default App;
