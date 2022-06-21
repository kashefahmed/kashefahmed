import express from 'express'
import PostSchema from '../models/Post.js'
const router = express.Router()


// find all the posts
router.get('/post',
async (req,res) =>{
    try {
        const Post = await PostSchema.find({})
        res.status(200).json(Post)
    } catch (error) {
        res.status(500).json(error)
    }
}
)


// create new post

router.post('/post',
async (req,res) =>{
    const {title,description,image} = req.body
    try {
        const document = new PostSchema({
            title:title,
            description:description,
            image:image
        })
        console.log(title,description,image)
       await document.save()
       res.status(200).send({status:'ok',message:"Player Added Scucessfully created Scucessfully..."})
        
    } catch (error) {
        res.send({error})
    }
}
)

// Find one Post

router.get('/post/:id',
    async (req,res) =>{
        const postId = req.params.id
        PostSchema.findById(postId,(err,docs)=>{
            if(err){
                res.status(400).json({message:err})
            }else{
                res.status(200).json(docs)
            }

        })}
)

// Delete post
router.delete('/post/:id',
async (req,res) =>{
    const postId = req.params.id
    PostSchema.findOneAndRemove(postId,(err,docs)=>{
        if(err){
            res.status(400).json({message:err})
        }else{
            res.status(200).json({"Post Deleted Scucessfully...":docs})
        }

    })}
)

// update post
router.patch('/post/:id',
async (req,res) =>{
    const {title,description,image} = req.body
    const postId = req.params.id
    const document = new PostSchema({
        title:title,
        description:description,
        image:image
    })
    PostSchema.findByIdAndUpdate(postId,document,(err,docs)=>{
        if(err){
            res.status(400).json({message:err})
        }else{
            res.status(200).json({"user updated scucessfully":docs})
        }

    })}
)

export default router