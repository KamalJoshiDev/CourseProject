const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Utils
const ConnectDB = require("./Config/MongoDb")
const appRoutes = require('./Routes/Router.Routes.js')
const geminiRoutes = require('./Routes/GeminiRoutes.js');
dotenv.config();

const app = express();

app.use(cors({ origin: "*", credentials: true }));


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server Is Runnning"
    });
});

ConnectDB().then(() => {

    app.use("/api/v1", appRoutes);
    app.use("/api/v1/ai", geminiRoutes);
    const PORT = process.env.PORT || 6800;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });


})
    .catch((error) => {
        console.log(error);
    });

