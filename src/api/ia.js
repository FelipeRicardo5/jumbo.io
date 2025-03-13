import axios from 'axios';

export default async function handler(req, res) {
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
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'llama3.2',
            prompt,
            stream: false,
            length: 5
        });

        res.json({ challenge });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao gerar desafio' });
    }
}
