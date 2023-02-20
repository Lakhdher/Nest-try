import { todoStatusEnum } from "./todoStatusEnum";

export class todo {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    status: todoStatusEnum;
    uuid: any;
}