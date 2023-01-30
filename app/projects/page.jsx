import Button from "@/components/liquidButton/liquidButton";

function Projects() {
  return (
    <section className="project flex items-center lg:items-start flex-col justify-center xl:justify-evenly text-white h-screen w-screen">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-white text-3xl textshadow">Projects</h1>
      </div>
      <div className="flex w-9/12 h-screen flex-wrap justify-center items-center overflow-scroll h-4/5">
        <article class="col">
          <div class="container">
            <div class="front front1 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner"></div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>Imagine AI</p>
                <span class="project-subtitle">
                  A platform powered by AI to generate images from Speech or
                  text. Share your creations with other users across the
                  platform. <br />
                  This Application was made for a 7 day Hackathon.
                </span>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                  <li class="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li class="project-stack-item mr-4 text-xl">Firebase</li>
                  <li class="project-stack-item mr-4 text-xl">DeepAI</li>
                </ul>
                <div class="project-buttons flex w-full items-center justify-center">
                  <a
                    class="project-link"
                    href="https://www.imagine-ai.co.uk"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Website
                    </button>
                  </a>
                  <a
                    class="project-link"
                    href="https://github.com/OmarMahmoud97/Imagine-AI"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="col">
          <div class="container">
            <div class="front front2 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl"></li>
                  <li class="project-stack-item mr-4 text-xl"></li>
                  <li class="project-stack-item mr-4 text-xl"></li>
                </ul>
              </div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>Cairo Bricks</p>
                <span class="project-subtitle">
                  A Freelance job for a client that wants a website they can
                  advertise their products. The company sells building
                  materials. The website design was followed from mockup
                  provided by the client.
                </span>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                </ul>
                <div class="project-buttons flex w-full items-center justify-center">
                  <a
                    class="project-link"
                    href="https://github.com/OmarMahmoud97/cairo-bricks"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="col">
          <div class="container">
            <div class="front front3 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl"></li>
                  <li class="project-stack-item mr-4 text-xl"></li>
                  <li class="project-stack-item mr-4 text-xl"></li>
                </ul>
              </div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>StreamerTV</p>
                <span class="project-subtitle">
                  A platform that provides users with the ability to share video
                  content. While also providing the user sleek and simple to use
                  UI. This web application was an assignment from Brainstation
                  Bootcamp.
                </span>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                  <li class="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li class="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                  <a
                    class="project-link"
                    href="https://github.com/OmarMahmoud97/StreamerTV"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="col">
          <div class="container">
            <div class="front front4 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner"></div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>Horror Story</p>
                <span class="project-subtitle">
                  Get spooked by Turning a couple of words into a short story
                  using the power of AI! <br />
                  This website was made for a 24 hour hackathon.
                </span>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                  <li class="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li class="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div class="project-buttons flex w-full items-center justify-center">
                  <a
                    class="project-link"
                    href="https://ai-horror-story.com"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Website
                    </button>
                  </a>
                  <a
                    class="project-link"
                    href="https://github.com/OmarMahmoud97/AI-horror-story"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="col">
          <div class="container">
            <div class="front front5 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner"></div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>Instock</p>
                <p class="project-subtitle">
                  A Warehouse Stock management web application. allowing
                  companies to keep track stock for multiple items in multiple
                  different warehouses. This web application was an assignment
                  from Brainstation Bootcamp.
                </p>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                  <li class="project-stack-item mr-4 text-xl">NodeJs</li>
                  <li class="project-stack-item mr-4 text-xl">Express</li>
                </ul>
                <div class="project-buttons flex w-full items-center justify-center">
                  <a
                    class="project-link"
                    href="https://github.com/wardu/inStock"
                    target="_blank"
                  >
                    <button class="project-button mr-4 rounded-lg border-transparent cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="col">
          <div class="container">
            <div class="front front6 bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <h2 class="inner-h2 text-red-700 font-bold">Coming Soon</h2>
              </div>
            </div>
            <div class="back bg-cover bg-center text-center h-auto text-white text-base">
              <div class="inner">
                <p>DWITS</p>
                <p class="project-subtitle">
                  A freelance job to create a platform the client can advertise
                  their services. while also allowing the end users to book
                  services with a simple form.
                </p>
                <ul class="project-stack flex items-center justify-center flex-wrap">
                  <li class="project-stack-item mr-4 text-xl">HTML</li>
                  <li class="project-stack-item mr-4 text-xl">CSS</li>
                  <li class="project-stack-item mr-4 text-xl">Javascript</li>
                  <li class="project-stack-item mr-4 text-xl">React</li>
                </ul>
                <div class="project-buttons flex w-full items-center justify-center"></div>
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
