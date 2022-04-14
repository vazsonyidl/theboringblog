import { iexSandboxUrl } from '../../constants/url'

const BasicDividends = async (request: any): Promise<Response> => {
  const { query } = request
  const { quote, period } = query
  const baseUrl = iexSandboxUrl
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }

  if (Object.keys(query).length === 0)
    return new Response(JSON.stringify({ error: 'Query data missing' }), {
      headers,
      status: 401,
    })
  const data = await fetch(
    // @ts-ignore
    `${baseUrl}/${quote}/dividends/${period}?token=${API_KEY}`,
  )
    .then((res) => res.json())
    .then((json) => JSON.stringify(json))

  return new Response(data, { headers })
}

export default BasicDividends
