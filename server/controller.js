module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Your lucky number is 4", "Great fortune is coming your way", "A beautiful, smart, and loving person will be coming into your life.","A faithful friend is a strong defense.","A fresh start will put you on your way."];
      
        
        let randomCookie = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomCookie];
      
        res.status(200).send(randomFortune);
    },
    getAdvice: (req, res) => {
        const advice = ["Sleep Early", "Eat Healthy", "Stay Focused","Don't give up"];
      
        
        let randomHelp = Math.floor(Math.random() * advice.length);
        let randomAdvice = advice[randomHelp];
      
        res.status(200).send(randomAdvice);
    },
    getStressRelief: (req, res) => {
        const stressRelief = ["Hit the gym", "Get enough sleep", "Give yourself time to rest","have a good social and work life balance"];
      
        
        let randomFact = Math.floor(Math.random() * stressRelief.length);
        let randomTip = stressRelief[randomFact];
      
        res.status(200).send(randomTip);
    },
    getAdvice: (req, res) => {
        const advice = ["Sleep Early", "Eat Healthy", "Stay Focused","Don't give up"];
      
        
        let randomHelp = Math.floor(Math.random() * advice.length);
        let randomAdvice = advice[randomHelp];
      
        res.status(200).send(randomAdvice);
    },
    getTask: (req, res) => {
        res.status(200).send(res[0])
    },
    
    deleteTask: (req, res) => {
            res.status(200).send(res[0])
      
    }

}
 