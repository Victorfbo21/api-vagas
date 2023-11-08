import app from './app'
import { dbConnect } from './config/dbConfig'

dbConnect().then(() => {
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log(`Ouvindo em http://localhost:${port}`)
    })
}).catch(err => console.error('Error on db connect', err))