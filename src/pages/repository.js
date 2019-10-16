import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import api from "../services/api"
import BranchCard from "../components/BranchCard";
import CommitCard from "../components/CommitCard";

const RepositoryPage = ({ location }) => {
  const [branch, setBranchs] = useState([])
  const [commit, setCommits] = useState([])

  useEffect(() => {
    document.title = `Repository: ${location.state.repo.name}`
    async function fetch() {
      try {
        const branches = await api.getBranches((((location || {}).state || {}).repo || {}).full_name)
        setBranchs(branches)

        const commits = await api.getCommits((((location || {}).state || {}).repo || {}).full_name)
        setCommits(commits)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])
  return (
    <Layout>
      <h1>{(((location || {}).state || {}).repo || {}).name}</h1>
      {branch.map(b => (
        <BranchCard key={b.id}>{b.name}</BranchCard>
      ))}
      {commit.map(c => (
        <CommitCard key={c.id}>{c.sha}</CommitCard>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default RepositoryPage
