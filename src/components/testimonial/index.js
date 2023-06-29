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
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg"
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
                src="https://pyxis.nymag.com/v1/imgs/f97/52e/6a9067e484d6bf38587100fd223c0c229d-12-elon-musk.2x.h473.w710.jpg"
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
                src="https://i0.wp.com/www.entrepreneurs.ng/wp-content/uploads/2019/06/Mark-Zuckerberg.jpg?fit=800%2C450&ssl=1"
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
              <p className="text-gray-500">Senior Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
