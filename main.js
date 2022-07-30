calos1 = 0;
calories = 0;
function calculate() {
    weight = document.getElementById("weight").value;
    gender = document.getElementById("gender").value;
    age = document.getElementById("age").value;
    console.log(weight);
    cupsAmount = Math.round((weight*0.67)/8.115);
    console.log(cupsAmount);
    litresAmount = Math.round((cupsAmount*215)/1000);
    document.getElementById("water").innerHTML = "You should drink approximately " + cupsAmount + " cups or "+ litresAmount+" litres of water per day";
    kilos = weight*2.2;
    if (gender == "female") {
        calos1 = Math.round((kilos*0.9)*24);
        if (age < 19) {
            calories = calos1*1;
            document.getElementById("calories").innerHTML = "You should get approximately  "+calories+" calories per day";
        }
        else if (18 < age < 29) {
            calories = Math.round(calos1*0.95);
            document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
        }
        else if (28 < age < 39) {
            calories = Math.round(calos1*0.9);
            document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
        }
        else if (age > 38) {
            calories = Math.round(calos1*0.85);
            document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
        }
    }
        else if (gender == "male") {
            calos1 = Math.round((kilos*1)*24);
            if (age < 15) {
                calories=calos1*1;
                document.getElementById("calories").innerHTML = "You should get approximately  "+calories+" calories per day";
            }
            else if (14 < age < 21) {
                calories = Math.round(calos1*0.95);
                document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
            }
            else if (20 < age < 29) {
                calories = Math.round(calos1*0.9);
                document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
            }
            else if (age > 28) {
                calories = Math.round(calos1*0.85);
                document.getElementById("calories").innerHTML = "You should get approximately "+calories+" calories per day";
            }
    }
    carbs = calories*0.15;
    document.getElementById("carbs").innerHTML="You should get approximately "+carbs+" grams of carbs per day";
    fats = Math.floor(calories*0.022);
    document.getElementById("fats").innerHTML="You should get approximately "+fats+" grams of fats per day";
}