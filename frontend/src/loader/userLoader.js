import { getUserConnected } from "../apis/users";

export async function userLoader() {
  const user = await getUserConnected();
  return user;
}
