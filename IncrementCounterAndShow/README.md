# Increment Counter By 1 Second and Display It

- I have created a state variable 'counter' with useState hook.
- In UseEffect hook, set Interval which will take updated count state and increment it by 1.
- Though we are using useEffect only at first render of the component (with blank dependency array), setInterval will get updated count after every second and increment it by 1 using the callback in setInterval.

### Live Demo

You can check [Live Demo](https://codesandbox.io/s/clever-noyce-6w86k3?file=/src/App.js:0-349).
