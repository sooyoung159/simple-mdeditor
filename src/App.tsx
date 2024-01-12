import Editor from "./components/editor/Editor";
import MainLayout from "./components/mainLayout/MainLayout";
import Preview from "./components/preview/preview";
import MarkDownProvider from "./provider/MarkdownProvider";

function App() {
  return (
    <MarkDownProvider>
      <MainLayout>
        <MainLayout.Column>
          <Editor />
        </MainLayout.Column>
        <MainLayout.Column>
          <Preview />
        </MainLayout.Column>
      </MainLayout>
    </MarkDownProvider>
  );
}

export default App;
