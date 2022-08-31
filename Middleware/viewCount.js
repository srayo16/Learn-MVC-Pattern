let count = 0;
module.exports.Countable = (req, res, next) => {
    count++;
    console.log(count);

    next();
}