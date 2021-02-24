const express = require("express");
const app = express();
const PORT = 8080;

app.use( express.json() )

const ernas = ["https://subjekt.no/wp-content/uploads/2020/06/NTB_LefGuXdh-uU-scaled.jpg",
    "https://www.allkunne.no/prod_images/doc_10934_2.jpg"] 

const random_erna = ernas[Math.floor(Math.random() * ernas.length)];

app.get("/erna", (req, res) => {
    res.status(200).send({
        image: `${random_erna}`
    })
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)