const express = require('express');
const app = express();
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDefinition = require('./utils/swagger');
const cors = require('cors');

// Swagger implementation;
// const swaggerOptions = {
//     swaggerDefinition,
//     apis: ['./routes/*.js', './utils/swagger.js'],
//   };
//   const swaggerDocs = swaggerJsDoc(swaggerOptions);
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));


const userRouter = require('./routes/usersRouter.js')
app.use('/angularapi/login', userRouter)


const PORT = process.env.PORT || 9000

app.listen(PORT, ()=>{
    console.log(`server up on ${PORT}`);
})