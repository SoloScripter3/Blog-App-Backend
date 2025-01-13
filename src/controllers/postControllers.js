import Post from "../models/posts.js";

//getting all the posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
};

//creating a new post
export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({
      title,
      content,
      author,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

//updating the post by id
export const updatePost = async (req, res) => {
  try {
    console.log("checking");
    const { title, content } = req.body;
    const neededPost = await Post.findById(req.params.id);
    if (!neededPost) {
      return res.status(404).json({ error: "post not found" });
    }
    await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.status(200).json({ message: "post updated successfully" });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
};

//deleting the post by id
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: "post not found" });
    }
    res.status(200).json({ message: "post deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
