export function getTokenFromCookies(cookieName: string) {
  // const cookieName = 'token'; // Replace with your actual cookie name
  const cookies = document.cookie.split('; ');

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value); // Decode in case the value has special characters
    }
  }

  return null; // Return null if the cookie is not found
}
