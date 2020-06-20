import { Request, Response } from 'express';
import createUser from './services/CreateUser.service';

export const helloWorld = (request: Request, response: Response) => {

  const user = createUser({
    name: 'Ricardo',
    email: 'ricardo@email.com',
    password: '123456',
    techs: [
      'Node.js', 
      'React', 
      'React Native',
      { title: 'Javascript', experience: 100 }
    ]
  });
  console.log(user);
  
  response.json({ message: 'Hello World' });
};