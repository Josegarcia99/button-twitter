const imageenlace = 'https://unavatar.io/'

const Api = [
  {
    nombre: 'Jose Enriquez',
    usuario: 'JoseEnrike',
    imagen () {
      return imageenlace + this.usuario + '/'
    },
    follow: true
  },
  {
    nombre: 'Marcoz Martinez',
    usuario: 'Midudev',
    imagen () {
      return imageenlace + this.usuario + '/'
    },
    follow: false
  },
  {
    nombre: 'David Fernandez',
    usuario: 'David',
    imagen () {
      return imageenlace + this.usuario + '/'
    },
    follow: false
  },
  {
    nombre: 'Manuel Turizo',
    usuario: 'Manuel',
    imagen () {
      return imageenlace + this.usuario + '/'
    },
    follow: false
  }
]

export default Api
