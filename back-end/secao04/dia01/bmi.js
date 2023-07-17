const readline = require('readline-sync')

const imcCalc = () => {
  const weight = readline.questionInt('What\'s your weight in kilos (kg)? ')
  const height = readline.questionFloat('What\'s your height in centimeters (cm)? ')
  const bmi = (weight / ((height/100) ** 2)).toFixed(2)

  switch (bmi) {
    case bmi < 18.5:
      console.log(`Your BMI is ${bmi}, which is below average.`)
      return;
    
    case bmi >= 18.5 && bmi < 25:
      console.log(`Your BMI is ${bmi}, which is good!`)
      return;
    
    case bmi >= 25 && bmi < 30:
      console.log(`Your BMI is ${bmi}, which is above average.`)
      return;

    case bmi >= 30 && bmi < 35:
      console.log(`Your BMI is ${bmi}, which is obesity degree 1.`)
      return;
    
    case bmi >= 35 && bmi < 40:
      console.log(`Your BMI is ${bmi}, which is obesity degree 2.`)
      return;

    default: 
      console.log(`Your BMI is ${bmi}, which is obesity degrees 3 and 4.`)
  }
}

imcCalc()
