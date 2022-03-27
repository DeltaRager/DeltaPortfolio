
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
            <div className="ContentText">
              <h3>Dec 2021 - Present</h3>
              <p>Currently developing for the SCPF group under Raincoat Games. Working on a Survive the killers project.</p>
            </div>
            <img src='https://samfloyd.tech/images/scpfinal.png' alt='something'></img>
          </div>
          <div className='Titles'>
            <h2>Samurai Kings</h2>
            <h2 className='titlePos'>Programmer</h2>
          </div>
          <div className='Content'>
            <div className="ContentText">
              <h3>Mar 2021 - Apr 2021</h3>
              <p>Project created by a team of 2. A game inspired by the Cookie clicker/Simulator Genre with a Samurai theme that use the swinging of the Katana to generate cash. 
                <br></br>
                Worked as a programmer while the project was active and was responsible for the creation of various systems that are used in the game.
              </p>
            </div>
            <img src='https://samfloyd.tech/images/samuraisimulator.png' alt='something'></img>
          </div>
          <div className='Titles'>
            <h2>Drift Simulator</h2>
            <h2 className='titlePos'>Programmer | Game Producer</h2>
          </div>
          <div className='Content'>
            <div className="ContentText">
              <h3>Jan 2021 - Apr 2021</h3>
              <p>A game with over 2.1M+ visits and a peak player count of 200. A fullscale game development project created by a team of 2. 
                <br></br>
                Worked as a producer and programmer while the project was active, creating new systems such as a drifting system for the players to interact with.
              </p>
            </div>
            <img src='https://cdn.discordapp.com/attachments/950431041674436628/957634713500123156/collage.png' alt='something'></img>
          </div>
          
        </div>
        <div className='Showcase' id='showTab' style={{ display: "none" }}>
          <div className='ShowcaseWork'>
            <div className='Titles'>
              <h2>Grabpack System</h2>
              <h2 className='titlePos'></h2>
            </div>
            <div className='Content'>
              <div className="ContentText">
                <h3>2021</h3>
                <p>Grabpack system from the game Poppiy Playtime.
                  <br></br>
                  <br></br>
                  The red and blue radial bars indicate distance available for the respective arms and will retract back if the limit has been exceeded.
                  <br></br>
                  <br></br>
                  Full Youtube Showcase: <a href="https://www.youtube.com/watch?v=55bFDR1SE_U&ab_channel=DeltaRager" target="_blank" rel="noopener noreferrer">Video</a>
                </p>
              </div>
              <img src='https://cdn.discordapp.com/attachments/524862684928409629/957727349590335538/huggy.gif' alt='something'></img>
            </div>
            <div className='Titles'>
              <h2>Item Placement System</h2>
              <h2 className='titlePos'></h2>
            </div>
            <div className='Content'>
              <div className="ContentText">
                <h3>2020</h3>
                <p>A 3D item Placement system that works on flat and curved surfaces.</p>
              </div>
              <img src='https://cdn.discordapp.com/attachments/524862684928409629/902808709892300800/Item_Placement_System.gif' alt='something'></img>
            </div>
            <div className='Titles'>

              <h2>Water Part System</h2>
              <h2 className='titlePos'></h2>
            </div>
            <div className='Content'>
              <div className="ContentText">
                <h3>2020</h3>
                <p>Terrain water as a part that can be resized. Also includes a drowning system and any audio playing outside the water gets distorted/lowered in volume.</p>
              </div>
              <img src='https://cdn.discordapp.com/attachments/524862684928409629/957622011620913232/2022-03-27_18-07-09_AdobeCreativeCloudExpress_1.gif' alt='something'></img>
            </div>

            <div className='Titles'>
              <h2>Safezone System</h2>
              <h2 className='titlePos'></h2>
            </div>
            <div className='Content'>
              <div className="ContentText">
                <h3>2020</h3>
                <p>Safezone system along with a basic TPS gun system. Safezone is disabled once weapon is equipped and gets re-enabled after the weapon is unequipped with a custom set delay.
                  <br></br>
                  <br></br>
                  Also includes a PVP zone that made use of region3 and disables the Safezone shield for the player permanently in the region.
                </p>
              </div>
              <img src='https://cdn.discordapp.com/attachments/524862684928409629/902807728290955315/Status_system_script.gif' alt='something'></img>
            </div>
          </div>

        </div>
        <div className='Links' id='linkTab' style={{ display: "none" }}>
          <div className='TitleLink'>
            <h2>Frameworks</h2>
          </div>
          <div className='LinkContent'>
            <p>Knit</p>

          </div>
          <div className='TitleLink'>
            <h2>Roblox API</h2>
          </div>
          <div className='LinkContent'>
            <p>OOP based systems</p>
            <p>CFrame Manipulation</p>
            <p>Datastores</p>
            <p>Spatial Query</p>
            <p>Raycasting</p>
            <p>Streaming Enabled/Optimization</p>
            <p>Messaging Service</p>
          </div>
          <div className='TitleLink'>
            <h2>Languages</h2>
          </div>
          <div className='LinkContent'>
            <p>Luau</p>
            <p>Nodejs</p>
            <p>Python</p>
            <p>C</p>
            <p>HTML & CSS [This website!]</p>
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
