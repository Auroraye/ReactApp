const express = require("express");
const app = express();

/*
    app: Express App as route handler
    .get: watch for incoming requests with this method
    req: incoming request object
    res: outgoing response object
    res.send({ hi: 'there' }): immediately send some JSON back to who made this request
 */
app.get('/', (req, res) => {
    res.send({ hi: 'there' }, { hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
