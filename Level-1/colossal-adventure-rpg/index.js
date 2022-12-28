//functions to get random numbers
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Constructors for enemy and player
function Enemy(name, health, coins) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.coins = coins
    this.enemyAttackStrength = function() {
        return getRandomInt(20, 56);
    }
    this.attack = function(player) {
        player.health = player.health - this.enemyAttackStrength();
        return player.health;
    }
}
function Player(name, health, inventory) {
    this.name = name
    this.health = health
    this.maxHealth = health
    this.inventory = inventory
    this.printStats = function() {
        console.log("Your name: " + player.name)
        console.log("Your health: " + player.health)
        if (this.inventory.coins !== undefined) {
            console.log("Your inventory: " + this.inventory.coins + " coins")
        }
        else {
            console.log("Your inventory is empty")
        }
    }
    this.playerAttackStrength = function() {
        return getRandomInt(20, 51);
    }
    this.attack = function(enemy) {
        enemy.health = enemy.health - this.playerAttackStrength();
        return enemy.health;
    }
}

// conditional variable to end game
var isGameOver = false;

// enemy list
var enemyOne = new Enemy("Chupacabra", 50, 30)
   
var enemyTwo = new Enemy("Bigfoot", 40, 20)

var enemyThree = new Enemy("Nessy", 60, 50)
var enemyList = [enemyOne, enemyTwo, enemyThree]
var currentEnemy = null

//function for selecting a random enemy
function selectEnemy() {
    var randomNumber = getRandomNum(3);
    return enemyList[randomNumber]
}

// game start
console.log("Welcome To Your Big Adventure!")

var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var player = new Player(userName, 100, {})
console.log('Hi ' + userName + '! Let us begin! Collect 100 coins to win');
while(!isGameOver) {
    var isAttacking = true
    var walk = readlineSync.question('Type w to walk, you may find an enemy! Type p or Print to see your stats! ')
    if (walk === "p" || walk === "Print") {
        player.printStats()
    }
    else if (walk === "w"){
        console.log("You walk for a while....")
        var chanceOfEnemy = Math.floor(Math.random() * 3)
        if (chanceOfEnemy === 0) {
            currentEnemy = selectEnemy()
            console.log("An enemy " + currentEnemy.name + " has appeared!")
            while(isAttacking) {
                var attackOrRun = readlineSync.question("Want to attack or run? Type attack or run. ")
                if (attackOrRun === "attack"){
                    player.attack(currentEnemy) 
                    if (currentEnemy.health <= 0) {
                        isAttacking = false
                        currentEnemy.health = currentEnemy.maxHealth
                        player.health = player.maxHealth
                        console.log("You defeated the " + currentEnemy.name + "! You have been rewarded " + currentEnemy.coins + " coins!")
                        console.log("Your HP has been restored!")
                        if (player.inventory.coins !== undefined){
                            player.inventory.coins = player.inventory.coins + currentEnemy.coins
                        }
                        else {
                            player.inventory.coins = currentEnemy.coins
                        }
                        if (player.inventory.coins >= 100) {
                            isAttacking = false
                            isGameOver = true
                            console.log("YOU HAVE " + player.inventory.coins + " COINS!!! YOU WIN!")
                        }
                    }
                    else {
                        currentEnemy.attack(player)
                        console.log("You attacked " + currentEnemy.name + "! It has " + currentEnemy.health + " HP remaining.")
                        console.log(currentEnemy.name + " attacked you! You have " + player.health + " HP remaining.")
                        if (player.health <= 0) {
                            isAttacking = false
                            isGameOver = true
                            console.log("The enemy " + currentEnemy.name + " killed you. Loser.")
                        }
                    }
                }
                else if (attackOrRun === "run") {
                    var randomNumber = getRandomNum(2)
                    if (randomNumber === 0){
                        isAttacking = false
                        console.log("You ran away successfully!")
                        currentEnemy.health = currentEnemy.maxHealth
                    }
                    else {
                        console.log("You couldnt run!")
                        currentEnemy.attack(player)
                        console.log(currentEnemy.name + " attacked you! You have " + player.health + " HP remaining.")
                        if (player.health <= 0) {
                            isAttacking = false
                            isGameOver = true
                            console.log("The enemy " + currentEnemy.name + " killed you. Loser.")
                        }
                    }
                }
            }
        }

        else  {
            console.log("You find nothing.")
        }
    }
}