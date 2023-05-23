import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Custom Material-UI theme
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
      // Login successful, perform any necessary actions
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
            Login
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
              label="Password"
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

export default Login;