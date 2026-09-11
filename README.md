# Project Name : DevStack

This is a simple React application where users can explore different web technologies and create their own personal technology stack.

---

## 🛠️ Technologies Used

* React
* JavaScript
* Tailwind CSS
* Vite
* JSON

---

## Features

### Explore Technologies

Users can explore different technologies with information such as name, category, description, rating, difficulty, and badge.

### Build Your Tech Stack

Users can select technologies and add them to their own personal stack.

### Remove Technologies

Users can remove any selected technology from their stack whenever they want.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is know as **JavaScript XML.** It used with **React** that lets us write HTML-like markup inside JavaScript. It makes React UI code easier to read and write.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store data inside a component.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

I used it to store the selected technologies in the user's tech stack.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React.

I used it to load the technology data from the JSON file when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

---

## 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

For example, when the tech stack is empty:

```jsx
{selectedTechnologies.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    selectedTechnologies.map(technology => (
        <div key={technology.id}>
            {technology.name}
        </div>
    ))
)}
```

If there are no selected technologies, the empty stack message is shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

```jsx
<TechnologyCard technology={technology} />
```

The child receives the data:

```jsx
function TechnologyCard({ technology }) {
    return <h2>{technology.name}</h2>;
}
```

A child can send information back to the parent by calling a function passed through props.

```jsx
<TechnologyCard onAdd={handleAdd} />
```

Then the child can call it:

```jsx
<button onClick={() => onAdd(technology)}>
    Add
</button>
```

**Parent → Child:** Props
**Child → Parent:** Callback function
