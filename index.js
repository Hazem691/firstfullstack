import express from 'express' ;
import routerpost from './src/modules/posts/post.routes.js';
import cors from 'cors'

const app = express()
const port = 3000;
app.use(cors()); 
app.use(express.json());
app.use(routerpost);
app.use("*",(req,res,next)=>{
    res.json({msg : "404 Not found"}) ;
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))