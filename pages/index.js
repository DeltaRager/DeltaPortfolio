
import Image from "next/image";
import Link from 'next/link';
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
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
        <p>Hello! Welcome to my Roblox Dev Portfolio. I have been on this platform since 2014.
          <br></br>
          <br></br>
          My development journey started with me taking up commissions for basic systems which slowly evolved into making fully functioning games that use dedicated frameworks.
        </p>
      </div>
      <div className='Container'>
        <div className='HeaderButton'>
          <button className='selectedButton' id="exp" onClick={() => changeButton("exp")}>Experience</button>
          <button className='unselectedButton' id="show" onClick={() => changeButton("show")}>Showcase</button>
          <button className='unselectedButton' id="link" onClick={() => changeButton("link")}>Skills</button>
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
          <hr></hr>
          <div className='Titles'>
            <h2>Independent Developer</h2>
            <h2 className='titlePos'>Programmer</h2>
          </div>
          <div className='Content'>
            <h3>Jun 2020 - Dec 2021</h3>
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
          <div className='TitleLink'>
            <h2>Roblox API</h2>
          </div>
          <div className='LinkContent'>
            <p>Knit</p>
            <p>OOP based systems</p>
            <p>CFrame Manipulation</p>
            <p>Datastores</p>
            <p>Spatial Query</p>
            <p>Raycasting</p>
            <p>Streaming Enabled/Optimization</p>
            <p>Messaging Service</p>
          </div>
          <hr></hr>
          <div className='TitleLink'>
            <h2>Languages</h2>
          </div>
          <div className='LinkContent'>
            <p>Luau</p>
            <p>Nodejs</p>
            <p>Python</p>
            <p>C</p>
            <p>HTML & CSS</p>
          </div>
        </div>
      </div>
      <div className='About'>
        <h2>Links</h2>
        <div className="grid-container">
          <div className="grid-item"><i className="bi bi-tools iconclass"></i><Link href="https://www.roblox.com/users/72198044/profile"><a target="_blank" rel="noopener noreferrer">Roblox Profile</a></Link></div>
          <div className="grid-item"><i className="bi bi-youtube iconclass"></i><Link href="https://www.youtube.com/channel/UC-Tlhly0cMmPCyIQJnPRoYQ/videos"><a target="_blank" rel="noopener noreferrer">Youtube</a></Link></div>
          <div className="grid-item">
            <i className="bi bi-twitter iconclass"></i>
            <Link href="https://twitter.com/DeltaRager">
              <a target="_blank" rel="noopener noreferrer">Twitter</a>
            </Link>
          </div>
          <div className="grid-item"><i className="bi bi-github iconclass"></i><Link href="https://github.com/DeltaRager"><a target="_blank" rel="noopener noreferrer">Github</a></Link></div>
        </div>
      </div>
    </header>
  )
}
