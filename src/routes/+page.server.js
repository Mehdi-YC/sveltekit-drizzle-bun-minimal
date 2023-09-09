import { db } from "$lib/server/database";
import { users } from "$lib/server/schema";

export const load = async () => {
    let allUsers = await db.select().from(users);
    return {
        allUsers
    }
};