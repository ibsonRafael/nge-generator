# nge-generator-cli
CLI for creating Angular World Class apps with nge generators

## Installation

```sh
npm install -g nge-cli
```

## Usage
```sh
nge --help
            ______ 
 _ _  __ _ |  ____| ___ ____ ____ _  _ ____ ___ _
| ' \/ _` ||  ____| - G E N E R A T O R S
|_||_\__, /|______| _  ____ __ _ _______  _ ___ _
     |___/  V?.?.?  ANGULAR 2 ENTERPRISE APP KIT

Usage: nge [new|update|config|list|<script>] [options]

n, new [name]
  Creates a new app.
  -a, --addon  Creates an add-on instead.

u, update
  Updates an existing app or add-on.

c, config
  Configures add-ons to use for new apps.
  All available add-ons are used by default.

l, list
  Lists available add-ons.
  -n, --npm    Show installable add-ons on NPM
  
<script>
  Runs specified script from your package.json.
  Works just like npm run <script>
```

## Generating and serving a project via a development server

```sh
nge new
npm start
```

## Updating an existing project

## Managing add-ons

### Listing available add-ons

### Disabling specific add-ons

### Creating a new add-on

### Running scripts from `package.json`

# License

[MIT](LICENSE)
