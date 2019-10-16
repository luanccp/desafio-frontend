class Api {
  getRepositories(username) {
    if (!username) {
      username = "luanccp"
    }
    const baseUrl = "https://api.github.com/users/" + username + "/repos"
    return fetch(baseUrl).then(res => res.json())
  }

  getBranches(repoName) {
    const baseUrl = "https://api.github.com/repos/" + repoName + "/branches"
    return fetch(baseUrl).then(res => res.json())
  }

  getCommits(repoName) {
    const baseUrl = "https://api.github.com/repos/" + repoName + "/commits"
    return fetch(baseUrl).then(res => res.json())
  }
}

const api = new Api()

export default api


// Endpoint para consumir as branches do repositório https://api.github.com/repos/:username/:reponame/branches
// Endpoint para consumir os commits do repositório https://api.github.com/repos/:username/:reponame/commits