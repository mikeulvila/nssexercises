/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

function coinCounter (money) { 
//Initialize a JavaScript object to hold the coins 
	var coinPurse = {
		quarters: 0,
    	dimes: 0,
    	nickels: 0,
    	pennies: 0
	};
	money = money * 100;
	coinPurse.quarters = Math.floor(money / 25);
	money = money - (coinPurse.quarters * 25);
	coinPurse.dimes = Math.floor(money / 10);
	money = money - (coinPurse.dimes * 10)
	coinPurse.nickels = Math.floor(money / 5);
	money = money - (coinPurse.nickels * 5)
	coinPurse.pennies = Math.floor(money / 1);

	return coinPurse; 
}

var coins = coinCounter(.67) 
console.log(coins);

function coinCounter (money) {
   var i, num,
       coinPurse = [],
       coins  = [
           [25,  "quarter", "quarters"],
           [10,  "dime",    "dimes"   ],
           [5,   "nickel",  "nickels" ],
           [1,   "penny",   "pennies" ]
       ];
       console.log("coins",coins);

   money = Math.round(money * 100);
   console.log("money", money);
   for (i = 0; i < coins.length; i++) {
       num = Math.floor(money / coins[i][0]);
       console.log("num", num);
       money -= num * coins[i][0];
       console.log("money inside loop", money);
       
       if (num) {
           if (num < 2) {
               coinPurse.push(num + " " + coins[i][1]);
           } else {
               coinPurse.push(num + " " + coins[i][2]);    
           }
           console.log("coinPurse", num);
       }
   }
   return coinPurse.join(", ");
}

console.log("coinCounter", coinCounter(1.13));














