function logDriverNames(drivers) {
    drivers.forEach(driver => {
        console.log(driver.name)
    });
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(driver => {
       if (driver.hometown === hometown) {
           console.log(driver.name)
       } 
    });
}

function driversByRevenue(drivers) {
    return drivers.slice().sort((driverOne, driverTwo) => {
        return driverOne.revenue - driverTwo.revenue
    }
    )
}

function driversByName(drivers) {
    return drivers.slice().sort((driverOne, driverTwo) => {
        return driverOne.name.localeCompare(driverTwo.name)
    })
}

function totalRevenue(drivers) {
    return drivers.reduce((total, currentDriver) => {
        return currentDriver.revenue + total
    }, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length
}
