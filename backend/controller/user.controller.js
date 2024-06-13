const User = require("../models/auth.model");
const getUserBySidebar = async (req, res) => {
  try {
    const logginUserId = req.user._id;

    const alluser = await User.find({ _id: { $ne: logginUserId } }).select(
      "-password"
    );
    res.status(200).json(alluser);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getUserBySidebar;
