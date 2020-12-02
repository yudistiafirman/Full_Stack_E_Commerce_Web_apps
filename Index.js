const express = require('express');
const cors = require('cors');
const LoggingAPI = require('./middleware/LoggingAPI');
const morgan = require('morgan')
const productRouter = require('./routers/productRouter');
const userProfileRouter = require('./routers/userProfileRouter');
const userAuthentication = require('./routers/userAuth')

const PORT = 2000

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome To API')
})

app.use(LoggingAPI)
// For Get Image
app.use('/public', express.static('public'))
// Router For Landing Page
app.use('/', landingPageRouter)
// Router For Products
app.use('/products', productRouter)
// Router For User Profile
app.use('/member', userProfileRouter)

//Router for user authentication

app.use('/auth',morgan('dev'),userAuthentication)



app.listen(PORT, () => console.log(`API Running On Port ${PORT}`))

