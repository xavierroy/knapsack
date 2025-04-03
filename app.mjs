// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
  title: "Knapsack",
  description:
    "Knapsack is a bi-monthly letter on things that I found interesting.",
  customProperties: {
    properties: [
      {
        path: "props",
        options: {
          date: {
            locale: "en-US",
          },
        },
      },
    ],
  },
  sidebar: {
    links: [],
    sections: [
      {
        label: "Newsletter",
        groups: [
          	{
              label: "Issues", 
              query: createNotesQuery({
              pattern: "^/issues/",
             }),
          },
        ],
      }
    ],
  },
  tags: {
    map: {
      "dynamic-content": "dynamic content",
    },
  },
  notes: {
    pathPrefix: "/",
  },
  panel: {
    tableOfContents: true,
    tags: true,
    customProperties: true,
    incomingLinks: false,
    outgoingLinks: true,
    externalLinks: true,
  }  
});
