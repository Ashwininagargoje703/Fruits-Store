// import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../../Components/Navbar";
export default function Home() {
  const data = [
    {
      img: "https://challenge22.b-cdn.net/wp-content/uploads/Quinoa-and-Tofu-Salad-edited.jpg",
      name: "Latest Product",
    },
    {
      img: "https://i.pinimg.com/564x/9e/78/9f/9e789faa701819cfbb69a304dcf5b27f.jpg",
      name: "Fruites",
    },
    {
      img: "https://i.pinimg.com/564x/b5/44/f9/b544f96788c1f7466a9b11cad40a8ef0.jpg",
      name: "Vegetables",
    },
    {
      img: "https://naturelandorganics.com/cdn/shop/articles/Benefits_of_Organic_Dry_Fruits.jpg?v=1667380354",
      name: "Organic Dry fruits",
    },
    {
      img: "https://i.pinimg.com/564x/dd/03/b3/dd03b3ec7e42e9d145821b6721b29c17.jpg",
      name: "grains",
    },
    {
      img: "https://i.pinimg.com/564x/4a/b0/e7/4ab0e7ccc090864f5430da7ed563d51d.jpg",
      name: "Dairy",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="banner mt-1 cursor-pointer ">
        <img
          className="w-screen"
          src="https://res.cloudinary.com/farmersfreshzone/image/upload/v1698560458/banner/madfkn1aixrqcyeispta.jpg"
        />
      </div>

      <div className="main_home_card">
        <section className="py-20">
          <h1 className="mb-12 text-center font-sans text-5xl font-bold text-gray-900">
            TRENDING NOW
          </h1>
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((ele, i) => (
              <article
                key={i}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
              >
                <a href="#">
                  <div className="relative flex items-center overflow-hidden rounded-xl">
                    <RouterLink to="/organicsproducts">
                      <img
                        src={ele.img}
                        // src="https://www.organictattva.com/wp-content/uploads/2019/08/Amaranth-cutlet.jpg"
                        alt=" Photo"
                      />
                    </RouterLink>
                  </div>

                  <div className="mt-1 p-2">
                    <div className="mt-3 flex items-end justify-between">
                      <p>
                        <span className="text-lg font-bold text-green-500">
                          {ele.name}
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="w-full flex justify-center items-center">
        <img
          src="https://www.tescoplc.com/media/5vuhwywx/strawberry_tesco.gif?width=800&height=290&quality=100&rnd=133216656109330000"
          alt="Tesco Banner"
          style={{
            width: "82vw",
            height: "70vh",
          }}
        />
      </div>

      <div className="w-[80%] mx-auto mt-8">
        <h1 className="font-bold md:text-5xl text-4xl text-gray-600">
          Finest Selection of Fresh Online Food Products in India, Premier
          Organic Web Store
        </h1>
        <p className="mt-5 text-gray-400">
          In pursuit of optimal health and well-being, it is imperative to
          nourish ourselves with wholesome, pesticide-free, and naturally
          cultivated food. Embracing a diet rich in healthful and virtuous
          sustenance is pivotal. At NatureLand Organics, we echo this sentiment
          through our array of products. As one of India top 5 organic grocery
          stores online and the esteemed No.1 Organic Food Brand in the nation,
          we pride ourselves on certification, guaranteeing 100% natural,
          chemical-free produce, meticulously harvested by our skilled farmers.
          Our commitment extends to the meticulous manufacturing process,
          utilizing composted manure and plant waste, ensuring unparalleled
          purity and organic integrity. Explore our extensive range of
          affordably priced organic food products online in India. From organic
          flour, oil, pulses, cereals, and dry fruits to snacks, beverages,
          sweeteners, breakfast essentials, juices, ghee, and honey, we curate a
          diverse selection to cater to your holistic nutrition needs
        </p>
        <p className="mt-7 mb-5 text-gray-400">
          We all are acquainted that food we buy from the market is now filled
          with unhealthy preservatives, pesticides and chemicals which are grown
          by man-made fertilizers and these fertilizers are adulterated which is
          harmful for our health and also to our future generations.
        </p>
      </div>

      <div>
        <img src="https://res.cloudinary.com/farmersfreshzone/image/upload/v1698757840/banner/efvo4m7lgyqgkeul4t9y.jpg" />
      </div>
    </div>
  );
}

// autoplayLoopMutedPlaysinline
