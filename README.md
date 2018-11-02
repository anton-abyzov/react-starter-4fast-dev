# Rules of thumb

- Components should be named from capital letter
- Components and containers should be separated
- Components should not be connected to redux store
- Components that are for multiple reuse (e.g. TextField) that could possibly be replaced with Material, Bootstrap etc implementations should be in common folder
- Navigation should lead to pages, which can be connected to redux store
- Use sass for styling, though feel free to have js css next to component named style.js (e.g. to override Material theme or add custom styles when needed)

