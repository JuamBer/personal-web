# Personal Website Portfolio - Juan Sáez García

Welcome to my [personal website](https://juamber.com/home) portfolio! This website showcases my skills and projects as a web developer.

## Table of Contents 📖

  - [Technologies Used 🛠️](#technologies-used)
  - [Environment Configuration 💻](#environment-configuration)
  - [ESLint ✏️](#eslint)
  - [Testing 🧪](#testing)
  - [Husky 🐶](#husky)
  - [GitHub Actions 🚀](#github-actions)
  - [License 🔓](#license)

## Technologies Used 🛠️

  - Front-End
    - [Angular](https://angular.io/)
    - [NGRX](https://ngrx.io/)
  - Back-End
    - [Supabase](https://supabase.com/)
  - Database
    - [PostgreSQL](https://www.postgresql.org/)
  - Version Control
    - [Git](https://git-scm.com/)
    - [GitHub](https://github.com/)
  - Others
    - [GitHub Pages](https://pages.github.com/)
    - [CI/CD: GitHub Actions](https://github.com/readme/guides/sothebys-github-actions)

## Environment Configuration 💻

This project uses environment variables for configuration. These variables are defined in the `environment.ts`, `environment.prod.ts`, and `environment.dev.ts` files, which are not uploaded to the repository for security reasons.

To configure your environment, you will need to create your own `environment.ts`, `environment.prod.ts`, and `environment.dev.ts` files in the `src/environments` folder. These files should follow the following structure:

```typescript
export const environment = {
  apiKey: 'SUPABASE API KEY',
  apiUrl: 'SUPABASE API URL',
  googleCloudApiKey: 'GOOGLE CLOUD API KEY'
};
```

## ESLint ✏️

This project uses ESLint for static code analysis. ESLint helps to find and fix problems in your TypeScript code, and also to maintain a consistent code style.

The ESLint configuration file for this project is `.eslintrc.json`.

To run ESLint, you can use the `npm run lint` command.

## Testing 🧪

This project uses Karma and Jasmine for unit testing. The relevant configuration file is [`karma.conf.js`]

Unit tests for components are located in `.spec.ts` files in the same directory as the component. For example, the tests for `AppComponent` are in [`src/app/app.component.spec.ts`](src/app/app.component.spec.ts).

This project also uses `karma-mocha-reporter` for more descriptive test reports in the console.

To run the tests, you can use the `npm run test` command.

## Husky 🐶

Husky is a tool that facilitates the execution of scripts before git events like `commit` and `push`. In this project, Husky is used to ensure code quality and prevent issues from being pushed to the repository.

Husky scripts are located in the [.husky](.husky/) folder. Here's a brief description of each one:

- `pre-commit`: This script runs before a `commit` is completed. It is used to perform tasks such as code formatting and linting error detection.
- `pre-push`: This script runs before a `push` is completed. It is used to run tests and ensure that only code that passes all tests is pushed.
- `commit-msg`: This script runs after a `commit` is completed and is used to validate the commit message using `commitlint`.

### Commitlint Configuration 

`commitlint` is a tool used in this project to enforce a consistent commit message format. This helps to keep the git history clean and readable. The configuration for `commitlint` is located in the `commitlint.config.js` file.

The `commit-msg` hook uses `commitlint` to check if the commit messages meet the criteria defined in the configuration. If the commit message does not meet the criteria, the commit will be aborted.

## GitHub Actions 🚀

GitHub Actions allows us to automate, customize, and execute our software workflows directly in our repository. In this project, we use GitHub Actions for various tasks, such as running tests and deploying our code.

You can see our workflows in the [.github/workflows](.github/workflows) directory.

An example of our workflows is [github-pages-deploy.yml](.github/workflows/github-pages-deploy.yml), which is responsible for deploying our project on GitHub Pages. Here we explain how it works step by step:

**Activation**: This workflow is activated when a push is made to the 'main' branch.
2. **Execution Environment**: The workflow runs on the latest available version of Ubuntu.
3. **Steps**:
   - **Checkout**: This step checks out the repository using GitHub's 'checkout' action.
   - **Setup node.js**: This step sets up a specific Node.js version using GitHub's 'setup-node' action.
   - **Generate environment file from github secrets**: This step creates an environment file from GitHub secrets for use in the application.
   - **Install dependencies**: This step installs all the necessary dependencies for the project using `npm install`.
   - **Run tests**: This step runs all unit tests to ensure the application is working as expected using `npm test`.
   - **Build app**: This step builds the application for production using `npm run build`.
   - **Deployment**: This step deploys the 'dist/browser' directory on GitHub Pages using GitHub's 'gh-pages' action.

For more information on how to use GitHub Actions, you can consult the [official documentation](https://docs.github.com/en/actions).

## License 🔓

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as you see fit.
