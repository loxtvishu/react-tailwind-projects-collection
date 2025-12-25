// 1. Root create karna
const rootElement = document.querySelector("#main");
const root = ReactDOM.createRoot(rootElement);

// 2. Headings create karna (Ye children hain)
const heading1 = React.createElement('h1', {key: 1}, 'Hello React Developer!');
const heading2 = React.createElement('h2', {key: 2}, 'I am learning Senior Concepts');

// 3. Container create karna (Ye Mummy/Parent hai)
// Syntax: React.createElement('tag', props, [Array of Children])
const container = React.createElement('nav', { id: 'container' }, [heading1, heading2]);

// 4. Render karna (Sirf container ko pass karo)
root.render(container);