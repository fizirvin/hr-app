const initialQuery = { query: `query{
    profiles {
      _id
      number
      firstname
      lastname
      entry
      department
      position
      area
      picture_URL
    }
  }`
}

export {
  initialQuery 
};