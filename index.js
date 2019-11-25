import { create } from "domain"

/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(recordArray){
    return recordArray.map(createEmployeeRecord)
}

function findEmployeeByFirstName(createEmployeeRecords, name){
    return createEmployeeRecords.find(function(employee){
        return employee.firstName == name;
    })
}

function createTimeInEvent(timeStamp){
    let dateSplit = timeStamp.split(" ")
    let dateFormat = dateSplit[0]
    let hour = parseInt(dateSplit[1])
    const timeStampFormat = {
        type: "TimeIn",
        hour: hour,
        date: dateFormat
    }
    this.timeInEvents.push(timeStampFormat)
    return this
}

function createTimeOutEvent(timeStamp){
    let dateSplit = timeStamp.split(" ")
    let dateFormat = dateSplit[0]
    let hour = parseInt(dateSplit[1])
    const timeStampFormat = {
        type: "TimeOut",
        hour: hour,
        date: dateFormat
    }
    this.timeOutEvents.push(timeStampFormat)
    return this
}

function hoursWorkedOnDate(timeStamp){
    const timeIn = this.timeInEvents.find(timeIn => timeIn.date === timeStamp)
    const timeOut = this.timeOutEvents.find(timeOut => timeOut.date == timeStamp)
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(timeStamp){
    const timeWorked = hoursWorkedOnDate.call(this, timeStamp)
    const hourlyRate = this.payPerHour
    const totalEarned = timeWorked * hourlyRate
    return totalEarned
}

function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}

function calculatePayroll(employeeArray){
    const allWages = employeeArray.map(employee => allWagesFor.call(employee))
    const allWagesTotalForAll = allWages.reduce((total, value) => value + total, 0)
    return allWagesTotalForAll
}