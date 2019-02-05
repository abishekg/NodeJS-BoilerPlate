const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());


require('./routes/fetchRoutes')(app);


app.listen(config.port, () => {
	console.log(`Server is up on port ${config.port}`);
});
