import * as uuid from 'uuid'
import * as path from "path"

class FileService {
     saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('store',fileName)
            file.mv(filePath)
            return fileName
        }catch (e) {
            console.log(e.message)
        }
    }
}

export default new FileService()