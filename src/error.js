class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.name = 'ValidationError'
      this.message = message
    }
    toJSON() {
      return {
        error: {
          name: this.name,
          message: this.message,
          stacktrace: this.stack
        }
      }
    }
  }
  class PermissionError extends Error {
    constructor(message) {
      super(message)
      this.name = 'PermissionError'
      this.message = message
    }
    toJSON() {
      return {
        error: {
          name: this.name,
          message: this.message,
          stacktrace: this.stack
        }
      }
    }
  }
  class DatabaseError extends Error {
    constructor(message) {
      super(message)
      this.name = 'DatabaseError'
      this.message = message
    }
    toJSON() {
      return {
        error: {
          name: this.name,
          message: this.message,
          stacktrace: this.stack
        }
      }
    }
  }

  module.exports = {
    ValidationError,
    PermissionError,
    DatabaseError
  }