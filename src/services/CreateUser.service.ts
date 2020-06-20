/**
 * 
 */

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObject> //string[] | TechObject[]
}

interface TechObject {
  title: string,
  experience: number
}

const createUser = ({ name, email, password }: CreateUserData) => {
  const user = {
    name,
    email,
    password
  }

  return user;
}

export default createUser;