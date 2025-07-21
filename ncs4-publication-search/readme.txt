=== Publication Search ===
Contributors:      Nishit Thapa, NCS4
Tags:              block, publications, search, csv, research, academic
Tested up to:      6.7
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A WordPress block that provides a searchable interface for publications stored in CSV format, with filtering by tags and years.

== Description ==

The Publication Search block allows you to create a searchable, filterable interface for academic publications and research papers. Simply upload a CSV file containing your publication data, and the block will generate an interactive search interface with the following features:

* **Real-time search** across all publication fields (title, author, source, etc.)
* **Tag-based filtering** with clickable tag buttons
* **Year filtering** with dropdown selection
* **Sorting options** by date, author, or title (ascending/descending)
* **Pagination** for large datasets
* **Responsive design** that works on all devices
* **Search freeze functionality** to lock search results while browsing

The CSV file should contain columns for Title, Author, Year, Source, Tags, and URL. The plugin automatically extracts 4-digit years from various date formats (e.g., "Sept 2013" becomes "2013").

You can generate the required CSV format using our publication parser script available at https://github.com/ncs4devs/ncs4-publication-parser

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/ncs4-publication-search` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. In the block editor, add the "Publication Search" block to your page or post
4. Upload your CSV file using the media uploader in the block settings
5. The search interface will automatically appear on your published page

== Frequently Asked Questions ==

= What format should my CSV file be in? =

Your CSV file should have the following columns:
- Title: Publication title
- Author: Author name(s)
- Year: Publication year (can include month/date, will be cleaned automatically)
- Source: Journal, conference, or publication source
- Tags: Comma-separated tags for filtering
- URL: Link to the full publication (optional)

= Can I customize the appearance? =

The block is designed to inherit your theme's styling while maintaining its functionality. The responsive design adapts to all screen sizes automatically.

= How do I generate the CSV file? =

You can use the publication parsing script at https://github.com/ncs4devs/ncs4-publication-parser to convert publication lists into the required CSV format.

= How many publications can I display? =

The plugin uses pagination and can handle large datasets efficiently. Results are displayed in configurable chunks (5, 10, or 20 per page).

== Screenshots ==

1. The publication search interface showing search bar, filters, and results
2. Mobile responsive view of the search interface
3. Tag filtering and year dropdown in action

== Changelog ==

= 0.1.0 =
* Initial release
* Real-time search functionality
* Tag and year filtering
* Responsive design
* Pagination support
* Search freeze feature

== Technical Requirements ==

* WordPress 5.0 or higher
* PHP 7.4 or higher
* Modern web browser with JavaScript enabled
