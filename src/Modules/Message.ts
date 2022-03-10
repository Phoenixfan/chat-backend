import { v4 as uuidv4 } from 'uuid';
import { model, Schema} from "mongoose";

export interface IMessage {
    _id: string;
    sender: string;
    receiver: string;
    message: string;
    date: number;
}

const messageSchema = new Schema<IMessage>({
    _id: {
        type: String,
        required: true,
        default: () => uuidv4()
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    }
});

//the exported model of the userSchema
export default model<IMessage>("message", messageSchema);