// Code your solution in this file!

function logDriverNames(drivers){
    return drivers.forEach(function(driver){
        return console.log(driver.name);
    })
}

function logDriversByHometown(drivers, town){
    return  drivers.filter(function(driver){
       if(town === driver["hometown"]){
         return console.log(driver.name);
       }
    });
}

function driversByRevenue(drivers){
 let result = drivers.slice();
    return result.sort(function(a, b){
     return a.revenue - b.revenue;
 });
}

function driversByName(drivers){
    let result = drivers.slice();
    const comparator = function(a, b){
       return a.name.localeCompare(b.name);
    };
    return result.sort(comparator);
   }

function totalRevenue(drivers){
    return drivers.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.revenue;
    }, 0);
}

function averageRevenue(drivers){
    return totalRevenue(drivers)/drivers.length;
}