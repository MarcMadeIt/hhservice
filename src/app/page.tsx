import Hero from "@/components/client/home/Hero";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to HHService</h1>
          <p className="mt-2">
            Your one-stop solution for all your service needs.
          </p>
        </div>
      </header>

      <Hero />

      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-lg text-center">
            HHService is dedicated to providing top-notch services to our
            clients. Our team of experts is here to help you with all your
            needs.
          </p>
          <img src="" alt="bilede asmdald" />
        </div>
      </section>

      <section id="services" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 1</h3>
              <p className="text-gray-700">
                Description of service 1. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 2</h3>
              <p className="text-gray-700">
                Description of service 2. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service 3</h3>
              <p className="text-gray-700">
                Description of service 3. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 HHService. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
