#!/bin/bash

# Cleanup script - removes all old unused files from the workspace

echo "🧹 Cleaning up old files..."

# Remove old HTML backup
if [ -d "_old_html_backup" ]; then
    echo "  ✓ Removing _old_html_backup/"
    rm -rf _old_html_backup
fi

# Remove old case studies (now migrated to Svelte)
if [ -d "case-studies" ]; then
    echo "  ✓ Removing case-studies/"
    rm -rf case-studies
fi

# Remove old CSS directory
if [ -d "css" ]; then
    echo "  ✓ Removing css/"
    rm -rf css
fi

# Remove old scripts directory
if [ -d "scripts" ]; then
    echo "  ✓ Removing scripts/"
    rm -rf scripts
fi

# Remove old docs directory
if [ -d "docs" ]; then
    echo "  ✓ Removing docs/"
    rm -rf docs
fi

# Remove old assets directory (static/media is the new location)
if [ -d "assets" ]; then
    echo "  ✓ Removing assets/"
    rm -rf assets
fi

# Remove old root-level header/redirect files (static/ is the new location)
if [ -f "_headers" ]; then
    echo "  ✓ Removing _headers"
    rm _headers
fi

if [ -f "_redirects" ]; then
    echo "  ✓ Removing _redirects"
    rm _redirects
fi

# Remove old migration doc
if [ -f "migration.md" ]; then
    echo "  ✓ Removing migration.md"
    rm migration.md
fi

# Remove all the documentation files from previous migration attempt
echo "  ✓ Removing old documentation files"
rm -f CLEANUP.md DO_THIS_NOW.md FIXED.md MIGRATION_COMPLETE.md PROJECT_STATUS.md START_HERE.md cleanup.sh setup.sh start.sh verify.sh

echo "✨ Cleanup complete!"
echo ""
echo "Remaining structure:"
ls -la
