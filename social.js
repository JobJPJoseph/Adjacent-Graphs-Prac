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
    let result = this.users[userID];
    return (result) ? result : null;
  }

  follow(userID1, userID2) {
    // Your code here
    // this.follows mimics this.user by using the same key
    // each bucket in the hash table is a Set
    if (this.getUser(userID1)  === null || this.getUser(userID2) === null) return false;

    if (!this.follows[userID1].has(userID2)) this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    let set = this.follows[userID];
    return set;
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
