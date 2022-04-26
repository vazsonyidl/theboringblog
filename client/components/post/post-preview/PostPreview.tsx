import { useRouter } from 'next/router';
import styled from 'styled-components';

const PreviewContainer = styled.section`
  display: grid;
  grid-template-rows: 24px 72px 72px 24px;
  padding: 16px;
  border: 1px solid #e7ebed;
  border-radius: 4px;
  margin: 8px;

  &:hover {
    box-shadow: 1px 1px 8px 0px #546e7a;
    cursor: pointer;
  }
`;
const StyledEm = styled.em`
  color: #546e7a;
`;

const StyledAuthorArticle = styled.article`
  font-size: min(max(12px, 1.5vw), 12px);
`;

const StyledIntroAtricle = styled.article`
  letter-spacing: 0.1px;
`;

const StyledTagSpan = styled.span`
  background-color: #546e7a;
  color: #fff;
  padding: 4px;
  margin: 0 2px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: lowercase;
`;

interface PostPreviewProps {
  meta: {
    author: string;
    title: string;
    intro: string;
    tags: Array<string>;
    published: string;
  };
  slug: string | number;
}
export default function PostPreview({ meta, slug }: PostPreviewProps) {
  const router = useRouter();
  const onPostClick = () => {
    router.push(`/posts/${slug}`);
  };
  return (
    <PreviewContainer onClick={onPostClick}>
      <StyledAuthorArticle>
        <StyledEm>by </StyledEm>
        <strong>{meta.author}</strong> <StyledEm>on</StyledEm>{' '}
        <strong>{meta.published}</strong>
      </StyledAuthorArticle>
      <article>
        <h2>{meta.title}</h2>
      </article>
      <StyledIntroAtricle>{meta.intro}</StyledIntroAtricle>
      <article>
        {meta.tags.map((tag) => (
          <StyledTagSpan>{tag}</StyledTagSpan>
        ))}
      </article>
    </PreviewContainer>
  );
}
