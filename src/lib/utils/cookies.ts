export function removeCookies() {
  document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}