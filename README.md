# @jielo/modal_ocr14

This is a simplified modal for basic usage.


## Authors

- [@Djielo](https://www.github.com/Djielo)


## Installation

Install my-project with npm

```bash
  npm i @jielo/modal_ocr14
```


## Screenshots

![App Screenshot](https://i14.servimg.com/u/f14/14/21/53/51/modal_10.jpg)


## 🛠 Skills

- HTML
- CSS
- Javascript
- React
- Redux (Optional)


## Props

This modal is fully configurable.
You will need to use the following props to modify it:
- image
- message
- Closing function


## CSS

A CSS file is include and you can change all properties in your own css file !


## Usage/Examples

### In the component where you call the modal. For this exemple, we are using App

```javascript
import React from "react";
import Image from "../assets/image.png"; // // Choose name and location according to your project
import ModalEmployeeCreated from "@jielo/modal_ocr14";
import "@jielo/modal_ocr14/dist/cjs/index.css";

function App() {
  const message = useSelector((state) => state.employee.ModalMessage); // You can use React hook like useState()
  const dispatch = useDispatch();

  function removeModal() {
    dispatch(setModalMessage(""));
  }
  return {message !== "" && <ModalEmployeeCreated message={message} image={Image} closeFunction={removeModal} />}  
}

export default App
```

### Exemple of ToolKit State Manager

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const [yourSliceName] = createSlice({
  name: "[yourName]",
  initialState: {
    ModalMessage: "",
  },
  reducers: {
    setModalMessage: (state, action) => {
      state.ModalMessage = action.payload;
    },
  },
});

export const { setModalMessage } = employeeSlice.actions;
```

