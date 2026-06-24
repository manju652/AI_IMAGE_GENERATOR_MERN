export const createPost = async (req, res, next) => {
  try {
    console.log("BODY:", req.body);

    return res.status(200).json({
      success: true,
      message: "POST route working",
    });
  } catch (error) {
    console.log(error);
  }
};