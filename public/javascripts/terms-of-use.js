/* EXERCISE: make each section collapsible */

function makeSectionCollapsible(btnId, sectionId) {
  const btn = document.querySelector(`button#${btnId}`)
  const section = document.querySelector(`#${sectionId}`)
  btn.addEventListener("click", onButtonClick = () => {
    return section.classList.toggle('hidden');
  })
}


makeSectionCollapsible('toggle-btn-0', 'section-0');
makeSectionCollapsible('toggle-btn-1', 'section-1');
makeSectionCollapsible('toggle-btn-2', 'section-2');
makeSectionCollapsible('toggle-btn-3', 'section-3');
