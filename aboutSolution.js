```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  //Proper null check
  if (!session || !session.user) {
    return (
      <div>
        <h1>Please sign in to view this page.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {session?.user?.name}!</p> 
    </div>
  );
}
```