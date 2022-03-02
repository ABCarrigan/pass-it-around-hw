/*
- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('99 bottles of root beer on the wall <br> <a href="/98">Take one down, pass it around</a>')
})
app.get('/:number_of_bottles', (req, res) => {
    let bottleNum = req.params.number_of_bottles
    if (bottleNum > 0) {
        res.send(bottleNum + ' bottles of root beer on the wall<br> <a href="/' + (bottleNum-1) + '">Take one down, pass it around</a>')
    } else {
        res.send(bottleNum + ' bottles of root beer on the wall... <a href="/">Start over?</a>')
    }
})
  

app.listen(port,() => {
    console.log('listening on port' , port)
})