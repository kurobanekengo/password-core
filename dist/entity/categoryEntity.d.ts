export interface CategoryEntity {
    id: string;
    name: string;
    description: string;
}
export declare const isCategory: (json: unknown) => json is CategoryEntity;
