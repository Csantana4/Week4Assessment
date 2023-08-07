const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const gymBtn= document.getElementById
('gym')
const studyBtn= document.getElementById
('study')
const funBtn= document.getElementById
('fun')
const gymNum= document.getElementById
('gym number')
const studyNum= document.getElementById
('study number')
const funNum= document.getElementById
('fun number')

const attForm= document.getElementById('attribute-form')
const attInput= document.getElementById('attribute-input')
const attList= document.getElementById('attribute-list')
const generateAtt= (list)=>{
    attList.innerHTML = ""
    list.forEach((attribute)=>{
        let li = document.createElement
        li.innerText = attributes
        attList.appendChild(li)
    })
}
let addGym= () =>{
    let current = +gymNum.textContent
    gymNum.textContent = current +1
}
let addStudy= () =>{
    let current = +studyNum.textContent
    studyNum.textContent = current + 2
}

let addFun= () =>{
    if(+gymNum.textContent >= 6 && +studyNum.textContent >= 10){
    gymNum.textContent ='0'
    studyNum.textContent = '0'
    let current = +funNum.textContent
    funNum.textContent= current + 1
    }else{
        alert("Need to study and gym first")
    }
}



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

const handleSubmit= (event) =>{
    event.preventDefault()
    let newAtt= attInput.value
        console.log(newAtt)
        let bodyObj= {
            newAtt: newAtt
        }
        axios.post('http://localhost:4000/api/attributes', bodyObj)
        .then((res) =>{
            console.log(res.data)
            generateAtt(res.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    
    
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
attForm.addEventListener('submit',handleSubmit)

gymBtn.addEventListener('click', addGym)
studyBtn.addEventListener('click', addStudy)
funBtn.addEventListener('click', addFun)
