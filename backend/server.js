const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [{ id: 0, name: 'test 0', state: false }, { id: 1, name: 'test 1', state: true }];// [1, 2, 3]

app.get('/read', (req, res) => {
    res.json(tasks);
});

app.post('/create', (req, res) => {
    const task = { id: tasks.length + 1, name: req.body.name, state: false };
    tasks.push(task);
    res.status(200).json(task);
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    const index = tasks.findIndex(task => task.id === +(id));

    if(index === -1) {
        res.status(404).json();
    } else {
        tasks.splice(index, 1);
        res.status(200).json();
    }
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id === +(id));

    if (!task) {
        return res.status(404).json();
    } else {
        task.state = !task.state;
        return res.status(200).json(task);
    }
});

app.listen(PORT, () => {
    console.log('Server started!');
});