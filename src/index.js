const express = require('express')
const app = express()
var os = require('os');

const port = 3000

app.get('/', (req, res) => {
  res.send('Running... ${port} ${process.env.USER}, ${process.env.PASS}')
})

app.get('/metrics', (req, res) => {
    var free = os.freemem();
    var total = os.totalmem();
    res.send(`# HELP mem_free Free memory\n# Type mem_free Something here\nmem_free ${free}`);
})

app.listen(port, () => {
  console.log(`Listening on ${port} ${process.env.USER}, ${process.env.PASS}`)
})