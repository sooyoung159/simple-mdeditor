import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const MarkdownContext = createContext({
  markdown: "",
  setMarkdown: (value: string) => {},
});

const MarkDownProvider = ({ children }: Props) => {
  const [markdown, setMarkdown] = useState<string>("");

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

// ...

export const useMarkdown = () => useContext(MarkdownContext);

export default MarkDownProvider;
