// Sample review data (could be fetched from .json later)
const reviews = [
  {
    id: 1,
    title: "Weather App",
    score: "4/5",
    tags: ["frontend", "react"],
    date: "2023-10-15",
    file: "reviews/review-1.html"
  },
  {
    id: 2,
    title: "Todo API",
    score: "3.5/5",
    tags: ["backend", "nodejs"],
    date: "2023-11-02",
    file: "reviews/review-2.html"
  }
];

// Render reviews table
function renderReviews(filterTag = "all") {
  const tbody = document.querySelector("#reviews-table tbody");
  tbody.innerHTML = "";

  reviews.forEach(review => {
    if (filterTag === "all" || review.tags.includes(filterTag)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><a href="${review.file}">${review.title}</a></td>
        <td>${review.score}</td>
        <td>${review.tags.map(t => `#${t}`).join(", ")}</td>
        <td>${review.date}</td>
      `;
      tbody.appendChild(row);
    }
  });
}

// Tag filter buttons
document.querySelectorAll(".tag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderReviews(btn.dataset.tag);
  });
});

// Initial load
renderReviews();
