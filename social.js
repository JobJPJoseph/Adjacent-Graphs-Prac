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
    let mainUserID = this.getUser(userID);
    let followers = new Set();

    for (let user in this.follows) {
      let set = this.follows[user];

      if (set.has(mainUserID.id)) {
        followers.add(this.users[user].id);
      }

    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    // Think of it like this. 1 follows 2. Thats the immediate. Who does 2 follow? 3.
    // Then that is the first degree of recomendations.

    let visited = new Set();
    visited.add(userID);

    let queue = [[...this.getFollows(userID).values()]];

    let recommended = [];

    while (queue.length) {
      let path = queue.shift();
      let currentNode = path[path.length - 1];

      if (!visited.has(currentNode)) {
        // We test the length of the path to comfirm degrees
        visited.add(currentNode);

        if (path.length > 1 && path.length <= degrees + 1) recommended.push(currentNode);

        // Now refill the queue
        let children = this.getFollows(currentNode).values();

        for (let node of children) {
          queue.push([...path, node]);
        }

      }

    }

    return recommended;
  }
}

module.exports = SocialNetwork;
