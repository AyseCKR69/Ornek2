import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategortResponseModel extends ResponseModel{
    data:Category[]
}