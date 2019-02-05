const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');

app.use(bodyParser.json());

require('./routes/fetchRoutes')(app);


app.listen(config.port, () => {
	console.log(`Server is up on port ${config.port}`);
});
