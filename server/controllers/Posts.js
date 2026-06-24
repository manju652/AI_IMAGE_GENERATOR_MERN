import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    return next(error);
  }
};

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