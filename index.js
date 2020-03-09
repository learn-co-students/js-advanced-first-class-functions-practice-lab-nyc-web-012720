function logDriverNames(drivers) {
  for(let i = 0; i < drivers.length; i++) {
    console.log(drivers[i]["name"])
  }
}

function logDriversByHometown(drivers, location) {
  for(let i = 0; i < drivers.length; i++) {
    let driverLocation = drivers[i]["hometown"]
    if (driverLocation === location) {
      console.log(drivers[i].name)
    }
  }
}

function driversByRevenue(drivers) {
  let sortedDrivers = drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
  return sortedDrivers
}

function driversByName(drivers) {
  let sortedDrivers = drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
  return sortedDrivers
}

function totalRevenue(drivers) {
  let summedDrivers = drivers.reduce(function(total, driver) {
    return driver.revenue + total
  }, 0)
  return summedDrivers
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
