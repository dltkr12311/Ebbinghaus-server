const { user } = require("../../models");
module.exports = {
  post: async (req, res) => {
    const { authType } = req.cookies;
    console.log("sigbnyo", req.cookies);
    if (authType === "jwt") {
      let users = await user.update(
        { refreshToken: null },
        {
          where: {
            id: req.users.id,
          },
        }
      );
      if (!users) {
        return res.status(404).json({
          message: "Invalid account",
        });
      }
      res.clearCookie("refreshToken");
    }
    res.status(204).json({
      message: "Logged out successfully",
    });
  },
};
