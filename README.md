# NextAuth Session undefined in getServerSideProps

This repository demonstrates a bug encountered when using `getServerSideProps` with NextAuth.js in Next.js 13/15.  The issue is intermittent, where `session.user` is sometimes undefined, leading to a `TypeError: Cannot read properties of undefined (reading 'user')`.

## Bug Description

The `About` page uses `getServerSideProps` to fetch user data from the NextAuth session.  However, in certain circumstances, `session.user` returns undefined, despite the user being authenticated.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`. You might need to refresh the page multiple times to reproduce the error.

## Potential Causes

The root cause might involve race conditions in how NextAuth.js interacts with `getServerSideProps`, perhaps related to asynchronous operations or caching.

## Solution

Check out the `aboutSolution.js` file for the solution that addresses this issue by adding proper session checking and handling potential race conditions by using `session?.user?.name`