# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React where the cleanup function within a `useEffect` hook is not called when the component unmounts prematurely. This often happens when another state update or navigation interrupts the normal unmounting process.

## Problem

The provided `bug.js` file contains a component with a `useEffect` hook and a cleanup function. In most scenarios, this cleanup function should run when the component is unmounted. However, under specific circumstances (e.g., rapid state changes or navigation), the cleanup function may not execute, leading to potential memory leaks or other unexpected behaviors.

## Solution

The solution in `bugSolution.js` addresses this issue.  While the underlying cause might be complex and specific to the application, a robust approach ensures cleanup is attempted.  This improved example might involve additional error handling or more advanced lifecycle management techniques based on the specific needs of your application.

## How to reproduce the bug:

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the console output to verify the behavior.  Try to trigger a fast state change or navigation to see when the cleanup function fails to execute. 