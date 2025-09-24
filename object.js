const student = {
    name: "Hamza",
    age: 21,
    marks: 95.7,
    city: "Sahiwal",
    colors: ["red", "black"]

};
// There is no specific order in object like array
classinfo = {

    hamza: {
        grade : "A+",
        city : "Sahiwal"
    },
    arham: {
        Grade : "B+",
        City: "Alif Soo"

    },
    anas: {
        grade : "A+",
        City :"Bilal Colony"
    }


}; 
// arrays of objects
classinfo1 =[
    { 
        name:"Hassan",
        age:23,
        city:"Tariq-bin Ziad Colony"
    
    },
    {
        name :"Daniyal",
        age: 24,
        city:"okara"
    },
    {
        name :"Hanzala",
        city:"bhawalpur",
        age:25
        }
]

for(let i=0;i<3;i++)

{
    console.log(`This is  Array ${i}` );
    console.log(` Age of ${classinfo1[i].name}  is:${classinfo1[i].age}\n`);
    console.log(` City of ${classinfo1[i].name}  is:${classinfo1[i].city    }`);
}