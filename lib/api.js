import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

export function getPost() {
    const path = join(process.cwd(), 'pages/demo/demo.md');
    const fileContents = fs.readFileSync(path, 'utf8')
    const { data, content } = matter(fileContents)

    return {data, content};
}