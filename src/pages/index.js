import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import api from "../services/api"
import Input from "../components/Input";
import Content from "../components/Content";

const IndexPage = () => {
  
  const[username, setUsername] = useState('')
  const[repositories, setRepositories] = useState([])


  useEffect(() => {
    async function fetch() {
      try {
        const data  = await api.getRepositories('luanccp')
        setRepositories(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    async function fetch() {
      try {
        const data  = await api.getRepositories(username)
        setRepositories(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [username])

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  return (
    <Layout>
      <Input onChange={handleUsername} placeholder="Digite seu username" />
      <Content>
        <ul>
          {repositories.map(repo => (
            <li key={repo.id}>
              <Link key={repo.name} to="/repository" state={{ repo }}>
                {repo.name}
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Layout>
  )
}
export default IndexPage
