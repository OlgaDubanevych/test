const functions = {
    add: (num1, num2) => num1 +num2,
    isNull:() => null,
    checkValue: Olga => Olga,
    createUser: () =>{
      const user = { firstName: "Olga",
      lastName: "Dubanevych"}
      return user;
    },
    
    returnFirstName: () => "Olga",
    userNames: ()=> ['Olga','Alex', 'Irina'],
    newUserNames: ()=> ['Kate','Olga', 'Alex', 'Irina', 'Alex', 'Olga', 'Jane', 'Kate'],
  
  
    cities: ( ) =>['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
    provinces:() => ['ON', 'QC', 'BC', 'NL', 'PE', 'NS', 'NB', 'MB', 'SK', 'AB', 'YT', 'NT', 'NU'],
    users_age:() => (71, 30, 45, 25, 33, 50, 18, 99)
  
  
  }
  
   export default  functions;
  
  