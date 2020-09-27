import path from 'path';
import fs from 'fs';

class MessagesService {
    getMessages() {
        let myPath = path.join(__dirname, '..', '..', 'data', 'messages.txt');
        let messages: string[] = [];
        let fileExists = fs.existsSync(myPath)
        if (fileExists) {
            messages = fs.readFileSync(myPath, 'utf-8').toString().split('\n');
        }
        return {
            fileExists: fileExists,
            messages: messages
        }
    }

}

export default MessagesService;