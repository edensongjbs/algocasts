// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  evObj={}
  on(eventName, callback) {
    if (this.evObj[eventName]) {
      this.evObj[eventName].push(callback)
    }
    else {
      this.evObj[eventName]=[callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.evObj[eventName]){return}
    this.evObj[eventName].forEach(e => {
      e()
    })
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.evObj[eventName]
  }
}

module.exports = Events;
