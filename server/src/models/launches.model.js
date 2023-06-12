const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date('December 8, 2030'),
    description: "kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success:true
};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
   return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
        flightNumber: latestFlightNumber,
        success:true,
        upcoming: true,
        customer: ["Zero to Mastery", "NASA"],
    })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}
