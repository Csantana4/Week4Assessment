let attributes=[]
module.exports={
    addAtt:(req, res)=>{
        console.log(req.body)
        attributes.push(req.body.newAtt)
        res.status(200).send(attributes)
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
    const fortune = ["Your lucky number is 4", "Great fortune is coming your way", "You will achieve in your goals","A beautiful, smart, and loving person will be coming into your life."];
  
    
    let randomCookie = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomCookie];
  
    res.status(200).send(randomFortune);
}
}