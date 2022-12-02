//Create a new variable called “users” and set it equal to the copied array

const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ];

console.log(users);
console.log("");


//We no longer want to be responsible for the users’ phone numbers. 
//Please create a function that will loop through the array and set the phone numbers = null. Call the function.

const nullifyNumbers = () => {
    users.forEach((user) => {
        user.phone = null
    })
};

nullifyNumbers();

console.log(users);
console.log("");


//Make a function called getUserInfo that returns the user object found using the email passed as a parameter

const getUserInfo = (email) => {
    users.forEach((user) => {
        if (user.email == email) {
            console.log(user);
        }
    })
};

getUserInfo();
console.log("");


// Kurtis Weissnat (Telly.Hoeger@billy.biz)  just submitted a request to change his username to “Eren Yeager”. 
//We want to be able to change people’s usernames easily. 
// Make a function that takes 2 parameters “email” and “newUsername”
// The function should change the username of the user with that email
// Pass your arguments changeUsername("Telly.Hoeger@billy.biz", “Eren Yeager”)

const changeUsername = (email, newUsername) => {
    users.forEach((user) => {
        if (user.email == email) {
            user.username = newUsername
        }
    })
};

changeUsername("Telly.Hoeger@billy.biz", "Eren Yeager");

console.log(users[6]);
console.log("");


// We just started a points program and have a list of how many points each user gets each month based on their subscription. 
//[50, 20, 40, 33, 60, 20, 90, 110, 15, 30] 
// The array is ordered so that arr[0] ‘50’ is for the first user, etc.
// Make a function that will Iterate through this array, grab the data, and create new properties on
//the objects called monthlyPoints and set it equal to the data
// For example to first user should have a property monthlyPoints: 50

let usersPoints = [50, 20, 40, 33, 60, 20, 90, 110, 15, 30];

const givePoints = () => {
  for (i=0; i < users.length; i++) {
    for (j=0; j <usersPoints.length; j++) {
      if (i == j) {
        users[i].monthlyPoints = usersPoints[j]
      }
    }
  }
};

givePoints();

console.log(users);
console.log("");


//Make a variable months and set it equal to a number

let months = 0;

//Make a function that For every month, add points to the users’ account.

function addPoints(months, points) {
  let pointsPerMonth = months * points;
  for (i = 0; i < users.length; i++) {
    users[i].monthlyPoints = (users[i].monthlyPoints + pointsPerMonth)
  }
  console.log(users);
};
addPoints(4, 20);
console.log("");

// This month is special! We are going to add an additional 10% to everyone’s point totals! 
//Create a function to do this (example: if someone has 200 points, we will bump it up to 220)

function add10Percent() {
  for (i = 0; i <users.length; i++) {
    users[i].monthlyPoints = (users[i].monthlyPoints + (users[i].monthlyPoints * .10));
  }
  console.log(users);
};
add10Percent();
console.log("");

//The user with email Chaim_McDermott@dana.io has submitted a request to delete her account. 
//Make a function that will remove her from the array (taking the email as a parameter).

function deleteAccount(email) {
  for (i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      users.splice(i,1);
    }
  }
  console.log(users);
};
deleteAccount("Chaim_McDermott@dana.io");