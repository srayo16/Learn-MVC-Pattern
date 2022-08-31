module.exports.getAllParts = (req, res) => {
    res.send("Parts getting");
    console.log("Parts getting");
    // res.download(__dirname + "/parts.controller.js");
}

module.exports.partsPost = async (req, res) => {
    res.send("Parts posted");
    console.log("Parts posted");
}

module.exports.partsById = async (req, res) => {
    res.send("Parts get by id");
    console.log("Parts get by id");
}