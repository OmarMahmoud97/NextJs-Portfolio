import Button from "@/components/liquidButton/liquidButton";

function Projects() {
  return (
    <section className="project flex items-center lg:items-start flex-col justify-center xl:justify-evenly text-white h-screen w-screen">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-white text-3xl textshadow">Projects</h1>
      </div>
      <div className="flex w-9/12 h-screen flex-wrap justify-center items-center overflow-scroll h-4/5">
        <article className="col">
          <div className="container">
            <div className="front front1 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner"></div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>Imagine AI</p>
                <span className="project-subtitle">
                  A platform powered by AI to generate images from Speech or
                  text. Share your creations with other users across the
                  platform. <br />
                  This Application was made for a 7 day Hackathon.
                </span>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                  <li className="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li className="project-stack-item mr-4 text-xl">Firebase</li>
                  <li className="project-stack-item mr-4 text-xl">DeepAI</li>
                </ul>
                <div className="project-buttons flex w-full items-center justify-center">
                  <a
                    className="project-link"
                    href="https://www.imagine-ai.co.uk"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Website
                    </button>
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/OmarMahmoud97/Imagine-AI"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="container">
            <div className="front front2 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl"></li>
                  <li className="project-stack-item mr-4 text-xl"></li>
                  <li className="project-stack-item mr-4 text-xl"></li>
                </ul>
              </div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>Cairo Bricks</p>
                <span className="project-subtitle">
                  A Freelance job for a client that wants a website they can
                  advertise their products. The company sells building
                  materials. The website design was followed from mockup
                  provided by the client.
                </span>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                </ul>
                <div className="project-buttons flex w-full items-center justify-center">
                  <a
                    className="project-link"
                    href="https://github.com/OmarMahmoud97/cairo-bricks"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="container">
            <div className="front front3 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl"></li>
                  <li className="project-stack-item mr-4 text-xl"></li>
                  <li className="project-stack-item mr-4 text-xl"></li>
                </ul>
              </div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>StreamerTV</p>
                <span className="project-subtitle">
                  A platform that provides users with the ability to share video
                  content. While also providing the user sleek and simple to use
                  UI. This web application was an assignment from Brainstation
                  Bootcamp.
                </span>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                  <li className="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li className="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                  <a
                    className="project-link"
                    href="https://github.com/OmarMahmoud97/StreamerTV"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="container">
            <div className="front front4 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner"></div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>Horror Story</p>
                <span className="project-subtitle">
                  Get spooked by Turning a couple of words into a short story
                  using the power of AI! <br />
                  This website was made for a 24 hour hackathon.
                </span>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                  <li className="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li className="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div className="project-buttons flex w-full items-center justify-center">
                  <a
                    className="project-link"
                    href="https://ai-horror-story.com"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Website
                    </button>
                  </a>
                  <a
                    className="project-link"
                    href="https://github.com/OmarMahmoud97/AI-horror-story"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="container">
            <div className="front front5 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner"></div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>Instock</p>
                <p className="project-subtitle">
                  A Warehouse Stock management web application. allowing
                  companies to keep track stock for multiple items in multiple
                  different warehouses. This web application was an assignment
                  from Brainstation Bootcamp.
                </p>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                  <li className="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li className="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div className="project-buttons flex w-full items-center justify-center">
                  <a
                    className="project-link"
                    href="https://github.com/wardu/inStock"
                    target="_blank"
                  >
                    <button className="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col">
          <div className="container">
            <div className="front front6 bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <h2 className="inner-h2 text-red-700 font-bold">Coming Soon</h2>
              </div>
            </div>
            <div className="back bg-cover bg-center text-center h-auto text-white text-base">
              <div className="inner">
                <p>DWITS</p>
                <p className="project-subtitle">
                  A freelance job to create a platform the client can advertise
                  their services. while also allowing the end users to book
                  services with a simple form.
                </p>
                <ul className="project-stack flex items-center justify-center flex-wrap">
                  <li className="project-stack-item mr-4 text-xl">HTML</li>
                  <li className="project-stack-item mr-4 text-xl">CSS</li>
                  <li className="project-stack-item mr-4 text-xl">
                    Javascript
                  </li>
                  <li className="project-stack-item mr-4 text-xl">React</li>
                </ul>
                <div className="project-buttons flex w-full items-center justify-center"></div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="w-full flex items-center justify-center">
        {" "}
        <Button />
      </div>
    </section>
  );
}

export default Projects;
