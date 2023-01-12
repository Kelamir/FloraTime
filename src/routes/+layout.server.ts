export const load = (async ({ cookies }) => {
  const userToken = cookies.get('userToken');
  const user = JSON.parse(userToken)

  return {
    user
  };
})