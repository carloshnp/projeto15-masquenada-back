import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { sessionCollection, usersCollection } from '../database/db.js';

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

async function signIn(req, res) {
  const { email, password } = res.locals.user;

  try {
      const user = await usersCollection.findOne({ email });

      if (!user || !bcrypt.compareSync(password, user.password)) {
          return res.sendStatus(401);
      }

      const token = uuid();

      await sessionCollection.deleteOne({ userId: user._id });

      await sessionCollection.insertOne({
          userId: user._id,
          token
      });

      delete user.password;

      res.status(200).send({
          ...user,
          token
      });

  } catch (error) {
      res.status(500).send(error.message);
  }
};

export { signUp, signIn };