# VueForm

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



1:0 - 7:0

 object reference mutation

 The Problem: Object Reference
Here’s a step-by-step breakdown of what's happening:

Initial State: Your FiltersComponent has its own internal filtersData object.

First "Apply" Click: You click "Apply". The applyFilters method emits the event this.$emit('filter-apply', this.filtersData). This sends a reference (think of it as a direct link) to the filtersData object up to the parent component.

Parent Component: The parent component receives this reference and stores it in its own state to perform the filtering. Now, the parent's state and the child's filtersData are pointing to the exact same object.

Subsequent Clicks: When you now check another checkbox in FiltersComponent, v-model directly mutates the filtersData object. Since the parent is holding a reference to that very same object, Vue's reactivity system detects the change instantly and re-runs the filter logic, completely bypassing the "Apply" button.