<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {$('form').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting
        var searchTerm = $('#search').val().toLowerCase(); // Get the search term
        $('dt').each(function () {
            var term = $(this).text().toLowerCase(); // Get the term for each definition
            if (term.indexOf(searchTerm) !== -1) { // Check if the term matches the search term
                $(this).addClass('match'); // Highlight the matching term
                $(this).next().addClass('match').attr('aria-live', 'polite'); // Highlight the matching definition and announce it to screen readers
            } else {
                $(this).removeClass('match'); // Remove the highlight if it doesn't match
                $(this).next().removeClass('match').removeAttr('aria-live'); // Remove the highlight and aria-live attribute
            }
        });
    })};
    });
  function sortGlossaryTerms() {
    const termsList = document.getElementById('glossary-terms');
    const terms = Array.from(termsList.children);
    terms.sort((a, b) => a.textContent.localeCompare(b.textContent));
    terms.forEach(term => termsList.appendChild(term));
    }
</script>
