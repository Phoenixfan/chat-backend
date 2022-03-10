import { v4 as uuidv4 } from 'uuid';
import { model, Schema} from "mongoose";

export interface IUser {
    _id: string;
    username: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    _id: {
        type: String,
        required: true,
        default: () => uuidv4()
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

//the exported model of the userSchema
export default model<IUser>("user", userSchema);