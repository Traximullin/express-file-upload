import Post from "../schemas/Post.js";
import FileService from "../../file/service/FileService.js";

class PostService {
    async getAll() {
        const posts = await Post.find()
        return posts
    }

    async getOne(id) {
            if(!id) {
                throw new Error('Не указан ID')
            }
            const post = await Post.findById(id)
            return post
    }

    async create(post,picture) {
        const fileName = FileService.saveFile(picture)
        const createdPost = await Post.create({...post,picture: fileName})
        return createdPost
    }

    async update(post) {
        if(!post._id) {
            throw new Error('Не указан ID')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new: true})
        return updatedPost
    }

    async remove(id) {
        if(!id) {
            throw new Error('Не указан ID')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new PostService()
