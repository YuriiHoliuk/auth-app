const UserModel = {
  async findByEmail(email) {
    const usersFilePath = path.join(__dirname, 'data', 'users.json');
    const usersFileContent = await fs.readFile(usersFilePath);
    const users = JSON.parse(usersFileContent);

    return users.find(existingUser => existingUser.email === email);
  },
};

module.exports = {
  UserModel,
};
