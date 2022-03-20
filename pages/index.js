
import Image from "next/image";

export default function Home() {
  function setup() {
    const get = document.getElementById.bind(document);
    const query = document.querySelector.bind(document);

    let modalRoot = get('myModal');
    let modal = query('.modal-content');

    modalRoot.addEventListener('click', rootClick);
    modal.addEventListener('click', modalClick);

    function rootClick() {
      document.getElementById("myModal").style.display = 'none'
    }

    function modalClick(e) {
      if (e.target.className !== "close") {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    }

  }

  function buttonevent() {

    for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
      document.getElementsByClassName('card')[i]
        .addEventListener('click', function (event) {
          document.getElementById("myModal").style.display = 'block'
        });
    }
  }
  var activebutton
  function changeButton(id) {
    if (activebutton == null) {
      activebutton = document.getElementById("exp")
      buttonevent()
      setup()
    }
    if (!document.getElementById(id).classList.contains("selectedButton")) {
      activebutton.classList.remove("selectedButton")
      document.getElementById(`${activebutton.id}Tab`).style.display = "none"
      activebutton = document.getElementById(id)
      document.getElementById(`${activebutton.id}Tab`).style.display = "block"
      activebutton.classList.add("selectedButton")
    }
  }

  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="ModalHeader" >
            <span className="close" onClick={() => {
              document.getElementById("myModal").style.display = 'none'
            }}>&times;</span>
            <h1 className="ShowcaseTitle">Item Placement System</h1>
          </div>
          <div className="ShowcaseContent">
            <div className="ShowcaseVid">
              <img src='https://cdn.discordapp.com/attachments/524862684928409629/902807728290955315/Status_system_script.gif' alt='something' width='400' height='225'></img>
            </div>
            <div className="ShowcaseText">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Title'>
        <h1>DeltaRager</h1>
      </div>
      <div className='About'>
        <h2>About me</h2>
        <p>Been on Roblox since 2014 but started developing on it since June 2020.
          <br></br>
          I have some Non-Roblox programming experience such as developing discord bots in Nodejs and Python, creating a basic web app using Flutter etc.</p>
      </div>
      <div className='About'>
        <h2>Technology proficiency</h2>
        <ul>
          <li>Knit</li>
          <li>OOP based systems</li>
          <li>Module scripts and Module loading</li>
          <li>CFrame Manipulation</li>
          <li>Datastores</li>
          <li>Region3</li>
          <li>Raycasting</li>
          <li>Streaming Enabled/Optimization</li>
          <li>Messaging Service and much more!</li>
        </ul>
      </div>
      <div className='Container'>
        <div className='HeaderButton'>
          <button className='selectedButton' id="exp" onClick={() => changeButton("exp")}>Experience</button>
          <button className='unselectedButton' id="show" onClick={() => changeButton("show")}>Showcase</button>
          <button className='unselectedButton' id="link" onClick={() => changeButton("link")}>Links</button>
        </div>
        <div className='Experience' id='expTab'>
          <div className='Titles'>
            <h2>Raincoat Games</h2>
            <h2 className='titlePos'>Programmer</h2>
          </div>
          <div className='Content'>
            <h3>Dec 2021 - Present</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className='Showcase' id='showTab' style={{ display: "none" }}>
          <div className='row'>
            <div className='column'>
              <div className='card'>
                <h3>Card 1</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>


            <div className='column'>
              <div className='card'>
                <h3>Card 2</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                <h3>Card 3</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>

            <div className='column'>
              <div className='card'>
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
              </div>
            </div>
          </div>
        </div>

        <div className='Links' id='linkTab' style={{ display: "none" }}>

        </div>

      </div>
      <div className='About'>
        <h2>Links</h2>
        <a>Test</a>
      </div>
    </header>
  )
}
