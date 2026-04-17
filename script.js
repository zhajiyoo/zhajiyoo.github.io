const username = "zhajiyoo";

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById("repo-list");

        data.forEach(repo => {
            if (!repo.fork) {  // 不显示fork项目
                const div = document.createElement("div");
                div.className = "repo";

                div.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                repoList.appendChild(div);
            }
        });
    })
    .catch(error => console.error("Error:", error));
