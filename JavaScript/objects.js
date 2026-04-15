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
    let {model} = car;
    console.log(model);
    console.log(car);

    //singleton objecy
    const gamer = new Object();
    gamer.id = "pat-xxx";
    gamer.lastLogin = "2025-01-01"
    gamer.isloggedin = true;
    
    //AUTO BOXING
    //conversion of primitives in to objects to use methods on them
    // console.log("My name is syed muhammad suhaib hasan".replace("syed muhammad", "S.M"));