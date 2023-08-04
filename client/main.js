const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const positiveAtt= document.getElementById("positive-attributes")
let attInput = document.getElementById("attributes")
const compliment= document.getElementById("attribute-list")

// const handleSubmit= (event) =>{
//     event.preventDefault()
//     let newAtt= attInput.value
//     console.log(newAtt)
//     let bodyObj = {
//         newAtt:
//     }
//     axios
//     .post('http://localhost:4000/api/compliment/')
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
positiveAtt.addEventListener('submit',handleSubmit)
