// Code your solution in this file!
const logDriverNames = drivers => drivers.forEach(driver => console.log(driver.name));
const logDriversByHometown = (drivers, location) => drivers.forEach(function (driver) {
    if (driver.hometown === location) {
        console.log(driver.name);
    };
});

const driversByRevenue = drivers => [...drivers].sort((a,b) => a.revenue - b.revenue);
const driversByName = drivers => [...drivers].sort((a,b) => a.name.localeCompare(b.name));
const totalRevenue = drivers => drivers.reduce((accumulator, obj) => accumulator + obj.revenue, 0);
const averageRevenue = drivers => drivers.reduce(function (accumulator, obj, index, array ) {
    if (index === array.length - 1) {
        return (accumulator + obj.revenue) / array.length;
    }else {
        return accumulator + obj.revenue
    }
}, 0);