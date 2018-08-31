import express from 'express';
import { reducer } from './reducers';
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // for parsing application/json

app.get('/', (req, res) => {
        res.send('Remote Reducer')
})

app.post('/apply-actions', (req, res) => {
    const { state, action } = req.body;
    const newState = reducer(state, action);
    res.send({ newState });
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))