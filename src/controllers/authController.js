import bcrypt from 'bcrypt';
import { usersCollection } from '../database/db.js';

async function signUp(req, res) {
  const { firstname, lastname, email, password } = res.locals.user;

  const passwordHash = bcrypt.hashSync(password, 10);

  try {
    const registeredUsers = await usersCollection.find().toArray();

    const userExists = registeredUsers.find(value => value.email === email);

    if (userExists) {
      return res.status(409).send("This email already exists.");
    }

    await usersCollection.insertOne({
      firstname,
      lastname,
      email,
      password: passwordHash
    });

    res.sendStatus(201);
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { signUp };