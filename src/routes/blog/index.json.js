import fs from 'fs';
import path from 'path';
import marked from 'marked';
import grayMatter from 'gray-matter';

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).map((fileName) => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8');

    // parse Front matter from string
    const { data, content } = grayMatter(post)

    // turns markdown into html
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });

    // builds data
    return { 
      html,
      ...data
    };
  });
  return data;
}

export function get(req, res) {
  const posts = getAllPosts('src/posts');

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(posts));
}