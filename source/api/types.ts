export type ApiMethod = "POST" | "GET" | "DELETE" | "PUT";
const POST: ApiMethod = "POST";
const GET: ApiMethod = "GET";
const DELETE: ApiMethod = "DELETE";
const PUT: ApiMethod = "PUT";

export const ApiMethod = {
  POST, GET, DELETE, PUT
};

export type ApiCall<REQUEST, RESPONSE> = (req: REQUEST) => RESPONSE;