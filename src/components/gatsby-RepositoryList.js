import React from 'react';
import axios from 'axios';

const API_URL =  `${process.env.GITLAB_API_URL}`
const accessToken = `${process.env.GITLAB_ACCESS_TOKEN}`

class RepositoryList extends React.Component {
  state = {
    repos: []
  };

  componentDidMount() {
    axios
      .get(API_URL + 'projects?membership=true&simple=true', {
        headers: {
          'Private-Token': accessToken
        }
      })
      .then(res => {
        const repos = res.data;

        this.setState({ repos });
      });
  }

  render() {
    const { repos } = this.state;

    return (
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.web_url} target="_blank">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default RepositoryList;
