// """
// Given a log file with entries like:
// SESSION_ID, TIMESTAMP, ACTION
// 12341323, 1470813365, product_view
// 12341323, 1470814365, purchase_click
// 42344234, 1470815365, product_view
// 12341323, 1470816365, purchase_credit_card
// 32466234, 1470827365, product_view
// 42344234, 1470828365, purchase_click
// 12341323, 1470829365, purchase_complete
// 63344234, 1470840365, purchase_click

// FUNNEL = [“product_view”, “purchase_click”, “purchase_credit_card”, “purchase_complete”]

// 1. Write code that displays the # of unique users reaching each step, the % of users who drop off at each step, and the final conversion rate.
// 2. Ensure that the funnel steps are pre - requisites of one another.
// 3. Results should be segmented by day.

//     i.e:
// 10 / 13 / 2018
// product_view 100, 0 %
//     purchase_click 50, 50 %
//         purchase_credit_card 25, 50 %
//             purchase_complete 10, 60 %
//                 Final Conversion: 10 %
//                     """

//SESSION_ID, TIMESTAMP, ACTION
// let inputs = [
//   [12341323, 1470813365, "product_view"],
//   [12341323, 1470814365, "purchase_click"],
//   [42344234, 1470815365, "product_view"],
//   [12341323, 1470816365, "purchase_credit_card"],
//   [32466234, 1470827365, "product_view"],
//   [42344234, 1470828365, "purchase_click"],
//   [12341323, 1470829365, "purchase_complete"],
//   [63344234, 1470840365, "purchase_click"]
// ];

//Keep counterObject variables for NumberOfUsers, NumUsersPurchaseClick, NumUsersCreditCard, NumUsersPurchaseComplete
//User ={'session_id': [funnel_array], }
// As the log comes in increment NumberOfUsers with each distinct session_id,
// add new key / value in user object, value = initialize array['product_view']
// check it User[session_id] , if exists, length of User[session_id]
// if length of that array is n make sure FUNNEL[n] === User[session][n]
// if so, add new item User[session].push(ACTION)
// counterObject = {'ACTION': n }
//  counterObject[ACTION]

// let inputLine; //[session_id, timestamp, action]
// const userObject = {}
// const counterObject = { product_view:0, purchase_click:0, purchase_credit_card:0, purchase_complete:0}
// const FUNNEL = ['product_view', 'purchase_click', 'purchase_credit_card', 'purchase_complete']
// let totalUsers = Object.keys(userObject).length
// let conversionRateView = counterObject["product_view"] / totalUsers
// let conversionRateClick = counterObject["purchase_click"] / totalUsers
// let conversionRateCard = counterObject["purchase_credit_card"] / totalUsers
// let conversionRateComplete = counterObject["purchase_complete"] / totalUsers

//counterObject = { product_view: 0, purchase_click: 0, purchase_credit_card: 0, purchase_complete: 0 }
//dateObject = {'01/07/2020': counterObject}
//userObject = {'01/06/2020':{0234203: [], 9983909:[]}, '01/07/2020': {12392398: [], 1321231:[]}}

class Purchase {
  constructor() {
    this.dateObject = {};
    // this.counterObject = { product_view: 0, purchase_click: 0, purchase_credit_card: 0, purchase_complete: 0 }
    this.funnel = [
      "product_view",
      "purchase_click",
      "purchase_credit_card",
      "purchase_complete"
    ];
  }
  logInfo(inputs) {
    let counterObject = {
      product_view: 0,
      purchase_click: 0,
      purchase_credit_card: 0,
      purchase_complete: 0
    };
    let userObject = {};
    for (let i = 0; i < inputs.length; i++) {
      let inputLine = inputs[i];
      let session = inputLine[0];
      let time = inputLine[1];
      let dfull = new Date(time * 1000);
      let date = dfull.toDateString();
      let action = inputLine[2];

      //conditions:
      //1) userObject does not have date key for that date
      //2) dateObject does not have date key for that date
      //3) user sessionId does not exist in userObject[date]
      //4)

      if (!userObject[date]) {
        userObject[date] = {};
        userObject[date][session] = [action];
        this.dateObject[date] = counterObject;
      } else if (!userObject[date][session]) {
        userObject[date][session] = [action];
      } else {
        userObject[date][session].push(action);
      }
      this.dateObject[date][action] += 1;
    }
    console.log("dateObject", this.dateObject);
    console.log("userObject", userObject);

    let recDates = Object.keys(this.dateObject);
    let numDates = recDates.length;
    for (let j = 0; j < numDates; j++) {
      let numUsersForDay = Object.keys(userObject[recDates[j]]).length;
      this.conversionRates(recDates[j]);
    }
  }

  conversionRates(date, numUsersForDay) {
      let actions = Object.keys(this.dateObject[date]);
      let totalUsers = this.userObject[date]
    console.log("actions: ", actions);
    // for (let i = 1; i < this.funnel.length; i++) {
    //   let prevStep = this.funnel[i - 1];
    //   let step = this.funnel[i];
    //   let numUsersAtPrevStep = this.counterObject[prevStep];
    //   let numUsersAtStep = this.counterObject[step];
    //   let difference = numUsersAtPrevStep - numUsersAtStep;
    //   console.log(step, numUsersAtStep, difference / numUsersAtPrevStep);
    // }
    // console.log("numUsersForDay: ", numUsersForDay);

    for (let i = 0; i < actions.length; i++) {
      let prevStepNumUsers;
      let stepNumUsers;
      let percentChange;
      stepNumUsers = this.dateObject[date][actions[i]];
      if (i > 0) {
        prevStepNumUsers = this.dateObject[date][actions[i - 1]];
        percentChange = (stepNumUsers / prevStepNumUsers) * 100;
      } else {
        prevStepNumUsers = 0;
        percentChange = 100;
      }
      let step = actions[i];
      console.log(
        date,
        "\n",
        step,
        ":",
        stepNumUsers,
        percentChange,
          "%",
        "Final Conversion: ", (stepNumUsers % )
      );
    }
  }
}
let inputs = [
  [12341323, 1470813365, "product_view"],
  [12341323, 1470814365, "purchase_click"],
  [42344234, 1470815365, "product_view"],
  [12341323, 1470816365, "purchase_credit_card"],
  [32466234, 1470827365, "product_view"],
  [42344234, 1470828365, "purchase_click"],
  [12341323, 1470829365, "purchase_complete"],
  [63344234, 1470840365, "purchase_click"]
];

let p = new Purchase();
p.logInfo(inputs);

// const logInfo = function (inputLine) {
//     let session = inputLine[0]
//     let time = inputLine[1]
//     let action = inputLine[2]

//     if (!userObject[session]) {
//         userObject[session] = [action] //assume product_view
//         counterObject[action] += 1
//     } else {
//         let funnelArr = User[session]
//         let funnelIdx = funnelArr.length
//         if (FUNNEL[funnelIdx] === action) {
//             userObject[session].push(action)
//             counterObject[action] += 1
//         }
//     }
// }
// console.log()

// const conversionRates = function (userObject, counterObject) {
//     for (let i = 1; i < FUNNEL.length; i++){
//         let prevStep = FUNNEL[ i - 1]
//         let step = FUNNEL[i]
//         let numUsersAtPrevStep = counterObject[prevStep]
//         let numUsersAtStep = counterObject[step]
//         let difference = numUsersAtPrevStep - numUsersAtStep
//         let step = FUNNEL[i]
//         console.log(step, numUsersAtStep, difference/numUsersAtPrevStep)

//     }
// }
