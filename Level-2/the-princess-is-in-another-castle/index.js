class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked){
        if(namePicked === "Mario"){
            this.name = "Mario"
        }
        else if(namePicked === "Luigi"){
            this.name = "Luigi"
        }
    }
    gotHit(){
        if(this.hasStar === true){
            console.log("You're star protected you!")
            this.hasStar = false;
            return
        }
        if(this.status === "Powered Up"){
            this.status = "Big"
        }
        else if(this.status === "Big"){
            this.status = "Small"
        }
        else {
            this.status = "Dead"
        }
    }
    gotPowerup(){
        if(this.status === "Small"){
            this.status = "Big"
        }
        else if(this.status === "Big"){
            this.status = "Powered Up"
        }
        else {
            this.hasStar = true;
            console.log('You got a star!')
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`Name: ${this.name}\r\nStatus: ${this.status}\r\nTotal Coins: ${this.totalCoins}\r\nHas Star?: ${this.hasStar}\r\n`)
    }
}
let player = new Player("Mario", 0, "Big", false)
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
myInterval = setInterval(function(){
let randNum = getRandomNum(0, 3);
if(randNum === 0){
    player.gotHit()
}
else if(randNum === 1){
    player.gotPowerup()
}
else {
    player.addCoin()
}
player.print();
if(player.status === "Dead"){
    console.log('You lost!')
    clearInterval(myInterval)
}
}, 2000)