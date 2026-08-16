const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 NeoCart Server running on http://localhost:${PORT}`);
});