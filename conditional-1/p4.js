//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username = "abc@masai.com"
let reg_password = 12345;
let ent_username = "abcd@masai.com"
let ent_password = 12345;

if(reg_username == ent_username){
  if(reg_password == ent_password){
    console.log("login");
  }
  else{console.log("Incorrect Password")
      }
} else{console.log("Wrong Credentials")}
 