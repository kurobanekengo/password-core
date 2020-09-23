import { Id } from "../model/common";
export declare type CategoryId = Id<"CategoryEntity"> & string;
export declare const CategoryId: (id: string) => CategoryId;
export interface CategoryEntity {
    id: CategoryId;
    name: string;
    description: string;
}
export declare class CategoryEntity {
    static isCategory(json: unknown): json is CategoryEntity;
}
