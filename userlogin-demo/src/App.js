import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Components/AuthContext';
import { Header } from './Components/Header';
import { UserProfile } from './Components/UserProfile';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <UserProfile />
      </div>
    </AuthProvider>
  );
}

export default App;
