// Sample data
const reviews = [
  {
    id: 1,
    title: "Database With API CRUD",
    score: 4,
    tags: ["backend", "api", "flask"],
    date: "2025-05-16",
    summary: "Great project workflow  but needs better error documentation.",
    file: "reviews/review-1.html"
},
];

// Render review cards
function renderReviews(filterTag = "all", searchTerm = "") {
  const container = document.getElementById("reviews-container");
  container.innerHTML = "";

  const filtered = reviews.filter(review => {
    const matchesTag = filterTag === "all" || review.tags.includes(filterTag);
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         review.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-results">No reviews found. Try a different search or tag.</p>`;
    return;
  }

  filtered.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <h3><a href="${review.file}">${review.title}</a></h3>
      <div class="score">
        <div class="stars">
          ${'<i class="fas fa-star"></i>'.repeat(Math.floor(review.score))}
          ${review.score % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
          ${'<i class="far fa-star"></i>'.repeat(5 - Math.ceil(review.score))}
        </div>
        <span>${review.score}/5</span>
      </div>
      <p>${review.summary}</p>
      <div class="tags">
        ${review.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
      </div>
      <small>Reviewed on ${review.date}</small>
    `;
    container.appendChild(card);
  });
}

// Tag filter
document.querySelectorAll(".tag-chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderReviews(chip.dataset.tag, document.getElementById("search").value);
  });
});

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const activeTag = document.querySelector(".tag-chip.active").dataset.tag;
  renderReviews(activeTag, e.target.value);
});

// Initial load
renderReviews();
