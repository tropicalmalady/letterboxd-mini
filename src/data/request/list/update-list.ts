import { CreateListRequest } from "./create-list";

export interface UpdateListRequest extends Partial<CreateListRequest> {
    listId:string;
}
