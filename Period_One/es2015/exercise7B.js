//Exercise 7B

function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
  }

  var {lastName,phone} = getPerson();
  console.log(`Lastname : ${lastName}, Phone : ${phone}`)