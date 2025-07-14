import { db } from "./server/db";


await db.user.create({
    data: {
        email: "dfg@gmail.com",
        firstName: "John",
        lastName: "Doe",
    }
})

console.log('Done');