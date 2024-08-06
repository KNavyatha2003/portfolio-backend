const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./Config');

const app = express();

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

const projectRoutes = require('./Routes/projectRoutes');
const educationRoutes = require('./Routes/EducationRoutes');
const skillRoutes = require('./Routes/skillsRoutes');

app.use('/api/projects', projectRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
