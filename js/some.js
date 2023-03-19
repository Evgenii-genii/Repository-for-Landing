/*let partNumbers = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
let fucSome = function(arr) {
    
        if (/\d\d\d\d$/i.test(arr)) {
            return false
        } else if (/\d\d\w\w$/i.test(arr)){
            return true
        } else {
            return false
        }
    
}

let result = partNumbers.filter(fucSome)
console.log(result)
*/
/*let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"
//let layout = "fhhjjsjnnndjck"
let result = []
if (layout.match(/\d{1,}/g)){
    result = layout.match(/\d{1,}/g)
}
console.log(result.map(e => {
		if (e%2==0){
    		return e*e 
		} else {
    		return Number(e)
		}
}))

let tasks = [
    {title: "Умыться" , completed: true},
    {title: "Сделать зарядку" , completed: true},
    {title: "Приготовить завтрак" , completed: false}
]
let result = []
for (let value of tasks) {   
    result.push(value.title)
}
console.log(result)

let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"]
console.log(values.slice((values.indexOf(true)),(values.lastIndexOf(false))+1))

let values = [10, 185, 66001, 8021]
if(values.includes(values.find( e => {
    if (/^\d\d\d\d$/.test(e)){
        return true
    }
}))) {
    console.log(values.indexOf(values.find( e => {
        if (/^\d\d\d\d$/.test(e)){
            return true
        } else {
            return false
        }
    })))
} else {
    console.log("Искомый элемент не был найден")
}

let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]
for(let i=0; i<users.length; i++) {
    if (/\s/g.test(users[i].role)){
        console.log(i)
    }
}
let users = [
    {login: "user1", role: "Admin"},
    {login: "user2", role: "State user"},
    {login: "user3", role: "Moderator"}
]
users.forEach(element => {
    if (/\s/g.test(element.role)){
        console.log(users.indexOf(element))
    }
});

let array = [[1,2,3],[1,2],[1,2,3,4]]
console.log(array.sort(((a, b) => {
if (a == b) return 0;
if (a < b) return -1;
if (a > b) return 1;
})))

let randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]

let randValues2 = randValues.sort((a, b) => {
    if (typeof a==="number") return -1;
})
console.log(randValues2.sort((a, b) => {
    if (a == b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
}))

let words = ["Заказ", "Такси", "Доход"]
let result = [0, 0]
for (let i=0; i<words.length; i++) {
    let arr =(words[i].toLowerCase()).split('')
    let arr2 = ((words[i].toLowerCase()).split('')).reverse()
    if (arr.join('') == arr2.join('')) {
        result[0] +=1   
    } else {
        result[1] +=1
    }
}
console.log(result)

let dates = "23.04.1996 07.10.2002 15.08.1945"
let arr = dates.split(' ')
result = []
    for (let value of arr) {    
        result.push((value.split('.')).join('/'))
    }
console.log(result)

let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
let arr = tickets.split('.')
let arr2 = []
let result = {
    "train" : [],
    "airplane" : []
}
for (let value of arr) {
    if (value.length !== 0) {
        arr2.push(value.split(': '))
    }
}
for (let value of arr2) {
    if (value[0]=="Train") {
        result.train = value[1].split(', ')
    } else {
        result.airplane = value[1].split(', ')
    }
}
console.log(result)

let numbers =  [23,4,2,4,3,11,3,12,3,23]
let result = numbers.reduce((previousValue, currentItem, currentIndex) => {
    
    if ((previousValue[1] + currentItem) <= 50) {  
        return [currentIndex, (previousValue[1]+currentItem)] 
        
    } else {
        return [previousValue[0], (previousValue[1]+currentItem)] 
    }
    
},[0, 0])

console.log(result[0]+1)

let values = ["100", "30", "Не число", "20", "Тоже не число"]
console.log(values.reduce((previousValue, currentItem)=> {
    
    if (!isNaN(currentItem)){
        console.log(previousValue)
        return previousValue + Number(currentItem)   
    } else {
        return previousValue
    }
}, 0))

let array_1 = [2, 4, 7, 8, 1]
let array_2 = [2, 5, 11, 6, 1]

function intersection(array_1, array_2) {
    let result1 = []
    for (let i=0; i<array_1.length; i++){
        for (let j=0; j<array_2.length; j++){
            if (array_1[i] == array_2[j]) result1.push(array_1[i])
        }
    }
    return result1
}
console.log((intersection(array_1, array_2)).sort((a, b) => b - a))


let car  = {
    model: "Audi", 
    color: "white",
    weight: 1850,
    engine: "170 hp"
}

for (let values in car) {
    if (values == "engine") delete car[values]
}
console.log(car)


let result = {}

for (let values in car) {
    if (values !== "engine") {
        result[values] = car[values]
    }
}

let array = [true, 4, "word", "10n"]
let result = function count(a) {
	console.log("Количество элементов в массиве: ".concat(a.length))
}
result(array)

let employee  = [
    ["firstName", "Ivan"], 
    ["lastName", "Ivanov"],
    ["hireDate", "21.10.2015"]
]
const arr = new Map(employee)

if (arr.get("hireDate")) {
    arr.delete("hireDate")
}
arr.set("jobName", "IT PROG")
let result = []
for (let i of arr) {
    result.push(i)
}
console.log(result)

let array = [
    [ "number", "word" ], 
    [ "number", "word" ],
    [ "string", "word" ],
    [ "object", 1]
]

let result = function countString(a) {
    let count1 = 0
    for (let values of a) {
        for (let i=1; i<a.length; i++) {
            if(typeof(values[i])=="string") {
                count1 +=1
            }
        }
    }
    return ("Количество строковых элементов в именованном массиве: ".concat(count1))
}

console.log(result(array))

const hero = {
    heroName: 'Герой #1',

    sayNormal(message) {
      console.log(`${this.heroName}: ${message}`);
    },
    sayLouder(message) {
      console.log(`${this.heroName}: ${message.toUpperCase()}`);
    }
  }
  
  function say(isLouder) {
    let sayFn = isLouder ? hero.sayLouder : hero.sayNormal;
    sayFn = sayFn.bind(hero);
  
    sayFn("Привет");
  }
  
  say(false); // Герой #1: Привет!

function createHero(name, defaultX = 0, defaultY = 0) {
    return {
      name,
      x: defaultX,
      y: defaultY,
      move(newX, newY) {
        this.x = newX;
        this.y = newY;
      }
    }
  }

let pet_1 = { 
    name: "Шарик", 
    age: 10 
};
let pet_2 = { 
    name: "Жучка", 
    age: 5
};
let result = { 
    
  sayHi:  function getName() {
    console.log(`${this.name} ${this.age}`)
}
}
pet_1.sayHi = result.sayHi.bind(pet_1)
pet_2.sayHi = result.sayHi.bind(pet_2)

pet_1.sayHi()
pet_2.sayHi()


let pet = { 
    name: "Диксон", 
    breed: "Немецкая овчарка" 
}

function getDescription() { 
    console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
}
pet.getDescription = getDescription.bind(pet)
pet.getDescription()

let props = { 
    name: "Анатолий", 
    age: 29,
    sayHi: ()=>"привет"
}
function getValue() {
    let obj = []
    for (let value in props) {   
        if(typeof props[value] !== "function"){
            obj.push(value+': '+ props[value])
        }
    }
    console.log(`Значения свойств объекта props (${obj.join(', ')})`)
}
const getValue1 = getValue.bind(props)
getValue1()

let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
}
let arr = []
for (let value in employees) {
    if (typeof employees[value] !== "function"){
        arr.push(value)
        
    }
}
console.log(arr.join(', '))

let firstName = "Александр"
let lastName = "Петров"

let user = {
    firstName,
    lastName,
    set fullName(value){
        let arr = value.split(' ')
        return (this.firstName = arr[0], this.lastName = arr[1])
    },
    get fullName(){
        return (this.firstName + ' ' + this.lastName)
    },
    
}

console.log(user.fullName)
user.fullName = "amar haiam"
console.log(user.fullName)
console.log(user.firstName)
console.log(user.lastName)


let name = "Pizza"
let phone = "81234567890"

class Delivery {
    constructor(name, phone, validPhone = true){
    this.name = name;
    this.phone = phone;
    this.validPhone = validPhone;
    }
    validPhonefun() {
        if (/\+/.test(this.phone)) {
            return this.validPhone = true
        } else {
            
            return this.validPhone = false
        }
    }
}
let deliveryName = new Delivery (name, phone)
deliveryName.validPhonefun()
console.log(deliveryName.validPhone)

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions {
	constructor(name, create, read, update, remove) {
		super(create, read, update, remove);
		this.name = name;
	}
}
let result = new User('Mary')
console.log(result)

let array = [2, 4, 7, 8, 1, -4]
let num = 2
function queue(num, array) {
    array.sort((a, b) => a - b);
    result = 0;
    for(let i = 0; i< num; i++){
        result += array[i]
    }
    return result
}
console.log(queue(num, array))

const numbers = "1 3 45 2 67 188 9 "
function highAndLow(numbers){
    let result = []
    for(let i = 0; i < numbers.length-1; i++) {
      if(numbers.i !== ' '){
        result += numbers.i
      }  
    }
    result.sort((a, b) => a - b);
    return (result[0], result[result.length-1])
  }
console.log(highAndLow(numbers))

const numbers = "1 3 45 2 67 188 9"
function highAndLow(numbers){
  let result = numbers.split(' ')
  result.sort((a, b) => a - b);
  return `${result[0]} ${result[result.length-1]}`
}

console.log(highAndLow(numbers))


function getCount(str) {
    let count = 0
    
    for(let i =0; i < str.length; i++) {
      if (str[i] === 'a'){
        count += 1 
        console.log(str[i])
      }
    }
    return count;
  }
  console.log(getCount('bracadabra'))
  
  function getCount(str) {
    let count = 0
    
    for(let i =0; i < str.length; i++){
      if (str[i] == 'a'||'e'||'i'||'o'||'u') count += 1 
    }
    return count;
  }
  let a = "ajouieyt"

  getCount(a)


let paragraph = document.createElement("p");
paragraph.innerText = "Ура! Мой скрипт отработал верно!";

document.querySelector("#root").appendChild(paragraph);

let res1 = document.querySelector('#div1').children

for (i = 0; i< res1.length+1; i++) {
    document.querySelector('#div2').append(res1[0]) 
}


const values = ["велосипед", "ролики", "лыжи"];
let box = document.querySelector('#div1').children

for (let i = 0; i< box.length; i++) { 
    console.log(`+${i}`)
    console.log(box.length)
	for (let j = 0; j< values.length; j++) {
		if(box[i]!=undefined){
            
		if(box[i].textContent == values[j]) {
		document.querySelector('#div2').append(box[i])
		console.log('=)')
        i = -1
    }
    }
	}
	
}

const values = ["велосипед", "ролики", "лыжи"];
let box = document.querySelector('#div1').querySelectorAll('p')

box.forEach(element => {
    for (let j = 0; j< values.length; j++) {
		
        if(element.textContent == values[j]) {
		document.querySelector('#div2').append(element)
        
        }
	}
});

const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];

let box = document.querySelector('#root')
tasks.forEach(element => {
    let a = document.createElement("p")
    a.innerText = element
    box.append(a)


});




function createTagList(a, b, d) {
    return {
        [a] : document.querySelectorAll(a).length,
        [b] : document.querySelectorAll(b).length,
        [d] : document.querySelectorAll(c).length
    }
  }
  
  console.log(createUser("div", "p","h2"));




  const tags = {
   div: document.querySelectorAll('div').length,
    p: document.querySelectorAll('p').length,
    h2: document.querySelectorAll('h2').length
  };
  console.log(tags)
let box = document.querySelector('#tasks')
let liCont = document.querySelector('#tasks').querySelectorAll('li')

let sum = box.firstElementChild.textContent.length

liCont.forEach(element => {
    if (element.textContent.length < sum) {
        box.append(element)
        console.log(element.textContent.length)
        sum = element.textContent.length
    }
});

let a = document.querySelector('#tasks')
let option = document.createElement('option')
option.textContent = i
option.value = i
select.append(option)

function updateScroll() {
    
    if (window.scrollY > 0) {
        querySelector('header').classList.add('header__scrolled')
    } else {
        document.querySelector('header').classList.remove('header__scrolled')
    }
  }
    window.addEventListener('scroll', updateScroll);



let button = document.querySelector('.copy')
function makeNew() {
	let newButton = document.createElement('button')
	newButton.textContent = button.textContent
	document.querySelector('.card').appendChild(makeNew)
	console.log('%-')
}

	button.addEventListener('click', makeNew)


let card11 = document.querySelector('.card1').querySelectorAll('p')
console.log(card11)
card11.forEach(element => {
    function count() {
        element.textContent = Number(element.textContent) + 1
    }
    element.addEventListener('click', count)
});


let firsDiv = document.querySelector('#div1').querySelectorAll('p')
let secondDiv = document.querySelector('#div2').querySelectorAll('p')



let card11 = document.querySelector('.card').querySelectorAll('p')


card11.forEach(element => {
  
    function count() {
       if(element.parentElement.id =='div11') {
        console.log(card11)
        document.querySelector('#div2').appendChild(element)
        
       } else if(element.parentElement.id=='div2') {
        document.querySelector('#div1').appendChild(element)
       }
    }
    element.addEventListener('click', count)
});
*/

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
     
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
     
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      addSmoothScroll(anchor);
})

  

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  }

  addSmoothScroll(document.querySelector('.more-button'));  