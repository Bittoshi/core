#!/usr/bin/bash

echo "$ Project setup starting..."

echo "$ Installing dependencies..."
pnpm install --silent

echo "$ Generating prisma client..."
pnpm prisma generate

echo "$ Running required database migrations... (this may take a while)"
pnpm prisma migrate dev --name init

echo "$ Project setup complete! 🎉"
echo "----------------------------------------"