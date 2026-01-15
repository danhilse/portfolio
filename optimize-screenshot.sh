#!/bin/zsh

# Optimize screenshot.png to WebP using ffmpeg

INPUT="public/screenshot.png"
OUTPUT="public/screenshot.webp"

if [[ ! -f "$INPUT" ]]; then
    echo "Error: $INPUT not found"
    exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg not found. Install with: brew install ffmpeg"
    exit 1
fi

echo "Original size: $(ls -lh "$INPUT" | awk '{print $5}')"

# Convert to WebP with high quality compression
ffmpeg -y -i "$INPUT" -quality 85 -compression_level 6 "$OUTPUT" 2>/dev/null

if [[ -f "$OUTPUT" ]]; then
    echo "WebP size: $(ls -lh "$OUTPUT" | awk '{print $5}')"
    echo "✓ Created $OUTPUT"
else
    echo "Optimization failed"
    exit 1
fi
