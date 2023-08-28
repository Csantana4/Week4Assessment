const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const adviceBtn = document.getElementById("adviceButton")
const affirmationBtn = document.getElementById("affirmationButton")
const attForm= document.getElementById('attribute-form')
const attInput= document.getElementById('attribute-input')
const attList= document.getElementById('attribute-list')
const addAtt= document.getElementById('add-button')


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
const createAtt= body => axios.post("http://localhost:4000/api/attribute", bodyObj)
.then((res) =>{
    console.log(res.data)
    generateAtt(res.data)
})
.catch((error)=>{
    console.error(error)
})




const handleSubmit= (event) =>{
    event.preventDefault()
    let newAtt= attInput.value
        console.log(newAtt)
        let bodyObj= {
            newAtt: newAtt
        }
        
        
    };

 

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
adviceBtn.addEventListener('click', getAdvice)
affirmationBtn.addEventListener('click', getAffirmation)
attForm.addEventListener('click',handleSubmit)


