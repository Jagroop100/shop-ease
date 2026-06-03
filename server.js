const app = require(".app");
const PORT = Process.env.PORT || 3000;
const server = app.listen(PORT, ()=>{
    console.log('Server is running on port $ {PORT}');
})
module.exports =server;