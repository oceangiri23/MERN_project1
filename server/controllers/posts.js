import PostMessage from "../modules/postMessage.js";


export const getPosts = async (req,res)=>{
    try{
        const PostMessage = await PostMessage.find();
        res.status(200).json(PostMessage);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}


export const createPost =  async (req,res) => {
    const body = req.body; 
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error){
        res.status(409).json({message:error.message});
    }
}