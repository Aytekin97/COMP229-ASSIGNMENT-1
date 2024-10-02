// components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects">
        <div className="project">
        <h2>RAG Document Chat Bot</h2>
          <img src="/images/rag_generated_by_chatgpt.webp" alt="Project 1" />         
          <p><b>Role:</b> Developer</p>
          <p><b>Purpose:</b> Create a tool that enables user to chat with their documents</p>
          <p><b>Outcome:</b> Successfully created a tool that implements vector database to allow user to chat with their document.</p>
        </div>
        <div className="project">
          <h2>News Aggregator</h2>
          <img src="/images/news_aggregator_generated_by_chatgpt.webp" alt="Project 1" />
          <p><b>Role:</b> Developer</p>
          <p><b>Purpose:</b> Create a news aggregator system that scrapes the internet for news related to New York energy market. The results would be sent to LLM agents for further analysis and summarization</p>
          <p><b>Outcome:</b> News are successfully collected, analyzed, summarized and displayed in the appropriate page.</p>
        </div>
        <div className="project">
          <h2>Web Crawler</h2>
          <img src="/images/web_crawler_generated_by_chatgpt.webp" alt="Project 1" />
          <p><b>Role:</b> Developer</p>
          <p><b>Purpose:</b> Create a tool that will allow making websearch and navigating websites without getting blocked by anti-scraping mechanisms</p>
          <p><b>Outcome:</b> Successfully studied and evaded commonly used anti-scraping mechanisms, and created a crawler that can easily navigate websites.</p>
        </div>
      </div>     
    </div>
  );
}

export default Projects;