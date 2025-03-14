import { default as axios } from 'axios';
import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;
const urlApi = process.env.IA_API_URL || 'http://localhost:11434/api/generate';

app.use(cors());
app.use(json());

app.post('/ia', async (req, res) => {
    const { mood } = req.body;
    
    if (!mood || typeof mood !== 'string' || mood.trim() === '') {
        return res.status(400).json({ error: 'Texto inválido' });
    }

    let prompt = '';

    if (mood === 'animado e energético 💪') {
    prompt = 'Com no máximo 200 caracteres retorne sem aspas, você é um incentivador motivacional. Dê um desafio curto, difícil, relacionado ao bem-estar, que eu possa completar rapidamente.';
    } 
    else if (mood === 'poderia estar melhor 😔') {
        prompt = 'Com no máximo 200 caracteres retorne sem aspas, você é um incentivador motivacional. Dê-me um desafio moderado de bem-estar que eu possa fazer rapidamente texto sem aspas.';
    } else if (mood === 'tive um dia difícil 😡') {
        prompt = 'Com no máximo 200 caracteres retorne sem aspas, Dê-me um desafio fácil, rápido e relacionado ao bem-estar para ajudar a melhorar minha condição.';
    } else {
        return res.status(400).json({ error: 'Mood inválido' });
    }

    try {
        const response = await axios.post(urlApi, {
            model: 'llama3.2',
            prompt,
            stream: false,
            length: 5
        });

        res.json({ challenge: response.data.response.toString() });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao gerar desafio' });
    }
});

app.listen(port, () => {
    console.log(`Tamo rodando na porta ${port}`);
});
