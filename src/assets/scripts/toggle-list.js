const toggleListSelectors = new Array(6).fill(null).map((_, i) => `li:has(h${i+1} ~ ul)`)

const ALLOWED_TO_TOGGLE_TAGS = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'UL']

const toggleLists = document.querySelectorAll(
  toggleListSelectors.join(', ')
);

toggleLists.forEach(toggleList => {
  toggleList.addEventListener('click', e => {
    e.stopPropagation();

    const eventTarget = e?.target;
    if (!ALLOWED_TO_TOGGLE_TAGS.includes(eventTarget?.tagName)) return

    const closestLi = eventTarget?.closest('li');
    if (!closestLi) return

    switchItemExpandState(closestLi.classList);

    // switchItemMarkerStyleType(closestLi);
  });
});


function switchItemExpandState(closestLiClassList) {
  if (closestLiClassList.contains('expanded')) {
    closestLiClassList.remove('expanded');
    closestLiClassList.add('collapsed');
  } else if (closestLiClassList.contains('collapsed')) {
    closestLiClassList.remove('collapsed');
    closestLiClassList.add('expanded');
  }
}

function switchItemMarkerStyleType(closestLi) {
  const closestLiStyle = closestLi?.style;

  if (closestLi.classList.contains('expanded')) {
    closestLiStyle.listStyleType = "disclosure-open";
  } else {
    closestLiStyle.listStyleType = "disclosure-closed";
  }
}