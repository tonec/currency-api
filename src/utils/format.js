import omit from 'lodash/omit'

export default (type, data) => {
  const parsed = JSON.parse(JSON.stringify(data))
  let response = { status: 'success' }

  if (parsed.length > 0) {
    response[type] = parsed.reduce((acc, item) => {
      let newItem = {
        id: item._id,
        ...omit(item, ['_id', '__v', 'created'])
      }

      return acc.concat(newItem)
    }, [])
  } else {
    response = null
  }

  return response
}
