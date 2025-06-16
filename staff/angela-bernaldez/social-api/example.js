server.get("/users", jsonBodyParser, (req, res) => handlers.registerUserHandler(req, res))

//handlers --> 

const registerUserHandler = async (req, res) => {
    const { username, password } = req.body;
    // req.params
    // req.headers
    try {
        await logic.registerUserLogic(username, password)
        res.status(204).send()
    } catch (error) {
        res.status(401).send(error)
        /*se puede añadir manejo de errores*/
    }
}

//logic -->

const registerUserLogic = async (username, password) => {
    const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
    let users = []
    if (data) {
        users = JSON.parse(data);
    }

    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
        throw new Error('username already in use')
    }
    users.push({ username, password })

    fs.writeFile(
        path.join(__dirname, './db/users.json'),
        JSON.stringify(users),
        'utf-8'
    );
}



server.post("/users", jsonBodyParser, async (req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, './db/users.json'), 'utf-8');
        let users = []
        if (data) {
            users = JSON.parse(data);
        }
        // res.send(users);
        const { username, password } = req.body // esto se manejaria en el handlers
        console.log(users)
        users.push({ username, password })

        fs.writeFile(
            path.join(__dirname, './db/users.json'),
            JSON.stringify(users),
            'utf-8'
        );
        res.send("user registered correctly") //iria en el handlers
    } catch (err) {
        console.error('Error al obtener usuarios:', err);
        res.status(500).send('Error interno del servidor');
    }
})