const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;
const JWT_SECRET = "[JX@_QVa*x*fua08p1Qc;j0+GUiE#u";

app.use(cors());
app.use(express.json());

const users = [];

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid request' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    res.status(201).json({ message: 'User registered', user: { username } });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid request' });
    }
    const user = users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '2h' });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

app.all('*', (req, res) => {
    res.status(404).json({ message: 'API Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
