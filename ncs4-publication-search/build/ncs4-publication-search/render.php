<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Function to extract 4-digit year from various date formats
if (!function_exists('ncs4_pub_search_extract_year')) {
    function ncs4_pub_search_extract_year($date_string)
    {
        if (empty($date_string)) {
            return '';
        }

        // Use regex to find 4-digit year (19xx or 20xx)
        if (preg_match('/\b(19|20)\d{2}\b/', $date_string, $matches)) {
            return $matches[0];
        }

        return '';
    }
}

// Function to read and parse CSV file
if (!function_exists('ncs4_pub_search_read_publications_csv')) {
    function ncs4_pub_search_read_publications_csv($file_url)
    {
        if (!$file_url) {
            return array('error' => 'No CSV file uploaded');
        }

        // Method 1: Try WordPress's attachment_url_to_postid function
        $attachment_id = attachment_url_to_postid($file_url);
        if ($attachment_id) {
            $file_path = get_attached_file($attachment_id);
        } else {
            // Method 2: Fallback to manual URL-to-path conversion
            $upload_dir = wp_upload_dir();
            $file_path = str_replace($upload_dir['baseurl'], $upload_dir['basedir'], $file_url);
        }

        // Additional fallback: try removing protocol and domain
        if (!file_exists($file_path)) {
            $upload_dir = wp_upload_dir();
            $parsed_url = parse_url($file_url);
            if (isset($parsed_url['path'])) {
                // Extract just the path part and combine with uploads directory
                $relative_path = ltrim($parsed_url['path'], '/');
                if (strpos($relative_path, 'wp-content/uploads/') !== false) {
                    $file_path = ABSPATH . $relative_path;
                }
            }
        }

        if (!file_exists($file_path)) {
            // Debug information for troubleshooting
            $debug_info = array(
                'Original URL' => $file_url,
                'Computed file path' => $file_path,
                'Upload directory info' => wp_upload_dir(),
                'Attachment ID' => $attachment_id ?? 'Not found'
            );

            return array('error' => 'CSV file not found. Debug info: ' . print_r($debug_info, true) . ' Please make sure the file is uploaded through WordPress Media Library.');
        }

        // Check if it's actually a CSV file
        $file_extension = strtolower(pathinfo($file_path, PATHINFO_EXTENSION));
        if ($file_extension !== 'csv') {
            return array('error' => 'Please upload a CSV file. Current file type: ' . $file_extension);
        }

        $publications = array();
        $all_tags = array();
        $all_years = array();

        if (($handle = fopen($file_path, "r")) !== FALSE) {
            // Read header row
            $headers = fgetcsv($handle);

            if (!$headers) {
                fclose($handle);
                return array('error' => 'CSV file appears to be empty or invalid');
            }

            // Find the Tags and Year column indexes
            $tags_index = array_search('Tags', $headers);
            $year_index = array_search('Year', $headers);

            // Read data rows
            while (($data = fgetcsv($handle)) !== FALSE) {
                $row = array();
                foreach ($headers as $index => $header) {
                    $row[$header] = $data[$index] ?? '';

                    // Collect unique tags
                    if ($index === $tags_index && !empty($data[$index])) {
                        $row_tags = array_map('trim', explode(',', $data[$index]));
                        foreach ($row_tags as $tag) {
                            if (!empty($tag) && !in_array($tag, $all_tags)) {
                                $all_tags[] = $tag;
                            }
                        }
                    }

                    // Collect unique years
                    if ($index === $year_index && !empty($data[$index])) {
                        $extracted_year = ncs4_pub_search_extract_year($data[$index]);
                        if (!empty($extracted_year) && !in_array($extracted_year, $all_years)) {
                            $all_years[] = $extracted_year;
                        }
                    }
                }
                $publications[] = $row;
            }
            fclose($handle);
        } else {
            return array('error' => 'Unable to read CSV file. Please check file permissions.');
        }

        sort($all_tags); // Sort tags alphabetically
        rsort($all_years); // Sort years in descending order (newest first)
        return array('publications' => $publications, 'tags' => $all_tags, 'years' => $all_years);
    }
}

// Get block attributes
$media_url = isset($attributes['mediaUrl']) ? $attributes['mediaUrl'] : '';

// Get the publications data
$data = ncs4_pub_search_read_publications_csv($media_url);
$publications = isset($data['error']) ? $data : $data['publications'];
$all_tags = isset($data['error']) ? array() : $data['tags'];
$all_years = isset($data['error']) ? array() : $data['years'];

// Generate a unique ID for this instance of the block
$block_id = 'ncs4-pub-search-' . uniqid();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php if (isset($data['error'])): ?>
        <p class="error"><?php echo esc_html($data['error']); ?></p>
    <?php else: ?>
        <div class="publications-search-container">
            <div class="search-section">
                <div class="search-bar">
                    <input
                        type="text"
                        id="<?php echo esc_attr($block_id); ?>-search"
                        class="publication-search-input"
                        placeholder="Search publications...">
                    <button type="button" class="search-icon" id="<?php echo esc_attr($block_id); ?>-search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                <?php if (!empty($all_tags)): ?>
                    <div class="tags-toggle">
                        <label class="switch">
                            <input type="checkbox" id="<?php echo esc_attr($block_id); ?>-toggle-tags">
                            <span class="slider"></span>
                        </label>
                        <span class="toggle-label">Show Tags</span>
                    </div>

                    <div class="search-controls">
                        <select id="<?php echo esc_attr($block_id); ?>-limit" class="result-limit">
                            <option value="5">Show 5</option>
                            <option value="10" selected>Show 10</option>
                            <option value="20">Show 20</option>
                        </select>

                        <?php if (!empty($all_years)): ?>
                            <select id="<?php echo esc_attr($block_id); ?>-year" class="year-filter">
                                <option value="">All Years</option>
                                <?php foreach ($all_years as $year): ?>
                                    <option value="<?php echo esc_attr($year); ?>"><?php echo esc_html($year); ?></option>
                                <?php endforeach; ?>
                            </select>
                        <?php endif; ?>

                        <select id="<?php echo esc_attr($block_id); ?>-sort" class="result-sort">
                            <option value="date_asc" selected>Date (Ascending)</option>
                            <option value="date_desc">Date (Descending)</option>
                            <option value="author_asc">Author (A-Z)</option>
                            <option value="author_desc">Author (Z-A)</option>
                            <option value="title_asc">Title (A-Z)</option>
                            <option value="title_desc">Title (Z-A)</option>
                        </select>
                    </div>
                <?php endif; ?>
            </div>

            <?php if (!empty($all_tags)): ?>
                <div id="<?php echo esc_attr($block_id); ?>-tags" class="tags-container collapsed">
                    <?php foreach ($all_tags as $tag): ?>
                        <button type="button" class="tag-filter" data-tag="<?php echo esc_attr($tag); ?>">
                            <?php echo esc_html($tag); ?>
                        </button>
                    <?php endforeach; ?>
                    <button type="button" class="expand-tags-btn">Show All Tags</button>
                </div>
            <?php endif; ?>

            <div id="<?php echo esc_attr($block_id); ?>-results" class="publications-list">
                <p class="initial-message">Type in the search box above to find publications.</p>
            </div>
            <div id="<?php echo esc_attr($block_id); ?>-pagination" class="pagination-controls" style="display: none;">
                <button type="button" class="pagination-btn prev-btn" disabled>Previous</button>
                <span class="page-info">Page <span class="current-page">1</span></span>
                <button type="button" class="pagination-btn next-btn" disabled>Next</button>
            </div>
        </div>

        <script>
            (function() {
                const blockId = '<?php echo esc_js($block_id); ?>';
                const searchInput = document.getElementById(blockId + '-search');
                const searchBtn = document.getElementById(blockId + '-search-btn');
                const resultsContainer = document.getElementById(blockId + '-results');
                const paginationContainer = document.getElementById(blockId + '-pagination');
                const prevBtn = paginationContainer.querySelector('.prev-btn');
                const nextBtn = paginationContainer.querySelector('.next-btn');
                const currentPageSpan = paginationContainer.querySelector('.current-page');
                const tagsContainer = document.getElementById(blockId + '-tags');
                const toggleTagsBtn = document.getElementById(blockId + '-toggle-tags');
                const limitSelect = document.getElementById(blockId + '-limit');
                const yearSelect = document.getElementById(blockId + '-year');
                const sortSelect = document.getElementById(blockId + '-sort');
                const publications = <?php echo json_encode($publications); ?>;
                let selectedTags = new Set();
                let isSearchFrozen = false;
                let currentPage = 1;
                let filteredResults = [];
                let lastSearchTerm = '';
                const MAX_VISIBLE_TAGS = 25;
                let isTagsExpanded = false;

                // Function to extract 4-digit year from date string (mirrors PHP function)
                function ncs4ExtractYear(dateString) {
                    if (!dateString) return '';
                    const match = dateString.match(/\b(19|20)\d{2}\b/);
                    return match ? match[0] : '';
                }

                // Toggle search freeze and perform search
                if (searchBtn) {
                    searchBtn.addEventListener('click', () => {
                        isSearchFrozen = !isSearchFrozen;
                        searchBtn.classList.toggle('frozen');
                        if (!isSearchFrozen) {
                            // If unfreezing, perform search with current input
                            performSearch(searchInput.value);
                        }
                    });
                }

                // Add input event listener for real-time search
                searchInput.addEventListener('input', (e) => {
                    // Clear selected tags when user starts typing a new search
                    if (selectedTags.size > 0) {
                        selectedTags.clear();
                        // Update UI - remove active class from all tag filters
                        document.querySelectorAll('.tag-filter').forEach(btn => {
                            btn.classList.remove('active');
                        });
                    }

                    if (!isSearchFrozen) {
                        performSearch(e.target.value);
                    }
                    lastSearchTerm = e.target.value;
                });

                // Handle Enter key
                searchInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        // Clear selected tags when performing a new search
                        if (selectedTags.size > 0) {
                            selectedTags.clear();
                            // Update UI - remove active class from all tag filters
                            document.querySelectorAll('.tag-filter').forEach(btn => {
                                btn.classList.remove('active');
                            });
                        }

                        if (isSearchFrozen) {
                            // If frozen, toggle freeze and perform search
                            searchBtn.click();
                        } else {
                            // If not frozen, just perform the search
                            performSearch(e.target.value);
                        }
                    }
                });

                // Pagination event listeners
                prevBtn.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--;
                        displayResults();
                    }
                });

                nextBtn.addEventListener('click', () => {
                    const totalPages = Math.ceil(filteredResults.length / parseInt(limitSelect.value));
                    if (currentPage < totalPages) {
                        currentPage++;
                        displayResults();
                    }
                });

                // Function to update tag visibility
                function updateTagVisibility() {
                    const tagButtons = tagsContainer.querySelectorAll('.tag-filter');
                    tagButtons.forEach((btn, index) => {
                        btn.style.display = (!isTagsExpanded && index >= MAX_VISIBLE_TAGS) ? 'none' : '';
                    });
                }

                // Toggle tags visibility and filtering
                if (toggleTagsBtn) {
                    toggleTagsBtn.addEventListener('change', () => {
                        tagsContainer.style.display = toggleTagsBtn.checked ? 'flex' : 'none';
                        if (toggleTagsBtn.checked) {
                            // When showing tags, ensure we're in collapsed state
                            isTagsExpanded = false;
                            updateTagVisibility();
                            const expandButton = tagsContainer.querySelector('.expand-tags-btn');
                            if (expandButton) {
                                expandButton.textContent = 'Show All Tags';
                            }
                        } else {
                            // Clear selected tags when hiding
                            selectedTags.clear();
                            // Update UI - remove active class from all tag filters
                            document.querySelectorAll('.tag-filter').forEach(btn => {
                                btn.classList.remove('active');
                            });
                            // Update results only if not frozen
                            if (!isSearchFrozen) {
                                performSearch(searchInput.value);
                            }
                        }
                    });
                }

                // Handle expand/collapse button
                if (tagsContainer) {
                    const expandButton = tagsContainer.querySelector('.expand-tags-btn');
                    if (expandButton) {
                        expandButton.addEventListener('click', () => {
                            isTagsExpanded = !isTagsExpanded;
                            updateTagVisibility();
                            expandButton.textContent = isTagsExpanded ? 'Show Less Tags' : 'Show All Tags';
                        });
                    }
                }

                // Handle tag selection
                if (tagsContainer) {
                    tagsContainer.addEventListener('click', (e) => {
                        if (e.target.classList.contains('tag-filter')) {
                            const tag = e.target.dataset.tag;

                            // Toggle the tag selection
                            if (selectedTags.has(tag)) {
                                selectedTags.delete(tag);
                                e.target.classList.remove('active');
                            } else {
                                selectedTags.add(tag);
                                e.target.classList.add('active');
                            }

                            if (!isSearchFrozen) {
                                performSearch(searchInput.value);
                            }
                        }
                    });
                }

                // Handle tag click in results
                resultsContainer.addEventListener('click', (e) => {
                    if (e.target.classList.contains('result-tag')) {
                        const tag = e.target.dataset.tag;

                        // Toggle the tag selection
                        if (selectedTags.has(tag)) {
                            // If tag is already selected, deselect it
                            selectedTags.delete(tag);
                        } else {
                            // If tag is not selected, select it (but don't clear others)
                            selectedTags.add(tag);
                        }

                        // Update UI for all tag filters
                        document.querySelectorAll('.tag-filter').forEach(btn => {
                            btn.classList.toggle('active', selectedTags.has(btn.dataset.tag));
                        });

                        if (!isSearchFrozen) {
                            performSearch(searchInput.value);
                        }
                    }
                });

                // Add event listeners for limit and sort changes
                if (limitSelect && sortSelect) {
                    limitSelect.addEventListener('change', () => {
                        if (!isSearchFrozen) {
                            performSearch(searchInput.value);
                        }
                    });

                    sortSelect.addEventListener('change', () => {
                        if (!isSearchFrozen) {
                            performSearch(searchInput.value);
                        }
                    });
                }

                // Add event listener for year filter
                if (yearSelect) {
                    yearSelect.addEventListener('change', () => {
                        if (!isSearchFrozen) {
                            performSearch(searchInput.value);
                        }
                    });
                }

                function sortPublications(publications) {
                    const sortValue = sortSelect.value;
                    return [...publications].sort((a, b) => {
                        switch (sortValue) {
                            case 'date_asc':
                                return new Date(a.Year) - new Date(b.Year);
                            case 'date_desc':
                                return new Date(b.Year) - new Date(a.Year);
                            case 'author_asc':
                                return (a.Author || '').localeCompare(b.Author || '');
                            case 'author_desc':
                                return (b.Author || '').localeCompare(a.Author || '');
                            case 'title_asc':
                                return (a.Title || '').localeCompare(b.Title || '');
                            case 'title_desc':
                                return (b.Title || '').localeCompare(a.Title || '');
                            default:
                                return 0;
                        }
                    });
                }

                function performSearch(searchTerm) {
                    const hasYearFilter = yearSelect && yearSelect.value !== '';
                    if (!searchTerm.trim() && selectedTags.size === 0 && !hasYearFilter) {
                        resultsContainer.innerHTML = '<p class="initial-message">Type in the search box above to find publications.</p>';
                        paginationContainer.style.display = 'none';
                        return;
                    }

                    searchTerm = searchTerm.toLowerCase();
                    filteredResults = publications.filter(pub => {
                        // Check if publication matches search term
                        const matchesSearch = !searchTerm.trim() || Object.values(pub).some(value =>
                            value.toLowerCase().includes(searchTerm)
                        );

                        // Check if publication matches selected tags
                        const pubTags = pub.Tags ? pub.Tags.split(',').map(t => t.trim()) : [];
                        const matchesTags = selectedTags.size === 0 ||
                            Array.from(selectedTags).some(tag => pubTags.includes(tag));

                        // Check if publication matches selected year
                        const pubYear = ncs4ExtractYear(pub.Year || '');
                        const matchesYear = !yearSelect || yearSelect.value === '' || pubYear === yearSelect.value;

                        return matchesSearch && matchesTags && matchesYear;
                    });

                    // Sort the filtered publications
                    filteredResults = sortPublications(filteredResults);

                    // Reset to first page when search changes
                    currentPage = 1;
                    displayResults();
                }

                function displayResults() {
                    const limit = parseInt(limitSelect.value);
                    const startIndex = (currentPage - 1) * limit;
                    const endIndex = startIndex + limit;
                    const totalPages = Math.ceil(filteredResults.length / limit);

                    // Update pagination controls
                    prevBtn.disabled = currentPage === 1;
                    nextBtn.disabled = currentPage === totalPages;
                    currentPageSpan.textContent = currentPage;
                    paginationContainer.style.display = filteredResults.length > limit ? 'flex' : 'none';

                    // Get current page results
                    const currentResults = filteredResults.slice(startIndex, endIndex);

                    let html = '';
                    if (currentResults.length > 0) {
                        currentResults.forEach(pub => {
                            html += '<div class="publication-item">';

                            // Title
                            if (pub.Title) {
                                html += `<h3 class="pub-title">${pub.Title}</h3>`;
                            }

                            // Authors and Year
                            if (pub.Author || pub.Year) {
                                html += '<div class="pub-meta">';
                                if (pub.Author) html += `<span class="author">${pub.Author}</span>`;
                                if (pub.Author && pub.Year) html += ' • ';
                                if (pub.Year) html += `<span class="year">${pub.Year}</span>`;
                                html += '</div>';
                            }

                            // Source
                            if (pub.Source) {
                                html += `<div class="pub-source"><span>${pub.Source}</span></div>`;
                            }

                            // Tags
                            if (pub.Tags) {
                                html += '<div class="pub-tags">';
                                pub.Tags.split(',').map(t => t.trim()).forEach(tag => {
                                    html += `<button type="button" class="result-tag" data-tag="${tag}">${tag}</button>`;
                                });
                                html += '</div>';
                            }

                            // URL Button
                            if (pub.URL && pub.URL.trim()) {
                                html += `<div class="pub-actions">
									<button type="button" class="view-article-btn" onclick="window.open('${pub.URL}', '_blank')">View Article</button>
								</div>`;
                            }

                            html += '</div>';
                        });
                    } else {
                        html = '<div class="no-results">No matching publications found.</div>';
                    }

                    resultsContainer.innerHTML = html;
                }

                // Initial state - empty search
                performSearch('');
            })();
        </script>
    <?php endif; ?>
</div>