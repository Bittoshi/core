## Installation

See [setup](setup.md) for more information.

### Requirements

- [Node.js, latest LTS](https://nodejs.org/en/)
- [PostgreSQL, latest version](https://www.postgresql.org/download/)
- [Pnpm, latest version](https://pnpm.js.org/en/installation)

### Scripts

The following scripts are available:

- `pnpm start:dev`: Starts the server in development mode.
- `pnpm start`: Starts the server in production mode.
- `pnpm test`: Runs the tests.
- `pnpm type-check`: Checks the types and import validatity.
- `pnpm lint`: Runs eslint on the project files.
- `pnpm lint:fix`: Runs eslint on the project files and fixes the errors.
- `pnpm format`: Formats the project files with prettier.
- `pnpm format:check`: Checks the project files with prettier.
- `pnpm build`: Builds the project with the [build script](scripts/build.sh).
- `pnpm setup`: Sets up the project with the [setup script](scripts/setup.sh).
