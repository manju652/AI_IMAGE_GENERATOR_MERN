export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    console.log("PHOTO => ", photo);

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.secure_url,
    });

    return res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (error) {
    console.log("FULL ERROR =>", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};