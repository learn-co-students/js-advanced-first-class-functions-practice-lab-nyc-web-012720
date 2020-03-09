// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(drivers, hometown) {
    drivers.forEach(element => {
        if (element.hometown === hometown) {
            console.log(element.name)
        }
    });
}

function driversByRevenue(drivers) {
    let drivers_temp = drivers.slice()
    drivers_temp.sort((a, b) => a.revenue - b.revenue)
    return drivers_temp
}

function driversByName(drivers) {
    let drivers_temp = drivers.slice()
    drivers_temp.sort((a, b) => a.name.localeCompare(b.name))
    return drivers_temp
}

function totalRevenue(drivers){
    return drivers.reduce(sumRevenue, 0)
}

const sumRevenue = function (agg, el, i, arr) {
    agg += el.revenue
    return agg
  };

  function averageRevenue(drivers){
    return (totalRevenue(drivers)/drivers.length)
}