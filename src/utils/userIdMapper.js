export const userIdMapper = (rows) => {
  const userData = new Map();

  rows.slice(1).forEach(row => {
    const userId = row[1];
    const userName = row[0];

    if (userId && userName) {
      userData.set(userId, userName);
    }
  });

  return userData;
};