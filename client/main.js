const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const adviceBtn = document.getElementById("adviceButton")
const affirmationBtn = document.getElementById("affirmationButton")
const myTask =document.getElementById("my-task" )
let message = document.querySelector('#message')
let  inputBtn= document.querySelector('#input-btn')




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getAffirmation = () => {
    axios.get("http://localhost:4000/api/affirmation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getTask = () => {
    axios.get('http://localhost:4000/api/getTasks')
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

function addTask(event){

    event.preventDefault()
    let taskList= document.createElement('span')
    let inputFeild = document.querySelector('input')
    let list = document.querySelector('ul')
let task = document.createElement('li')
taskList.textContent = inputFeild.value
list.append(task)
task.appendChild(taskList)
let deleteBtn = document.createElement('button')
deleteBtn.textContent = ('x')
deleteBtn.addEventListener('click', deleteTask)
task.appendChild(deleteBtn) 
inputFeild.value=''
}

 document.querySelector('form').addEventListener('submit', addTask)
 function deleteTask(event){
    event.target.parentNode.remove() 
   
 }


 

 

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
adviceBtn.addEventListener('click', getAdvice)
affirmationBtn.addEventListener('click', getAffirmation)
myTask.addEventListener('submit',addTask)


