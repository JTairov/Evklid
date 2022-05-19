window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")

      document.querySelectorAll('.tabs_btn').forEach(function(tabContent) {
        tabContent.classList.remove('tabs_btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add("tabs_btn-active")
    })
  })
})
