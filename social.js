// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    let objId = this.currentID + 1;
    let obj = {
      id: objId,
      name: name

    }

    this.users[objId] = obj;
    this.follows[objId] = new Set();
    this.currentID++;
    return this.users[objId].id;
  }

  getUser(userID) {
    // Your code here
  }

  follow(userID1, userID2) {
    // Your code here
  }

  getFollows(userID) {
    // Your code here
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
