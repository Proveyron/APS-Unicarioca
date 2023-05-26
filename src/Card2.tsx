import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Card, CardContent, Typography } from "@mui/material";

interface Document {
    name: string;
}

const FirestoreDocuments: React.FC = () => {
    const [documents, setDocuments] = useState<Document[]>([]);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyAMgCgAIlUUAsCZEzmGdEaimxll6uEtHjs",
            authDomain: "aps-unicarioca-3942f.firebaseapp.com",
            projectId: "aps-unicarioca-3942f",
            storageBucket: "aps-unicarioca-3942f.appspot.com",
            messagingSenderId: "281920244507",
            appId: "1:281920244507:web:e64c6ba84f57e3e0ffa1be"
        };
        firebase.initializeApp(firebaseConfig);


        const firestore = firebase.firestore();

        const fetchDocuments = async () => {
            try {
                const collectionRef = firestore.collection("animais");
                const snapshot = await collectionRef.get();
                const docs = snapshot.docs.map((doc) => ({
                    name: doc.get("nome"),
                })) as Document[];
                setDocuments(docs);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div>
            {documents.map((document, index) => (
                <Card
                    key={index}
                    sx={{
                        marginBottom: "16px",
                        backgroundColor: "#0083ff",
                        color: "white",
                    }}
                >
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h6" component="h2" sx={{ textTransform: "capitalize" }}>
                            {document.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default FirestoreDocuments;
