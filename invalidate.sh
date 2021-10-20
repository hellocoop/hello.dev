#!/bin/bash
echo "Invalidating cloudfront for www.hello.dev"
aws cloudfront create-invalidation --distribution-id E2XZ2JH0K6J6Q6 --paths "/*"