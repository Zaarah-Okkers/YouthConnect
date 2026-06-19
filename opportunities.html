// =========================
// OPPORTUNITIES DATA
// =========================

const opportunities = [
  {
    id: 1,
    title: "Full-Stack Web App using React & Node.js",
    category: "Development & Tech",
    experience: "Intermediate",
    budget: 4500,
    posted: "12 minutes ago",
    location: "Remote",
    description:
      "Build and maintain a modern social marketplace platform using React and Node.js.",
    tags: ["React", "Node.js", "REST API", "MongoDB"],
    featured: true,
  },

  {
    id: 2,
    title: "UI/UX Designer for FinTech Startup",
    category: "Design & Creative",
    experience: "Expert / Leader",
    budget: 6200,
    posted: "1 hour ago",
    location: "Worldwide",
    description:
      "Create beautiful mobile-first interfaces for a growing fintech startup.",
    tags: ["Figma", "UI Design", "Branding"],
    featured: false,
  },

  {
    id: 3,
    title: "Junior Content Writer",
    category: "Writing & Translation",
    experience: "Entry Level",
    budget: 900,
    posted: "2 hours ago",
    location: "Remote",
    description:
      "Write blog posts and social media content for startup businesses.",
    tags: ["SEO", "Writing", "Blogging"],
    featured: false,
  },

  {
    id: 4,
    title: "Social Media Manager",
    category: "Sales & Marketing",
    experience: "Intermediate",
    budget: 2500,
    posted: "3 hours ago",
    location: "Hybrid",
    description:
      "Manage Instagram, TikTok and Facebook campaigns for fashion brands.",
    tags: ["Instagram", "TikTok", "Marketing"],
    featured: false,
  },

  {
    id: 5,
    title: "Virtual Assistant",
    category: "Admin & Customer Support",
    experience: "Entry Level",
    budget: 1200,
    posted: "5 hours ago",
    location: "Remote",
    description:
      "Help manage emails, bookings and customer communication.",
    tags: ["Admin", "Customer Support", "Scheduling"],
    featured: false,
  },

  {
    id: 6,
    title: "Mobile App Developer",
    category: "Development & Tech",
    experience: "Expert / Leader",
    budget: 8500,
    posted: "1 day ago",
    location: "Remote",
    description:
      "Develop cross-platform mobile apps using Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "Mobile Apps"],
    featured: true,
  },

  {
    id: 7,
    title: "Graphic Designer",
    category: "Design & Creative",
    experience: "Intermediate",
    budget: 2000,
    posted: "1 day ago",
    location: "Remote",
    description:
      "Create posters, social media content and brand kits.",
    tags: ["Photoshop", "Illustrator", "Canva"],
    featured: false,
  },

  {
    id: 8,
    title: "Customer Support Agent",
    category: "Admin & Customer Support",
    experience: "Entry Level",
    budget: 1500,
    posted: "2 days ago",
    location: "Worldwide",
    description:
      "Provide live chat and email support for online customers.",
    tags: ["Communication", "Support", "CRM"],
    featured: false,
  },
];

// =========================
// DOM ELEMENTS
// =========================

const searchInput = document.querySelector(".search-box input");

const budgetSlider = document.querySelector(".budget-slider");

const opportunitiesFeed =
  document.querySelector(".opportunities-feed");

const opportunitiesContainer =
  document.createElement("div");

opportunitiesContainer.classList.add(
  "opportunities-container"
);

const feedHeader =
  document.querySelector(".feed-header");

feedHeader.insertAdjacentElement(
  "afterend",
  opportunitiesContainer
);

// Remove old hardcoded cards
document
  .querySelectorAll(".opportunity-card")
  .forEach((card) => card.remove());

const totalCountDisplay =
  document.querySelector(".feed-header h2");

// =========================
// FILTER STATE
// =========================

const filters = {
  search: "",
  maxBudget: 10000,
};

// =========================
// RENDER FUNCTION
// =========================

function renderJobs(jobs) {
  opportunitiesContainer.innerHTML = "";

  totalCountDisplay.textContent =
    `Open Opportunities (${jobs.length})`;

  if (jobs.length === 0) {
    opportunitiesContainer.innerHTML = `
      <p style="
        padding:20px;
        background:white;
        border-radius:20px;
      ">
        No Results Found. Try adjusting your search or budget filter.
      </p>
    `;
    return;
  }

  jobs.forEach((job) => {
    const article =
      document.createElement("article");

    article.className =
      `opportunity-card ${
        job.featured ? "featured" : ""
      }`;

    article.innerHTML = `
      <div class="card-top">
        <div>
          ${
            job.featured
              ? `
            <span class="badge-featured">
              <i class="fa-solid fa-star"></i>
              Featured
            </span>
          `
              : ""
          }

          <h3 class="job-title">
            ${job.title}
          </h3>

          <p class="job-meta">
            Posted ${job.posted}
            &bull;
            <i class="fa-solid fa-location-dot"></i>
            ${job.location}
          </p>
        </div>

        <div class="save-icon">
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>

      <p class="job-description">
        ${job.description}
      </p>

      <div class="job-tags">
        ${job.tags
          .map(
            (tag) => `<span>${tag}</span>`
          )
          .join("")}
      </div>

      <div class="card-footer">
        <span class="job-budget">
          Est. Budget:
          <strong>
            $${job.budget.toLocaleString()}
          </strong>
        </span>

        <button class="btn-apply">
          Apply Now
        </button>
      </div>
    `;

    opportunitiesContainer.appendChild(
      article
    );
  });

  addButtonFunctions();
}

// =========================
// FILTER FUNCTION
// =========================

function applyFilters() {
  const filtered =
    opportunities.filter((job) => {
      const matchesSearch =
        job.title
          .toLowerCase()
          .includes(filters.search) ||
        job.description
          .toLowerCase()
          .includes(filters.search) ||
        job.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(filters.search)
        );

      const matchesBudget =
        job.budget <= filters.maxBudget;

      return (
        matchesSearch &&
        matchesBudget
      );
    });

  renderJobs(filtered);
}

// =========================
// EVENT LISTENERS
// =========================

// Search
searchInput.addEventListener(
  "input",
  (e) => {
    filters.search =
      e.target.value.toLowerCase();

    applyFilters();
  }
);

// Budget slider
budgetSlider.addEventListener(
  "input",
  (e) => {
    filters.maxBudget =
      Number(e.target.value);

    applyFilters();
  }
);

// =========================
// BUTTON FUNCTIONS
// =========================

function addButtonFunctions() {
  // Apply buttons
  document
    .querySelectorAll(".btn-apply")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          alert(
            "Application submitted successfully 🎉"
          );
        }
      );
    });

  // Bookmark buttons
  document
    .querySelectorAll(".save-icon")
    .forEach((icon) => {
      icon.addEventListener(
        "click",
        () => {
          const i =
            icon.querySelector("i");

          i.classList.toggle(
            "fa-regular"
          );

          i.classList.toggle(
            "fa-solid"
          );

          i.style.color =
            i.classList.contains(
              "fa-solid"
            )
              ? "#ff7eb3"
              : "";
        }
      );
    });
}

// =========================
// INITIAL LOAD
// =========================

applyFilters();
