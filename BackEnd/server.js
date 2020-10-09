const app = require('./app')

const port = 5000;

app.listen(port, err  => {
    if(err){
      console.error(err)
    }else{
      console.log(`Server running on port ${port}`);
    }
  })