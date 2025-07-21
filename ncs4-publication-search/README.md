# Publication Search

A WordPress Gutenberg block that creates a searchable interface for publications stored in CSV format.

## Description

This plugin allows you to upload a CSV file containing publication data and creates an interactive search interface with:

- Real-time search across all fields
- Tag filtering with clickable buttons
- Year filtering dropdown
- Responsive design for mobile devices
- Pagination for large datasets

The CSV file should contain columns for Title, Author, Year, Source, Tags, and URL. You can generate the required CSV format using our publication parser script: https://github.com/ncs4devs/ncs4-publication-parser

## Installation

1. Upload the plugin to your WordPress site
2. Activate it in the plugins screen
3. Add the "Publication Search" block to any page
4. Upload your CSV file using the media uploader
5. Publish and your search interface will appear

## Development

```bash
npm install
npm start    # Development server
npm run build    # Production build
```

## CSV Format

Your CSV should have these columns:

- Title (required)
- Author (required)
- Year (required)
- Source (required)
- Tags (optional, comma-separated)
- URL (optional)

The plugin automatically extracts 4-digit years from various date formats like "Sept 2023" → "2023".
