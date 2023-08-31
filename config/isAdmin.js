module.exports = function (req, res, next) {
  if (!req.user.password === "1234")
    return res.status(401).json("Unauthorized");
  next();
};
