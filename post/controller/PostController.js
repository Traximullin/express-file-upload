import PostService from "../services/PostService.js";

class PostController {

    async getAll(req,res) {
        try {
            const posts = await PostService.getAll()
            return res.json(posts)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req,res) {
        try {
            const post = await PostService.getOne(req.params.id)
            res.json(post)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async create(req,res) {
        try{
            const post = await PostService.create(req.body,req.files.picture)
            res.json(post)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req,res) {
        try {
            const updatedPost = await PostService.update(req.body)
            return res.json(updatedPost)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }

    async remove(req,res) {
        try {
            const post = await PostService.remove(req.params.id)
            return res.json(post)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()