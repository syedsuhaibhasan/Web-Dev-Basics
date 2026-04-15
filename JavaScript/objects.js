 // let product = {
    //   company:"Mango",
    //   price: 861,
    //   'item-name':"T-shirt",
    // };
    // console.log(product);
    // console.log(product['item-name']);
    
    // //modifying JSON
    // product.company="kela";
    // console.log(product);

    // //Deleting
    // delete product.company;
    // console.log(product);

    //methods in objects
    const mySymbol = Symbol();
    let car = {
      "car-name":"Cultus",
      model:2010,
      tires:4,
      [mySymbol]: "key3",
      price:900000,
      displayPrice: function() {
        console.log(`Price of the car is PKR ${this.price}`);
      }
    };
    // Object.freeze(car);
    car.model = 2026;
    car.displayPrice();
    //destructuring object
    const {model,tires,steering=2} = car;
    console.log(model,tires,steering);
    console.log(car);

    //singleton object
    const gamer = new Object();
    gamer.id = "pat-xxx";
    gamer.lastLogin = "2025-01-01"
    gamer.isloggedin = true;

    const newObj = {
      "fullname":{
        "firstname":"Syed Muhammad",
        "lastname": {
          "name": "Suhaib Hasan",
          "caste": "Syed"
        }
      },
      "roll-no":"24F-CS-192",
      "Departement":"Computer Science"
    }

  // optional chaining
    console.log(newObj.fullname?.lastname.caste);

  // combining objects
  const firstName = {1:"Syed ",2:"Muhammad "}
  const LastName = {3:"Suhaib ",4:"Hasan "}

  // const fullName = Object.assign({},firstName,LastName);
  // spread operator used mostly
  const fullName = {...firstName,...LastName}
  console.log(fullName);
  
  const users = [
    {
      uid:"1234",
      "name":"karmai",
    },
    {
      uid:"1934",
      "name":"iman"
    },
    {
      uid:"1834",
      "name":"kamran",
    },
    {
      uid:"1534",
      "name":"zubair",
    },
  ]
  console.log(users[1].uid)
  console.log(Object.keys(users))
  console.log(Object.values(users))

  //AUTO BOXING
  //conversion of primitives in to objects to use methods on them
  // console.log("My name is syed muhammad suhaib hasan".replace("syed muhammad", "S.M"));