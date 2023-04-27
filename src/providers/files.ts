export const getFiles = async () => {
  try {
    const res = await fetch('https://dev.test.sega.co.uk/api/list', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'x-secret-api-key': 'Anwq2gS27c42znwPyzvY6xvUSvI8YOrj'
      }
    })
    const data = await res.json()
    return {
      data: data,
      error: ''
    }
  } catch(error) {
    return {
      data: null,
      error: ''
    }
  }
}