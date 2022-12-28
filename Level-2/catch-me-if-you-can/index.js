function sum(x, y){
    //check data types first and throw error
    
        console.log(typeof x)
        if(typeof x != "number" && typeof y != "number"){
           throw new Error("Not a number")
        }
        console.log("Did I console log?")
        return x + y;
    
    
    
  }
  try {
      sum(1, 2)
  }
  catch(err){
    console.log(err)
  }


  var user = {username: "sam", password: "123abc"};
  function login(username, password){
    //check credentials
  }
  
  function login(userName, passWord){
    if(userName != user.username && passWord != user.password){
        throw new Error("Invalid Username or Password") 
    }
    else {
        console.log('login successful')
    }
  }

try {
    login('joe', 'brodis')
}
catch(err){
    console.log(err)
}