import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
     </>
  );
}

export default App;
