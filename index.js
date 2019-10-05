/* Your Code Here */
let createEmployeeRecord = array => {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = csvEmployeesData => {
    return csvEmployeesData.map(employee => {
        return createEmployeeRecord(employee)
    })
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(dateSought) {
    let inTime = this.timeInEvents.find(function(employee){
        return employee.date === dateSought
    })
    let timeOut = this.timeOutEvents.find(function(employee){
        return employee.date === dateSought
    })
    return (timeOut.hour - inTime.hour) / 100
}

let wagesEarnedOnDate = function(timeStampDate)  {
    let payOwed = hoursWorkedOnDate.call(this, timeStampDate) * this.payPerHour
    return parseFloat(payOwed.toString())
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



let findEmployeebyFirstName = function(srcArray, firstName){
    return srcArray.find(function(record){
        return record.firstName === firstName
    })
}

let calculatePayroll = function(array){
    return array.reduce(function(note, record){
        return note + allWagesFor.call(record)
    }, 0)
}
