//Nested Objects :-


//An object within an object :-

let phoneDetails =
{
name:"Apple",
model:`14Pro`,
price:`1lakh`,

//Nested object
brandDetails : {
    yearOfLaunch : 2023,
    brand : `i14`,
    brandCode : 1010

}


};

console.log(phoneDetails);
//{ name:"Apple",
// model:`14Pro`,
// price:`1lakh`,
// brandDetails : {
//     yearOfLaunch : 2023,
//     brand : `i14`,
//     brandCode : 1010
// }
// };





console.log(phoneDetails["brandDetails"]);
// {
//     yearOfLaunch : 2023,
//     brand : `i14`,
//     brandCode : 1010

// }





