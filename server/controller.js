let attributes = []

module.exports ={
    addAtt:(req,res)=>{
        console.log("add att")
        res.status(200).send(endpoint);
    }
}
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}
module.exports = {

    getFortune: (req, res) => {
        const fortunes= ["You will recieve good new!", "You will find out the answer you were hoping for!", "Your lucky number is 4.", "Good fotune will come to you."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    }

}
