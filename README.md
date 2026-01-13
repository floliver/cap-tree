# CAP Template Repository

This repository is a template for creating new cap application repositories in typescript.

### Included Parts

- CAP Book template application
- Typescript Support
- Linter Setup
  - eslint
  - typescript-eslint
  - config in `eslint.config.mts`
- Formatter Setup
  - Prettier config in `.prettierrc`
  - `format-cds` config in `.cdsprettier.json`
- Jest Setup
  - Jest
  - Typescript
  - Eslint
- WDI5 Test Setup
- Sonar Project setup
- Typescript Setup

### Missing Parts

- multitenancy

# CDS init - Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

| File or Folder | Purpose                              |
| -------------- | ------------------------------------ |
| `app/`         | content for UI frontends goes here   |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).

## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.
