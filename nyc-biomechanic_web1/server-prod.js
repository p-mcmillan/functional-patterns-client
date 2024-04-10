import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const app = express()

app.use(express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist/client'), { index: false }))

app.use('*', async (_, res) => {
  try {
    const template = fs.readFileSync('./dist/client/index.html', 'utf-8')
    const { render } = await import('./dist/server/entry-server.js')

    const html = template.replace(`<!--outlet-->`, render)
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (error) {
    // Send the error message as a string response
    res.status(500).end(error.message)
  }
})

app.listen(5173, () => {
  console.log('http://localhost:5177.')
})
