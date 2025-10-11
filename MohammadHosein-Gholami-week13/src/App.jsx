import { useState } from "react";

function App() {
  const [activTab, setActivTab] = useState("TAB1");

  const tab1 = [
    <>
      <h3>Content 1</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem,
        reiciendis, minima dolorum dolor, saepe recusandae unde nobis labore
        exercitationem iusto et quasi accusamus optio! Dolorem, natus aspernatur
        ea illum ad id vitae error quaerat expedita tenetur excepturi aliquid
        soluta quo qui libero est vero a pariatur autem? Recusandae, inventore.
      </p>
    </>,
  ];
  const tab2 = [
    <>
      <h3>Content 2</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem,
        reicienduasi accusamus optio! Dolorem, natus aspernatur ea illum ad id
        vitae error quaerat expedita tenetur excepturi aliquid soluta quo qui
        libero est vero a pariatur autem? Recusandae, inventore.
      </p>
    </>,
  ];
  const tab3 = [
    <>
      <h3>Content 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem,
        reiciendis, bore exercitationem iusto et quasi accusamus optio! Dolorem,
        natus aspernatur ea illum ad id vitae error quaerat expedita tenetur
        excepturi aliquid soluta quo qui libero est vero a pariatur autem?
        Recusandae, inventore.
      </p>
    </>,
  ];
  const tab4 = [
    <>
      <h3>Content 4</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem,
        reici aliquid soluta quo qui libero est vero a pariatur autem?
        Recusandae, inventore.
      </p>
    </>,
  ];

  const tabs = [
    { title: "TAB1", content: tab1 },
    { title: "TAB2", content: tab2 },
    { title: "TAB3", content: tab3 },
    { title: "TAB4", content: tab4 },
  ];

  return (
    <>
      <header>
        <h1>Tabs Component with React</h1>
        <nav>
          {tabs.map((tab) => (
            <a
              href="#"
              key={tab.title}
              onClick={() => setActivTab(tab.title)}
              className={activTab === tab.title ? "active" : ""}
            >
              {tab.title}
            </a>
          ))}
        </nav>
      </header>
      <div class="content">
        {tabs.find((tab) => tab.title === activTab)?.content}
      </div>
    </>
  );
}

export default App;
