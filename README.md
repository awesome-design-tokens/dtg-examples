# Design Tokens Generator Examples

## 👀 About

Current repo contains reproduction of the same web application using several popular frontend solutions.  
The common DNA for those project is Design Tokens, created with the help of [Design Tokens Generator](https://www.design-tokens.dev/).

Some integrations require more effort than others, however in a nutshell the process is similar.  
For detailed guides please refer to the [documentation on the website](https://www.design-tokens.dev/guides).

> Please note that for demonstration purposes all projects are built with React + Vite. Essentially integrations should not be different for other frameworks, since projects mostly rely on CSS, Typescript and JSX.


## ⚙️ Common data

There are 2 shared projects that are used by all projects:

[common-data](./common-data/) - improvised database, model and assets,  
[common-tokens](./common-tokens/) - shared foundations - core styles, themes and fonts.

[tokens](./common-tokens/styles/tokens.css) file is practically an export from the [Design Tokens Generator](https://www.design-tokens.dev/).


## 📖 Projects

### [CSS Modules + Headless UI](./headless-ui-react/)

[Link to the CSS Modules guide](https://www.design-tokens.dev/guides/css-modules)  
[Link to the Headless UI guide](https://www.design-tokens.dev/guides/headless-ui)  

Most of application is built with plain JSX and styled with CSS modules.  
Design tokens are used in the form of CSS variables.  
Headless UI is used in 2 components without any additional setup.


### [Headless UI + Tailwind CSS](./headless-ui-tw-react/)

[Link to the Headless UI guide](https://www.design-tokens.dev/guides/headless-ui)  
[Link to the Tailwind CSS guide](https://www.design-tokens.dev/guides/tailwind-css)  

Since Headless UI works great with Tailwind CSS (naturally),  
this app implementation takes the latter for a spin.  
Design tokens work via Tailwind theme, Headless UI components are used more or less the same.


### [Radix UI + Emotion](./radix-ui-react/)

[Link to the Radix UI guide](https://www.design-tokens.dev/guides/radix-ui)  
[Link to the Emotion guide](https://www.design-tokens.dev/guides/emotion)  

These two technologies are used merely for sake of brevity and demonstration.  
Emotion can be used quite differently, but since it's very much CSS like,  
design tokens are also in CSS variables format. Radix UI is used to build 2 components.


### [MUI + Base UI + MUI System](./mui-base-system/)

[Link to the MUI guide](https://www.design-tokens.dev/guides/mui)  

Using all MUI technologies is certainly not mandatory, quite the opposite.  
Design tokens are implemented via MUI theme layer with experimental CSS variables context.  
Despite recommended approach, for demonstration `sx` property is used dominantly.  
All components are built with MUI entities.

### [Chakra UI](./chakra-ui-react/)

[Link to the guide](https://www.design-tokens.dev/guides/chakra-ui)

Theming Chakra UI is a very similar dev experience to theming Tailwind CSS.  
All components are build with the framework entities.  
Design tokens work via Chakra UI theme properties with exception of a couple custom fields.


## 🌐 Links and References

- [CSS Modules](https://github.com/css-modules/css-modules)
- [Headless UI](https://headlessui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Emotion](https://emotion.sh/)
- [Material UI](https://mui.com/)
- [Chakra UI](https://chakra-ui.com/)

Images generated with [Fusion Brain](https://fusionbrain.ai/en/).  
Fonts by [Google Fonts](https://fonts.google.com/).


## [LICENSE](./LICENSE)
