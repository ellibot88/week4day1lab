const express = require('express') //require keyword is like import. Express doesn't have a filepath because it's a standard NPM package
const cors = require('cors') 



const app = express() //application variable that we call 'app'


app.use(cors())
app.use(express.json())  // When we want to be able to accept JSON.

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/hello',(req, res) => {
    res.status(200).send('Hello World')}) //example request to ensure server is working properly

app.get('/api/inventory', (req, res)=> {

    if(req.query.item){
        console.log(req.query.item)
        const searchTerm = req.query.item.toLowerCase()
        const filteredItems = inventory.filter(invItem => {
            return invItem.toLowerCase().includes(searchTerm)
        })

        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }

})

    
app.get('/api/inventory/:id',(req,res) =>{
    //console.log(req.params)
    if(+req.params.id >= 0){
        res.status(200).send(inventory[+req.params.id])

    }
})




app.listen(5050, () => console.log('Server running on port 5050'))