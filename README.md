# Personal Website Portfolio - Juan Sáez García

Welcome to my [personal website](https://juamber.com/home) portfolio! This website showcases my skills and projects as a web developer. It is built using Angular and hosted on GitHub Pages. The website is also integrated with Supabase, a powerful open-source alternative to Firebase, to store and retrieve data.

This project is a work in progress, and I am constantly updating it with new features and improvements. If you have any suggestions or feedback, feel free to open an issue or pull request. I would love to hear from you!

# Table of Contents 📖

1. [Getting Started 🚀](#getting-started)
    1. [Supabase Configuration 🛠️](#supabase-configuration)
    2. [Database Definition 📜](#database-definition)
    3. [Environment Configuration 🛠️](#environment-configuration)
    4. [Running The Project 🛩️](#running-the-project)
2. [ESLint ✏️](#eslint)
3. [Testing 🧪](#testing)
4. [Husky 🐶](#husky)
    1. [Commitlint Configuration 🛠️](#commitlint-configuration)
5. [GitHub Actions 🚀](#github-actions)
6. [Server Side Rendering (SSR) Support 🖥️](#server-side-rendering-ssr-support)
7. [Author 🧑‍💻](#author)
8. [License 🔓](#license)

## 1. Getting Started 🚀 <a name="getting-started"></a>

To get started with this project, you will need to have Node.js and npm installed on your machine. You can download them from the [official website](https://nodejs.org/).

After installing Node.js and npm, you can clone this repository and install the project dependencies by running the following commands:

```bash
  git clone https://github.com/JuamBer/personal-web.git
  cd personal-web
  npm install
```

### 1.1. Supabase Configuration 🛠️ <a name="supabase-configuration"></a>

This project uses Supabase as a backend service. Supabase is an open-source alternative to Firebase that provides a powerful set of tools for building web and mobile applications. To use Supabase in this project, you will need to create a Supabase project and obtain the API key and URL.

You can create a Supabase project by following the instructions on the [official website](https://supabase.com/). After creating the project, you can obtain the API key and URL from the project settings.

### 1.2. Database definition 📜 <a name="database-definition"></a>

#### 1.2.1. Languages

```sql
create table
  public.languages (
    acronym character varying not null,
    name character varying not null,
    native_name character varying not null,
    active boolean not null,
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone null default now(),
    updated_at timestamp with time zone null,
    constraint languages_pkey primary key (id),
    constraint languages_acronym_key unique (acronym),
    constraint languages_uid_key unique (id)
  ) tablespace pg_default;
```

#### 1.2.2. Skill Types

```sql
create table
  public.skill_types (
    created_at timestamp with time zone null default now(),
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null,
    name_translations jsonb not null default '[]'::jsonb,
    description_translations jsonb not null default '[]'::jsonb,
    constraint skill_types_pkey primary key (id),
    constraint skill_types_uuid_key unique (id)
  ) tablespace pg_default;
```

#### 1.2.3. Skills

```sql
create table
  public.skills (
    created_at timestamp with time zone null default now(),
    name character varying not null,
    percentage numeric not null,
    id uuid not null default gen_random_uuid (),
    skill_type_id uuid null,
    updated_at timestamp with time zone null,
    constraint skills_pkey primary key (id),
    constraint skills_name_key unique (name),
    constraint skills_skill_type_id_fkey foreign key (skill_type_id) references skill_types (id)
  ) tablespace pg_default;
```

#### 1.2.4. Certificate Groups

```sql
create table
  public.certificate_groups (
    created_at timestamp with time zone null default now(),
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null,
    name_translations jsonb not null default '[]'::jsonb,
    description_translations jsonb not null default '[]'::jsonb,
    constraint certificate_groups_pkey primary key (id)
  ) tablespace pg_default;
```

#### 1.2.5. Certificate Types

```sql
create table
  public.certificate_types (
    created_at timestamp with time zone null default now(),
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null default now(),
    name_translations jsonb not null default '[]'::jsonb,
    description_translations jsonb not null default '[]'::jsonb,
    constraint certificate_types_pkey primary key (id),
    constraint certificate_types_uuid_key unique (id)
  ) tablespace pg_default;
```

#### 1.2.6. Companies

The following table requires the creation the enum "CompanyType". Its possible values are "SCHOOL" and "COMPANY".

```sql
create table
  public.companies (
    created_at timestamp with time zone null default now(),
    name character varying not null,
    location character varying null,
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null,
    description_translations jsonb not null default '[]'::jsonb,
    type public.CompanyType null,
    url text null,
    constraint companies_pkey primary key (id),
    constraint companies_name_key unique (name),
    constraint companies_uuid_key unique (id)
  ) tablespace pg_default;
```

#### 1.2.7. Positions

```sql
create table
  public.positions (
    created_at timestamp with time zone null default now(),
    date_from date not null,
    date_to date null,
    company_id uuid null,
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null,
    hourly_wage real null,
    name_translations jsonb not null default '[]'::jsonb,
    description_translations jsonb not null default '[]'::jsonb,
    importance integer not null default 0,
    constraint positions_pkey primary key (id),
    constraint positions_company_id_fkey foreign key (company_id) references companies (id) on delete set null
  ) tablespace pg_default;
```

#### 1.2.8. Certificates

```sql
create table
  public.certificates (
    created_at timestamp with time zone null default now(),
    url text null,
    image text null,
    pdf text null,
    date timestamp with time zone null,
    github text null,
    web text null,
    play_store text null,
    microsoft_store text null,
    certificate_group_id uuid null,
    certificate_type_id uuid null,
    company_id uuid null,
    id uuid not null default gen_random_uuid (),
    updated_at timestamp with time zone null,
    name_translations jsonb not null default '[]'::jsonb,
    description_translations jsonb not null default '[]'::jsonb,
    constraint certificates_pkey primary key (id),
    constraint certificates_certificate_group_id_fkey foreign key (certificate_group_id) references certificate_groups (id) on delete set null,
    constraint certificates_certificate_type_id_fkey foreign key (certificate_type_id) references certificate_types (id) on delete set null,
    constraint certificates_company_id_fkey foreign key (company_id) references companies (id) on delete set null
  ) tablespace pg_default;
```

#### 1.2.9. Projects

```sql
create table
  public.projects (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    name text not null,
    description_translations json null,
    date date null,
    company_id uuid null,
    urls json null,
    updated_at timestamp with time zone null,
    technologies text[] null,
    logo text null,
    constraint projects_pkey primary key (id),
    constraint public_projects_company_id_fkey foreign key (company_id) references companies (id)
  ) tablespace pg_default;
```

### 1.3. Environment Configuration 🛠️ <a name="environment-configuration"></a>

This project uses environment variables for configuration. These variables are defined in the `environment.ts`, `environment.prod.ts`, and `environment.dev.ts` files, which are not uploaded to the repository for security reasons.

To configure your environment, you will need to create your own `environment.ts`, `environment.prod.ts`, and `environment.dev.ts` files in the `src/environments` folder. These files should follow the following structure:

```typescript
export const environment = {
  apiKey: 'SUPABASE API KEY',
  apiUrl: 'SUPABASE API URL',
  googleCloudApiKey: 'GOOGLE CLOUD API KEY'
};
```

You can obtain the `apiKey` and `apiUrl` from your Supabase project. The `googleCloudApiKey` is used to enable the Google Maps API for the translate service. You can obtain it from the [Google Cloud Console](https://console.cloud.google.com/).

### 1.4. Running The Project 🛩️ <a name="running-the-project"></a>

To run the project, you can use the `npm start` command. This will start the development server and open the website in your default browser.

## 2. ESLint ✏️ <a name="eslint"></a>

This project uses ESLint for static code analysis. ESLint helps to find and fix problems in your TypeScript code, and also to maintain a consistent code style.

The ESLint configuration file for this project is `.eslintrc.json`.

To run ESLint, you can use the `npm run lint` command.

## 3. Testing 🧪 <a name="testing"></a>

This project uses Karma and Jasmine for unit testing. The relevant configuration file is [`karma.conf.js`]

Unit tests for components are located in `.spec.ts` files in the same directory as the component. For example, the tests for `AppComponent` are in [`src/app/app.component.spec.ts`](src/app/app.component.spec.ts).

This project also uses `karma-mocha-reporter` for more descriptive test reports in the console.

To run the tests, you can use the `npm run test` command.

## 4. Husky 🐶 <a name="husky"></a>

Husky is a tool that facilitates the execution of scripts before git events like `commit` and `push`. In this project, Husky is used to ensure code quality and prevent issues from being pushed to the repository.

Husky scripts are located in the [.husky](.husky/) folder. Here's a brief description of each one:

- `pre-commit`: This script runs before a `commit` is completed. It is used to perform tasks such as code formatting and linting error detection.
- `pre-push`: This script runs before a `push` is completed. It is used to run tests and ensure that only code that passes all tests is pushed.
- `commit-msg`: This script runs after a `commit` is completed and is used to validate the commit message using `commitlint`.

### 4.1. Commitlint Configuration 🛠️ <a name="commitlint-configuration"></a>

`commitlint` is a tool used in this project to enforce a consistent commit message format, following the ["Conventional Commits"](https://www.conventionalcommits.org/) standard. "Conventional Commits" is a commit message convention that facilitates readable commit history, automatic generation of release notes, and semantic versioning. This helps to keep the git history clean and readable. The configuration for `commitlint` is located in the `commitlint.config.js` file.

The `commit-msg` hook uses `commitlint` to check if the commit messages meet the criteria defined in the configuration. If the commit message does not meet the criteria, the commit will be aborted.

## 5. GitHub Actions 🚀 <a name="github-actions"></a>

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

## 6. Server Side Rendering (SSR) Support 🖥️ <a name="server-side-rendering-ssr-support"></a>

This project is configured to support Server Side Rendering (SSR) with Angular. SSR enhances the performance of the application and makes SEO easier by rendering the application content on the server.

The code for SSR is located in the [server.ts](server.ts) file and in [src/main.server.ts](src/main.server.ts). The `build:ssr` script in the [package.json](package.json) file is used to build the application for SSR.

However, because this project is hosted on GitHub Pages, which is a static host, SSR is not used for deployment. If you want to deploy this project with SSR, you will need a server that can run Node.js.

## 7. Author 🧑‍💻 <a name="author"></a>

- [Juan Sáez García](https://juamber.com)
- [GitHub](https://github.com/JuamBer)
- [LinkedIn](https://www.linkedin.com/in/juamber/)

## 8. License 🔓 <a name="license"></a>

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code as you see fit.
