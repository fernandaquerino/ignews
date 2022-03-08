import { NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Fernanda' },
    { id: 2, name: 'Andressa' },
    { id: 3, name: 'Mariana' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Victor Hugo' },
    { id: 6, name: 'Pastrami' }
  ]

  return response.json(users);
}