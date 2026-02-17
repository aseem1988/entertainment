const sampleVideos = [
  { title: '10-min Healthy Breakfast (Hindi)', creator: 'Fit Bharat', reason: 'Because you watched quick recipes' },
  { title: 'UPI Security Explained', creator: 'Tech Simplified', reason: 'Because you follow fintech topics' },
  { title: 'Cricket Match Analysis', creator: 'Sports Room', reason: 'Trending in your region' },
  { title: 'Learn Spoken English Fast', creator: 'Edu Spark', reason: 'Based on your learning interests' }
];

const videoGrid = document.getElementById('videoGrid');
const themeSelect = document.getElementById('themeSelect');
const aiOutput = document.getElementById('aiOutput');

function renderVideos(videos) {
  videoGrid.innerHTML = videos.map(v => `
    <article class="video-card">
      <h4>${v.title}</h4>
      <p>Creator: ${v.creator}</p>
      <p><strong>Why recommended:</strong> ${v.reason}</p>
    </article>`).join('');
}

renderVideos(sampleVideos);

document.getElementById('refresh').addEventListener('click', () => {
  const language = document.getElementById('language').value;
  const topic = document.getElementById('topic').value || 'general';
  const tuned = sampleVideos.map(v => ({
    ...v,
    reason: `Matched to ${language} + ${topic} preference`
  }));
  renderVideos(tuned);
});

document.getElementById('resetFeed').addEventListener('click', () => renderVideos(sampleVideos));

themeSelect.addEventListener('change', (e) => {
  document.body.dataset.theme = e.target.value;
});

document.getElementById('generateScript').addEventListener('click', () => {
  const prompt = document.getElementById('prompt').value || 'Explain digital payments';
  aiOutput.textContent = `Storyboard for: ${prompt}\n\n1) Hook: problem statement (5 sec)\n2) Key concept explained with visual cues\n3) Real-life example\n4) Closing CTA + caption suggestions`;
});

document.getElementById('suggestVoice').addEventListener('click', () => {
  aiOutput.textContent += '\n\nVoiceover Suggestions: Hindi Female (Warm), English Male (Professional), Tamil Neutral.';
});

document.getElementById('suggestMusic').addEventListener('click', () => {
  aiOutput.textContent += '\nMusic Suggestions: Inspiring Corporate, Modern Beat, Calm Ambient (royalty-safe).';
});
