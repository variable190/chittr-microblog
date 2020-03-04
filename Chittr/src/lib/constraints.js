const constraints = {
  email: {
    presence: true,
    email: true
  },
  givenName: {
    presence: true
  },
  surname: {
    presence: true
  },
  password: {
    presence: true,
    length: {
      minimum: 5,
      maximum: 20
    }
  },
  'confirm-password': {
    presence: true,
    equality: {
      attribute: 'password',
      message: '^The passwords does not match'
    }
  }
}

export default constraints
