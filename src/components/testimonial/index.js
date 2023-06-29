import jeffBezos from "../../assets/images/jeff-bezos.jpeg";
import elonMusk from "../../assets/images/elon-musk.webp";
import markZuckerberg from "../../assets/images/mark-zuckerberg.webp";

const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mt-32 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="Jeff Bezos"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={jeffBezos}
              />
              <p className="leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti, necessitatibus ullam voluptatum a provident molestiae
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                JEFF BEZOS
              </h2>
              <p className="text-gray-500">Product Manager</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="Elon Musk"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={elonMusk}
              />
              <p className="leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam omnis doloremque eos perspiciatis quam, numquam
                consectetur. Eveniet quam libero inventore numquam doloremque
                nobis nesciunt laudantium saepe ex nulla, veritatis cupiditate
                eligendi dolores asperiores ullam eum neque optio voluptates?
                Molestias, nesciunt!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                ELON MUSK
              </h2>
              <p className="text-gray-500">CEO</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="Mark Zuckerberg"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={markZuckerberg}
              />
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus assumenda iste nulla pariatur fuga voluptas aliquid
                suscipit vero vitae, non inventore eius consequatur.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                MARK ZUCKERBERG
              </h2>
              <p className="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
