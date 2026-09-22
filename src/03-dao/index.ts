type User = {
  id: number;
  name: string;
};

class UserDAO {
  private users: User[] = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" }
  ];

  selectAll(): User[] {
    return [...this.users];
  }

  selectById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  insert(user: User): void {
    this.users.push(user);
  }

  update(user: User): void {
    const index = this.users.findIndex(item => item.id === user.id);
    if (index >= 0) {
      this.users[index] = user;
    }
  }

  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

const dao = new UserDAO();

console.log("Todos:", dao.selectAll());
console.log("ID 1:", dao.selectById(1));

dao.insert({ id: 3, name: "Marta" });
dao.update({ id: 2, name: "Luis actualizado" });
dao.delete(1);

console.log("Resultado final:", dao.selectAll());
