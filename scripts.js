document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('phraseForm');
  const output = document.getElementById('output');
  const submitBtn = document.getElementById('submit');

  const verbs = ['likes', 'loves', 'adores', 'hates', "doesn't care for", 'avoids', 'despises', 'loathes'];
  const objects = ['pizza', 'Mondays', 'coding', 'cats', 'rainy days', 'Lego', 'The Simpsons', ];

  function generatePhrase(name) {
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    return `${name} ${verb} ${object}.`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();

    if (!name) {
      output.textContent = 'Please enter a name!';
      return;
    }

    // Save name to localStorage
    localStorage.setItem('name', name);

    // Generate phrase and show it
    const phrase = generatePhrase(name);
    output.textContent = phrase;

    // Replace form content with thank you message (optional)
    form.innerHTML = `<p>Thanks, ${name}! Your name has been saved.</p>`;

    // Hide submit button (optional)
    submitBtn.style.display = 'none';

    // Optionally, remove name from localStorage now or keep it for later
    // localStorage.removeItem('name');
  });

});

