import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response){
  const user = createUser({
    email: 'saas',
    password: '123456',
    techs: [
      'nodejs', 
      'reactjs', 
      'react native',
      {title: 'Javascript', experience: 100 }
    ]
  })

  return res.json({ message: 'Hello World'})
}