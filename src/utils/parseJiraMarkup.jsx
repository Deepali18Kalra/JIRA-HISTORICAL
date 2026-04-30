const parseInlineMarkup = (text) => {
  if (!text) return text;

  const elements = [];
  let remaining = text;
  let key = 0;

  const regex =
    /(\*(.*?)\*)|\[(.*?)\|(https?:\/\/.*?)\]|(\{noformat\}([\s\S]*?)\{noformat\})/;

  while (remaining.length) {
    const match = regex.exec(remaining);

    if (!match) {
      elements.push(remaining);
      break;
    }

    const [full] = match;
    const index = match.index;

    // Plain text before match
    if (index > 0) {
      elements.push(remaining.slice(0, index));
    }

    // Bold
    if (match[2]) {
      elements.push(
        <strong key={key++}>{match[2]}</strong>
      );
    }

    // Link
    if (match[3] && match[4]) {
      elements.push(
        <a
          key={key++}
          href={match[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {match[3]}
        </a>
      );
    }

    // Code
    if(match[6]){
      const lines = match[6].split("\n")
      elements.push(
        <div className="bg-gray-100 rounded-lg overflow-auto max-h-1/3 max-w-full">
          <pre className="font-mono text-base p-3">
            <code>
              {lines.map((line,index)=>(
                
                <div key={index} className="flex">
                {/* Line number */}
                  <span
                    className="
                    select-none
                   text-gray-400
                    pr-4
                    text-right
                    w-10
                    flex-shrink-0
                  "
                  >
                    {index + 1}
                  </span>

                {/* Code line */}
                <span className="whitespace-pre">
                  {line || " "}
                </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )
    }

    remaining = remaining.slice(index + full.length);
  }

  return elements;
};

export const parseJiraMarkup = (text, userData) => {
  if (!text) return null;

  const mentionRegex = /\[~accountid:([^\]]+)\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = mentionRegex.exec(text)) !== null) {
    const accountId = match[1];
    const start = match.index;
    const end = mentionRegex.lastIndex;

    // Text before mention
    if (start > lastIndex) {
      parts.push(
        parseInlineMarkup(text.slice(lastIndex, start))
      );
    }

    const username = userData?.get(accountId) || "Unknown";

    // Mention
    parts.push(
      <span
        key={`${accountId}-${start}`}
        className="text-gray-500 font-medium bg-gray-100 px-1 rounded"
      >
        @{username}
      </span>
    );

    lastIndex = end;
  }

  // Remaining text
  if (lastIndex < text.length) {
    parts.push(parseInlineMarkup(text.slice(lastIndex)));
  }

  return parts.flat();
};