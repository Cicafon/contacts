import Layout from './components/layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import ContactDetails from './pages/ContactDetails';
import NotFound from './pages/NotFound';
import NewContact from './pages/NewContact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="contacts" />} />
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/new-contact" element={<NewContact/>}/>
        <Route path="/contacts/:id" element={<ContactDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
