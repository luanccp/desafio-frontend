class Api {
  getRepositories(username) {
    console.log("type NO GETREPO->", typeof(username))
    
    if(!username)
    {
      console.log("nao tem username")
      username = 'luanccp'
      
    }
    const baseUrl = "https://api.github.com/users/" + username + "/repos"
    return fetch(baseUrl).then(res => res.json())
  }
}

const api = new Api()

export default api
