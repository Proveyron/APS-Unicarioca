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

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Registration successful, perform any necessary actions
            setError('');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs">
                <div className="register">
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Register
                    </Typography>
                    {error && <div className="error">{error}</div>}
                    <form onSubmit={handleRegister}>
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
                            Register
                        </Button>
                    </form>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Register;
