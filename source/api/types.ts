export type ApiMethod = "POST" | "GET" | "DELETE" | "PUT";
export const POST: ApiMethod = "POST";
export const GET: ApiMethod = "GET";
export const DELETE: ApiMethod = "DELETE";
export const PUT: ApiMethod = "PUT";

export const ApiMethod = {
  POST, GET, DELETE, PUT
};

export type ApiCall<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;
export interface ApiRequest<T> {
  data: T;
}
export interface ApiResponse<T> {
  data: T;
}