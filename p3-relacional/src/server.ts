import { AppDataSource } from "./data-source"
import { User } from "./entities/Users"
import * as express from 'express';
import routes from "./routes";

AppDataSource.initialize().then(async () => {
    
    const app = express();

    app.use(express.json())    

    app.use(routes)
    return app.listen(3000)














    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.nome = "Timber"
    // user.peso = 25
    // user.senha = "123"
    // user.email= "timber@@"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
