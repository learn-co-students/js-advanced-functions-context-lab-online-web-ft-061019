/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(function(array){
        return createEmployeeRecord(array)
    })
}

function createTimeInEvent(timePunch) {
    let [date, hour] = timePunch.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function createTimeOutEvent(timePunch) {
    let [date, hour] = timePunch.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

function hoursWorkedOnDate(date) {
    let inTime = this.timeInEvents.find(function(event){
        return event.date === date
    })

    let outTime = this.timeOutEvents.find(function(event){
        return event.date === date
    })

    return (outTime.hour - inTime.hour) / 100
}

function wagesEarnedOnDate(date) {
    let wage = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
    return parseFloat(wage.toString())
}

function calculatePayroll(arrayOfRecords) {
    return arrayOfRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

function findEmployeebyFirstName(array, firstName) {
    return array.find(function(rec){
        return rec.firstName === firstName
      })
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}