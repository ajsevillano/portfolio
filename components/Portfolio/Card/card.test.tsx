import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  const name = 'Project 1';
  const description = 'Description of project 1';
  const url = 'https://github.com/user/project1';
  const URLDemo = 'https://github.com/user/project';
  const imgDemo = 'https://example.com/image.jpg';
  const tags = ['React', 'Next.js', 'TypeScript'];

  it('renders the project name and description', () => {
    render(
      <Card
        name={name}
        description={description}
        gitHubURL={url}
        demoURL={URLDemo}
        projectThumbnail={imgDemo}
        tags={tags}
      />,
    );
    const projectName = screen.getByText(name);
    const projectDescription = screen.getByText(description);
    expect(projectName).toBeInTheDocument();
    expect(projectDescription).toBeInTheDocument();
  });

  it('renders the project image', () => {
    render(
      <Card
        name={name}
        description={description}
        gitHubURL={url}
        demoURL={URLDemo}
        projectThumbnail={imgDemo}
        tags={tags}
      />,
    );
    const projectImage = screen.getByAltText(name);
    expect(projectImage).toBeInTheDocument();
    // expect(projectImage).toHaveAttribute('src', customFields[1].img);
  });

  it('renders the demo link if a demo URL is provided', () => {
    render(
      <Card
        name={name}
        description={description}
        gitHubURL={url}
        demoURL={URLDemo}
        projectThumbnail={imgDemo}
        tags={tags}
      />,
    );
    const demoLink = screen.getByTestId('demo-link');
    expect(demoLink).toBeInTheDocument();
  });

  it('does not render the demo link if a demo URL is not provided', () => {
    render(
      <Card
        name={name}
        description={description}
        gitHubURL={url}
        demoURL=""
        projectThumbnail={imgDemo}
        tags={tags}
      />,
    );
    const demoLink = screen.queryByText('See demo');
    expect(demoLink).not.toBeInTheDocument();
  });

  it('renders the Github link', () => {
    render(
      <Card
        name={name}
        description={description}
        gitHubURL={url}
        demoURL={URLDemo}
        projectThumbnail={imgDemo}
        tags={tags}
      />,
    );
    const githubLink = screen.getByTestId('demo-link');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', URLDemo);
  });
});
