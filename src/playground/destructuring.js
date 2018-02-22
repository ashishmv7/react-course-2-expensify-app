// //console.log('yo')
// const person = {
//     //name:'blackeye',
//     age:'rs6',
//     location:{
//         city:'bangalore',
//         temp:'25'
//     }
// }
// //const name=person.name
// const {name:firstname='unknown name',age}=person
// console.log(`${firstname} is ${age}`)
// console.log('it is 92 in philadelphia')
// const {city,temp}=person.location
// console.log(`it is ${person.location.temp} in ${person.location.city}`)
// if(city && temp){
// console.log(`it is ${temp} in ${city}`)}
// const book ={
//     title:'book title',
//     author:'famous author',
//     publisher:{
//         name:'damm famous publisher'
//     }
// }
// const{title='title unknown',author='author unknown'}=book
// const{name='publisher unknown'}=book.publisher
// console.log(`book name ${title} author is ${author} published by ${name}`)
const address =['jp nagar','bangalore','karnataka']
const [,city,state,code='560078']=address
console.log(`you are in ${code}`)
const cofee = ['black-cofee', 'special-cofee', 'regular-cofee']
const size = ['s', 'm', 'l']
const price=['100', '200', '75']
const item =[cofee,size,price]
const[cofee1,size1,price1]=item
console.log(`${cofee1} sizes are ${size1} price are${price1}`)