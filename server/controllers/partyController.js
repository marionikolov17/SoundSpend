

exports.getParty = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Working from route folder and controller. (party)"
    });
};