FROM node:20.19.2-bookworm

WORKDIR /workspace

# Preinstall dependencies at image build time using the lockfile.
COPY package.json package-lock.json ./
RUN npm ci
