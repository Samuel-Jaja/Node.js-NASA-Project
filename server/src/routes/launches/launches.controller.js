const {getAllLaunches, addNewLaunch} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
};

function httpAddNewLaunch(req,res) {
    const launch = req.body 

    if(!launch.mission ||!launch.rocket ||!launch.launchDate ||!launch.destination){
        return res.status(400).json({
            error:'You are missing a/some required launch properties.'
        });
    }
    launch.launchDate = new Date(launch.launchDate)

    if (isNaN(launch.launchDate)){
        return res.status(400).json({
            error:"Invalid Launch Date"
        })
    }

    //OR USE if
    //(launch.launchDate).toString() === "Invalid Date"){
    //     return res.status(400).json({
    //         error:"Invalid Launch Date"
    //     })
    // }
    addNewLaunch(launch)
    return res.status(200).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}