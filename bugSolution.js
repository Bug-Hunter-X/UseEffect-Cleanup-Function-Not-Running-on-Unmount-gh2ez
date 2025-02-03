```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    console.log('Effect running');
    return () => {
      console.log('Cleanup function running');
      // Add some additional error handling or state management in case of a premature unmount
    };
  }, []);

  useEffect(() => {
    if (shouldUnmount) {
      // Trigger unmounting here to simulate the problem
      // For instance, you might set a flag in a parent component to trigger a cleanup here.
    }
  }, [shouldUnmount]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setShouldUnmount(true)}>Unmount</button>
    </div>
  );
}
```