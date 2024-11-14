# React from the inside

## Lifecycle (Without Hooks):

React's component lifecycle refers to the sequence of events that occur during a component's existence in a React application. When you're working with class components (and without hooks), the lifecycle is divided into three main phases:

### 1. Mounting Phase: When the component is first created and inserted into the DOM. It's when the component is initialized and rendered for the first time.

- `constructor()`

This method is called before the component is mounted. It’s used to initialize state and bind event handlers.

```jsx

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
```

- `static getDerivedStateFromProps(props, state)`

This method is rarely used. It allows the state to be updated based on the props before rendering.

```jsx
static getDerivedStateFromProps(props, state) {
  if (props.initialCount !== state.count) {
    return { count: props.initialCount };
  }
  return null;
}
```

- `componentDidMount()`

This method is called after the component is mounted to the DOM. It's a good place for initializing data (e.g., fetching from an API).

```jsx
componentDidMount() {
  console.log('Component mounted');
}

```

### 2. Updating Phase: When the component is re-rendered due to changes in props or state.

- `static getDerivedStateFromProps(props, state)`

Like in the mounting phase, this can be used to update the state based on prop changes.

- `shouldComponentUpdate(nextProps, nextState)`

This method determines whether the component should re-render. By default, it returns true. Use it to optimize performance.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count;
}

```

- `render()`

This method is required. It defines what the UI should look like.

```jsx
render() {
  return <div>{this.state.count}</div>;
}
```
- `getSnapshotBeforeUpdate(prevProps, prevState)`

This method captures information about the DOM before the update happens. It’s often used for scrolling or animations.

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
  if (prevState.count < this.state.count) {
    return 'Incremented';
  }
  return null;
}
```

- `componentDidUpdate(prevProps, prevState, snapshot)`

This method is called after the component updates. Used for side effects after a re-render, often in combination with a snapshot. You can also use it to perform side effects based on the previous state or props.

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot === 'Incremented') {
    console.log('The count was incremented');
  }
}
```

### 3. Unmounting Phase: When the component is removed from the DOM.

- `componentWillUnmount()`

This method is called right before the component is unmounted. It’s used to clean up resources like timers or event listeners.

```jsx
componentWillUnmount() {
  console.log('Component will unmount');
}
```

## Summary of Lifecycle Methods in Class Components

| Phase          | Method                              | Use                                              |
| -------------- | ------------------------------------| ------------------------------------------------ |
| **Mounting**   | `constructor()`                     | Initialize state, bind methods.                  |
|                | `static getDerivedStateFromProps()` | Sync state with props (rarely used).             |
|                | `render()`                          | Define the UI.                                   |
|                | `componentDidMount()`               | Fetch data, set up subscriptions.                |
| **Updating**   | `static getDerivedStateFromProps()` | Sync state with props on updates.                |
|                | `shouldComponentUpdate()`           | Control whether a component should re-render.    |
|                | `render()`                          | Define the updated UI.                           |
|                | `getSnapshotBeforeUpdate()`         | Capture DOM info before update.                  |
|                | `componentDidUpdate()`              | Perform side effects after updates.              |
| **Unmounting** | `componentWillUnmount()`            | Clean up timers, event listeners, etc.           |

<br/>

With hooks like useEffect, the lifecycle behavior can be managed in functional components, but before hooks, all you could use were the above class-based methods.

## Lifecycle (With Hooks):

When you use React with hooks, the lifecycle methods of class components are replaced by functions, primarily useEffect, which handles many of the phases in one unified way. Here's how lifecycle management with hooks compares to the class-based lifecycle methods:

### 1. Mounting Phase

#### Class Components: `constructor()`

#### Functional Components: `useState`

```jsx
const [count, setCount] = React.useState(0);
```

#### Class Components: `componentDidMount()`

#### Functional Components: `useEffect()`

with an empty dependency array ([]) to mimic componentDidMount.
This ensures the effect runs only once after the component mounts.

```jsx
React.useEffect(() => {
  console.log("Component mounted");
}, []);
```

### 2. Updating Phase

#### Class Components: `static getDerivedStateFromProps()`

#### Functional Components: `useEffect()`

Use `useEffect` with the specific props in the dependency array.

```jsx
React.useEffect(() => {
  console.log("Props or state updated");
}, [props.someValue]); // Runs whenever `props.someValue` changes
```

#### Class Components: `shouldComponentUpdate()`

#### Functional Components: `useMemo()`

Though there is no direct equivalent. React.memo can be used to prevent unnecessary re-renders in functional components.

```jsx
const MyComponent = React.memo(({ value }) => {
  console.log("Rendering only if props change");
  return <div>{value}</div>;
});
```

#### Class Components: `componentDidUpdate()`

#### Functional Components: `useEffect()`
```jsx
React.useEffect(() => {
  console.log("Count updated");
}, [count]); // Runs whenever `count` changes
```

### 3. Unmounting Phase

#### Class Components: `componentWillUnmount()`

#### Functional Components: `useEffect()`

Return a cleanup function from useEffect to mimic componentWillUnmount.

```jsx
React.useEffect(() => {
  const timer = setInterval(() => console.log("Running"), 1000);

  return () => {
    clearInterval(timer); // Cleanup
    console.log("Component unmounted");
  };
}, []); // Empty array ensures this effect only runs on mount/unmount
```

## Comparison Table

| **Lifecycle Method (Class)** | **Equivalent Hook**                                   | **Notes**                                                                 |
|------------------------------|-------------------------------------------------------|---------------------------------------------------------------------------|
| `constructor()`              | `useState`                                            | Initialize state in functional components.                                |
| `componentDidMount()`        | `useEffect(() => {...}, [])`                          | Runs once after the component mounts.                                     |
| `getDerivedStateFromProps()` | `useEffect(() => {...}, [props])`                     | Derive state from props via `useEffect` and dependency arrays.            |
| `shouldComponentUpdate()`    | `React.memo`                                          | Prevent unnecessary renders for functional components.                    |
| `render()`                   | JSX inside the functional component.                  | Functional components return JSX directly.                                |
| `getSnapshotBeforeUpdate()`  | Combine `useEffect` with refs                         | Capture pre-update info using refs and `useEffect`.                       |
| `componentDidUpdate()`       | `useEffect(() => {...}, [dependencies])`              | Run side effects after updates using dependency arrays.                   |
| `componentWillUnmount()`     | `useEffect(() => {... return cleanup}, [])`           | Cleanup logic is handled with a return function in `useEffect`.           |



## Advantages of Using Hooks
- **Cleaner Code:** Hooks consolidate lifecycle logic in one place rather than spreading it across methods.
- **Reusability:** You can create custom hooks to encapsulate reusable logic.
- **No `this` Keyword:** Hooks avoid common issues with `this` binding in class components.
- **Less Boilerplate:** Functional components with hooks are generally more concise.

## React Internals for Lifecycle Methods

Here’s how React manages the flow:

### Reconciliation Process:

React maintains a virtual DOM tree representing the current UI state.
When updates occur, React generates a new virtual DOM tree and compares it to the previous one.
During this process, React checks for changes to props or state and determines whether to invoke lifecycle methods.

### Lifecycle Method Invocation:

React has a strict sequence in which lifecycle methods are called during mounting, updating, and unmounting phases.

These methods are invoked based on the current phase and whether the component needs updating.
Batching and Optimizations:
- React batches multiple state updates and processes them together for performance.
- Lifecycle methods like `shouldComponentUpdate` allow developers to interrupt this process if they know a re-render isn’t necessary.

## Fiber Architecture:

React’s modern architecture, Fiber, splits rendering work into units of work. Lifecycle methods like `componentDidMount` are scheduled to run after the commit phase, ensuring that the DOM is fully updated before being accessed.

### What is Fiber?
Fiber is like React’s control center that manages how components are updated, rendered, and displayed on the screen:
- Breaks Work Into Small Pieces: Instead of doing everything at once, it splits the rendering work into smaller chunks so React doesn’t block your app if something takes too long.
- Decides What’s Important: It prioritizes tasks. For example, if the user clicks a button, React focuses on that task first and pauses less important work (like animations or background updates).
- Keeps Track of Everything: Fiber remembers the current state of your app and all its components so it can efficiently update what’s needed.

### How Does Fiber Handle Features Like Hooks?
Hooks like `useState` or `useEffect` are tightly integrated with Fiber. Fiber is in charge of:
- Storing Data: When you use useState, React saves the state directly in Fiber (like keeping notes about your component).
- Running Effects: When you use useEffect, Fiber schedules it to run at the right time (like setting reminders for after the screen updates).
- Skipping Work: If React sees that nothing has changed (e.g., the dependencies of useEffect didn’t update), Fiber says, “No need to do this again,” and skips unnecessary work.

### Analogy
If React is like a robot, then:
- Fiber is the robot's skeleton and control system. It gives the robot a structure to move and work efficiently.
- Components and hooks are like the robot's tools that let it interact with the outside world.

## React’s Lifecycle Flow
1. Mounting Phase:

-  constructor → getDerivedStateFromProps → render → componentDidMount.

2. Updating Phase:

- getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate.

3. Unmounting Phase:

- componentWillUnmount.

React orchestrates all of this through its Fiber architecture, ensuring high performance, efficient updates, and predictable lifecycle behavior.

## How React Handles Functional and Class Components Internally

### Functional Components with Hooks:

- React hooks like `useState`, `useEffect`, and `useMemo` are implemented at the Fiber level.
- Functional components are treated as simple functions that return JSX. When rendering a functional component:
    - React calls the function to compute the UI.
    - React tracks hooks and their dependencies through an internal hook list attached to the component's Fiber node.
    - React schedules effects (useEffect) after rendering, ensuring they mimic lifecycle behavior.

### Class Components:
- React treats class components as objects with methods. When rendering a class component:
    - React instantiates the class and calls its methods like `render` and lifecycle methods (`componentDidMount`, etc.).
    - React relies on these methods to manage state and props updates.

## How Is Fiber Different for Class vs. Functional Components?
So yes, react can work with both class components and functional components because Fiber understands both styles.
- For Class Components: Fiber calls specific methods (`componentDidMount`, `shouldComponentUpdate`) when things change.
- For Functional Components: Fiber doesn’t rely on methods. Instead, it keeps a list of hooks (`useState`, `useEffect`, etc.) for each component and processes them in order.

And by "in order" it means the order in which the hooks appear in your component's code.

### 1. Order of Hooks in Code
Hooks are processed in the exact order they are declared in your component. For example:

```jsx
function MyComponent() {
  const [count, setCount] = useState(0); // Hook #1
  const [name, setName] = useState('Percy'); // Hook #2
  useEffect(() => {
    console.log('Effect for count:', count); // Hook #3
  }, [count]);
  return <div>{count} {name}</div>;
}
```
- `useState(0)` is hook #1.
- `useState('Percy')` is hook #2.
- `useEffect` is hook #3.

React processes these hooks in the same order during every render. This ensures that:
- The first hook (useState) always corresponds to the count state.
- The second hook (useState) always corresponds to the name state.
- The third hook (useEffect) always manages the side effect for count.

### 2. Why Does Order Matter?

React uses the order of hooks to associate their behavior with the component instance. When your component re-renders:
- React doesn’t re-execute the component function line by line to figure out what each hook does.
- Instead, React uses an internal "hook list" (tied to the component's Fiber node) that tracks each hook in the order they appear.
- If the order changes, React would get confused because it can’t tell which hook is which.

### 3. What Happens Internally?
When React renders a functional component:
- It initializes an empty "hook list" tied to the component's Fiber node.
- As React calls the hooks in your code, it adds them to the list in order.
- The first `useState` gets added to position 1.
- The second `useState` goes to position 2.
- `useEffect` gets added to position 3, and so on.
On subsequent renders, React goes through the same hook list in the same order:
- It retrieves the correct state values or effects because it knows they’re in fixed positions.


### 4. What Happens If You Change the Order?
Changing the order of hooks in your code can break React’s ability to track them correctly. For example:

```jsx
function MyComponent() {
  if (someCondition) {
    useState(0); // This might not always run!
  }
  useEffect(() => {
    console.log('Effect'); // This hook's position changes based on the condition.
  }, []);
  return <div />;
}
```
If `useState` is sometimes skipped, the `useEffect` hook’s position in the list changes.
React will incorrectly associate `useEffect` with the previous state or another hook, leading to bugs or crashes.

This is why React enforces the rules of hooks, such as:
- Always call hooks at the top level (not inside loops, conditions, or nested functions).
- Always call hooks in the same order every time the component renders.

### 5. Are There Any Internal Priorities for Hooks?
No, React doesn’t assign internal priority to hooks. The priority is determined entirely by the order in the code and how Fiber processes updates:

- useState is processed first if it appears first.
- useEffect is processed next if it appears next, and so on.

However, React does prioritize when certain hooks are executed during the render lifecycle:

- useState is executed during the render phase (when React builds the virtual DOM).
- useEffect is executed during after the render phase (after the DOM has been updated).


## To hook or not to hook

React keeps evolving to a more easy to use and understand code, that's why a future feature called React Compiler will simplify even more the use of hooks, leaving some like `useMemo` or `useCallback` outdated as the use of Class Components is nowadays.


## References and Docs

- [React Legacy Docs](https://legacy.reactjs.org/docs/getting-started.html)
- [React Docs](https://react.dev/learn)
- [React Compiler](https://react.dev/learn/react-compiler)
- [A Deep Dive Into React Fiber](https://blog.logrocket.com/deep-dive-react-fiber/)
- [React Hooks vs. Classes: The Ultimate Comparison [with Code Examples]](https://www.bitovi.com/blog/react-hooks-vs-classes-the-ultimate-comparison)
