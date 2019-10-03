/* Your Code Here */
// Your code here

function createEmployeeRecord(erArray) {
    const [firstName, familyName, title, payRate] = erArray
    return {
        firstName: firstName,
        familyName: familyName, 
        title: title,
        payPerHour: payRate, 
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(erArray) {
    return erArray.map(createEmployeeRecord)
}

function createTimeInEvent(dateTimeStr) {
    const dateTSplit = dateTimeStr.split(" ")
    const dateTDate = dateTSplit[0] 
    const dateTHour = parseInt(dateTSplit[1])
    const dateTIn ={
        type: "TimeIn",
        hour: dateTHour, 
        date: dateTDate
    }
    this.timeInEvents.push(dateTIn)
    return this
}

function createTimeOutEvent(dateTimeStr) {
    const dateTSplit = dateTimeStr.split(" ")
    const dateTDate = dateTSplit[0] 
    const dateTHour = parseInt(dateTSplit[1])
    const dateTOut ={
        type: "TimeOut",
        hour: dateTHour, 
        date: dateTDate
    }
    this.timeOutEvents.push(dateTOut)
    return this
}

function hoursWorkedOnDate(dateStr){
    const timeInEvent = this.timeInEvents.find(timeIn => timeIn.date === dateStr)
    const timeOutEvent = this.timeOutEvents.find(timeOut => timeOut.date === dateStr)
    const hussleTime = timeOutEvent.hour - timeInEvent.hour
    return hussleTime / 100
}

let wagesEarnedOnDate = function(dateStr){
    const hussleTime = hoursWorkedOnDate.call(this, dateStr)
    const cashMoney = this.payPerHour
    const payOwed = hussleTime * cashMoney
    
    return payOwed
}

// let allWagesFor = function(employee){
//     let workedDates = employee.timeInEvents.map(function(event){
//         return event.date
//     })
//     let cashMoney = workedDates.reduce(function(wages, value){
//         return wages + wagesEarnedOnDate(employee, value)
//     }, 0)
//     return cashMoney
// }

function findEmployeebyFirstName(srcArray, firstName){
    return srcArray.find(employeeName => employeeName.firstName === firstName)
}

function calculatePayroll(employeesArray){
    const allWages = employeesArray.map(employee => allWagesFor.call(employee))
    const allWagesTotal = allWages.reduce((subTotal, value) => value + subTotal, 0)
    return allWagesTotal
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}