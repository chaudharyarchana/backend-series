import express from "express";

const app = express();

const jokes = [
    {
    id: 1,
    title : "joke 1"
},
{
    id: 2,
    title : "joke 2"
},
{
    id: 3,
    title : "joke 3"
}
]

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

app.listen(3000, () => {
    console.log(`Example app listening on port `)
  })