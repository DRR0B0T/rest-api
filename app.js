const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
    {id: 1, name: 'Ilmir', value: '+7-888-888-88-88', marked: false}
]

//GET
app.get('api/contacts',(req, res) => {
    res.status(200).json(CONTACTS)
})

//POST
app.post('/api/contacts', (req, res) => {

})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
} )

app.listen(3000, () => console.log('Server has been started on port 3000...'))