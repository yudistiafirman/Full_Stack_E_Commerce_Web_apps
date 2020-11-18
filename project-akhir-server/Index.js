const express = require('express')
const PORT= 5000

const App= express()


App.listen(PORT,()=>{
    console.log('app listen',PORT)
})


