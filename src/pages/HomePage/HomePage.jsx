export default function HomePage({ user }) {
  return (
    <>
      {user ? <h1>Hello {user.name}</h1> : <h1>Hello</h1>}
      <h2>
        Welcome to Pets-R-US, treat your pets to items as you would for
        yourself!
      </h2>
    </>
  );
}
