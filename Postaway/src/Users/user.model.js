
let id = 0;

export default class UserModel {
    constructor( id ,name , email , password){
        this.id = ++id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser(data){
        const { name, email, password } = data;
        const newUser = new UserModel(name, email, password);
        users.push(newUser);
        return newUser;
    }


    static confirmLogin(data) {
        const { email, password } = data;
        let isValid = false;
        users.forEach((user) => {
          if (user.email === email && user.password === password) isValid = true;
        });
        return isValid;
    }

    static getAllUsers() {
        return users;
      };
  
}


var users =[
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "123456"
    },
    
];





//gettinguser
//addinguser
//confirminguser
//id name email password
//registrationa n login 
//profile add feature