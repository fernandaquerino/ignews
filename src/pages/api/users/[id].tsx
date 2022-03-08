import { NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  //console.log(request.query);
  const id = request.query.id;
  console.log(id);
  const users = [
    { id: 1, name: 'Fernanda' },
    { id: 2, name: 'Andressa' },
    { id: 3, name: 'Mariana' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Victor Hugo' },
    { id: 6, name: 'Pastrami' }
  ]

  const userFiltered = users.filter(user => user.id === Number(id))

  return response.json(userFiltered);
}