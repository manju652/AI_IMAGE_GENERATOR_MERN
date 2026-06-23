import axios from "axios";

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}`;

    return res.status(200).json({
      photo: imageUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};