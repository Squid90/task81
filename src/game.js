export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Персонаж уже добавлен')
      } else {
        this.members.add(character);
      }
    }

    addAll(allCharacters) {
      allCharacters.forEach(item => this.members.add(item));
    }

    toArray() {
      return Array.from(this.members);
    }
}
