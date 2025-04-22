FROM mcr.microsoft.com/vscode/devcontainers/php:8.4

RUN curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64" \
    && chmod +x mkcert-v*-linux-amd64 \
    && sudo cp mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Add composer to PATH
ENV PATH="/root/.composer/vendor/bin:${PATH}"
RUN composer global require laravel/installer

WORKDIR /home/vscode

# Install NVM, Node.js, and enable pnpm in a single RUN command
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash \
    && export NVM_DIR="/usr/local/share/nvm" \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 23 \
    && corepack enable pnpm

# Make NVM available in subsequent commands and when container starts
ENV NVM_DIR="/usr/local/share/nvm"
ENV PATH="${NVM_DIR}/versions/node/v23.0.0/bin:${PATH}"