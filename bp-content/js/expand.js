// Handles expanding/hiding the filter sidebar

{
  const tab = document.getElementById("filter-sidebar__expand");
  const sidebar = document.getElementById("ncs4-bp-content__filter-sidebar");

  function toggleSidebar() {
    sidebar.classList.toggle( "toggled" );

    tab.setAttribute(
      'aria-expanded', tab.getAttribute('aria-expanded') === 'true'
        ? 'false'
        : 'true'
    );
  }

  function clickOutside(t) {
    if ( !sidebar.contains(t) ) {
      sidebar.classList.remove( "toggled" );
      tab.setAttribute( "aria-expanded", "false");
    }
  }

  tab.addEventListener( "click", toggleSidebar);
  document.addEventListener( "click", (e) => clickOutside(e.target) );
}
