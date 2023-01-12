
export const load = (async ({ cookies }) => {
  const userToken = cookies.get('userToken');

  return console.log("usercookie: ", userToken)

})
