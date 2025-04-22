FROM  serversideup/php:8.4-fpm-nginx AS base

USER root

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs

RUN npm install --global corepack@latest

RUN corepack enable pnpm

RUN install-php-extensions intl

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html

USER www-data

RUN pnpm install

RUN composer install --no-interaction

RUN pnpm run build

FROM base AS production

RUN pnpm install --frozen-lockfile --prod

RUN composer install --prefer-dist --no-dev --no-interaction