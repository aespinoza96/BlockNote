// import logo from './logo.svg'
import {
  Block,
  defaultSlashCommands,
  Editor,
  SlashMenuItem,
} from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "./App.module.css";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

// slash commands

async function API(prompt: string) {
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
  return `# title
  cool story`;
}
/**
 * This command should insert text generated by AI at the location where the slash-command was executed
 */
async function ContinueWritingCommand(editor: any) {
  // const blocks = editor.blocks as [];
  // const block = editor.cursorPosition.block;
  // const blockIndex = blocks.indexOf(block);
  // const blocksBefore = blocks.slice(0, blockIndex);
  //
  // const markdown = editor.blocksToMarkdown(blocksBefore);
  //
  // const newText = await API(
  //   `Please continue writing this text and return result in markdown: ${markdown}`
  // );
  //
  // const newBlocks = editor.markdownToBlocks(newText);
  //
  // editor.insertBlocksAfterBlock(newBlocks, block);
  /*
- plainText
- markdown
- html
- json
*/
  // cursorPosition: {
  //   block: Block,
  //   // blockContentBeforeCursor:
  //   // blockContentAfterCursor:
  // };
  // selection: {
  //   blocks: Block[],
  // }
  // const selection = editor.selection.startBlock;
  // all blocks
  // selected blocks
  // step 1: get content "above" command / cursor
  // step 2: call LLM API, returning markdown
  // step 3: add / replace text with LLM response
}

/**
 * This command should insert a summary of the text above
 */
function SummarizeTextAboveCommand() {
  // not really useful atm, too similar
}

// add a query in the document, and then execute that
function ExecuteCurrentBlockAsLLMCommand() {}

// this requires a different place to hook into the UI
function TranslateSelectedBlocks() {}

function App() {
  let editorAPI: Editor;
  const editor = useBlockNote({
    slashCommands: [
      ...defaultSlashCommands,
      new SlashMenuItem(
        "Continue writing",
        (editor, range) => {
          console.log("select");
          return true;
        },
        [],
        "AI"
      ),
    ],
    onUpdate: ({ editor }) => {
      if (!editorAPI) {
        editorAPI = new Editor(editor);
      } else {
        const blocks: Block[] = [
          {
            id: "0",
            type: "heading",
            props: {
              level: "1",
            },
            textContent: "Heading 1",
            styledTextContent: [
              {
                text: "Heading 1",
                styles: [],
              },
            ],
            children: [
              {
                id: "1",
                type: "heading",
                props: {
                  level: "2",
                },
                textContent: "Heading 2",
                styledTextContent: [
                  {
                    text: "Heading 2",
                    styles: [],
                  },
                ],
                children: [
                  {
                    id: "2",
                    type: "heading",
                    props: {
                      level: "3",
                    },
                    textContent: "Heading 3",
                    styledTextContent: [
                      {
                        text: "Heading 3",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: "3",
            type: "paragraph",
            props: {},
            textContent: "Paragraph",
            styledTextContent: [
              {
                text: "Paragraph",
                styles: [],
              },
            ],
            children: [],
          },
          {
            id: "4",
            type: "paragraph",
            props: {},
            textContent: "Paragraph",
            styledTextContent: [
              {
                text: "Paragraph",
                styles: [],
              },
            ],
            children: [],
          },
          {
            id: "5",
            type: "paragraph",
            props: {},
            textContent: "Paragraph",
            styledTextContent: [
              {
                text: "Paragraph",
                styles: [],
              },
            ],
            children: [],
          },
          {
            id: "6",
            type: "bulletListItem",
            props: {},
            textContent: "Bullet List Item",
            styledTextContent: [
              {
                text: "Bullet List Item",
                styles: [],
              },
            ],
            children: [],
          },
          {
            id: "7",
            type: "bulletListItem",
            props: {},
            textContent: "Bullet List Item",
            styledTextContent: [
              {
                text: "Bullet List Item",
                styles: [],
              },
            ],
            children: [
              {
                id: "8",
                type: "bulletListItem",
                props: {},
                textContent: "Bullet List Item",
                styledTextContent: [
                  {
                    text: "Bullet List Item",
                    styles: [],
                  },
                ],
                children: [
                  {
                    id: "9",
                    type: "bulletListItem",
                    props: {},
                    textContent: "Bullet List Item",
                    styledTextContent: [
                      {
                        text: "Bullet List Item",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                  {
                    id: "10",
                    type: "paragraph",
                    props: {},
                    textContent: "Paragraph",
                    styledTextContent: [
                      {
                        text: "Paragraph",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                  {
                    id: "11",
                    type: "numberedListItem",
                    props: {},
                    textContent: "Numbered List Item",
                    styledTextContent: [
                      {
                        text: "Numbered List Item",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                  {
                    id: "12",
                    type: "numberedListItem",
                    props: {},
                    textContent: "Numbered List Item",
                    styledTextContent: [
                      {
                        text: "Numbered List Item",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                  {
                    id: "13",
                    type: "numberedListItem",
                    props: {},
                    textContent: "Numbered List Item",
                    styledTextContent: [
                      {
                        text: "Numbered List Item",
                        styles: [],
                      },
                    ],
                    children: [
                      {
                        id: "14",
                        type: "numberedListItem",
                        props: {},
                        textContent: "Numbered List Item",
                        styledTextContent: [
                          {
                            text: "Numbered List Item",
                            styles: [],
                          },
                        ],
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "15",
                    type: "bulletListItem",
                    props: {},
                    textContent: "Bullet List Item",
                    styledTextContent: [
                      {
                        text: "Bullet List Item",
                        styles: [],
                      },
                    ],
                    children: [],
                  },
                ],
              },
              {
                id: "16",
                type: "bulletListItem",
                props: {},
                textContent: "Bullet List Item",
                styledTextContent: [
                  {
                    text: "Bullet List Item",
                    styles: [],
                  },
                ],
                children: [],
              },
            ],
          },
          {
            id: "17",
            type: "bulletListItem",
            props: {},
            textContent: "Bullet List Item",
            styledTextContent: [
              {
                text: "Bullet List Item",
                styles: [],
              },
            ],
            children: [],
          },
          {
            id: "18",
            type: "paragraph",
            props: {},
            textContent: "",
            styledTextContent: [],
            children: [],
          },
        ];
        const html = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p>Paragraph</p>
<p>Paragraph</p>
<p>Paragraph</p>
<ul>
   <li>
      <p>Bullet List Item</p>
   </li>
   <li>
      <p>Bullet List Item</p>
      <ul>
         <li>
            <p>Bullet List Item</p>
            <ul>
               <li>
                  <p>Bullet List Item</p>
               </li>
            </ul>
            <p>Paragraph</p>
            <ol>
               <li>
                  <p>Numbered List Item</p>
               </li>
               <li>
                  <p>Numbered List Item</p>
               </li>
               <li>
                  <p>Numbered List Item</p>
                  <ol>
                     <li>
                        <p>Numbered List Item</p>
                     </li>
                  </ol>
               </li>
            </ol>
            <ul>
               <li>
                  <p>Bullet List Item</p>
               </li>
            </ul>
         </li>
         <li>
            <p>Bullet List Item</p>
         </li>
      </ul>
   </li>
   <li>
      <p>Bullet List Item</p>
   </li>
</ul>
<p></p>
        `;
        const markdown = `
# dawdwa

## flesfj

### trjhirtjoihtrjhor

dwadwadwa

dwadwa

dwaadwdwadwa

- sdfesfes
    - grdggdrg
    - grdgrdgdrgrd
        1. wqewqewq
        2. eqwewqewq
            1. ewqewqewq
        3. ewqewqewq
- fesfesfesfes
`;

        editorAPI.blocksToHTML(blocks).then((html) => {
          console.log("BLOCKS TO HTML:");
          console.log("Input Blocks:", blocks);
          console.log("Output HTML:", html);
        });
        editorAPI.HTMLToBlocks(html).then((blocks) => {
          console.log("HTML TO BLOCKS:");
          console.log("Input HTML:", html);
          console.log("Output Blocks:", blocks);
        });
        editorAPI.blocksToMarkdown(blocks).then((markdown) => {
          console.log("BLOCKS TO MARKDOWN:");
          console.log("Input Blocks:", blocks);
          console.log("Output Markdown:", markdown);
        });
        editorAPI.markdownToBlocks(markdown).then((blocks) => {
          console.log("MARKDOWN TO BLOCKS:");
          console.log("Input Markdown:", markdown);
          console.log("Output Blocks:", blocks);
        });
      }
      // console.log(editor.getJSON());
      (window as WindowWithProseMirror).ProseMirror = editor; // Give tests a way to get editor instance
    },
    editorProps: {
      attributes: {
        class: styles.editor,
        "data-test": "editor",
      },
    },
  });

  return <BlockNoteView editor={editor} />;
}

export default App;
