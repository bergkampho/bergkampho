# Bergkamp Ho's Personal Website

It is a repository aimed at showcasing a my skills from development to deployment. It leverages various technologies such as Astro, CSS, HTML, Docker, and GitHub Actions to demonstrate proficiency in modern web development practices.

## Under the Hood

- Astro: Utilizes Astro, a modern static site generator that allows for seamless integration of JavaScript frameworks like React.
- CSS and HTML: Implements styling and structuring of web pages using CSS and HTML to create visually appealing and user-friendly interfaces.
- Docker: Utilizes Docker for containerization, ensuring consistency across different environments and simplifying deployment.
- GitHub Actions: Integrates GitHub Actions to automate the build and deployment process, streamlining the development workflow.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
