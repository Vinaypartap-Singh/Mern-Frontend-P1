import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome
              <br class="hidden lg:inline-block" />
              Dummy Portfolio
            </h1>
            <p class="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              consequuntur ab provident veritatis ducimus perspiciatis ipsum,
              numquam natus. Minima tempore modi, quos non quisquam at. Quos
              eos, neque recusandae illum iste, ipsam, eaque ex molestiae autem
              ea reiciendis explicabo fugiat. Sapiente quasi molestiae officia
              expedita, dolores ducimus optio culpa odit quia ratione ipsum
              facere, corporis veniam?
            </p>
            <div class="flex justify-center gap-6">
              <Button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link to={"/service"}>Our Services</Link>
              </Button>
              <Button
                variant="outlined"
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                <Link to={"/contact"}> Contact</Link>
              </Button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
