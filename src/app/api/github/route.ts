import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: string;
  name: string;
  description: string | null;
  url: string;
  primaryLanguage: {
    name: string;
  } | null;
  stargazerCount: number;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    return NextResponse.json({ error: 'GitHub credentials not configured' }, { status: 500 });
  }

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              primaryLanguage {
                name
              }
              stargazerCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const { data } = await response.json();
    const pinnedRepos = data.user.pinnedItems.nodes.map((repo: GitHubRepo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.url,
      language: repo.primaryLanguage ? repo.primaryLanguage.name : null,
      stargazers_count: repo.stargazerCount
    }));

    return NextResponse.json(pinnedRepos);
  } catch (error) {
    console.error('Error fetching pinned repositories:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}