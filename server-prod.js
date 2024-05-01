import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const app = express()

const PORT = 5173

app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist/client'), { index: false }))

app.use('*', async (_, res) => {
  try {
    const template = fs.readFileSync('./dist/client/index.html', 'utf-8')
    const { render } = await import('./dist/server/entry-server.jsx')

    const html = template.replace(`<!--outlet-->`, render)
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (error) {
    // Send the error message as a string response
    res.status(500).end(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}.`)
})
