import express from 'express'
import {Person} from './Person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use (
    express.json(),
    router
)
router.get('^/$|/class', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'Jy is terug hier by die huis'
    })
})
router.get('/person1', (req, res) => {
    let person1 = new Person()
    person1.FirstName = 'Huisang'
    person1.LastName = 'Nie'
    person1.Age = 20
    person1.display()
    res.end('Please check the console')
})
router.get('/person2', (req, res) => {
    let person2 = new Person()
    person2.FirstName = 'Ying'
    person2.LastName = 'Wei'
    person2.Age = 25
    person2.display()
    res.end('Please check the console')
})
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})