# Update node & composer packages

## Why

Regularly updating packages is crucial for several important reasons:

1. **Security**: Updates often include patches for security vulnerabilities. Outdated packages can expose your application to known security risks that have been fixed in newer versions.

2. **Bug Fixes**: Package maintainers regularly fix bugs and edge cases that could affect the stability and reliability of your application.

3. **Performance Improvements**: Updates frequently include optimizations that can make your application faster and more efficient.

4. **New Features**: Staying current gives you access to new functionality and improvements that can enhance your development experience and application capabilities.

5. **Compatibility**: As the JavaScript ecosystem evolves, keeping dependencies updated helps ensure compatibility with other tools and libraries in your stack.

6. **Technical Debt**: Regularly updating in small increments is typically easier than dealing with major version jumps after long periods of neglect.

7. **Support**: Newer versions typically receive better support from the community and package maintainers.

By maintaining up-to-date dependencies, you reduce risk, improve application quality, and make future maintenance more manageable.

## How

### Node

We can first identify whether there are any outdated packages by running the following command:

```sh
pnpm outdated
```

Then we can update to the latest versions with the following command:

```sh
pnpm up --latest
```

### Composer

We can update to the latest versions with the following command:

```sh
composer update
```