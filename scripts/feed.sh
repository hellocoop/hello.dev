#!/bin/bash

# URL of the RSS feed
RSS_URL="https://blog.hello.dev/rss.xml"

# Output file name
OUTPUT_FILE="./public/feed.xml"

# Fetch the RSS feed and save it locally
curl -o "$OUTPUT_FILE" "$RSS_URL"

# Check if the curl command was successful
if [ $? -eq 0 ]; then
  echo "RSS feed saved successfully to $OUTPUT_FILE"
else
  echo "Failed to fetch the RSS feed"
fi
