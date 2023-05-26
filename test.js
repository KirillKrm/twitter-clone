const backendUrl = 'https://twitter-clone2023-0.herokuapp.com'

async function backendCall(registerData) {
  const url = `${backendUrl}/v1/auth/register`

  const headers = {
    'Content-Type': 'application/json',
  }

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(registerData),
  })
  console.log(res)
  console.log(res.status)
  console.log(await res.json())

  return {
    status: res.status,
    data: await res.json(),
  }
}

backendCall({
  username: 'Kyrylo1',
  nickname: 'KirillKr1',
  email: 'sss1@sss.sss',
  password: '12345678',
})

const res = {
  status: 201,
  data: {
    id: 5,
    username: 'Kyrylo1',
    nickname: 'KirillKr1',
    email: 'sss1@sss.sss',
    createdAt: '2023-05-23T17:24:53.292Z',
    updatedAt: '2023-05-23T17:24:53.292Z',
  },
}

const badRes = {
  statusCode: 409,
  message: 'Email adress already taken',
  error: 'Conflict',
}
