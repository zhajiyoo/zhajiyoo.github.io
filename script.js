const username = "zhajiyoo";

fetch(`https://api.github.com/users/${zhajiyoo}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error("GitHub API error");
        }
        return response.json();
    })
    .then(data => {
        const repoList = document.getElementById("repo-list");

        if (data.length === 0) {
            repoList.innerHTML = "<p>No projects found.</p>";
            return;
        }

        data.forEach(repo => {
            const div = document.createElement("div");
            div.className = "repo";

            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description provided."}</p>
                <p>⭐ ${repo.stargazers_count} | ${repo.language || "Unknown"}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;

            repoList.appendChild(div);
        });
    })
    .catch(error => {
        console.error(error);
        document.getElementById("repo-list").innerHTML =
            "<p>Failed to load projects. Please check username or API limit.</p>";
    });
