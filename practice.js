// //We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
//   // 1) What is the purpose of the 'this keyword'?

//       //Answer
//       'To allow a function more versatility in how it performs its code and uses its arguments'

//   // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//       //Answer
//       Implicit: Implicit is the value assigned to "this" when attached to an object, referring to the object.
//       Explicit: setting what the keyword is bound to manually via .call(), .bind(), and .apply().
//       Default: Default is the initial value of "this", referring to the Window.
//       New: new is used in the creation of new objects, particularly in constructor functions. By calling 
//       new Constructor(); the "this" keyword inside the constructor is bound to the object being created.

//   // 3) What is the difference between call and apply?

//       //Answer
//       'Call takes in a list of values with commas while apply takes in an array of data'

//   // 4) What does .bind do?

//       //Answer
//       '.bind permanently overrides the context of this for a given function as well as permanently setting
//       arguments if desired.'


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'nvankems',
      email: 'nvankems@yahoo.com',
      getUsername: function () {
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(Make, Model, Year) {
    this.make = Make,
    this.model = Model,
    this.year = Year,
    this.move = 0,
    this.moveCar = function () {
      return this.move + 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  getYear.call(prius);
  getYear.call(mustang);



//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.bind(myUser), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  //It will console.log myUser's username

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //The window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
