import ElasticCarousel from "@/components/carousel/carousel";
function More() {
  return (
    <section className="more w-screen h-screen text-white">
      <div className="w-screen h-screen flex items-center justify-evenly flex-col">
        <div className="header">
          <h1 className="text-white text-3xl textshadow my-3">Know Me More</h1>
        </div>
        <div className="p-2 flex flex-col lg:flex-row flex-col-reverse">
          <div className="lg:w-2/4 flex items-center justify-center">
            <p className="textshadow h-80 overflow-scroll md:overflow-visible px-4">
              I'm a software engineer from London.With a history working with
              animals as a zoo keeper, but recently found my true passion in
              technology. <br />
              <br /> As Robert Love, a Sr. Engineer Director at Google, said,
              "Software is the most malleable of media. With just 'bits' which
              are nothing, really, a software engineer can build castles out of
              thin air. Entire businesses, industries even, are created with
              nothing physical at all."
              <br />
              <br /> Unlike other disciplines that are constrained by the
              physical world, software engineering allows for rapid prototyping
              and creation. I have always had a fascination with understanding
              how things work, which began as a child when I would take apart
              devices and attempt to put them back together.
              <br />
              <br /> In the modern world, technology is integrated into nearly
              every aspect of our lives, and I am excited to be a part of
              solving complex and challenging problems. I am a firm believer
              that every problem has a solution.
            </p>
          </div>
          <div className="right flex items-center justify-center lg:w-2/4">
            <ElasticCarousel />
          </div>
        </div>
        <div className="button"></div>
      </div>
    </section>
  );
}

export default More;
