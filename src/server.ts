import express,{Application} from "express";
import dotenv from "dotenv";
const app:Application = express();

dotenv.config()
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT ${PORT}`);    
})
