import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import ReactDOM from 'react-dom/client'
import Home from './home1.tsx'

const firebaseConfig = {
  apiKey: "AIzaSyAMgCgAIlUUAsCZEzmGdEaimxll6uEtHjs",
  authDomain: "aps-unicarioca-3942f.firebaseapp.com",
  projectId: "aps-unicarioca-3942f",
  storageBucket: "aps-unicarioca-3942f.appspot.com",
  messagingSenderId: "281920244507",
  appId: "1:281920244507:web:e64c6ba84f57e3e0ffa1be"
};

firebase.initializeApp(firebaseConfig);

const theme = createTheme({
  palette: {
    primary: pink
  }
});

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Login successful, perform any necessary actions');
      HomePage();
      setError('');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="login">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            APS Unicarioca
          </Typography>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Desenvolvimento de aplicaçoes WEB
          </Typography>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          <Typography variant="h6" component="h5" align="center" gutterBottom>
            <b>Login:</b> aps@unicarioca.teste<br></br>
            <b>Senha:</b> aps@unicarioca.teste
          </Typography>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>


          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

function HomePage() {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  );
};

export default Login;