import Express  from "express";
import dotenv from "dotenv"


dotenv.config()
const {PORT} = process.env

const app = Express()


app.listen(PORT, () => {
    console.log(`Server levantado en el puerto http://localhost:${PORT}`);
})