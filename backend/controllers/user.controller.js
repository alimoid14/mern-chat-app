import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //To exclude ourselves from chat options Use ----->>>> const allUsers = await User.find({ _id: { _ne: loggedInUserId } });
    const allUsers = await User.find().select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar");
    res.status(500).json({ error: "Internal server error" });
  }
};
