export const load = (async ({ cookies }) => {
  const userToken = cookies.get('userToken');

  if (userToken) {
    const user = JSON.parse(userToken)
    return {
      user
    };
  }
})