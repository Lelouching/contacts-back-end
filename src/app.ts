import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./errors"
import { contactsRouter } from "./routes/contacts.routes"
import { usersRoutes } from "./routes/users.routes"
import { loginRouter } from "./routes/login.routes"

export const app: Application = express()
app.use(express.json())

app.use("/contacts", contactsRouter)
app.use("/users", usersRoutes)
app.use("/login", loginRouter)

app.use(handleErrors)