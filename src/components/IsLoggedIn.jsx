export default function IsLoggedIn() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h3>Welcome back</h3>;
  } else {
    return <h3>Please log in</h3>;
  }
}
