let store = { drivers: [], passengers: [], trips: [] }

let driverId = 0
let passId = 0
let tripId = 0

class Driver {

  constructor(name) {
  this.name = name
  this.id = ++driverId
  store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    let passengerList = []
    for (const trip of this.trips()) {
      passengerList.push(trip.passenger())
    }
    return passengerList
  }

}

class Passenger {

  constructor(name) {
    this.name = name
    this.id = ++passId
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    let driverList = []
    for (const trip of this.trips()) {
      driverList.push(trip.driver())
    }
    return driverList
  }

}

class Trip {

  constructor(driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

}
