import marked from 'marked';

export const Preview = ({ markdownText }) => {
  function getMarkdownText() {
    return {
      __html: marked(markdownText, {
        breaks: true,
      }),
    };
  }
  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>;
};
