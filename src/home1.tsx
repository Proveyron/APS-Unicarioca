import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Button from '@mui/material/Button';

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




const App = () => {

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
            window.location.reload();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

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
                        Logado!
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleLogout}
                    >
                        Sair
                    </Button>
                </div>
            </Container>
        </ThemeProvider>
    );




};
export default App;